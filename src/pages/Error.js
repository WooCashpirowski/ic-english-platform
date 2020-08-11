import React from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 50px);
  a {
    text-decoration: none;
    color: var(--color-main);
    padding: 1rem;
    border: 2px solid var(--color-main);
    border-radius: 5px;
    transition: all 0.2s ease;
    margin-top: 2rem;
    font-weight: 600;
    font-size: 24px;
    &:hover {
      color: var(--color-light);
      background: var(--color-main);
    }
  }
`;

const Error = () => {
  return (
    <>
      <TopBar title="404" />
      <Wrapper>
        <h1>The site you're trying to reach doesn't exist.</h1>
        <Link to="/">home page</Link>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Error;
