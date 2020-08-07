import React from "react";
import { useParams } from "react-router-dom";
import seasonsData from "../seasonsData";
import BackBtn from "../components/BackBtn";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import MediaButtons from "../components/MediaButtons";
import MediaWrapper from "../components/MediaWrapper";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh - 50px);
  width: 100%;
  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Multimedia = () => {
  const { id } = useParams();

  let episodes = [];

  seasonsData.forEach((season) =>
    season.episodes.forEach((episode) => episodes.push(episode))
  );

  const episode = episodes.filter((ep) => ep.id === id);
  const { title, media } = episode[0];

  const url = "http://ic-english.eu/platforma/assets";

  return (
    <>
      <TopBar title={title} />
      <BackBtn goto="./" />
      <Container>
        <MediaButtons>
          {media.map((item) => (
            <div className="mm-btn" key={item.id}>
              <p>{item.id}</p>
            </div>
          ))}
        </MediaButtons>
        <MediaWrapper location={`${url}${media[0].location}`} />
      </Container>
    </>
  );
};

export default Multimedia;
