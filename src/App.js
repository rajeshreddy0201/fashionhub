import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
    </Router>
  );
};

export default App;