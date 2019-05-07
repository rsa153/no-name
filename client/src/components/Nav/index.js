import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><h3>Save Your Pets</h3></Link>

      <div className = "ml-auto mt-2 navbar-brand">
        <NavLink className="navbar-brand" to="/profile" activeClassName="active"><h5>Profile</h5></NavLink>
        <NavLink className="navbar-brand" to="/createGroup" activeClassName="active"><h5>Create Group</h5></NavLink>
        <NavLink className="navbar-brand" to="/task" activeClassName="active"><h5>Tasks</h5></NavLink>

        <NavLink className="navbar-brand" to="/signup" activeClassName="active"><h5>Sign Up</h5></NavLink>
        <NavLink className="navbar-brand" to="/login" activeClassName="active"><h5>Login</h5></NavLink>
      </div>
    </nav>
  );
}

export default Nav;
