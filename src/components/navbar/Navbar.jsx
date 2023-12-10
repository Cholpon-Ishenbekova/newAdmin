import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="item">Record</div>
          </Link>
          <Link to="/department" style={{ textDecoration: "none" }}>
            <div className="item">Department</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
