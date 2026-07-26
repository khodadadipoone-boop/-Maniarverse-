from pwdlib import PasswordHash
from datetime import UTC,datetime,timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer
from app.config import setting

password_hash=PasswordHash.recommended()
oauth2_scheme=OAuth2PasswordBearer(tokenUrl="api/users/token")

def hash_password(password:str):
    return password_hash.hash(password)

def verify_password(plain_password:str,hashed_password)->bool:
    return password_hash.verify(plain_password,hash_password)

def create_access_token(data:dict,expires_delta:timedelta | None=None) -> str:
    to_encode=data.copy()
    if expires_delta:
        expire=datetime.now(UTC)+expires_delta
    else:
        expire=datetime.now(UTC)+timedelta(
            minutes=setting.access_token_expire_minutes
        )
    to_encode.update({"exp":expire})
    encoded_jwt=jwt.encode(
        to_encode,
        setting.secret_key.get_secret_value(),
        algorithm=setting.algorithm
    )
    return encoded_jwt

def verify_access_token(token: str) -> str | None:
    try:
        pyload=jwt.decode(
            token,
            setting.secret_key.get_secret_value(),
            algorithms=[setting.algorithm],
            options={"require":["exp","sub"]}
        )
    except jwt.InvalidTokenError:
        return None
    else: 
        return pyload.get("sub")

def create_email_verification_token(parent_id:int)->str:
    expires_at=datetime.now(UTC)+timedelta(
        minutes=setting.email_verification_expire_minutes
    )
    pyload={
        "sub":str(parent_id),
        "purpose": "email_verification",
        "exp": expires_at,
    }
    encoded_jwt=jwt.encode(
        pyload,
        setting.secret_key.get_secret_value(),
        algorithm=setting.algorithm
    )
    return encoded_jwt

def decode_email_verification_token(token:str)->int:
    pyload=jwt.decode(
        token,
        setting.secret_key.get_secret_value(),
        algorithms=[setting.algorithm],
    )
    if pyload.get("purpose") != "email_verification":
        raise jwt.InvalidTokenError("Invalid token purpose.")
    parent_id=pyload.get("sub")
    if parent_id is None:
        raise jwt.InvalidTokenErro("Token subject is missing.")
    return int(parent_id)
'''
import os
from datetime import datetime, timedelta, timezone

import jwt
from dotenv import load_dotenv
from pwdlib import PasswordHash

load_dotenv()

password_hash = PasswordHash.recommended()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30")
)

EMAIL_VERIFICATION_EXPIRE_MINUTES = int(
    os.getenv("EMAIL_VERIFICATION_EXPIRE_MINUTES", "30")
)

if not SECRET_KEY:
    raise RuntimeError("SECRET_KEY is not configured.")


def hash_password(password: str) -> str:
    """Return a secure hash for a plain-text password."""
    return password_hash.hash(password)


def verify_password(
    plain_password: str,
    hashed_password: str,
) -> bool:
    """Verify a plain-text password against its hash."""
    return password_hash.verify(
        plain_password,
        hashed_password,
    )


def create_access_token(subject: str) -> str:
    """Create a JWT access token."""

    expires_at = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": subject,
        "exp": expires_at,
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


def create_email_verification_token(parent_id: int) -> str:
    """Create a short-lived token for email verification."""

    expires_at = datetime.now(timezone.utc) + timedelta(
        minutes=EMAIL_VERIFICATION_EXPIRE_MINUTES
    )

    payload = {
        "sub": str(parent_id),
        "purpose": "email_verification",
        "exp": expires_at,
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


def decode_email_verification_token(token: str) -> int:
    """Validate an email verification token and return the parent ID."""

    payload = jwt.decode(
        token,
        SECRET_KEY,
        algorithms=[ALGORITHM],
    )

    if payload.get("purpose") != "email_verification":
        raise jwt.InvalidTokenError("Invalid token purpose.")

    parent_id = payload.get("sub")

    if parent_id is None:
        raise jwt.InvalidTokenError("Token subject is missing.")

    return int(parent_id)
    '''