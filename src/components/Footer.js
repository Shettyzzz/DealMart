import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
            <h5 className="text-white mb-2">
              <span className="text-white">Deal</span>Mart
            </h5>
            <p className="text-white mb-2 small">
              Your trusted shopping partner since 2024. Quality products, exceptional service.
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
            <h6 className="text-white mb-3">Quick Links</h6>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/products" className="footer-link">Products</Link></li>
                  <li><Link to="/movie-booking" className="footer-link">Movies</Link></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><Link to="/about" className="footer-link">About</Link></li>
                  <li><Link to="/cart" className="footer-link">Cart</Link></li>
                  <li><a href="#" className="footer-link">Support</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12">
            <h6 className="text-white mb-3">Contact Us</h6>
            <div className="contact-info">
              <div className="contact-item mb-2">
                <i className="fas fa-map-marker-alt text-white me-2"></i>
                <span className="text-white small">Mumbai, Maharashtra, India</span>
              </div>
              <div className="contact-item mb-2">
                <i className="fas fa-envelope text-white me-2"></i>
                <span className="text-white small">support@dealmart.com</span>
              </div>
              <div className="contact-item mb-2">
                <i className="fas fa-phone text-white me-2"></i>
                <span className="text-white small">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row mt-3">
          <div className="col-12">
            <hr className="border-secondary my-2" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="text-white small mb-2 mb-md-0">
                © 2024 DealMart. All rights reserved.
              </div>
              <div className="d-flex gap-3">
                <a href="#" className="footer-link small">Privacy</a>
                <a href="#" className="footer-link small">Terms</a>
                <a href="#" className="footer-link small">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
