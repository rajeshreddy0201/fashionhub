import React from "react";
import './Products.css';

const ProductsPage = () => {
  const products = [
    { id: 1, brand: "H & M", name: "Oversized T-shirt", price: "$15.99", img: "/tshirt.jpeg" },
    { id: 2, brand: "H & M", name: "Men's Short", price: "$13.99", img: "/short.jpeg" },
    { id: 3, brand: "Nike", name: "Air Jordan Mid Men's Shoes", price: "$249.99", img: "/shoes.jpeg" },
    { id: 4, brand: "Nike", name: "Air Jordan Retro High Shoes", price: "$449.99", img: "/shoes1.jpg" },
    { id: 5, brand: "H $ M", name: "Sweatshirt", price: "$34.99", img: "/womenshirt.jpeg" },
    { id: 6, brand: "H & M", name: "Regular Fit Trouser", price: "$89.99", img: "/womentrousers.jpeg" },
    { id: 7, brand: "Michael Kors", name: "Jet Set Travel Tote Bag", price: "$99.99", img: "/bag.jpeg" },
    { id: 8, brand: "UGG", name: "Fluff Yeah Slide Women", price: "$39.99", img: "/slides.jpeg" },
    { id: 9, brand: "Zara", name: "Jeans Pant", price: "$39.99", img: "/kids.jpeg" },
    { id: 10, brand: "Mango", name: "Tshirt for Men", price: "$59.99", img: "/suit.jpeg" },
    { id: 11, brand: "Zara", name: "Floral Embroidered Top", price: "$15.99", img: "/girl.jpeg" },
    { id: 12, brand: "TomZon", name: "Remote Control Toy", price: "$30.99", img: "/toy.jpeg" },
  ];

  return (
    <div className="products-page-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="FashionHub Logo" />
        </div>
        <nav className="nav-links">
          <a href="#Home">Home</a>
          <a href="#orders">Orders</a>
          <a href="#cart">My cart</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <a href="#signout">Signout</a>
        </nav>
      </header>
      <div className="products-container">
        <div className="products-header">
          <h1>Products</h1>
          <select class="filter-button">
            <option value="price">Filter</option>
            <option value="price">Men</option>
            <option value="name">Women</option>
            <option value="brand">Kids</option>
          </select>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.brand}</h3>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="add-to-cart-button">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;