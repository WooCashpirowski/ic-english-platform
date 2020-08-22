import React from "react";
import TopBar from "../components/TopBar";
import { useParams, Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import Footer from "../components/Footer";
import lessonsData from "../lessonsData";
import styled from "styled-components";
import { motion } from "framer-motion";
import MotionDiv from "../components/MotionDiv";

const Container = styled.main`
  max-width: 80%;
  min-height: calc(100vh - 50px);
  margin: 0 auto;

  padding: 4rem 0;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 3rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: var(--color-main);
      color: #fff;
      font-size: 1rem;
      height: 250px;
      width: 250px;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      margin: 0 auto;
      &.big {
        height: 310px;
        width: 310px;
        .card-title {
          height: 290px;
          width: 290px;
          h1 {
            font-size: 1.6rem;
          }
        }
      }
      .card-title {
        height: 230px;
        width: 230px;
        background: linear-gradient(45deg, #2c408e, #344ca9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 5px;
        box-shadow: 5px -5px 5px #283a80, -5px 5px 5px #3a54bc;
        padding: 0.5rem;
        &:hover {
          background: linear-gradient(135deg, #253575, #344ca9);
        }
        h1 {
          font-size: 1.4rem;
          font-weight: 400;
          font-style: italic;
          &:nth-child(2) {
            margin-top: 1rem;
          }
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

const container = {
  initial: { opacity: 0, x: -300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -300 },
  animate: { opacity: 1, x: 0 },
};

const Lesson = () => {
  const { slug } = useParams();
  const lesson = lessonsData.filter((lesson) => lesson.slug === slug);
  const { title, lessons } = lesson[0];

  return (
    <>
      <TopBar title={title} />
      <MotionDiv>
        <BackBtn goto="/trainer/lessons/" />
        <Container>
          <motion.div className="container" variants={container}>
            {lessons.map((lesson) => (
              <motion.div
                variants={itemVariants}
                key={lesson.id}
                className={title === "ANDRAGOGY" ? "card big" : "card"}
              >
                <Link
                  to={`/trainer/lessons/${slug}/${lesson.id}`}
                  className="card-title"
                >
                  <h1>{lesson.title}</h1>
                  {lesson.subtitle && <h1>{lesson.subtitle}</h1>}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </MotionDiv>
      <Footer />
    </>
  );
};

export default Lesson;
