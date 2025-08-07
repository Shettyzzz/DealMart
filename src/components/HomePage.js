import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
     <section className="hero d-flex flex-column align-items-center justify-content-center text-center" style={{ backgroundImage: "url('/images/cap.jpg')" }}>
  <h1 className="display-3 fw-bold text-white mb-3">Welcome to DealMart 🛒</h1>
  <p className="lead text-white-50 mb-4">Smart shopping starts here. Discover top deals on fashion, gadgets, and more!</p>
  <a href="/products" className="btn btn-lg btn-warning px-4 py-2 fw-semibold">Shop Now</a>
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
            <p>To be India’s most trusted and loved online shopping platform.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
