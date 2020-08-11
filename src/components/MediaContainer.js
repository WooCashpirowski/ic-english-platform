import styled from "styled-components";

export default styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 3rem;
  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
