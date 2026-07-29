from fastapi import APIRouter,Depends,HTTPException,status,BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select,func
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm
import jwt
from datetime import datetime, UTC
from app.schemas.parent import (
    ParentCreate,
    ParentResponse,
    ParetLogin,
    TokenResponse,
    MessageResponse,
    ResendVerificationRequest,
    ForgotPasswordRequest,
    ResetPasswordRequest)
from app.db.database import get_db
from app.models.parent import Parent
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    verify_access_token,
    create_email_verification_token,
    decode_email_verification_token,
    create_password_reset_token,
    decode_password_reset_token,
    oauth2_scheme)
from app.services.email_service import (
    send_verification_email,
    send_password_reset_email)
from app.config import setting

router=APIRouter()
#-------------------------------------------------------------------------------------------
@router.post(
        "/register",
        response_model=ParentResponse,
        status_code=status.HTTP_201_CREATED)
async def register_parent(
    parent_data:ParentCreate,
    background_tasks:BackgroundTasks,
    db:AsyncSession=Depends(get_db)
):
    normalized_email=str(parent_data.email).strip().lower()
    existing_email=await db.scalar(
        select(Parent).where(Parent.email == normalized_email)
    )
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )
    hashed_password=hash_password(parent_data.password)
    new_parent=Parent(
        email=normalized_email,
        hashed_password=hashed_password,
        email_verified=False,
        is_active=True,
        last_verification_email_sent_at=datetime.now(UTC)
    )
    db.add(new_parent)
    try:
        await db.commit()
        await db.refresh(new_parent)
    except Exception:
        await db.rollback()
        raise
    verification_token=create_email_verification_token(parent_id=new_parent.id)
    background_tasks.add_task(
    send_verification_email,
    new_parent.email,
    verification_token,
)
    return new_parent
#----------------------------------------------------------------------------------------
@router.get(
    "/verify-email",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
async def verify_email_parent(
    token:str,
    db:AsyncSession=Depends(get_db)
    )->MessageResponse:
    try:
        parent_id=decode_email_verification_token(token)
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Verification link has expired.",
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid verification link.",
        )
    parent=await db.get(Parent,parent_id)
    if parent is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid verification link.",
            )
    
    if parent.email_verified:
        return MessageResponse(
            message="Email is already verified."
            )
    parent.email_verified = True
    try:
        await db.commit()
        await db.refresh(parent)
    except Exception:
        await db.rollback()
        raise

    return MessageResponse(
        message="Email verified successfully."
    )
#-----------------------------------------------------------------------------------------
@router.post(
    "/login",
    response_model=TokenResponse,
    status_code=status.HTTP_200_OK,
)
async def login_parent(
    login_data:ParetLogin,
    db:AsyncSession=Depends(get_db)
)->TokenResponse:
    normalized_email=str(login_data.email).strip().lower()
    parent=await db.scalar(
        select(Parent).where(
            Parent.email==normalized_email
        )
    )
    if parent is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    password_is_valid=verify_password(
        login_data.password,
        parent.hashed_password
    )
    if not password_is_valid:
        raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid email or password.",
                    headers={"WWW-Authenticate": "Bearer"},
        )
    if not parent.is_active:
        raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="This account is inactive",
                )
    if not parent.email_verified:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Please verify your email before logging in.",
        )
    access_token=create_access_token(
        data={
            "sub":str(parent.id)
        }
    )
    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
    )
#-----------------------------------------------------------------------------


@router.post(
     "/resend-verification-email",
     response_model=MessageResponse,
     status_code=status.HTTP_200_OK
)
async def resend_verification_email(
    request_data:ResendVerificationRequest,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
)->MessageResponse:
    normalized_email=str(request_data.email).strip().lower()
    parent=await db.scalar(
            select(Parent).where(
                Parent.email==normalized_email
            )
        )
    if parent is None:
        raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password.",
                headers={"WWW-Authenticate": "Bearer"},
            )
    if parent.email_verified:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already verified.",
        )

    now = datetime.now(UTC)
    if parent.last_verification_email_sent_at is not None:
        last_sent=parent.last_verification_email_sent_at
        if last_sent.tzinfo is None:
            last_sent=last_sent.replace(tzinfo=UTC)
    elapsed_seconds = (now - last_sent).total_seconds()
    if elapsed_seconds < 60:
        retry_after = max(1, int(60 - elapsed_seconds))
        raise HTTPException(
                        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                        detail={
                            "message": "Please wait before requesting another email.",
                            "retry_after": retry_after,
                        },
                        headers={
                            "Retry-After": str(retry_after),
                        },
                    )
    verification_token = create_password_reset_token(
            parent_id=parent.id
    )
    parent.last_verification_email_sent_at = now
    try:
        await db.commit()
    except Exception:
        await db.rollback()
        raise
    
    background_tasks.add_task(
            send_verification_email,
            parent.email,
            verification_token,
    )
    
    return MessageResponse(
            message="Verification email sent successfully."
    )
#----------------------------------------------------------------------
@router.post(
    "/forgot-password",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
async def forgot_password(
    request_data: ForgotPasswordRequest,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
) -> MessageResponse:
    normalized_email = str(request_data.email).strip().lower()

    parent = await db.scalar(
        select(Parent).where(
            Parent.email == normalized_email
        )
    )

    response_message = (
        "If an account exists with this email, "
        "a password reset link has been sent."
    )

    if parent is None:
        return MessageResponse(
            message=response_message
        )

    if not parent.is_active:
        return MessageResponse(
            message=response_message
        )

    reset_token = create_password_reset_token(
        parent_id=parent.id
    )

    background_tasks.add_task(
        send_password_reset_email,
        parent.email,
        reset_token,
    )

    return MessageResponse(
        message=response_message
    )
#------------------------------------------------------------------------------

@router.post(
    "/reset-password",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
async def reset_password(
    request_data: ResetPasswordRequest,
    db: AsyncSession = Depends(get_db),
) -> MessageResponse:
    try:
        parent_id = decode_password_reset_token(
            request_data.token
        )

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password reset link has expired.",
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid password reset link.",
        )

    parent = await db.get(Parent, parent_id)

    if parent is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid password reset link.",
        )

    if not parent.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This account is inactive.",
        )

    parent.hashed_password = hash_password(
        request_data.new_password
    )
    try:
        await db.commit()
    except Exception:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Password could not be updated.",
        )

    return MessageResponse(
        message="Password reset successfully."
    )

    