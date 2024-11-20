import React from "react";
import "./Signup.css";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <header className="navbar">
        <div className="logo">
            <img src="logo.png" alt="FashionHub Logo" />
        </div>
        <nav className="nav-links">
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>
      </header>
    </div>
  );
};

export default SignupPage;