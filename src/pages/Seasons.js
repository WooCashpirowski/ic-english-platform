import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
import styled from "styled-components";
import seasonsData from "../seasonsData";
import { Link } from "react-router-dom";

const Card = styled.main`
  min-height: 300px;
  min-width: 300px;
  align-items: center;
  justify-content: center;
  background: var(--color-main);
  border-radius: 10px;
  border: 4px solid #fff;
  position: relative;
  margin: 1rem 1rem 5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
  &::after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    height: 300px;
    width: 300px;
    border: 5px solid var(--color-red);
    border-radius: 10px;
    top: -0.5%;
    left: -0.5%;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 35px 0px #333;
    box-shadow: -5px -5px 10px 0px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    box-shadow: -5px -5px 10px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
  h2 {
    font-size: 2.2rem;
    text-align: center;
    color: #fff;
    font-weight: 500;
    span {
      font-size: 4rem;
    }
  }
  h1 {
    font-size: 2.6rem;
    color: #fff;
  }
`;

const Seasons = () => {
  const { isTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Choose your level" />
      <BackBtn goto={isTrainer ? "/trainer" : "/"} />
      <Main>
        {seasonsData.map((season) => (
          <Card key={season.season}>
            <h2>Season {season.season}</h2>
            <h1>{season.level}</h1>
            <Link to={`/seasons/${season.season}`} className="btn btn-light">
              Go to multimedia
            </Link>
            {isTrainer && (
              <Link
                className="btn btn-outline-light"
                to={`http://ic-english.eu/platforma/assets/resources/s0${season.season}.zip`}
              >
                Download Resources
              </Link>
            )}
          </Card>
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default Seasons;