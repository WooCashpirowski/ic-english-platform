import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import HomeTrainer from "../assets/img/home-teacher.png";
import HomeLearner from "../assets/img/home-student.png";
import SelectionItem from "../components/SelectionItem";

const Home = () => {
  const { setTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Welcome to IC-English Platform" />
      <BackBtn goto="/" />
      <Main>
        <SelectionItem
          img={HomeTrainer}
          alt="trainer"
          style={{ "--i": 3 }}
          goto="/trainer"
        />
        <SelectionItem
          img={HomeLearner}
          alt="learner"
          style={{ "--i": -3 }}
          goto="/seasons"
          state={() => {
            setTrainer(false);
          }}
        />
        <Footer />
      </Main>
    </>
  );
};

export default Home;
