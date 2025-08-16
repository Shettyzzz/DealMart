import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ onAddToCart }) {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic Cap",
      price: 299,
      image: "/images/cap.jpg",
      description: "Stylish and comfortable cap for everyday wear"
    },
    {
      id: 2,
      name: "Premium Shirt",
      price: 499,
      image: "/images/shirt.jpg",
      description: "Elegant shirt perfect for any occasion"
    },
    {
      id: 3,
      name: "Comfortable Jeans",
      price: 899,
      image: "/images/jeans.jpg",
      description: "High-quality denim jeans with perfect fit"
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero d-flex flex-column align-items-center justify-content-center text-center" style={{ backgroundImage: "url('/images/cap.jpg')" }}>
        <h1 className="display-3 fw-bold text-white mb-3">Welcome to DealMart 🛒</h1>
        <p className="lead text-white-50 mb-4">Smart shopping starts here. Discover top deals on fashion, gadgets, and more!</p>
        <Link to="/products" className="btn btn-lg btn-warning px-4 py-2 fw-semibold">Shop Now</Link>
      </section>

      {/* Featured Products Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="mt-auto">
                    <p className="text-success fw-bold mb-2">₹{product.price}</p>
                    <button 
                      className="btn btn-primary w-100"
                      onClick={() => onAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5 text-center">
        <h2 className="mb-3 fw-bold">About DealMart</h2>
        <p className="text-muted">
          At DealMart, we believe shopping should be simple, affordable, and exciting. From trendy outfits to must-have gadgets,
          we bring you hand-picked products at the best prices — all at your fingertips. Whether you're upgrading your wardrobe,
          accessorizing your style, or finding the perfect gift, DealMart is your go-to destination.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container text-center py-4">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">Our Mission</h5>
            <p>To offer a joyful, affordable shopping experience for everyone, everywhere.</p>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Our Vision</h5>
            <p>To be India's most trusted and loved online shopping platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
