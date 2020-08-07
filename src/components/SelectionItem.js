import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Goto = styled.div`
  transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
  &:hover {
    transform: rotate(calc(1deg * var(--i)));
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  @media (max-width: 550px) {
    width: 350px;
    margin-top: 1rem;

    img {
      width: 100%;
    }
  }
  @media (max-width: 960px) and (orientation: landscape) {
    width: 350px;
    img {
      width: 100%;
    }
  }
`;

const SelectionItem = ({ img, alt, style, goto, state }) => {
  return (
    <Goto style={style}>
      <Link to={goto} onClick={state}>
        <img src={img} alt={alt} />
      </Link>
    </Goto>
  );
};

export default SelectionItem;
