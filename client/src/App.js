import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateGroup from "./pages/CreateGroup";
import Group from "./pages/Group";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Hamburger from "./components/Nav";




function App() {
  return (
    <Router>
      <div>
        <Hamburger />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />

          <Route exact path="/profile" component={Home} />

          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/groups/:id" component={Group} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
