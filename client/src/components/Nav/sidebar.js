import React from "react";
import { slide as Menu } from "react-burger-menu";
import API from "../../utils/API";
import {  withRouter} from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    event.preventDefault();
    console.log("------- HAHA ----- handleClik Logout up top ------")
    API.logOutUser()
      .then(res => {
        this.props.history.push("/logout")
        console.log("------- HAHA ----- API.logoutUser ------")
        console.log(res.data)
      })
  }

  render() {
    return (

      <Menu>
        {/* HAHA --- need to do redirect here please */}
        <a className="menu-item" href="/logout" onClick={this.handleClick}>Logout</a>
        <p>______________________________</p>

        <a className="menu-item" href="/pet">Choose your pet</a>
        <a className="menu-item" href="/task">Tasks</a>
        <a className="menu-item" href="/task">Today's Tasks</a>
        <a className="menu-item" href="/task">This week's tasks</a>

      </Menu>
    );
  }
}

export default withRouter(Sidebar);
