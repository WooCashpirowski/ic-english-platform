import React from "react";

import styled from "styled-components";

const Container = styled.main`
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
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
    }
    @media (max-width: 550px) {
      justify-content: flex-start;
      padding-top: 4rem;
      height: 100%;
    }
    @media (max-width: 960px) and (orientation: landscape) {
      flex-direction: row;
      justify-content: space-around;
      padding-top: 3rem;
    }
  }
`;

const Main = ({ children }) => {
  return (
    <>
      <Container>
        <div className="select">{children}</div>
      </Container>
    </>
  );
};

export default Main;
