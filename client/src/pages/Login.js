import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

 export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);  

     this.state = {
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
      if (!!res.data.email) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          email: res.data.email,
          redirectTo:"/"
        })
      } else {
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    }) 
      .then(res => {
        console.log(res)
        if (!res.data.errmsg) {
          console.log('youre good')
          this.setState({
            redirectTo: "/"
          })
        } else {
        console.log("user does not exist")
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