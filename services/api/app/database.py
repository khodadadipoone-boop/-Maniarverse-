from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker
from app.config import setting

# Read the database connection URL from the application settings.
DATABASE_URL=setting.DATABASE_URL

# Create the SQLAlchemy engine used to connect to the database.
engine=create_engine(DATABASE_URL)

# Create a session factory for database operations.
SessionLocal=sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for all SQLAlchemy models.
Base=declarative_base()

def get_db():
    """Provide a database session for a request and close it afterward."""
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()