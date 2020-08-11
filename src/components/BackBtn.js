import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";

const Button = styled.div`
  position: absolute;
  margin-left: 3.2rem;
  top: 0.3rem;
  transition: transform 0.2s ease;
  z-index: 4;
  svg {
    font-size: 2.5rem;
    color: #fff;
  }
  &:hover {
    transform: translateX(-4px);
  }
  @media (max-width: 651px) {
    margin-left: 1rem;
  }
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
