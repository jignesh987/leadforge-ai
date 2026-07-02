from pydantic import BaseModel, EmailStr


class InfluencerCreate(BaseModel):
    username: str
    full_name: str
    category: str
    followers: int
    email: EmailStr
    country: str


class InfluencerResponse(InfluencerCreate):
    id: int

    class Config:
        from_attributes = True