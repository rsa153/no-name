import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateGroup from "./pages/CreateGroup";
import CreateEvent from "./pages/CreateEvent";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Search} />
          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/createEvent" component={CreateEvent} />

          {/* sample things -- remove when not used anymore */}
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
