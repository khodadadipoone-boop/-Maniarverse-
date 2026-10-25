from pydantic_setting import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME:str="Maniarverse API"
    DATABASE_URL: str 
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

setting=Settings()