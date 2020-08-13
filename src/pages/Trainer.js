import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import SelectionItem from "../components/SelectionItem";
import RunLessons from "../assets/img/run.png";
import Learn from "../assets/img/learn.png";
import { motion } from "framer-motion";

const Trainer = () => {
  const { setTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Trainer" />
      <BackBtn goto="/" onClick={() => setTrainer(false)} />
      <Main>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          <SelectionItem
            img={RunLessons}
            alt="run lessons"
            style={{ "--i": -7 }}
            goto="/seasons"
            state={() => {
              setTrainer(true);
            }}
          />
        </motion.div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 1000 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.7 }}
        >
          <SelectionItem
            img={Learn}
            alt="learn more"
            style={{ "--i": -13 }}
            goto="/trainer/learn-more"
          />
        </motion.div>
      </Main>
      <Footer />
    </>
  );
};

export default Trainer;
