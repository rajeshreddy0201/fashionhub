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
        <div className="images-container">
          <img src="/mens.jpeg" alt="Men's Fashion" className="fashion-image" />
          <img src="/womens.jpeg" alt="Women's Fashion" className="fashion-image" />
        </div>

        <div className="signup-form">
          <h2>Sign up</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group gender-group">
              <label>Gender:</label>
              <label>
                <input type="radio" name="gender" value="male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" required /> Female
              </label>
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <p className="signin-link">
            Already have an account? <a href="#signin">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;