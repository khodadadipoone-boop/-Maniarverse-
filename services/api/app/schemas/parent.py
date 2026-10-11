from pydantic import BaseModel,EmailStr 

class ParentBase(BaseModel):
    email:EmailStr

class ParentCreate(ParentBase):
    password: str

class ParentResponse(ParentBase):
    id:int
    email_verified:bool
    is_active:bool
    class Config:
        from_attributes=True
        
class ParetLogin(ParentBase):
    password:str

class TokenResponse(BaseModel):
    access_token:str
    token_type:str

class MessageResponse(BaseModel):
    message:str

class ResendVerificationRequest(ParentBase):
    pass

class ForgotPasswordRequest(ParentBase):
    pass

class ResetPasswordRequest(BaseModel):
    token:str
    new_password:str