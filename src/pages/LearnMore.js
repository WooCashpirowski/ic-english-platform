import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  min-height: 300px;
  width: 300px;
  align-items: center;
  justify-content: center;
  background: var(--color-main);
  border-radius: 10px;
  border: 4px solid #fff;
  position: relative;
  margin: 1rem 1rem 5rem;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    height: 300px;
    width: 300px;
    background: var(--color-red);
    border-radius: 10px;
    top: -0.5%;
    left: -0.5%;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 35px 0px #333;
    box-shadow: -5px -5px 10px 0px rgba(0, 0, 0, 0.1);
  }
  h2 {
    font-size: 2.2rem;
    text-align: center;
    color: #fff;
    font-weight: 500;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    padding: 8px;
    border-radius: 10px;
    background: linear-gradient(145deg, #344ca9, #2c408e);
    box-shadow: 7px 7px 14px #2a3c86, -7px -7px 14px #3852b6;
    transition: all 0.1s ease;
    &:hover {
      background: linear-gradient(-145deg, #344ca9, #2c408e);
    }
    &:active {
      background: linear-gradient(-145deg, #344ca9, #2c408e);
      transform: scale(0.97);
    }
  }
`;

const LearnMore = () => {
  return (
    <>
      <TopBar title="Learn more about the method" />
      <BackBtn goto="/trainer" />
      <Main>
        <Card>
          <Link
            to="http://ic-english.eu/platforma/assets/resources/ebook_full.zip"
            download
          >
            <h2>Teachers Manual</h2>
          </Link>
        </Card>
        <Card>
          <Link to="/trainer/lessons">
            <h2>E-learning Lessons</h2>
          </Link>
        </Card>
      </Main>
      <Footer />
    </>
  );
};

export default LearnMore;
