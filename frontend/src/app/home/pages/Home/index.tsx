import React, { useEffect } from "react";
import { Wallpaper } from "./style";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import axios from "axios";
interface Review {
  id: number;
  title: string;
  description: string;
  rating: number;
  artistName: string;
  author: string;
  songTitle: string;
  songCover: string;
  cover: string;
}
export const TableDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 60vw;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  padding-top: 160px;
`;
const Home: React.FC = () => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/reviews/", {});

      const data = response.data.reviews;
      console.log("---------------");
      console.log(data);
      console.log("---------------");
      setData(data);
      // setSearchResults(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wallpaper>
      <TableDiv>
        {data.map((review: Review) => (
          <ReviewCard
            songCover={review.songCover}
            songTitle={review.songTitle}
            artistName={review.artistName}
            rating={review.rating}
            title={review.title}
            content={review.description}
            authorName="Breno"
            authorUsername="breninho"
            title_data_cy={review.title}
            content_data_cy={review.description}
          />
        ))}
      </TableDiv>
    </Wallpaper>
  );
};

export default Home;
