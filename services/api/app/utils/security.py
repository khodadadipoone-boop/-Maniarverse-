from passlib.context import CryptContext
import secrets

pwd_context=CryptContext(schemes=["bcrypt"],deprecated="auto")

def hash_password(password:str) -> str:
    """Takes a plain password and returns its secure hashed version."""
    return pwd_context.hash(password)

def verify_password(plain_password:str, hashed_password:str) -> bool:
    """Verifies whether the given plain password matches the stored database hash."""
    return pwd_context.verify(plain_password,hashed_password)

def generate_verification_token() -> str:
    """Generate a secure random token for email verification."""
    return secrets.token_urlsafe(32)