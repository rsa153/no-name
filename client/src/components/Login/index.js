import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";
import {  withRouter} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.state = {
      email: "",
      password: "",
      errMsg: "",
      successMsg: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("------- HAHA ----- handleSubmit Login up top ------")
    API.logInUser({
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      console.log("------- HAHA ----- API.loginUser ------")

      console.log(res.data)

      // get res from route api/user
      // this is with hack res.json({ user: user }) thing
      console.log(res.data.user)

      console.log(res.data.user.email)

      const currentUser = res.data.user;

      if (currentUser.email) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          email: currentUser.email,
          redirectTo:"/task",
          successMsg: "You are successfully logged in!",
          errMsg: ""
        })
        this.props.history.push("/task")
      } else {
        this.setState({
          loggedIn: false,
          email: ""
        })
      }

    })
    .catch(err => {
      // res.status(422).json(err)
      console.log("------ Catch Error Login------")
      console.log(err)
      console.log(err.statusMessage)
      console.log("---- err.response ---- wohoo ")
      console.log(err.response)

      const errlogin = err.response.data.message;

      if (errlogin) {
        console.log("---- errlogin ----")
        console.log(errlogin)

        this.setState({
          errMsg: errlogin,
          successMsg: ""
        })
      }

    });
  };

  render() {
    return (
      <div className="Login">
        <h3 className="text-center" style={{ color: "#0B92C8" }}>
          Welcome back! If you already have an account, please use your email
          and password to log in
        </h3>
        <br />
        <form onSubmit={this.handleSubmit}>

          {/* <FormGroup controlId="email" bsSize="large"> */}
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          {/* <FormGroup controlId="password" bsSize="large"> */}
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            style={{
              borderRadius: 35,
              background: "linear-gradient(45deg, #ff0080 30%, #0B92C8 90%)",
              padding: "15px 36px",
              fontSize: "18px",
              color: "white",
              margin: "0x",
              fontWeight: "bold",
              marginTop: "40px"
            }}
          >
            Log In
          </Button>
          <br />
          <h5 className="text-center" style={{ color: "#0B92C8", fontStyle: "italic" }}>
            If you don't already have an account and would like to create one, please press "X" in the upper left corner to close this screen and click the "Sign up"
            button
          </h5>

          {this.state.successMsg.length ? (
            <h5 className="text-center" style={{ color: "green", fontStyle: "italic" }}>
              <br />
              {this.state.successMsg}
            </h5>
          ) : (
            <h5 className="text-center" style={{ color: "red", fontStyle: "italic" }}>
              <br />
              {this.state.errMsg}
            </h5>
          )}

        </form>
      </div>
    );
  }
}

export default withRouter(Login)