from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import SessionLocal
from models import Influencer
from schemas import InfluencerCreate

router = APIRouter(
    prefix="/influencers",
    tags=["Influencers"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_influencers(db: Session = Depends(get_db)):
    return db.query(Influencer).all()


@router.post("/")
def add_influencer(
    influencer: InfluencerCreate,
    db: Session = Depends(get_db)
):
    existing = (
        db.query(Influencer)
        .filter(Influencer.username == influencer.username)
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    new_influencer = Influencer(
        username=influencer.username,
        full_name=influencer.full_name,
        category=influencer.category,
        followers=influencer.followers,
        email=influencer.email,
        country=influencer.country
    )

    db.add(new_influencer)
    db.commit()
    db.refresh(new_influencer)

    return {
        "success": True,
        "data": new_influencer
    }


@router.delete("/{id}")
def delete_influencer(
    id: int,
    db: Session = Depends(get_db)
):
    influencer = (
        db.query(Influencer)
        .filter(Influencer.id == id)
        .first()
    )

    if not influencer:
        raise HTTPException(
            status_code=404,
            detail="Influencer not found"
        )

    db.delete(influencer)
    db.commit()

    return {
        "success": True,
        "message": "Deleted Successfully"
    }