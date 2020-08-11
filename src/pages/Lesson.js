import React from "react";
import TopBar from "../components/TopBar";
import { useParams, Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import lessonsData from "../lessonsData";
import styled from "styled-components";

const Container = styled.main`
  min-height: calc(100vh - 50px);
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: var(--color-main);
    color: #fff;
    font-size: 1rem;
    height: 200px;
    width: 200px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    margin: 3rem auto 1rem;
    .card-title {
      height: 180px;
      width: 180px;
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
        font-size: 1.2rem;
        font-weight: 500;
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
  const { lessons } = lesson[0];

  return (
    <>
      <TopBar title={slug} />
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
    </>
  );
};

export default Lesson;
