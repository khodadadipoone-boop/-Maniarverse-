from pydantic import SecretStr
from pydantic_settings import BaseSettings,SettingsConfigDict

class Settings(BaseSettings):
    frontend_verify_url:str
    frontend_reset_password_url: str
    secret_key:SecretStr
    algorithm:str="HS256"
    access_token_expire_minutes:int=30
    email_verification_expire_minutes:int=60
    email_from: str
    resend_api_key: SecretStr
    
    model_config=SettingsConfigDict(
        env_file="app/.env",
        env_file_encoding="utf-8"
    )

setting=Settings()