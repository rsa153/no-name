import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      
    <p>______________________________</p>

      <a className="menu-item" href="/burgers">
        Choose your pet
      </a>

      <a className="menu-item" href="/pizzas">
        Tasks
      </a>

      
    </Menu>
  );
};