import React from "react";
import "./Signup.css";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" className="logo" alt="FashionHub Logo" />
        </div>
        <nav className="nav-links">
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>
      </header>

      <div className="content">
        <div className="images">
          <img src="/mens.jpeg" alt="Men's Fashion" className="fashion-image" />
          <img src="/womens.jpeg" alt="Women's Fashion" className="fashion-image" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;