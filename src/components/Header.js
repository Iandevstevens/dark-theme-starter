import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./styles/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={`header`}>
      <nav className="nav-bar">
        <NavLink className="logo" to="/">
          Dark theme tutorial
        </NavLink>
        <div className="links">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </div>
      </nav>
      <Toggle
        className="toggle"
        checked={false}
        icons={{
          checked: <span className="toggle-icons moon"></span>,
          unchecked: <span className="toggle-icons sun"></span>,
        }}
        onChange={(e) => console.log(e.target.checked)}
      />
    </header>
  );
};

export default Header;
