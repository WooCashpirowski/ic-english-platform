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
import MotionDiv from "../components/MotionDiv";
import { prefix } from "../prefix";

const selectionVariants = {
  initialOne: { x: -1000, opacity: 0 },
  initialTwo: { y: 1000, opacity: 0 },
  animateOne: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      duration: 0.6,
    },
  },
  animateTwo: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      type: "spring",
      stiffness: 100,
      duration: 0.8,
    },
  },
  exit: {
    x: 1000,
    opacity: 0,
  },
};

const Trainer = () => {
  const { setTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Trainer" />
      <MotionDiv>
        <BackBtn goto="./" onClick={() => setTrainer(false)} />
        <Main>
          <motion.div
            variants={selectionVariants}
            initial="initialOne"
            animate="animateOne"
            exit="exit"
          >
            <SelectionItem
              img={RunLessons}
              alt="run lessons"
              style={{ "--i": -7 }}
              goto={`${prefix}/seasons`}
              state={() => {
                setTrainer(true);
              }}
            />
          </motion.div>
          <motion.div
            variants={selectionVariants}
            initial="initialTwo"
            animate="animateTwo"
            exit="exit"
          >
            <SelectionItem
              img={Learn}
              alt="learn more"
              style={{ "--i": -13 }}
              goto={`${prefix}/trainer/learn-more`}
            />
          </motion.div>
        </Main>
      </MotionDiv>
      <Footer />
    </>
  );
};

export default Trainer;
