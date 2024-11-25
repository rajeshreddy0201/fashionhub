import React from "react";
import { Link } from "react-router-dom";


const MyCart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price.replace("$", "")),
    0
  );

  return (
    <div className="my-cart-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="FashionHub Logo" />
        </div>
        <nav>
          <Link to="/">Products</Link>
          <Link to="/mycart">My Cart</Link>
        </nav>
      </header>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.img} alt={product.name} />
              <div>
                <h3>{product.brand}</h3>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Items: {cart.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;