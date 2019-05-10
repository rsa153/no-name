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

class App extends Component {
  render() {
    // if () {
      return (
        <Router>
          <div>
            <Hamburger />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Pet" component={Pet} />
              <Route exact path="/Logout" component={Logout} />
              <Route exact path="/Login" component={Login} />
             <Route exact path="/Signup" component={Signup} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
  //   } else {
  //     return (
  //       <Router>
  //         <div>
  //           <Hamburger />
  //           <Switch>
  //             <Route exact path="/" component={Home} />
  
  //             <Route component={NoMatch} />
  //           </Switch>
  //         </div>
  //       </Router>
  //     );
  //   }
  }
}

export default App;

//  render() {
//     return (
//       <div className="App">

//         <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
//         {/* greet user if logged in: */}
//         {this.state.loggedIn &&
//           <p>Join the party, {this.state.username}!</p>
//         }
//         {/* Routes to different components */}
//         <Route
//           exact path="/"
//           component={Home} />
//         <Route
//           path="/login"
//           render={() =>
//             <LoginForm
//               updateUser={this.updateUser}
//             />}
//         />
//         <Route
//           path="/signup"
//           render={() =>
//             <Signup/>}
//         />

//       </div>
//     );
//   }
// }
