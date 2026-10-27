from pydantic import BaseModel,EmailStr,Field, ConfigDict
from uuid import UUID

# ---------- Request Schemas (input) ----------
class EmailRegisterRequest(BaseModel):
    """Data required from the client to register a new parent."""
    email : EmailStr
    password: str = Field(..., min_length=8, description="Password must be at least 8 characters long")
    full_name: str = Field(min_length=2, max_length=100)

# ---------- Response Schemas (output) ----------
class EmailResponse(BaseModel):
    """Parent data that is safe to return to the client (no password!)."""
    model_config=ConfigDict(from_attributes=True)

    id : UUID
    email : EmailStr
    full_name: str | None
    is_active : bool