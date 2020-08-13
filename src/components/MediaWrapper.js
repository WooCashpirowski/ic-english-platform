import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    transform: scale(0.7);
    margin-top: -3.5rem;
  }
  @media (max-width: 840px) {
    transform: scale(0.65);
    margin-top: -4rem;
  }
  @media (max-width: 768px) {
    transform: scale(0.6);
    margin-top: -5rem;
  }
  @media (max-width: 716px) {
    transform: scale(0.56);
    margin-top: -5.8rem;
  }
  @media (max-width: 682px) {
    transform: scale(0.55);
    margin-top: -6rem;
  }
  @media (max-width: 638px) {
    transform: scale(0.5);
    margin-top: -6.8rem;
  }
  @media (max-width: 604px) {
    transform: scale(0.46);
    margin-top: -7.5rem;
  }
  @media (max-width: 568px) {
    transform: scale(0.43);
    margin-top: -8rem;
  }
  @media (max-width: 549px) {
    transform: scale(0.4);
    margin-top: -8.5rem;
  }
  @media (max-width: 494px) {
    transform: scale(0.35);
    margin-top: -10rem;
  }
  @media (max-width: 439px) {
    transform: scale(0.35);
    margin-top: -10.7rem;
  }
  @media (max-width: 375px) {
    transform: scale(0.32);
    margin-top: -12rem;
  }
  @media (max-width: 320px) {
    transform: scale(0.29);
  }
`;

const MediaWrapper = ({ id, styleClass, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1 }}
    >
      <Wrapper id={id} className={styleClass}>
        {children}
      </Wrapper>
    </motion.div>
  );
};

export default MediaWrapper;
