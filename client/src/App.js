import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NoMatch from "./pages/NoMatch";
import Pet from "./pages/Pet";
// import Hamburger from "./components/Nav";
// import BottomAppBar from "./components/BottomNav";

import ButtonAppBar from "./components/Nav";

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  }
}

function App() {
  return (
    <Router>
      <div>
        {/* <Hamburger /> */}

        <ButtonAppBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet" component={Pet} />
          <Route exact path="/profile" component={Home} />
          <Route exact path="/task" component={Task} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export { App };
