import React, { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import RunLessons from "../assets/img/run.png";
import Learn from "../assets/img/learn.png";

const Trainer = () => {
  const [isTrainer, setIsTrainer] = useState(false);
  const setTrainer = (bool) => {
    setIsTrainer(bool);
    console.log(isTrainer);
    return isTrainer;
  };

  return (
    <>
      <TopBar title="Trainer" />
      <BackBtn goto="/" />
      <Main
        img1={RunLessons}
        img2={Learn}
        alt1="run-lessons"
        alt2="learn-more"
        style1={{ "--i": 1 }}
        style2={{ "--i": -4 }}
        goto1="/seasons"
        goto2="/trainer/learn-more"
        state1={(e) => setTrainer(true)}
      />
      <Footer />
    </>
  );
};

export default Trainer;
