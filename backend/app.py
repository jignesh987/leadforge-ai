from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
import models
from routes.influencer import router as influencer_router

# Create Database Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Influencer Hunter API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

# Routes
app.include_router(influencer_router)