import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import CreateGroup from "./pages/CreateGroup";
import Group from "./pages/Group";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Nav from "./components/Nav";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/profile" component={Home} />
          <Route exact path="/task" component={Task} />

          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/groups/:id" component={Group} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
