import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      errors: {},
      redirectTo: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.cpassword.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      alert("Passwords don't match");
      return false;
    } else if (this.state.password === this.state.cpassword) {
      API.signUpUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        console.log("------ HandleSubmit Sign Up ------")
        console.log(res)
        if (!res.data.error) {
          console.log('youre good');
          this.setState({
            redirectTo: '/user'
          })
        } else {
          console.log('duplicate')
        }

        })
    }
  };

  render() {
    return (

      <div className="Sign-up p-2" >
        <h3 className = "text-center" style = {{color:"#0B92C8"}}>Please fill out all the fields in this form and submit to get started!</h3>
        <br />
        <form onSubmit={this.handleSubmit}>

         <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

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

          <FormGroup controlId="cpassword">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={this.state.cpassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            onClick={this.handleSubmit}
            disabled={!this.validateForm()}
            type="submit"
            style = {{
                borderRadius: 35,
                background: "linear-gradient(45deg, #ff0080 30%, #0B92C8 90%)",
                padding: "15px 36px",
                fontSize: "18px",
                color: "white",
                margin: "0px",
                fontWeight: "bold"
                // width: "50%",
                // justifyContent: 'center',
                // flex:1,
                // alignItems: 'center'
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}