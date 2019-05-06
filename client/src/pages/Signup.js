import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        password: "",
        cpassword:"",
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0 && this.state.cpassword.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.cpassword) {
        alert("Passwords don't match");
        return false;
    } else if (this.state.password === this.state.cpassword) {
        alert("Passwords do match")
        return true;
    }
  }

  render() {
    return (
      <div className="Sign-up">
        <form onSubmit={this.handleSubmit}>

            <Input
              label="Name"
              autoFocus
              type="name"
              placeholder="Enter your First Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

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

            <Input
              placeholder="Re-Enter your Password"
              label="Confirm Password"
              value={this.state.cpassword}
              onChange={this.handleChange}
              type="password"
            />
          
          <FormBtn

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up
          </FormBtn>
        </form>
      </div>
    );
  }
}
