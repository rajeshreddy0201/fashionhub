import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = ({ cart, setOrders }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment processed successfully!");
    setOrders((prevOrders) => [...prevOrders, ...cart]);
    navigate("/Home");
  };

  return (
    <div className="payment-page">
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

      <div className="payment-container">
        <h1>Payment Page</h1>
        <form className="payment-form">
          <div className="form-group">
            <label>Card Number:</label>
            <input type="text" placeholder="Enter your card number" maxLength="16" required />
          </div>
          <div className="form-group">
            <label>Card Holder Name:</label>
            <input type="text" placeholder="Enter card holder name" required />
          </div>
          <div className="form-group">
            <label>Security Code:</label>
            <input type="password" placeholder="Enter security code (CVV)" maxLength="3" required />
          </div>
          <div className="form-group">
            <label>Expiry Month:</label>
            <input type="number" placeholder="MM" min="1" max="12" required />
          </div>
          <div className="form-group">
            <label>Expiry Year:</label>
            <input type="number" placeholder="YYYY" min={new Date().getFullYear()} required />
          </div>
          <button type="button" className="payment-button" onClick={handlePayment}>
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;