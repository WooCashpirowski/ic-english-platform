import React, { useState } from "react";
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

  const [activeContent, setActiveContent] = useState("");

  const setContent = function (e) {
    setActiveContent(e.target.dataset.id);
    return activeContent;
  };

  return (
    <>
      <TopBar title={title} />
      <BackBtn goto="./" />
      <Container>
        <MediaButtons>
          {media.map((item) => (
            <div
              className={activeContent === item.id ? "mm-btn active" : "mm-btn"}
              key={item.id}
            >
              <button className="title" data-id={item.id} onClick={setContent}>
                <p>{item.id}</p>
              </button>
            </div>
          ))}
        </MediaButtons>
        {media.map((item) => {
          return (
            <MediaWrapper
              styleClass={activeContent === item.id && "active"}
              key={item.id}
              id={item.id}
              location={`${url}${item.location}`}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Multimedia;
