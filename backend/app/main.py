from fastapi import FastAPI
from app.db.base import Base
from app.db.session import engine

# Import models so SQLAlchemy knows about them
from app.models.parent import Parent

from app.api.v1.endpoints.auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Maniarverse API")
app.include_router(auth_router)