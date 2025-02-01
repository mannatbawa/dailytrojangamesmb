import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src={"./assets/dt.svg"} alt="DT Logo" /> games
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
