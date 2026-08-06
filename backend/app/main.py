from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.routers import home,parent,child
from app.db.database import engine,Base

@asynccontextmanager
async def lifespan(app:FastAPI):
    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()

app=FastAPI(title="Maniarverse API",lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(home.router,prefix="/home",tags=["home"])
app.include_router(parent.router,prefix="/parent",tags=["parent"])
app.include_router(child.router,prefix="/child",tags=["child"])















'''

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.base import Base
from app.db.session import engine

# Import models so SQLAlchemy knows about them
from app.models.parent import Parent

from app.api.v1.endpoints.auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Maniarverse API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
'''