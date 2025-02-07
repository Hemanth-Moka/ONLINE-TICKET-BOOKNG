import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/travel">Travel Booking</Link></li>
        <li><Link to="/movies">Movie Booking</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
