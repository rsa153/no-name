import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
       <a className="menu-item" href="/logout">
        Logout
      </a>
      
    <p>______________________________</p>

      <a className="menu-item" href="/pet">
        Choose your pet
      </a>

      <a className="menu-item" href="/tasks">
        Tasks
      </a>

      <a className="menu-item" href="/tasks">
        Today's Tasks
      </a>

      <a className="menu-item" href="/tasks">
        This week's tasks
      </a>

    </Menu>
  );
};