import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./index.css";

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
  AppBar:{
    color: colors.purple
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            PetSurvival 101
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

// import React from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

// export default class Hamburger extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">Save Your Pets</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/task">Task</NavLink>
//             </NavItem>

//             <NavItem>
//               <NavLink href="/pet">Choose Pet</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/signup">Sign Up</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/login">Log In</NavLink>
//             </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// // function Nav() {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //       <div className = "ml-auto mt-2 navbar-brand">
// //         <NavLink className="navbar-brand" to="/profile" activeClassName="active"><h5>Profile</h5></NavLink>
// //         <NavLink className="navbar-brand" to="/createGroup" activeClassName="active"><h5>Create Group</h5></NavLink>

// //         {/* sample things -- remove when not used anymore */}
// //         <NavLink className="navbar-brand" to="/signup" activeClassName="active"><h5>Sign Up</h5></NavLink>
// //         <NavLink className="navbar-brand" to="/login" activeClassName="active"><h5>Login</h5></NavLink>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Nav;
