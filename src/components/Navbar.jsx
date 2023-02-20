import React from "react";
import logo from "../assets/airbnb-logo.png"


function Navbar() {
  return(
    <div>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
      </nav>
    </div>
  )
}
export default Navbar