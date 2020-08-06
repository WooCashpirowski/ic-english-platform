import React from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
import seasonsData from "../seasonsData";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Container = styled.section`
  height: calc(100vh - 50px);
  .react-multi-carousel-list {
    height: 85%;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background: var(--color-main);
      color: #fff;
      font-size: 1rem;
      height: 300px;
      min-width: 300px;
      max-width: 300px;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      margin: 0 auto;

      .card-title {
        height: 280px;
        width: 280px;
        background: linear-gradient(45deg, #2c408e, #344ca9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        border-radius: 10px;
        box-shadow: 5px -5px 5px #283a80, -5px 5px 5px #3a54bc;
        &:hover {
          background: linear-gradient(135deg, #253575, #344ca9);
        }
        h1 {
          margin-top: 2rem;
        }
        p {
          margin-top: 4rem;
          font-size: 2rem;
          padding: 0.5rem;
        }
      }
    }
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 4,
  },
  smallDesktop: {
    breakpoint: { max: 1200, min: 950 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 950, min: 630 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 630, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Season = () => {
  const { id } = useParams();
  const season = seasonsData.filter((season) => season.season === id);
  const { episodes } = season[0];

  const groups = episodes.map((group) => {
    return group.group;
  });

  return (
    <>
      <TopBar title={`Season ${id}`} />
      <BackBtn goto="/seasons" />
      <Container>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          focusOnSelect={true}
        >
          {groups.map((group) =>
            group.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <Link to={`/seasons/${id}/${item.id}`} className="card-title">
                    <h1>{item.epNo}</h1>
                    <p>{item.title}</p>
                  </Link>
                </div>
              );
            })
          )}
        </Carousel>
      </Container>
      <Footer />
    </>
  );
};

export default Season;
