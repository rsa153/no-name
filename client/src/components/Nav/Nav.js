import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import "./styles.css";

const styles = {
  root: {
    background: "#0B92C8",
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 60px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};

function ClassNames(props) {
  const { classes, children, className } = props;

  return (
    <div className="Navbar">
      <AppBar position="static" className={classNames(classes.root, className)}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            PetSurvival 101
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ClassNames.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(styles)(ClassNames);
