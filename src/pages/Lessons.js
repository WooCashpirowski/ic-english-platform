import React from "react";
import lessonsData from "../lessonsData";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import Card from "../components/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import MotionDiv from "../components/MotionDiv";
import { prefix } from "../prefix";

const Container = styled.main`
  min-height: calc(100vh - 150px);
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  grid-template-columns: 320px 320px;
  column-gap: 2rem;
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
      <MotionDiv>
        <BackBtn goto={`${prefix}/trainer/learn-more`} />
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
                exit={{
                  x: moduleInt === 1 || moduleInt === 3 ? -500 : 500,
                  y: moduleInt === 1 || moduleInt === 2 ? -500 : 500,
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
                animate={{ x: 0, y: 0 }}
              >
                <Card className="card">
                  <Link
                    to={`${prefix}/trainer/lessons/${lesson.slug}`}
                    className="card-title"
                  >
                    <h1>{lesson.title}</h1>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </Container>
      </MotionDiv>
      <Footer />
    </>
  );
};

export default Lessons;
