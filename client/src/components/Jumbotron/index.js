import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Jumbotron() {
  return (
    <div
      style={{
        height: 275,
        clear: "both",
        // paddingTop: "5px",
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
      >
        Sign Up
      </Button>

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
      >
        Sign In
      </Button>
      </div>
    </div>
  );
}

export default Jumbotron;
