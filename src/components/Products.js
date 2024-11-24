import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';

const ProductsPage = () => {
  const allProducts = [
    { id: 1, category: "Men", brand: "H & M", name: "Oversized T-shirt", price: "$15.99", img: "/tshirt.jpeg" },
    { id: 2, category: "Men", brand: "H & M", name: "Men's Short", price: "$13.99", img: "/short.jpeg" },
    { id: 3, category: "Men", brand: "Nike", name: "Air Jordan Mid Men's Shoes", price: "$249.99", img: "/shoes.jpeg" },
    { id: 4, category: "Men", brand: "Nike", name: "Air Jordan Retro High Shoes", price: "$449.99", img: "/shoes1.jpg" },
    { id: 5, category: "Women", brand: "H & M", name: "Sweatshirt", price: "$34.99", img: "/womenshirt.jpeg" },
    { id: 6, category: "Women", brand: "H & M", name: "Regular Fit Trouser", price: "$89.99", img: "/womentrousers.jpeg" },
    { id: 7, category: "Women", brand: "Michael Kors", name: "Jet Set Travel Tote Bag", price: "$99.99", img: "/bag.jpeg" },
    { id: 8, category: "Women", brand: "UGG", name: "Fluff Yeah Slide Women", price: "$39.99", img: "/slides.jpeg" },
    { id: 9, category: "Kids", brand: "Zara", name: "Jeans Pant", price: "$39.99", img: "/kids.jpeg" },
    { id: 10, category: "Kids", brand: "Mango", name: "Tshirt for kids", price: "$59.99", img: "/suit.jpeg" },
    { id: 11, category: "Kids", brand: "Zara", name: "Floral Embroidered Top", price: "$15.99", img: "/girl.jpeg" },
    { id: 12, category: "Kids", brand: "TomZon", name: "Remote Control Toy", price: "$30.99", img: "/toy.jpeg" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleFilter = (e) => {
    const category = e.target.value;
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === category));
    }
  };

  return (
    <div className="products-page-container">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="FashionHub Logo" />
        </div>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/Mycart">My Cart</Link>
          <Link to="/Aboutus">About us</Link>
          <Link to="/Contactus">Contact us</Link>
          <Link to="/signin">Signout</Link>
        </nav>
      </header>
      <div className="products-container">
        <div className="products-header">
          <h1>Products</h1>
          <select className="filter-button" onChange={handleFilter}>
            <option value="">Filter</option>
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="products-grid">
          {filteredProducts.map(product => (
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