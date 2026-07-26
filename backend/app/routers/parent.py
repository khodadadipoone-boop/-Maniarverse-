from fastapi import APIRouter,Depends,HTTPException,status,BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select,func
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.parent import ParentCreate,ParentResponse,Token,MessageResponse
from app.db.database import get_db
from app.models.parent import Parent
from app.core.security import (
    hash_password,
    create_access_token,
    verify_access_token,
    create_email_verification_token,
    decode_email_verification_token,
    oauth2_scheme)
from app.services.email_service import send_verification_email
from app.config import setting

router=APIRouter()
#-------------------------------------------------------------------------------------------
@router.post(
        "/register",
        response_model=ParentResponse,
        status_code=status.HTTP_201_CREATED)
async def register(
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
        is_active=True
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
async def verify_email_parent(token:str,db:AsyncSession=Depends(get_db))->MessageResponse:
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