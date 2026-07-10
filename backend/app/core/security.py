from pwdlib import PasswordHash


password_hash = PasswordHash.recommended()


def hash_password(password: str) -> str:
    """Return a secure hash for a plain-text password."""
    return password_hash.hash(password)