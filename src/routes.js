import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import React from "react";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
