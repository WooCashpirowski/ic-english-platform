import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

const Wrapper = styled.article`
  position: relative;
  overflow: hidden;
  width: 1100px;
  height: 580px;
  background: var(--color-main);
  margin: 0 1rem;
  transform: scale(0.95);

  .i-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  @media (max-width: 1062px) {
    transform: scale(0.9);
    margin-top: -0.5rem;
  }
  @media (max-width: 1000px) {
    transform: scale(0.85);
    margin-top: -1.5rem;
  }
  @media (max-width: 950px) {
    transform: scale(0.8);
    margin-top: -2.5rem;
  }
  @media (max-width: 900px) {
    transform: scale(0.75);
    margin-top: -3.5rem;
  }
  @media (max-width: 840px) {
    transform: scale(0.7);
    margin-top: -4rem;
  }
  @media (max-width: 768px) {
    transform: scale(0.65);
    margin-top: -5rem;
  }
  @media (max-width: 716px) {
    transform: scale(0.62);
    margin-top: -5.8rem;
  }
  @media (max-width: 682px) {
    transform: scale(0.58);
    margin-top: -6rem;
  }
  @media (max-width: 638px) {
    transform: scale(0.55);
    margin-top: -6.8rem;
  }
  @media (max-width: 604px) {
    transform: scale(0.52);
    margin-top: -7.5rem;
  }
  @media (max-width: 568px) {
    transform: scale(0.5);
    margin-top: -8rem;
  }
  @media (max-width: 549px) {
    transform: scale(0.45);
    margin-top: -8.5rem;
  }
  @media (max-width: 494px) {
    transform: scale(0.4);
    margin-top: -10rem;
  }
  @media (max-width: 439px) {
    transform: scale(0.35);
    margin-top: -10.7rem;
  }
  @media (max-width: 375px) {
    transform: scale(0.3);
    margin-top: -12rem;
  }
  @media (max-width: 320px) {
    transform: scale(0.28);
  }
`;

const MediaWrapper = ({ location, title }) => {
  return (
    <Wrapper>
      <Iframe
        url={location}
        frameBorder="0"
        title={title}
        className="i-frame"
      />
    </Wrapper>
  );
};

export default MediaWrapper;
