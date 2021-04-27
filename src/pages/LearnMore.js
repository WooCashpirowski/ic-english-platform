import React from "react";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import MotionDiv from "../components/MotionDiv";
import { prefix } from "../prefix";

const cardVariants = {
  initial: {
    y: 1000,
    scale: 0,
  },
  initialTwo: {
    y: -1000,
    scale: 0,
  },
  animate: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
      duration: 0.6,
    },
  },
  animateTwo: {
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 100,
      duration: 0.8,
    },
  },
  exit: {
    x: 1000,
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const LearnMore = () => {
  return (
    <>
      <TopBar title="Learn more about the method" />
      <MotionDiv>
        <BackBtn goto={`${prefix}/trainer`} />
        <Main>
          <motion.div
            variants={cardVariants}
            exit="exit"
            animate="animate"
            initial="initial"
          >
            <Card>
              <a href="https://ic-english.eu/ebook_full/" download>
                <h2>Teachers Manual</h2>
              </a>
            </Card>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="initialTwo"
            animate="animateTwo"
            exit="exit"
          >
            <Card>
              <Link to={`${prefix}/trainer/lessons`}>
                <h2>E-learning Lessons</h2>
              </Link>
            </Card>
          </motion.div>
        </Main>
      </MotionDiv>
      <Footer />
    </>
  );
};

export default LearnMore;
