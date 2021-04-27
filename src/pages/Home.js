import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import HomeTrainer from "../assets/img/home-teacher.png";
import HomeLearner from "../assets/img/home-student.png";
import SelectionItem from "../components/SelectionItem";
import { motion } from "framer-motion";
import MotionDiv from "../components/MotionDiv";
import { prefix } from "../prefix";

const selectionVariants = {
  initial: { x: -1000, opacity: 0 },
  animateOne: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      duration: 0.8,
    },
  },
  animateTwo: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      type: "spring",
      stiffness: 150,
      duration: 0.6,
    },
  },
  exit: {
    x: 1000,
    opacity: 0,
  },
};

const Home = () => {
  const { setTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Welcome to IC-English Platform" />
      <MotionDiv>
        <Main>
          <motion.div
            variants={selectionVariants}
            initial="initial"
            animate="animateOne"
            exit="exit"
          >
            <SelectionItem
              img={HomeTrainer}
              alt="trainer"
              style={{ "--i": 3 }}
              goto={`${prefix}/trainer`}
            />
          </motion.div>
          <motion.div
            variants={selectionVariants}
            initial="initial"
            animate="animateTwo"
            exit="exit"
          >
            <SelectionItem
              img={HomeLearner}
              alt="learner"
              style={{ "--i": -5 }}
              goto={`${prefix}/seasons`}
              state={() => {
                setTrainer(false);
              }}
            />
          </motion.div>
        </Main>
      </MotionDiv>
      <Footer />
    </>
  );
};

export default Home;
