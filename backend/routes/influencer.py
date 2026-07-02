from fastapi import APIRouter

router = APIRouter(
    prefix="/influencers",
    tags=["Influencers"]
)

@router.get("/")
def get_influencers():
    return {
        "success": True,
        "message": "Influencer API Working 🚀",
        "data": []
    }