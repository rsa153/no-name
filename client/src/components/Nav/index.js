import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><h3>get2gether</h3></Link>

      <div className = "ml-auto mt-2 navbar-brand">
        <NavLink className="navbar-brand" to="/profile" activeClassName="active"><h5>Profile</h5></NavLink>
        <NavLink className="navbar-brand" to="/createGroup" activeClassName="active"><h5>Create Group</h5></NavLink>
        <NavLink className="navbar-brand" to="/createEvent" activeClassName="active"><h5>Create Event</h5></NavLink>

        {/* sample things -- remove when not used anymore */}
        <NavLink className="navbar-brand" to="/search" activeClassName="active"><h5>Search</h5></NavLink>
        <NavLink className="navbar-brand" to="/saved" activeClassName="active"><h5>Saved</h5></NavLink>
      </div>
    </nav>
  );
}

export default Nav;
