from fastapi import (
    APIRouter, 
    Depends, 
    HTTPException,
    BackgroundTasks,
    status)

from sqlalchemy import select
from sqlalchemy.orm import Session
import jwt

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    create_email_verification_token,
    decode_email_verification_token,)

from app.db.dependencies import get_db
from app.services.email_service import send_verification_email
from app.models.parent import Parent

from app.schemas.parent import (
    ParentCreate, 
    ParentLogin,
    ParentResponse,
    TokenResponse,
    MessageResponse,)


router = APIRouter(prefix="/auth", tags=["Authentication"])

##################################################################################
@router.post(
    "/register",
    response_model=ParentResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_parent(
    parent_data: ParentCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
) -> Parent:
    """Register a new parent account."""

    existing_parent = db.scalar(
        select(Parent).where(Parent.email == str(parent_data.email))
    )

    if existing_parent:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    new_parent = Parent(
        email=str(parent_data.email),
        password_hash=hash_password(parent_data.password),
        email_verified=False,
        is_active=True,
    )

    db.add(new_parent)
    db.commit()
    db.refresh(new_parent)
    verification_token = create_email_verification_token(
    parent_id=new_parent.id
    )

    background_tasks.add_task(
        send_verification_email,
        new_parent.email,
        verification_token,
    )
    return new_parent
##################################################################################
@router.get(
    "/verify-email",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
def verify_parent_email(
    token: str,
    db: Session = Depends(get_db),
) -> MessageResponse:
    """Verify a parent email address using a signed token."""

    try:
        parent_id = decode_email_verification_token(token)

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

    parent = db.get(Parent, parent_id)

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
    db.commit()

    return MessageResponse(
        message="Email verified successfully."
    )
####################################################################################################
@router.post(
    "/login",
    response_model=TokenResponse,
    status_code=status.HTTP_200_OK,
)
def login_parent(
    login_data: ParentLogin,
    db: Session = Depends(get_db),
) -> TokenResponse:
    """Authenticate a parent and return a JWT access token."""

    parent = db.scalar(
        select(Parent).where(
            Parent.email == str(login_data.email)
        )
    )

    if parent is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    if not verify_password(
        login_data.password,
        parent.password_hash,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    if not parent.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This account is inactive.",
        )

    access_token = create_access_token(
        subject=str(parent.id),
    )

    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
    )