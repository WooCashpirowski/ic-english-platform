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
      <BackBtn goto="./" />
      <MediaContainer>
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
        {!activeContent && (
          <motion.div
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <InnerWrapper>
              <h1>Click buttons to choose multimedia</h1>
            </InnerWrapper>
          </motion.div>
        )}
        {media.map((item) => {
          return (
            <MediaWrapper
              styleClass={activeContent === item.id && "active"}
              key={item.id}
              id={item.id}
            >
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
          );
        })}
      </MediaContainer>
      <Footer />
    </>
  );
};

export default Multimedia;
