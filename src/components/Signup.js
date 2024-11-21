import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth} from "../firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('');
    const navigate = useNavigate();
    const [error,setError] = useState(null);

    const handleRegister = async(e) => {
        e.preventDefault();
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            console.log(userCredential)
            navigate('/signin')
        }catch(error){
            setError(error.message);
        }
    };

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
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <b><label>Name:</label></b>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <b><label>Email:</label></b>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <b><label>Password:</label></b>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group gender-group">
              <b><label>Gender:</label></b>
              <b><label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  onChange={(e) => setGender(e.target.value)}
                /> Male
              </label></b>
              <b><label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  onChange={(e) => setGender(e.target.value)}
                /> Female
              </label></b>
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          {error && <p className="error">{error}</p>}
          <p className="signin-link">
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 FashionHub. All rights reserved.</p>
        <p>
          <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default SignUp;