from fastapi import APIRouter
from src.api import items, reviews, musics, songs

api_router = APIRouter()
api_router.include_router(items.router, prefix="/items", tags=["items"])
api_router.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
api_router.include_router(musics.router, prefix="/musics", tags=["musics"])
api_router.include_router(songs.router, prefix="/songs", tags=["songs"])