from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class ChildBase(BaseModel):
    name: str = Field(
        min_length=2,
        max_length=100,
    )
    birth_date: date | None = None
    avatar_url: str | None = None


class ChildCreate(ChildBase):
    pass


class ChildUpdate(BaseModel):
    name: str | None = Field(
        default=None,
        min_length=2,
        max_length=100,
    )
    birth_date: date | None = None
    avatar_url: str | None = None


class ChildResponse(ChildBase):
    id: int
    parent_id: int
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True,
    )