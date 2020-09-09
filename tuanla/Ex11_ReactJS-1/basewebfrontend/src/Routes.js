import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <SignIn />
        </Route>
        <Route path="/welcome" exact={true}>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
