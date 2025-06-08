import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/book2.jpg" alt="Logo" className="logo" />
        <span className="brand-name">BRAIN BATTLE</span>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link> {/* Optional: Add Contact page later */}
        </li>
      </ul>

      <div className="navbar-right">
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
