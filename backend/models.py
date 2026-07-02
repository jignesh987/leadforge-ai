from sqlalchemy import Column, Integer, String
from database import Base


class Influencer(Base):
    __tablename__ = "influencers"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    full_name = Column(String)
    category = Column(String)
    followers = Column(Integer)
    email = Column(String)
    country = Column(String)