import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Pet from "./pages/Pet";
import Hamburger from "./components/Nav";

if (props.loggedIn) {
  return (
    <Router>
      <div>
        <Hamburger />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Pet" component={Pet} />
          <Route exact path="/Logout" component={Logout} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}
else{
  return (
    <Router>
      <div>
        <Hamburger />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
