
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import API from "../../utils/API";
import "./index.css";
import "./styles.css";
import SideBar from "./sidebar"
import ClassNames from "./Nav"


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  // ---- HAHA ---- need to debug this, returns error with colors undefined
  // AppBar:{
  //   color: colors.purple
  // }
};

class ButtonAppBar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleClick = event => {
    event.preventDefault();
    console.log("------- HAHA ----- handleClik Logout up top ------")
    API.logOutUser()
      .then(res => {
        console.log("------- HAHA ----- API.logoutUser ------")
        console.log(res.data)
      })
  }

class NavbarPage extends Component {
  
  render() {
    return (
      <div className="Navbar">
        <SideBar />
       <Button type="submit" onClick={this.handleClick}> Logout </Button>
        <ClassNames />
      </div>
    );
  }
}

export default NavbarPage;
