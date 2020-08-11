import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  .mm-btn {
    width: 150px;
    height: 80px;
    background: var(--color-main);
    color: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin: 1rem;
    button {
      width: 95%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(145deg, #344ca9, #2c408e);
      font-family: inherit;
      color: #fff;
      text-transform: uppercase;
      border: none;
      font-size: 18px;
      font-weight: 500;
      transition: all 0.2s ease;
      cursor: pointer;
      &:hover {
        background: linear-gradient(-145deg, #344ca9, #2c408e);
      }
      &:active {
        background: linear-gradient(-145deg, #344ca9, #2c408e);
        transform: scale(0.97);
      }
      p {
        pointer-events: none;
      }
    }

    &.active button {
      background: linear-gradient(45deg, #d5d2d2, #fef9f9);
      color: var(--color-main);
    }
    @media (max-width: 1280px) {
      margin-bottom: 0;
      height: 60px;
    }
    @media (max-width: 768px) {
      max-width: 120px;
      height: 40px;
    }
    @media (max-width: 455px) {
      max-width: 100px;
      max-height: 35px;
      margin: 1rem 0.5rem 0;
      button {
        font-size: 14px;
      }
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
