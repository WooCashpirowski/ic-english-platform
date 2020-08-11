import React from "react";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <>
      <TopBar title="Learn more about the method" />
      <BackBtn goto="/trainer" />
      <Main>
        <Card>
          <Link
            to="http://ic-english.eu/platforma/assets/resources/ebook_full.zip"
            download
          >
            <h2>Teachers Manual</h2>
          </Link>
        </Card>
        <Card>
          <Link to="/trainer/lessons">
            <h2>E-learning Lessons</h2>
          </Link>
        </Card>
      </Main>
    </>
  );
};

export default LearnMore;
