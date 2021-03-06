import styled from "styled-components";

export default styled.div`
  min-height: 300px;
  width: 300px;
  align-items: center;
  justify-content: center;
  background: var(--color-main);
  border-radius: 10px;
  border: 4px solid #fff;
  position: relative;
  margin: 1rem 1rem;
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
    border-radius: 5px;
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
  @media (max-width: 960px) and (orientation: landscape) {
    width: 250px;
    min-height: 250px;
    margin: 0;
    &::after {
      height: 250px;
      width: 250px;
    }
    a {
      height: 220px;
      width: 220px;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
