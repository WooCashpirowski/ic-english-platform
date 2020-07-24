import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeasonOne from "./pages/SeasonOne";
import SeasonTwo from "./pages/SeasonTwo";
import SeasonThree from "./pages/SeasonThree";
import Lessons from "./pages/Lessons";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
        <Route path="/lessons">
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
