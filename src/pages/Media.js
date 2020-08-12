import React, { useState } from "react";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import MediaButtons from "../components/MediaButtons";
import MediaWrapper from "../components/MediaWrapper";
import MediaContainer from "../components/MediaContainer";
import Iframe from "react-iframe";
import InnerWrapper from "../components/InnerWrapper";
import lessonsData from "../lessonsData";
import { MdArrowForward } from "react-icons/md";

const Media = () => {
  const { id } = useParams();

  let lessons = [];

  lessonsData.forEach((module) =>
    module.lessons.forEach((lesson) => lessons.push(lesson))
  );

  const lesson = lessons.filter((item) => item.id === parseInt(id));
  const { media, title } = lesson[0];

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
      <MediaContainer>
        <MediaButtons>
          {media.map((item) => (
            <div
              key={item.id}
              className={activeContent === item.id ? "mm-btn active" : "mm-btn"}
            >
              <button className="title" data-id={item.id} onClick={setContent}>
                <p>{item.id}</p>
              </button>
            </div>
          ))}
        </MediaButtons>
        {!activeContent && (
          <InnerWrapper>
            <h1>Click buttons to choose multimedia</h1>
          </InnerWrapper>
        )}
        {media.map((item) => {
          return (
            <MediaWrapper
              styleClass={activeContent === item.id && "active"}
              key={item.id}
              id={item.id}
            >
              {item.blog ? (
                <InnerWrapper>
                  <div className="inner-area">
                    <div className="header">
                      <h1>{item.subtitle}</h1>
                      <h2>{item.subSubTitle}</h2>
                    </div>
                    <div className="goto-area">
                      <div></div>
                      <a
                        className="goto"
                        href={item.location}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2>Go to our blog</h2>
                        <MdArrowForward />
                      </a>
                    </div>
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

export default Media;
