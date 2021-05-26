import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navComponent">
      <div className="menuBars">
        <div className="barOne"></div>
        <div className="barTwo"></div>
        <div className="barThree"></div>
      </div>
      <div className="tabletMenu">
        <ul className="navLinks">
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
      <div>
        <h1 className="logo">Lotus</h1>
      </div>
      <div>
        <p>small logo</p>
      </div>
    </nav>
  );
};

export default Navbar;
