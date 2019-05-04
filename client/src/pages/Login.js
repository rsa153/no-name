import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";

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
        <form onSubmit={this.handleSubmit}>

          <Input
            placeholder="Enter your Email"
            label="Email"
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <Input
            placeholder="Enter your Password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />

          <FormBtn
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </FormBtn>
        </form>
      </div>
    );
  }
}
