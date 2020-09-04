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

function App() {
  const location = useLocation();
  return (
    <div style={{ backgroundImage: `url(${bg})`, minHeight: "100vh" }}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/trainer">
            <Trainer />
          </Route>
          <Route path="/trainer/learn-more">
            <LearnMore />
          </Route>
          <Route exact path="/trainer/lessons">
            <Lessons />
          </Route>
          <Route exact path="/trainer/lessons/:slug">
            <Lesson />
          </Route>
          <Route path="/trainer/lessons/:slug/:id">
            <Media />
          </Route>
          <Route exact path="/seasons">
            <Seasons />
          </Route>
          <Route exact path="/seasons/:id">
            <Season />
          </Route>
          <Route path="/seasons/:id/:id">
            <Multimedia />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
