import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Transparent Navbar */}
      <nav className={`floating-nav ${scrolled ? "hidden" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/travel">Travel Booking</Link></li>
          <li><Link to="/movies">Movie Booking</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      {/* Sticky Full-Width Navbar */}
      <nav className={`sticky-nav ${scrolled ? "visible" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/travel">Travel Booking</Link></li>
          <li><Link to="/movies">Movie Booking</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
