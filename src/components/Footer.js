import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div>
      <footer className="footer text-white mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">DealMart</h5>
              <p>Your trusted online store for amazing deals.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/products" className="footer-link">Products</a></li>
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Connect with Us</h5>
              <div className="social-icons mt-2">
                <a href="/" className="me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="/" className="me-3"><i className="fab fa-instagram"></i></a>
                <a href="/" className="me-3"><i className="fab fa-twitter"></i></a>
                <a href="/" className="me-3"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <hr className="text-light" />
          <p className="text-center small mb-0">© {new Date().getFullYear()} DealMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
