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
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0 auto;
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
