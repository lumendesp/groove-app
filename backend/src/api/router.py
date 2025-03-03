from fastapi import APIRouter
from src.api import reviews, songs, albums
from src.api import search

api_router = APIRouter()
api_router.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
api_router.include_router(songs.router, prefix="/songs", tags=["songs"])
api_router.include_router(albums.router, prefix="/albums", tags=["albums"])
api_router.include_router(search.router, prefix="/search", tags=["search"])
