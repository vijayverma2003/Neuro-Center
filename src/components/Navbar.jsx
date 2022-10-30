import React from "react";

function Navbar(props) {
  return (
    <nav>
      <img className="nav--logo" src={require("../images/logo.png")} alt="" />
    </nav>
  );
}

export default Navbar;
