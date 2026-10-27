from pydantic_settings import BaseSettings,SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME:str="Maniarverse API"

    # Configuration
    DATABASE_URL: str 
    EMAIL_FROM: str
    RESEND_API_KEY: str
    APP_URL: str

    # Pydantic Settings configuration: reads variables from .env file
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

# Instantiate settings to be imported across the application
setting=Settings()