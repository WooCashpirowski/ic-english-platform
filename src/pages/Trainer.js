import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import SelectionItem from "../components/SelectionItem";
import RunLessons from "../assets/img/run.png";
import Learn from "../assets/img/learn.png";

const Trainer = () => {
  const { setTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Trainer" />
      <BackBtn goto="/" onClick={() => setTrainer(false)} />
      <Main>
        <SelectionItem
          img={RunLessons}
          alt="run lessons"
          style={{ "--i": -2 }}
          goto="/seasons"
          state={() => {
            setTrainer(true);
          }}
        />
        <SelectionItem
          img={Learn}
          alt="learn more"
          style={{ "--i": 3 }}
          goto="/trainer/learn-more"
        />
        <Footer />
      </Main>
    </>
  );
};

export default Trainer;
