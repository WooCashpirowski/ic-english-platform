import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Footer from "../components/Footer";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import HomeTrainer from "../assets/img/home-teacher.png";
import HomeLearner from "../assets/img/home-student.png";
import SelectionItem from "../components/SelectionItem";
import { motion } from "framer-motion";

const Home = () => {
  const { setTrainer } = useContext(AppContext);
  return (
    <>
      <TopBar title="Welcome to IC-English Platform" />
      <BackBtn goto="/" />
      <Main>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            duration: 0.8,
          }}
        >
          <SelectionItem
            img={HomeTrainer}
            alt="trainer"
            style={{ "--i": 3 }}
            goto="/trainer"
          />
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1500 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            duration: 0.6,
          }}
        >
          <SelectionItem
            img={HomeLearner}
            alt="learner"
            style={{ "--i": -5 }}
            goto="/seasons"
            state={() => {
              setTrainer(false);
            }}
          />
        </motion.div>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
