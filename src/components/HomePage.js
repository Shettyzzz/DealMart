import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ onAddToCart }) {
  const featuredProducts = [
    {
      id: 1,
      name: 'Stylish Cap',
      image: '/images/cap.jpg',
      description: 'Trendy and comfortable cap for all occasions',
      price: 299
    },
    {
      id: 2,
      name: 'Classic Shirt',
      image: '/images/shirt.jpg',
      description: 'Elegant shirt perfect for formal and casual wear',
      price: 499
    },
    {
      id: 3,
      name: 'Premium Jeans',
      image: '/images/jeans.jpg',
      description: 'High-quality jeans with perfect fit and style',
      price: 899
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section 
        className="hero-section text-center text-white py-5"
        style={{
          backgroundImage: "url('/images/cap.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4 fw-bold mb-4">Welcome to DealMart</h1>
            <p className="lead mb-4">Discover amazing deals on quality products</p>
            <Link to="/products" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-primary mb-3">Featured Products</h2>
            <p className="lead text-muted">Handpicked products just for you</p>
          </div>
          
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100 product-card border-0 shadow-sm">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="product-overlay">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => onAddToCart(product)}
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-center mb-2">{product.name}</h5>
                    <p className="card-text text-muted text-center flex-grow-1">{product.description}</p>
                    <div className="text-center mb-3">
                      <span className="h5 text-success fw-bold">₹{product.price}</span>
                    </div>
                    <button
                      className="btn btn-outline-primary w-100 mt-auto"
                      onClick={() => onAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-primary mb-3">Why Choose DealMart?</h2>
            <p className="lead text-muted">We provide the best shopping experience</p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <div className="service-card text-center p-4">
                <div className="service-icon mb-3">🚚</div>
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted">Get your orders delivered quickly</p>
              </div>
            </div>
            <div className="col">
              <div className="service-card text-center p-4">
                <div className="service-icon mb-3">💰</div>
                <h5 className="fw-bold">Best Prices</h5>
                <p className="text-muted">Competitive prices on all products</p>
              </div>
            </div>
            <div className="col">
              <div className="service-card text-center p-4">
                <div className="service-icon mb-3">🛡️</div>
                <h5 className="fw-bold">Secure Shopping</h5>
                <p className="text-muted">100% secure payment gateway</p>
              </div>
            </div>
            <div className="col">
              <div className="service-card text-center p-4">
                <div className="service-icon mb-3">🎬</div>
                <h5 className="fw-bold">Movie Booking</h5>
                <p className="text-muted">Book your favorite movies easily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-center text-white">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Ready to Start Shopping?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/products" className="btn btn-primary btn-lg">
              Browse Products
            </Link>
            <Link to="/movie-booking" className="btn btn-outline-light btn-lg">
              Book Movies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
