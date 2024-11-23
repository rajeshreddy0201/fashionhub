import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Home from "./components/Home"; 
import Products from "./components/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;