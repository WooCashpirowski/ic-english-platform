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
    @media (max-width: 1280px) {
      margin-bottom: 0;
      height: 60px;
    }
    @media (max-width: 768px) {
      width: 120px;
      height: 40px;
    }
    @media (max-width: 455px) {
      max-width: 100px;
      max-height: 35px;
      font-size: 12px;
      margin: 1rem 0.5rem 0;
    }
    @media (max-width: 320px) {
      max-width: 80px;
      margin: 1rem 0.3rem 0;
    }
  }
  @media (max-width: 1280px) {
    flex-direction: row;
    margin: 0;
  }
`;

const MediaButtons = ({ children }) => {
  return <Buttons>{children}</Buttons>;
};

export default MediaButtons;
