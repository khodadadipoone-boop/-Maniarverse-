from fastapi import FastAPI

from app.database import engine,Base
from app.routers.auth import router as auth_router

Base.metadata.create_all(bind=engine)
app=FastAPI(
    title="Maniarverse API",
    description="Backend API for Maniarverse MVP",
    version="1.0.0"
)

app.include_router(auth_router)

@app.get("/")
def read_root():
    return {
        "project": "Maniarverse",
        "status": "online",
        "message": "Welcome to Maniarverse API v1"
    }