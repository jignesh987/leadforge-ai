from fastapi import FastAPI
from database import Base, engine
import models
from routes.influencer import router as influencer_router

# Database create
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Influencer Hunter API",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "success": True,
        "message": "Influencer Hunter API Running 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "online"
    }

# Include Influencer Routes
app.include_router(influencer_router)