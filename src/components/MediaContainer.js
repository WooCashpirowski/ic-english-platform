import styled from "styled-components";

export default styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 3rem;
  min-height: calc(100vh - 220px);
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
