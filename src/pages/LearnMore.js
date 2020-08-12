import React from "react";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <>
      <TopBar title="Learn more about the method" />
      <BackBtn goto="/trainer" />
      <Main>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            duration: 0.6,
          }}
        >
          <Card>
            <a
              href="http://ic-english.eu/platforma/assets/resources/ebook_full.zip"
              download
            >
              <h2>Teachers Manual</h2>
            </a>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            duration: 0.7,
          }}
        >
          <Card>
            <Link to="/trainer/lessons">
              <h2>E-learning Lessons</h2>
            </Link>
          </Card>
        </motion.div>
      </Main>
      <Footer />
    </>
  );
};

export default LearnMore;
