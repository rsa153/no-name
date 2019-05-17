import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
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
    console.log("------- HAHA ----- handleSubmit Login up top ------")

    // API.getUser(this.props.match.params.id)
    API.logInUser({
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      console.log("------- HAHA ----- API.loginUser ------")
      console.log(res.data.user.email)
      if (res.data.user.email) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          email: res.data.user.email,
          redirectTo:"/task"
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

           <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

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
            // disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}