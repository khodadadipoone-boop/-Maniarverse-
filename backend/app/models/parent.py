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
    last_verification_email_sent_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )