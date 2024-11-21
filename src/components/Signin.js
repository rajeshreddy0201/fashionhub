import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Signin.css";

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [error,setError] = useState(null);

    const handleSignIn = async(e) => {
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            console.log(userCredential)
            navigate('/',{state :{email : userCredential.user.email }});
        }catch(error){
            setError(error.message);
        }
    };

  return (
    <div className="signin-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" className="logo" alt="FashionHub Logo" />
        </div>
        <nav className="nav-links">
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>
      </header>

      <div className="signin-content">
        <h2>Sign in</h2>
        <form className="signin-form" onSubmit={handleSignIn}>
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
      <footer className="footer-signin">
        <p>© 2024 FashionHub. All rights reserved.</p>
        <p>
          <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a>
        </p>
      </footer>
    </div>

    
  );
};

export default SignIn;