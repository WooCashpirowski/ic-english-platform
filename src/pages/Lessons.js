import React from "react";
import lessonsData from "../lessonsData";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import Card from "../components/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Container = styled.main`
  min-height: calc(100vh - 50px);
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  grid-template-columns: 320px 320px;
  column-gap: 3rem;
  @media (max-width: 704px) {
    grid-template-columns: 320px;
  }
  .card {
    margin: 2rem auto 1rem;
    h1 {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 500;
    }
  }
`;

const Lessons = () => {
  return (
    <>
      <TopBar title="Dive into IC-English" />
      <BackBtn goto="/trainer/learn-more" />
      <Container>
        {lessonsData.map((lesson) => {
          const moduleInt = parseInt(lesson.module);
          return (
            <motion.div
              key={lesson.module}
              initial={{
                x: moduleInt === 1 || moduleInt === 3 ? -500 : 500,
                y: moduleInt === 1 || moduleInt === 2 ? -500 : 500,
              }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 50,
                duration: 0.6,
              }}
              animate={{ x: 0, y: 0 }}
            >
              <Card className="card">
                <Link
                  to={`/trainer/lessons/${lesson.slug}`}
                  className="card-title"
                >
                  <h1>{lesson.title}</h1>
                </Link>
              </Card>
            </motion.div>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

export default Lessons;
