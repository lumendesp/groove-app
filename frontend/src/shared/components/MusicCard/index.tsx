import React, { useState } from "react";
import { MusicContainer, MusicImg, MusicArtist, MusicName } from "./style";
import MusicDetail from "../../../app/home/components/modalDetails";

// Paths to star images
// const starFull = 'your_path_to_full_star_image.png'; // Replace with your actual path
// const starEmpty = 'your_path_to_empty_star_image.png'; // Replace with your actual path
// const starHalf = 'your_path_to_half_star_image.png'; // Replace with your actual path

// Star rating generator function
/*
function* ratingStars(rating: number) {
  for (let i = 0; i < Math.floor(rating); i++) {
    yield <img src={starFull} alt="full star" width={16} height={16} />;
  }

  if (rating % 1 !== 0) {
    yield <img src={starHalf} alt="half star" width={16} height={16} />;
  }

  for (let i = 0; i < 5 - Math.ceil(rating); i++) {
    yield <img src={starEmpty} alt="empty star" width={16} height={16} />;
  }
}
*/

const MusicCard: React.FC<{
  artist: string;
  name: string;
  image: string;
  id: string;
  dataa_cy?: string;
  average_rating?: number;
  data_cy?: string;
  data2_cy?: string;
}> = ({
  artist,
  name,
  image,
  id,
  average_rating,
  data2_cy,
  data_cy,
  dataa_cy,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MusicContainer>
      <MusicImg
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => setIsOpen(true)}
        data-cy={data2_cy}
      />
      <MusicName data-cy={data_cy}>{name}</MusicName>
      <MusicArtist>{artist}</MusicArtist>
      {average_rating && (
        <div className="average-rating">
          {/* Uncomment the below line to display star ratings */}
          {/* {Array.from(ratingStars(average_rating))} */}
          <span>{average_rating.toFixed(1)}</span> / 5
        </div>
      )}
      <MusicDetail isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
    </MusicContainer>
  );
};

export default MusicCard;
