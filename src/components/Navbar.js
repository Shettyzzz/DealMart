import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <div className="brand-container">
            <i className="fas fa-shopping-bag brand-icon"></i>
            <span className="brand-text">
              <span className="brand-primary">Deal</span>Mart
            </span>
          </div>
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="fas fa-shopping-cart me-2"></i>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie-booking">
                <i className="fas fa-film me-2"></i>
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-info-circle me-2"></i>
                About
              </Link>
            </li>
          </ul>
          
          {/* Right Side Actions */}
          <div className="navbar-actions">
            {/* Cart */}
            <Link to="/cart" className="cart-button">
              🛒
              <span className="cart-badge">
                {props.cartCount || 0}
              </span>
            </Link>
            
            {/* User Authentication */}
            {props.user ? (
              <div className="user-section">
                <div className="user-avatar" title={props.user.name}>
                  {getInitials(props.user.name)}
                </div>
                <button 
                  className="btn btn-outline-light btn-sm logout-btn" 
                  onClick={props.onLogout}
                  title="Logout"
                >
                  <i className="fas fa-sign-out-alt me-1"></i>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary login-btn">
                <i className="fas fa-sign-in-alt me-2"></i>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
  totalPrice: PropTypes.number,
  user: PropTypes.object,
  onLogout: PropTypes.func
};

Navbar.defaultProps = {
  cartCount: 0,
  totalPrice: 0,
  user: null,
  onLogout: () => {}
};
