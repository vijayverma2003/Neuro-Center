import React from "react";
import logo from "../images/logo.jpeg";

function Navbar(props) {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="" />
      <ul className="nav--items">
        <li>
          <a href="#">About</a>
          <a href="#">Reviews</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
