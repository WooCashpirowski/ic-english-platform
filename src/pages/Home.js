import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import HomeTrainer from "../assets/img/home-teacher.png";
import HomeLearner from "../assets/img/home-student.png";

const Home = () => {
  return (
    <>
      <TopBar title="Welcome to IC-English Platform" />
      <BackBtn goto="/" />
      <Main
        img1={HomeTrainer}
        img2={HomeLearner}
        alt1="trainer"
        alt2="learner"
        style1={{ "--i": 5 }}
        style2={{ "--i": -3 }}
        goto1="/trainer"
        goto2="/learner"
      />
      <Footer />
    </>
  );
};

export default Home;
