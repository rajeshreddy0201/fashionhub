import React from "react";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="FashionHub Logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#orders">Orders</a>
          <a href="#cart">My cart</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <a href="#signout">Signout</a>
        </nav>
      </header>
      <div className="main-content">
        <div className="image-grid">
          <img src="/fashion1.jpeg" alt="Fashion 1" className="image1" />
          <img src="/fashion2.jpeg" alt="Fashion 2" className="image2" />
          <img src="/fashion3.jpeg" alt="Fashion 3" className="image3" />
          <img src="/fashion4.jpeg" alt="Fashion 4" className="image4" /><br></br>
          <img src="/fashion5.jpeg" alt="Fashion 5" className="image5" />
        </div>
        <div className="welcome-section">
          <h1>Welcome to FashionHub!</h1>
          <p>
            Discover the latest styles and trends in clothing for every occasion.
          </p>
          <p className="tagline">shop, style and shine with us!</p>
          <button className="shop-now-button">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;