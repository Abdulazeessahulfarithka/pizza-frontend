import React from "react";
import logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <div id="application-header" className="application-header">
      <div id="branding" className="branding">
        <img src={logo} alt="swiggy logo" />
        <p>Pizza Hut</p>
      </div>
      <div id="nav-option" className="branding">
        options
      </div>
    </div>
  );
}

export default Header;
