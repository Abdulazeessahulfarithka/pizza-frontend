import React from "react";
import logo from "../../assets/logo.jpeg";
import { BiCartAlt,BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  return (
    <div id="application-header" className="application-header">
      <div id="branding" className="branding">
        <img src={logo} alt="swiggy logo" />
        <p>Pizza Hut</p>
      </div>
      <div id="nav-option" className="branding">
        <BiCartAlt onclick={()=>{navigate("/cart")}}/>
        <button><BiUser/></button>
      </div>
    </div>
  );
}

export default Header;
