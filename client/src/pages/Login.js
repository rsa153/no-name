import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// const Validator = require("validator");
// const isEmpty = require("./isempty");
import API from "../utils/API";


 export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);  

     this.state = {
      loggedIn: false,
      email: "",
      password: ""
    }
  }

   validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

   handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

   handleSubmit = event => {
    event.preventDefault();
    API.userCheck(this.props.match.params.id)
    .then(res => {
      if (res.data.user.email) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          email: res.data.user.email,
          redirectTo:"/"
        })
      } else {
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    }) 
  }

   render() {
    return (
      <div className="Login">
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
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}