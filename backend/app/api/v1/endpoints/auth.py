from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.db.dependencies import get_db
from app.models.parent import Parent
from app.schemas.parent import ParentCreate, ParentResponse


router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post(
    "/register",
    response_model=ParentResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_parent(
    parent_data: ParentCreate,
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

    return new_parent