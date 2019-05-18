import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

import { MDBFooter } from "mdbreact";
import { BottomNavigation } from "@material-ui/core";

class Logout extends Component {

  render() {
    return (
      <div
        style={{
          background: "#FAF0BA",
          minHeight: "100vh",
          resizeMode: 'cover',
        }}
      >

        <Jumbotron />
        <br />
        <div className="Logout">
          <h1 className = "text-center">You've been logged out. </h1>
          <h1 className = "text-center">Please sign back in if you would like to continue using our app!</h1>
          </div>

        <br />
        <MDBFooter
          style={{
            backgroundColor: "#18AEEA",
            padding: "5px 0px",
            color: "#ffffff",
            textAlign: "center",
            clear: "both",
            marginTop:"10px",
            position: "absolute",
            width: "100%",
            bottom: "0"
          }}
        >

          <div className="footer-copyright text-center">© 2019 Copyright</div>
        </MDBFooter>
        <br />
      </div>
    );
  }
}

export default Logout;