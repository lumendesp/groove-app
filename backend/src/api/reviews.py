from fastapi import APIRouter, status
from pydantic import BaseModel
from src.db import database as db
from datetime import datetime
from src.service.impl.review_service import ReviewService
from src.service.impl.song_service import SongService
from src.schemas.review import ReviewCreateModel, ReviewModel, ReviewList, ReviewDeleteModel
from starlette.responses import JSONResponse
from fastapi import HTTPException

router = APIRouter()


@router.get(
    "/",
    response_model=dict,
    response_class=JSONResponse
)
def get_reviews():
    review_list_response = ReviewService.get_reviews()
    print('-------------------------------')
    for review in review_list_response:
        review['id'] = str(review['_id'])
        del review['_id']
    print(review_list_response)
    print('-------------------------------')
    for review in review_list_response:
        song = SongService.get_song(review['song'])
        if song is None:
            continue
        # song['cover'] = song['image_url']
        print('***************************')
        print(song)
        print('***************************')
        review['songCover'] = song['cover']
        review['songTitle'] = song['title']
        review['artistName'] = song['artist']

    return {
        'reviews': review_list_response,
    }


@router.get(
    "/{review_id}",
    response_model=ReviewModel,
    response_class=JSONResponse
)
def get_review(review_id: str):
    review_get_response = ReviewService.get_review(review_id)

    print(review_get_response)
    return review_get_response


@router.post(
    "/create",
    response_model=ReviewCreateModel,
    response_class=JSONResponse
)
def create_review(review: ReviewCreateModel):
    date = datetime.now()
    review.created_at = date
    review_create_response = ReviewService.create_review(review)
    return review_create_response


@router.put(
    "/{review_id}",
    response_model=ReviewModel,
    response_class=JSONResponse
)
def edit_review(review_id: str, review: ReviewCreateModel):
    print("edit_review")
    review_edit_response = ReviewService.update_review(review_id, review)

    print("return edit_review")
    return review_edit_response


@router.delete(
    "/{review_id}",
    response_model=ReviewDeleteModel,
    response_class=JSONResponse
)
def delete_review(review_id: str):
    review_delete_response = ReviewService.delete_review(review_id)

    if not review_delete_response:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        return review_delete_response


# PRECISA DE UMA FUNÇÃO DESSA AQUI? -> SERIA UM SERVICE
def get_reviews_by_song_id(song_id: int):
    # fazer uma função dessa no db.py
    reviews = db.get_reviews_by_song_id(song_id)
    if not reviews:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Song not found")
    return reviews
