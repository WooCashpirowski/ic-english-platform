import React from "react";
import styled from "styled-components";
import BackBtn from "./BackBtn";
import HomeTrainer from "../assets/img/home-teacher.png";
import HomeLearner from "../assets/img/home-student.png";

const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 50px);
  height: 100%;
  position: relative;

  .select {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    opacity: 1;
    transition: all 0.5s ease-out;
    .selection-item {
      transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
      &:hover {
        transform: rotate(5deg);
      }
    }
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <BackBtn goto="/" />
      <div className="select main">
        <a href="#" id="select-teacher" className="selection-item">
          <img src={HomeTrainer} alt="trainer" />
        </a>
        <a href="#" id="select-lessons" className="selection-item">
          <img src={HomeLearner} alt="learner" />
        </a>
      </div>
      {/* <div className="select teacher hidden">
       <a href="#" className="back-btn">
         <i className="fas fa-arrow-left fa-2x"></i>
       </a>
       <a href="#" id="run-lessons" className="selection-item">
         <img src="assets/img/run.png" alt="" />
       </a>
       <a href="#" id="learn-more" className="selection-item">
         <img src="assets/img/learn.png" alt="" />
       </a>
     </div> */}
      {/* <div className="select seasons hidden">
        <a href="#" className="back-btn">
          <i className="fas fa-arrow-left fa-2x"></i>
        </a>
        <div className="selection-card">
          <h2>
            Season 1<br />
            A1
          </h2>
          <a href="a1.html" className="btn btn-light">
            Go to Multimedia
          </a>
          <a
            href="assets/resources/s01.zip"
            className="btn btn-outline-light"
            download
          >
            Lesson Plans & Worksheets
          </a>
        </div>
        <div className="selection-card">
          <h2>
            Season 2<br />
            A2
          </h2>
          <a href="a2.html" className="btn btn-light">
            Go to Multimedia
          </a>
          <a
            href="assets/resources/s02.zip"
            className="btn btn-outline-light"
            download
          >
            Lesson Plans & Worksheets
          </a>
        </div>
        <div className="selection-card">
          <h2>
            Season 3<br />
            B1
          </h2>
          <a href="b1.html" className="btn btn-light">
            Go to Multimedia
          </a>
          <a
            href="assets/resources/s03.zip"
            className="btn btn-outline-light"
            download
          >
            Lesson Plans & Worksheets
          </a>
        </div>
      </div>
      <div className="select seasons-learner hidden">
        <a href="#" className="back-btn">
          <i className="fas fa-arrow-left fa-2x"></i>
        </a>

        <div className="selection-card">
          <h2>
            Season 1<br />
            <span>A1</span>
          </h2>
          <a href="a1.html" className="btn btn-light">
            Go to Multimedia
          </a>
        </div>
        <div className="selection-card">
          <h2>
            Season 2<br />
            <span>A2</span>
          </h2>
          <a href="a2.html" className="btn btn-light">
            Go to Multimedia
          </a>
        </div>
        <div className="selection-card">
          <h2>
            Season 3<br />
            <span>B1</span>
          </h2>
          <a href="b1.html" className="btn btn-light">
            Go to Multimedia
          </a>
        </div>
      </div>
      <div className="select teacher-section hidden">
        <a href="#" className="back-btn">
          <i className="fas fa-arrow-left fa-2x"></i>
        </a>
        <div className="selection-card card-2">
          <a href="assets/resources/ebook_full.zip" download>
            <h2>Teachers Manual</h2>
          </a>
        </div>
        <div className="selection-card card-2">
          <a href="lessons.html">
            <h2>E-learning Lessons</h2>
          </a>
        </div>
      </div> */}
    </MainContainer>
  );
};

export default Main;
