import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  overflow: hidden;
  height: 580px;
  background: var(--color-main);
  margin: 0 1rem;
  transform: scale(0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    text-align: center;
    margin: 0 12rem;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    @media (max-width: 420px) {
      margin: 0 5rem;
    }
  }
  .inner-area {
    width: 80%;
    height: 60%;
    background: var(--color-light);
    border-radius: 10px;
    border: 4px solid var(--color-main);
    padding: 1rem;
    position: relative;
    color: var(--color-main);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: -20px -20px 60px #3852b6;
    &::after {
      position: absolute;
      content: "";
      top: 2px;
      left: 2px;
      width: 100%;
      height: 100%;
      background: var(--color-light);
      border: 4px solid var(--color-red);
      z-index: -1;
      border-radius: 10px;
      box-shadow: 20px 20px 60px #2a3c86, -20px -20px 60px #3852b6;
    }
    audio {
      transform: scale(1.5);
      outline: none;
      border-radius: 90px;
      box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;

      h1 {
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 0.9rem;
        color: inherit;
      }
    }
    .goto-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 2rem;
      width: 90%;

      .goto {
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 5px;
        width: 50%;
        box-shadow: 10px 10px 30px #c9c9c6, -10px -10px 30px #ffffff;
        transition: all 0.1s ease-in;
        h2 {
          font-weight: 500;
        }
        svg {
          font-size: 2.5rem;
        }
        &:hover {
          background: linear-gradient(145deg, #fefef9, #d5d5d2);
          box-shadow: 10px 10px 30px #c9c9c6, -10px -10px 30px #ffffff;
        }
        &:active {
          box-shadow: inset 10px 10px 30px #c9c9c6,
            inset -10px -10px 30px #ffffff;
        }
      }
    }
  }
`;

const InnerWrapper = ({ children }) => (
  <motion.div
    initial={{ y: -600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.7 }}
  >
    <Wrapper>{children}</Wrapper>
  </motion.div>
);

export default InnerWrapper;
