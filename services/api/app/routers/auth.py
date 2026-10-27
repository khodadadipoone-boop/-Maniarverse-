from fastapi import APIRouter,status, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.parent import Parent
from app.utils.security import hash_password,verify_password
from app.schemas.parent import EmailRegisterRequest,EmailResponse

router=APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
@router.post(
    "/register/email",
    response_model=EmailResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new parent account"
)
def register_with_email(
    payload : EmailRegisterRequest,
    db : Session = Depends(get_db)
):
    existing_parent = (
        db.query(Parent).
        filter(Parent.email == payload.email).
        first()
    )
    if existing_parent:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already exists",
        )
    new_parent=Parent(
        email = payload.email,
        full_name = payload.full_name,
        password_hash = hash_password(payload.password)
    )

    db.add(new_parent)
    db.commit()
    db.refresh(new_parent)

    return new_parent