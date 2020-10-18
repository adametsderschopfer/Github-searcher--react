import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        <Link to={"/"} className="LogoHome">
          Github Search
        </Link>
      </div>
      <ul className="navbar-nav" style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
