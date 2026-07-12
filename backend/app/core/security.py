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