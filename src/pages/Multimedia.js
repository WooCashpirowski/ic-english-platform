import React, { useState } from "react";
import { useParams } from "react-router-dom";
import seasonsData from "../seasonsData";
import BackBtn from "../components/BackBtn";
import TopBar from "../components/TopBar";
import MediaButtons from "../components/MediaButtons";
import MediaWrapper from "../components/MediaWrapper";
import MediaContainer from "../components/MediaContainer";
import Iframe from "react-iframe";
import InnerWrapper from "../components/InnerWrapper";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import MotionDiv from "../components/MotionDiv";

const itemVariants = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0 },
};

const Multimedia = () => {
  const { id } = useParams();

  let episodes = [];

  seasonsData.forEach((season) =>
    season.episodes.forEach((episode) => episodes.push(episode))
  );

  const episode = episodes.filter((ep) => ep.id === id);
  const { title, media } = episode[0];

  const url = "https://ic-english.eu/platforma/assets";

  const [activeContent, setActiveContent] = useState("");

  const setContent = function (e) {
    setActiveContent(e.target.dataset.id);
    return activeContent;
  };

  return (
    <>
      <TopBar title={title} />
      <MotionDiv>
        <BackBtn goto="./" />
        <MediaContainer>
          <MediaButtons>
            {media.map((ep) => {
              return (
                <motion.div
                  variants={itemVariants}
                  exit="hidden"
                  className={
                    activeContent === ep.id ? "mm-btn active" : "mm-btn"
                  }
                  key={ep.id}
                >
                  <button
                    className="title"
                    data-id={ep.id}
                    onClick={setContent}
                  >
                    <p>{ep.id}</p>
                  </button>
                </motion.div>
              );
            })}
          </MediaButtons>
          {!activeContent && (
            <InnerWrapper>
              <h1
                onClick={() => {
                  setActiveContent(media[0].id);
                  console.log(activeContent);
                  return activeContent;
                }}
              >
                Click HERE to start
              </h1>
            </InnerWrapper>
          )}
          {media.map((item) => {
            return (
              activeContent === item.id && (
                <MediaWrapper key={item.id} id={item.id}>
                  {item.audio ? (
                    <InnerWrapper>
                      <div className="inner-area">
                        <audio controls src={`${url}${item.location}`}>
                          Your browser does not support the
                          <code>audio</code> element.
                        </audio>
                      </div>
                    </InnerWrapper>
                  ) : (
                    <Iframe
                      url={`${url}${item.location}`}
                      frameBorder="0"
                      title={item.title}
                      className="i-frame"
                    />
                  )}
                </MediaWrapper>
              )
            );
          })}
        </MediaContainer>
      </MotionDiv>
      <Footer />
    </>
  );
};

export default Multimedia;
