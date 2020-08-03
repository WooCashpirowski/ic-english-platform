import React from "react";
import { Link } from "react-router-dom";
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
    .selection-item {
      transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
      &:hover {
        transform: rotate(calc(1deg * var(--i)));
      }
    }
  }
`;

const Main = ({
  img1,
  img2,
  alt1,
  alt2,
  style1,
  style2,
  goto1,
  goto2,
  state1,
  state2,
}) => {
  return (
    <>
      <Container>
        <div className="select main">
          <Link
            to={goto1}
            className="selection-item"
            style={style1}
            onClick={state1}
          >
            <img src={img1} alt={alt1} />
          </Link>
          <Link
            to={goto2}
            className="selection-item"
            style={style2}
            onClick={state2}
          >
            <img src={img2} alt={alt2} />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Main;
