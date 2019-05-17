import React from "react";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ReactModal from "react-modal"
import Signup from "../Signup"
import Login from "../Login"

class Jumbotron extends React.Component {
  constructor () {
    super();
    this.state = {
      showSignupModal: false,
      showSigninModal: false
    };

    this.handleOpenSignupModal = this.handleOpenSignupModal.bind(this);
    this.handleCloseSignupModal = this.handleCloseSignupModal.bind(this);
    this.handleOpenSigninModal = this.handleOpenSigninModal.bind(this);
    this.handleCloseSigninModal = this.handleCloseSigninModal.bind(this);
  }

  handleOpenSignupModal () {
    this.setState({ showSignupModal: true });
  }

  handleCloseSignupModal () {
    this.setState({ showSignupModal: false });
  }
  handleOpenSigninModal () {
    this.setState({ showSigninModal: true });
  }

  handleCloseSigninModal () {
    this.setState({ showSigninModal: false });
  }

  render () {
  return (

    <div
      style={{
        height: 275,
        clear: "both",
        padding: "0px",
        margin: "0px",
        textAlign: "center",
        marginBottom: "30px",
        background:
          "url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)"
      }}
      className="jumbotron"
    >
      <div
        className="text-center"
        style={{
          fontSize: "50px",
          margin: "0px",
          paddingTop: "20px",
          color: "#ffffff"
        }}
      >
        Lacking Motivation? Love Virtual Pets?
        <h4>Register for the app that gives you both: PetMotivation for Task Management</h4>
      </div>

      <div className = "pt-3">
      <Button
        style={{
          borderRadius: 35,
          background: "linear-gradient(45deg, #E8219F 30%, #ffa170 90%)",
          padding: "15px 30px",
          fontSize: "18px",
          color: "white",
          margin: "20px"
        }}
        variant="contained"
        onClick={this.handleOpenSignupModal} >
        Sign Up
      </Button>
      <ReactModal
           isOpen={this.state.showSignupModal}
           contentLabel="Sign Up"
        >
          <button onClick={this.handleCloseSignupModal}
          style = {{
            color: "#0B92C8",
            fontWeight: "bolder"
          }}>
            X</button>
          <Signup  />

      </ReactModal>

      <Button
        style={{
          borderRadius: 35,
          background: "linear-gradient(45deg, #FF8E53 30%, #ff0080 90%)",
          padding: "15px 36px",
          fontSize: "18px",
          color: "white",
          margin: "20px"
        }}
        variant="contained"
        onClick={this.handleOpenSigninModal}
      >
        Log In
      </Button>

      <ReactModal
           isOpen={this.state.showSigninModal}
        >
          <button onClick={this.handleCloseSigninModal}
          style = {{
            color: "#0B92C8",
            fontWeight: "bolder"
          }}>
            X</button>
          <Login />

      </ReactModal>
      </div>
    </div>
  );
}
}

export default Jumbotron;
