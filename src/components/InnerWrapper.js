import styled from "styled-components";

const InnerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 580px;
  background: var(--color-main);
  margin: 0 1rem;
  transform: scale(0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
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
  }
`;

export default InnerWrapper;
