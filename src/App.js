import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import LearnMore from "./pages/LearnMore";
import Learner from "./pages/Learner";
import SeasonOne from "./pages/SeasonOne";
import SeasonTwo from "./pages/SeasonTwo";
import SeasonThree from "./pages/SeasonThree";
import Lessons from "./pages/Lessons";
import Seasons from "./pages/Seasons";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trainer">
          <Trainer />
        </Route>
        <Route path="/trainer/learn-more">
          <LearnMore />
        </Route>
        <Route exact path="/learner">
          <Learner />
        </Route>
        <Route exact path="/seasons">
          <Seasons />
        </Route>
        <Route path="/season-1">
          <SeasonOne />
        </Route>
        <Route path="/season-2">
          <SeasonTwo />
        </Route>
        <Route path="/season-3">
          <SeasonThree />
        </Route>
        <Route path="/trainer/lessons">
          <Lessons />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
