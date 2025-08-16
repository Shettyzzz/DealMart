import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-primary mb-3">
              <span className="text-primary">Deal</span>Mart
            </h5>
            <p className="text-muted mb-3">
              Your trusted shopping partner since 2024. We bring you the best deals on quality products 
              with exceptional customer service and fast delivery.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="footer-link">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/movie-booking" className="footer-link">Movie Booking</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-white mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="footer-link">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Track Order</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Returns & Refunds</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Size Guide</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-white mb-3">Contact Us</h6>
            <div className="contact-info">
              <div className="contact-item mb-2">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="contact-item mb-2">
                <i className="fas fa-phone text-primary me-2"></i>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item mb-2">
                <i className="fas fa-envelope text-primary me-2"></i>
                <span>support@dealmart.com</span>
              </div>
              <div className="contact-item mb-2">
                <i className="fas fa-clock text-primary me-2"></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="newsletter-section text-center p-4 rounded">
              <h6 className="text-white mb-3">Stay Updated with Our Newsletter</h6>
              <p className="text-muted mb-3">Get the latest deals, offers, and updates delivered to your inbox!</p>
              <div className="input-group mx-auto" style={{ maxWidth: '400px' }}>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email address"
                  aria-label="Email for newsletter"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row mt-4">
          <div className="col-12">
            <hr className="border-secondary" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="text-muted mb-2 mb-md-0">
                © 2024 DealMart. All rights reserved.
              </div>
              <div className="d-flex gap-3">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
