import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    navigate("/payment");
  };

  return (
    <div className="checkout-page">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="FashionHub Logo" />
        </div>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/mycart">My Cart</Link>
          <Link to="/Aboutus">About us</Link>
          <Link to="/Contactus">Contact us</Link>
          <Link to="/signin">Signout</Link>
        </nav>
      </header>

      <div className="checkout-container">
        <h1>Address Page</h1>
        <h2>Address:</h2>
        <form className="checkout-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Phone no:</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label>Apt no:</label>
            <input type="text" placeholder="Enter your apartment number" />
          </div>
          <div className="form-group">
            <label>Street name:</label>
            <input type="text" placeholder="Enter your street name" required />
          </div>
          <div className="form-group">
            <label>Zip Code:</label>
            <input type="text" placeholder="Enter your ZIP code" required />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="form-group">
            <label>Province:</label>
            <input type="text" placeholder="Enter your province" required />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" placeholder="Enter your country" required />
          </div>
          <button type="button" className="payment" onClick={handleCheckout}>
            Proceed to payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;