import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Pet from "./pages/Pet";
import Hamburger from "./components/Nav";
import Logout from "./pages/Logout";


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


export default class App extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Hamburger />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/pet" component={Pet} onEnter={requireAuth}/>
            <Route exact path="/profile" component={Home} />

            {/* <Route exact path="/task" component={Task} /> */}

            <Route exact path="/task" component={Task} onEnter={requireAuth}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
