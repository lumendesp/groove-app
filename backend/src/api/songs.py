from datetime import datetime
from fastapi import APIRouter, HTTPException, Path
from pydantic import BaseModel
from src.db import database as db
from fastapi import status
from typing import Dict

router = APIRouter()

class Song(BaseModel):
    id: int
    title: str
    artist: str
    release_year: int
    gender: str
    available_on: Dict[str, str]
    timestamp: datetime


@router.get(
    "/",
    response_model=list[Song],
    description="Retrieve all songs",
    tags=["songs"],
)
def get_songs():
    """
    Get all songs.

    Returns:
    - A list of all songs.
    """

    songs = db.get_all_items('songs')

    # Fetch music links for each song and add them to the response
    songs_with_links = []
    for song in songs:
        song_links = db.get_available_on_for_song(song.id)  # Substitua pela função real para obter os links
        song_with_links = song.dict()
        song_with_links['available_on'] = song_links
        songs_with_links.append(song_with_links)

    return songs_with_links



@router.get(
    "/{song_id}",
    response_model=Song,
    description="Retrieve a song by ID",
    tags=["songs"],
)
def get_song_by_id(song_id: int = Path(..., description="The ID of the song to retrieve")):
    """
    Get a song by its ID.

    Args:
    - song_id (int): The ID of the song to retrieve.

    Returns:
    - The requested song.

    Raises:
    - HTTPException(404) if the song is not found.
    """

    song = db.get_item_by_id('songs', song_id)
    if song is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Song not found")

    # Fetch music links for the song and add them to the response
    song_links = db.get_available_on_for_song(song_id)  # Substitua pela função real para obter os links
    song['available_on'] = song_links

    return song
