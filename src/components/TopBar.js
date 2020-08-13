import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = styled.header`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 0;
  nav {
    height: 50px;
    background: rgb(49, 71, 158);
    box-shadow: 0px 2px 25px 0px var(--light-color);
    width: 100%;
    z-index: 1;
    .logo img {
      position: absolute;
      right: 1rem;
      max-width: 150px;
      z-index: 1;
    }
    h1 {
      color: rgb(237, 233, 233);
      text-align: center;
      top: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
    @media (max-width: 768px) {
      .logo img {
        width: 100px;
      }
    }
    @media (max-width: 550px) {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo img {
        position: initial;
        margin-top: 1rem;
      }
      h1 {
        display: none;
      }
    }
  }
`;

const TopBar = ({ title }) => {
  return (
    <Nav>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="ic-english" />
          </Link>
        </div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
        >
          <h1>{title}</h1>
        </motion.div>
      </nav>
    </Nav>
  );
};

export default TopBar;
