import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navComponent">
      <div class="menuBars" onclick="mobileNav()">
        <div class="barOne"></div>
        <div class="barTwo"></div>
        <div class="barThree"></div>
      </div>
      <div className="tabletMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/timeline">Timeline</Link>
          </li>
        </ul>
      </div>
      <h1 className="logo">Brand</h1>
      <p>small logo</p>
    </nav>
  );
};

export default Navbar;
