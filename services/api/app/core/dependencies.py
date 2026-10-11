import jwt

from fastapi import Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import oauth2_scheme
from app.config import setting
from app.db.database import get_db
from app.models.parent import Parent


async def get_current_parent(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> Parent:
    try:
        payload = jwt.decode(
            token,
            setting.secret_key.get_secret_value(),
            algorithms=[setting.algorithm],
            options={"require": ["exp", "sub"]},
        )

        if payload.get("type", "access") != "access" or "purpose" in payload:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid access token.",
            )

        parent_id = payload.get("sub")

        if parent_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid access token.",
            )

        parent_id = int(parent_id)

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Access token has expired.",
        )

    except (jwt.InvalidTokenError, ValueError, TypeError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid access token.",
        )

    parent = await db.get(
        Parent,
        parent_id,
    )

    if parent is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Parent not found.",
        )

    if not parent.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This account is inactive.",
        )

    return parent