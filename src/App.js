import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Home from "./components/Home"; 
import Products from "./components/Products";
import MyCart from "./components/Mycart";
import Checkout from "./components/Checkout";
import Payment from "./components/payment"; 

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart.`);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/mycart" element={<MyCart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} /> 
      </Routes>
    </Router>
  );
};

export default App;