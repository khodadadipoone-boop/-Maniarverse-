from sqlalchemy import DateTime
from sqlalchemy.orm import Mapped,mapped_column
from datetime import datetime,UTC
from app.db.database import Base
class Parent(Base):
    __tablename__="parents"
    id:Mapped[int]=mapped_column(primary_key=True)
    email:Mapped[str]=mapped_column(unique=True,index=True,nullable=False)
    hashed_password:Mapped[str]=mapped_column(nullable=False)
    email_verified:Mapped[bool]=mapped_column(default=False,nullable=False)
    is_active:Mapped[bool]=mapped_column(default=True,nullable=False)
    created_at:Mapped[datetime]=mapped_column(
        DateTime(timezone=True),
        default=lambda:datetime.now(UTC),
        nullable=False
    )

'''
from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.sql import func

from app.db.base import Base


class Parent(Base):
    """Database model for parent accounts."""

    __tablename__ = "parents"

    id = Column(Integer, primary_key=True, index=True)

    # Parent login email
    email = Column(String(255), unique=True, index=True, nullable=False)

    # Store hashed password only
    password_hash = Column(String(255), nullable=False)

    email_verified = Column(Boolean, default=False, nullable=False)

    # Allows administrators to deactivate an account
    is_active = Column(Boolean, default=True, nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )
    '''