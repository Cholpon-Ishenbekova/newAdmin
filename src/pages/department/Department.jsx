import React from "react";
import "./department.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function Department() {
  return (
    <div className="department">
      <div className="departmentContainer">
        <Navbar />
        <div className="list">
          <ul className="items">
            <Link to="Kitchen" style={{ textDecoration: "none" }}>
              <li>Kitchen</li>
            </Link>
            <Link to="Security" style={{ textDecoration: "none" }}>
              <li>Security</li>
            </Link>
            <Link to="IT" style={{ textDecoration: "none" }}>
              <li>IT</li>
            </Link>
            <Link to="Finance" style={{ textDecoration: "none" }}>
              <li>Finance</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Department;
