from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.models.child import Child
from app.models.parent import Parent
from app.schemas.child import (
    ChildCreate,
    ChildResponse,
    ChildUpdate,
)
from app.schemas.parent import MessageResponse


router = APIRouter()
@router.post(
    "/add",
    response_model=ChildResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_child(
    child_data: ChildCreate,
    db: AsyncSession = Depends(get_db),
) -> Child:
    parent = await db.get(
        Parent,
        child_data.parent_id,
    )

    if parent is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Parent not found.",
        )

    child_name = child_data.name.strip()

    if not child_name:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Child name cannot be empty.",
        )

    new_child = Child(
        parent_id=child_data.parent_id,
        name=child_name,
        birth_date=child_data.birth_date,
        avatar_url=child_data.avatar_url,
    )

    db.add(new_child)

    try:
        await db.commit()
        await db.refresh(new_child)

    except Exception:
        await db.rollback()

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Child could not be created.",
        )

    return new_child