from pydantic import BaseModel, EmailStr


class ParentCreate(BaseModel):
    email: EmailStr
    password: str

class ParentLogin(BaseModel):
    email: EmailStr
    password: str


class ParentResponse(BaseModel):
    id: int
    email: EmailStr
    email_verified: bool
    is_active: bool

    class Config:
        from_attributes = True


class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class MessageResponse(BaseModel):
    message: str