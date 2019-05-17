import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NoMatch from "./pages/NoMatch";
import Pet from "./pages/Pet";
// import Hamburger from "./components/Nav";
// import BottomAppBar from "./components/BottomNav";




function App() {
  return (
    <Router>
      <div>
        {/* <Hamburger /> */}
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

export default App;
