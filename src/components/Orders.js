import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = ({ orders }) => {
  return (
    <div className="orders-page">
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

      <div className="orders-container">
        <h1>Order History</h1>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="orders-list">
            {orders.map((order, index) => (
              <div key={index} className="order-item">
                <img src={order.img} alt={order.name} />
                <div>
                  <h3>{order.brand}</h3>
                  <p>{order.name}</p>
                  <p>{order.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;