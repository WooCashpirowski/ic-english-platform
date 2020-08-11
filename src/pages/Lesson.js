import React from "react";
import TopBar from "../components/TopBar";
import { useParams, Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import Footer from "../components/Footer";
import lessonsData from "../lessonsData";
import styled from "styled-components";

const Container = styled.main`
  max-width: 80%;
  min-height: calc(100vh - 50px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 1.5rem;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-main);
    color: #fff;
    font-size: 1rem;
    height: 210px;
    width: 210px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    .card-title {
      height: 190px;
      width: 190px;
      background: linear-gradient(45deg, #2c408e, #344ca9);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 5px;
      box-shadow: 5px -5px 5px #283a80, -5px 5px 5px #3a54bc;
      &:hover {
        background: linear-gradient(135deg, #253575, #344ca9);
      }
      h1 {
        font-size: 1.2rem;
        font-weight: 400;
        font-style: italic;
      }
      p {
        margin-top: 4rem;
        font-size: 2rem;
        padding: 0.5rem;
      }
    }
  }
`;

const Lesson = () => {
  const { slug } = useParams();
  const lesson = lessonsData.filter((lesson) => lesson.slug === slug);
  const { title, lessons } = lesson[0];

  return (
    <>
      <TopBar title={title} />
      <BackBtn goto="./" />

      <Container>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="card">
            <Link
              to={`/trainer/lessons/${slug}/${lesson.id}`}
              className="card-title"
            >
              <h1>{lesson.title}</h1>
            </Link>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Lesson;
