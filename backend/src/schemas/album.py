from typing import Optional
from datetime import datetime
from pydantic import BaseModel


class AlbumModel(BaseModel):
    id: str
    title: str
    artist: str
    release_year: int
    cover: Optional[str] = None
    # image_url: Optional[str] = ''
    available_on: Optional[object] = {}
    genre: Optional[str] = ''
    popularity: Optional[int] = 0


class AlbumGet(BaseModel):
    id: str
    title: str
    artist: str
    release_year: int
    cover: Optional[str] = None
    # image_url: Optional[str] = ''
    available_on: Optional[object] = {}
    genre: Optional[str] = ''
    popularity: Optional[int] = 0


class AlbumCreateModel(BaseModel):
    # id: str
    title: str
    artist: str
    release_year: int
    cover: Optional[str] = None
    # image_url: Optional[str] = ''
    available_on: Optional[object] = {}
    genre: Optional[str] = ''
    popularity: Optional[int] = 0


class AlbumList(BaseModel):
    albums: list[AlbumGet]


class AlbumDelete(BaseModel):
    id: str
