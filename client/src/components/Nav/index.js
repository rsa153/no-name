import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Button } from "react-bootstrap";
import API from "../../utils/API";


export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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



  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Save Your Pets</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/task">Task</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/pet">Choose Pet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Log In</NavLink>
            </NavItem>

            <Button type="submit" onClick={this.handleClick}>
              Logout
            </Button>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className = "ml-auto mt-2 navbar-brand">
//         <NavLink className="navbar-brand" to="/profile" activeClassName="active"><h5>Profile</h5></NavLink>
//         <NavLink className="navbar-brand" to="/createGroup" activeClassName="active"><h5>Create Group</h5></NavLink>

//         {/* sample things -- remove when not used anymore */}
//         <NavLink className="navbar-brand" to="/signup" activeClassName="active"><h5>Sign Up</h5></NavLink>
//         <NavLink className="navbar-brand" to="/login" activeClassName="active"><h5>Login</h5></NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
