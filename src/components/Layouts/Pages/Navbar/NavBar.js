import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div>
      <div className="nav-container">
          <h3 className="navbar-logo">Logo</h3>
        <div className="navbar-links">
          <a href="/" className="navbar-link">
            About
          </a>
          <a href="/" className="navbar-link">
            Pricing
          </a>
          <a href="/" className="navbar-link">
            Review
          </a>
        </div>
      </div>
    </div>
  );
}
