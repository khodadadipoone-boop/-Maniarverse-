import uuid
from sqlalchemy import Boolean,DateTime, String, Column, func
from sqlalchemy.dialects.postgresql import UUID

from app.database import Base

class Parent(Base):
    __tablename__="parents"

    id=Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        index=True
    )

    email = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    password_hash = Column(
        String(255),
        nullable=True,  # Nullable for users who register via Google OAuth
    )

    google_id = Column(
        String(255),
        unique=True,
        nullable=True,
    )

    full_name = Column(
        String(100), 
        nullable=True
    ) 

    pin_hash = Column(
        String(255),
        nullable=True,  # Set later for Parent Mode / Parental Gate
    )

    is_email_verified = Column(
        Boolean,
        default=False,
        nullable=False,
    )

    is_active = Column(
        Boolean,
        default=True,
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    verification_token = Column(
        String, 
        nullable=True
    )