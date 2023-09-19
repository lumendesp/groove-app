import React, { useState, useEffect } from "react";
import ModalComponent from "../Modal-ui";
import axios from "axios";
import SongReviewCard from "../../../../../src/app/home/components/SongReviewCard/SongReviewCard";
import SongCard from "../../../../../src/app/home/components/SongCard/SongCard";

interface MusicData {
  id: string;
  title: string;
  genre: string;
  artist: string;
  release_year: number;
  popularity: number;
  available_on: {
    youtube_link: string;
    deezer_link: string;
    spotify_link: string;
    apple_music_link: string;
  };
  created_at: string;
  cover: string;
  average_rating: number;
}

interface Review {
  id: number;
  title: string;
  description: string;
  rating: number;
}

const MusicDetail: React.FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  id: string;
}> = ({ isOpen, setIsOpen, id }) => {
  const [data, setData] = useState<MusicData | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/songs/" + id + "/"
      );
      const response2 = await axios.get(
        "http://127.0.0.1:8000/songs/" + id + "/reviews"
      );
      if (id == "65009d89de657d24ae7f1357") {
      }
      console.log("-----------------");
      console.log("musicDetails");
      console.log(response.data);
      console.log(response2.data);
      console.log("-----------------");
      const data = response.data;
      const aux = {
        youtube_link: "",
        deezer_link: "",
        spotify_link: "",
        apple_music_link: "",
      };

      // data.available_on = aux;

      setData(response.data);
      setReviews(response2.data.reviews);
    } catch (error) {
      console.error("Error posting music data:", error);
    }
  };

  return (
    <div>
      <ModalComponent
        open={isOpen}
        setOpen={() => {
          setIsOpen(false);
        }}
        title="Detalhes da música"
        textExit=""
        textSubmit="Avalie esta música"
        onClick={(e) => handleSubmit(e)}
        onCancel={() => {
          setIsOpen(false);
        }}
        isBold={false}
        disabledSubmit={false}
        children={
          data ? (
            <>
              <SongCard
                id={data.id}
                title={data.title}
                artistName={data.artist}
                songCover={data.cover}
                genre={data.genre}
                releaseYear={data.release_year}
                averageRating={data.average_rating}
                amountReview={reviews.length}
                spotifyLink={data.available_on.spotify_link}
                appleMusicLink={data.available_on.apple_music_link}
                deezerLink={data.available_on.deezer_link}
                youtubeLink={data.available_on.youtube_link}
                spotify_link_data_cy={data.available_on.spotify_link}
                apple_music_link_data_cy={data.available_on.apple_music_link}
                deezer_link_data_cy={data.available_on.deezer_link}
                youtube_link_data_cy={data.available_on.youtube_link}
              />
              {reviews.length > 0 ? (
                <div className="reviews-container">
                  {reviews.map((review: Review) => (
                    <div className="review-card" key={review.id}>
                      <SongReviewCard
                        title={review.title}
                        rating={review.rating}
                        description={review.description}
                        authorName="Breno"
                        authorUsername="breninho"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div>No reviews available.</div>
              )}
            </>
          ) : (
            <div>Carregando...</div>
          )
        }
      />
      <style jsx>{`
        .reviews-container {
          display: flex;
          flex-direction: column;
        }

        .review-card {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default MusicDetail;
