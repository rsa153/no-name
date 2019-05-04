import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

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

        <FormGroup controlId="name" bsSize="large">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

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

          <FormGroup controlId="cpassword" bsSize="large">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={this.state.cpassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
export default Form;