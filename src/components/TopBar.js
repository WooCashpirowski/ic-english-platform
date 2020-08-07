import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Nav = styled.header`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
  nav {
    height: 50px;
    background: rgb(49, 71, 158);
    box-shadow: 0px 2px 25px 0px var(--light-color);
    width: 100%;
    z-index: 1;
    .logo img {
      position: absolute;
      max-width: 150px;
      z-index: 1;
    }
    h1 {
      color: rgb(237, 233, 233);
      text-align: center;
      margin-top: 0.5rem;
    }
    @media (max-width: 550px) {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo img {
        position: initial;
        margin-top: 2rem;
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
        <h1>{title}</h1>
      </nav>
    </Nav>
  );
};

export default TopBar;
