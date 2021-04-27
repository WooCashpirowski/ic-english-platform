import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import LearnMore from "./pages/LearnMore";
import Season from "./pages/Season";
import Lessons from "./pages/Lessons";
import Lesson from "./pages/Lesson";
import Media from "./pages/Media";
import Seasons from "./pages/Seasons";
import Error from "./pages/Error";
import Multimedia from "./pages/Multimedia";
import { AnimatePresence } from "framer-motion";
import bg from "./assets/img/bg.jpg";
import { prefix } from "./prefix";

function App() {
  const location = useLocation();
  return (
    <div style={{ backgroundImage: `url(${bg})`, minHeight: "100vh" }}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path={`${prefix}`}>
            <Home />
          </Route>
          <Route exact path={`${prefix}/trainer`}>
            <Trainer />
          </Route>
          <Route path={`${prefix}/trainer/learn-more`}>
            <LearnMore />
          </Route>
          <Route exact path={`${prefix}/trainer/lessons`}>
            <Lessons />
          </Route>
          <Route exact path={`${prefix}/trainer/lessons/:slug`}>
            <Lesson />
          </Route>
          <Route path={`${prefix}/trainer/lessons/:slug/:id`}>
            <Media />
          </Route>
          <Route exact path={`${prefix}/seasons`}>
            <Seasons />
          </Route>
          <Route exact path={`${prefix}/seasons/:id`}>
            <Season />
          </Route>
          <Route path={`${prefix}/seasons/:id/:id`}>
            <Multimedia />
          </Route>
          <Route path={`${prefix}/*`}>
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
