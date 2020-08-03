import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";

const Button = styled.div`
  position: absolute;
  margin-left: 3.2rem;
  top: 4.5rem;
  transition: transform 0.2s ease;
  z-index: 2;
  svg {
    font-size: 2.5rem;
  }
  &:hover {
    transform: translateX(-4px);
  }
`;

const BackBtn = ({ goto }) => {
  return (
    <Button>
      <Link to={goto || "#"}>
        <MdArrowBack className="c-main" />
      </Link>
    </Button>
  );
};

export default BackBtn;
