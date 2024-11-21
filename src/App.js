import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignIn />} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
};

export default App;