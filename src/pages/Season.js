import React from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
import seasonsData from "../seasonsData";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

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
        border-radius: 5px;
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
  @media (max-width: 960px) and (orientation: landscape) {
    .react-multi-carousel-list {
      padding-top: 1rem;
      .card {
        height: 250px;
        min-width: 250px;
        max-width: 250px;
        .card-title {
          height: 230px;
          width: 230px;
          p {
            font-size: 1.5rem;
            padding: 0.5rem;
          }
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
          {episodes.map((episode) => (
            <motion.div
              className="card"
              key={episode.id}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to={`/seasons/${id}/${episode.id}`} className="card-title">
                <h1>{episode.epNo}</h1>
                <p>{episode.title}</p>
              </Link>
            </motion.div>
          ))}
        </Carousel>
      </Container>
      <Footer />
    </>
  );
};

export default Season;
