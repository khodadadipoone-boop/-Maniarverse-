from pwdlib import PasswordHash
from datetime import UTC,datetime,timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer
from app.config import setting

password_hash=PasswordHash.recommended()
oauth2_scheme=OAuth2PasswordBearer(tokenUrl="api/users/token")

def hash_password(password:str):
    return password_hash.hash(password)
#----------------------------------------------------------------------------

def verify_password(plain_password:str,hashed_password)->bool:
    return password_hash.verify(plain_password,hashed_password)
#----------------------------------------------------------------------------

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
        algorithm=setting.algorithm,
    )
    return encoded_jwt
#------------------------------------------------------------------------------

def verify_access_token(token: str) -> str | None:
    try:
        payload=jwt.decode(
            token,
            setting.secret_key.get_secret_value(),
            algorithms=[setting.algorithm],
            options={"require":["exp","sub"]}
        )
    except jwt.InvalidTokenError:
        return None
    else: 
        return payload.get("sub")
#---------------------------------------------------------------------------------

def create_email_verification_token(parent_id:int)->str:
    expires_at=datetime.now(UTC)+timedelta(
        minutes=setting.email_verification_expire_minutes
    )
    payload={
        "sub":str(parent_id),
        "purpose": "email_verification",
        "exp": expires_at,
    }
    encoded_jwt=jwt.encode(
        payload,
        setting.secret_key.get_secret_value(),
        algorithm=setting.algorithm,
    )
    return encoded_jwt
#------------------------------------------------------------------

def decode_email_verification_token(token:str)->int:
    payload=jwt.decode(
        token,
        setting.secret_key.get_secret_value(),
        algorithms=[setting.algorithm],
    )
    if payload.get("purpose") != "email_verification":
        raise jwt.InvalidTokenError("Invalid token purpose.")
    parent_id=payload.get("sub")
    if parent_id is None:
        raise jwt.InvalidTokenErro("Token subject is missing.")
    return int(parent_id)
#--------------------------------------------------------------------------------

def create_password_reset_token(parent_id:str,expire_minutes:int=15)->str:
    expire=datetime.now(UTC)+timedelta(minutes=expire_minutes)
    payload = {
        "sub": str(parent_id),
        "type": "password_reset",
        "exp": expire,
    }
    token = jwt.encode(
        payload,
        setting.secret_key.get_secret_value(),
        algorithm=setting.algorithm,
    )

    return token
#-------------------------------------------------------------------------------

def decode_password_reset_token(token: str) -> int:
    try:
        payload = jwt.decode(
            token,
            setting.secret_key.get_secret_value(),
            algorithms=[setting.algorithm],
        )

        print("PAYLOAD:", payload)

    except Exception as e:
        print("JWT ERROR:", type(e).__name__, str(e))
        raise

    if payload.get("type") != "password_reset":
        raise jwt.InvalidTokenError("Invalid token type")

    parent_id = payload.get("sub")

    if parent_id is None:
        raise jwt.InvalidTokenError("Missing subject")

    return int(parent_id)