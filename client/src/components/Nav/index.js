import React, { Component } from "react";
import "./styles.css";
import SideBar from "./sidebar"
import ClassNames from "./Nav"


class NavbarPage extends Component {
  
  render() {
    return (
      <div className="Navbar">
        <SideBar />
        <ClassNames />
      </div>
    );
  }
}

export default NavbarPage;