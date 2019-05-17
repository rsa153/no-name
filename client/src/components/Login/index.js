import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
  };

  render() {
    return (
      <div className="Login">
        <h3 className="text-center" style={{ color: "#0B92C8" }}>
          Welcome back! If you already have an account, please use your email
          and password to sign in
        </h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
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
            Sign In
          </Button>
          <br />
          <h5 className="text-center" style={{ color: "#0B92C8",
        fontStyle: "italic" }}>
            If you don't already have an account and would like to create one, please press "X" in the upper left corner to close this screen and click the "Sign up"
            button
          </h5>
            
        </form>
      </div>
    );
  }
}
