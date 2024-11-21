import React from "react";
import "./Signin.css";

const SignIn = () => {

  return (
    <div className="signin-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="FashionHub Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>
      </header>

      <div className="signin-content">
        <form className="signin-form">
          <div className="form-group">
            <b><label>Email:</label></b>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          <div className="form-group">
            <b><label>Password:</label></b>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          <button type="submit" className="signin-button">
            Sign in
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;