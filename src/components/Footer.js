import React from "react";
import styled from "styled-components";
import erasmusLogo from "../assets/img/erasmus_color.png";

const FooterStyled = styled.footer`
  padding: 1rem 2rem 0.5rem;
  margin: auto;
  width: 100%;
  .footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    user-select: none;
    opacity: 1;
    transform: scale(1);
    transition: all 0.8s ease-in-out;
    img {
      width: 310px;
      margin-left: -1.2rem;
    }
    @media (max-width: 768px) {
      img {
        width: 200px;
      }
      p {
        font-size: 0.5rem;
      }
    }
    @media (max-width: 960px) and (orientation: landscape) {
      display: none;
    }
    @media (max-width: 550px) {
      flex-direction: column;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <div>
          <img src={erasmusLogo} alt="erasmus-plus" />
        </div>
        <div className="funding-info">
          <p>
            This project has been funded with support from the European
            Commission. This publication reflects the views only of the author,
            and the Commission cannot be held responsible for any use which may
            be made of the information contained therein. Grant Agreement
            number: 2018-1-PL01-KA204-050784
          </p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
