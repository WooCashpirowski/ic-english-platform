import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  .mm-btn {
    width: 150px;
    height: 100px;
    background: var(--color-main);
    color: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin: 1rem;
  }
  @media (max-width: 1280px) {
    flex-direction: row;
    margin: 0;
    .mm-btn {
      margin-bottom: 0;
      height: 60px;
    }
  }
`;

const MediaButtons = ({ children }) => {
  return <Buttons>{children}</Buttons>;
};

export default MediaButtons;
