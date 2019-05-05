import React from "react";

const Header = (props) => {
  return (
    <div>
      <header className="header text-center mb-5" id="header-container">
        <h1><b>{props.title}</b></h1>
        <h3>{props.subtitle}</h3>
      </header>
    </div>
  );
}

export default Header;
