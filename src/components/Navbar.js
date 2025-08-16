import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to="/" onClick={closeSidebar}>
            <div className="brand-container">
              <i className="fas fa-shopping-bag brand-icon"></i>
              <span className="brand-text">
                <span className="brand-primary">Deal</span>Mart
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav d-none d-lg-block">
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
          </div>
          
          {/* Right Side Actions */}
          <div className="navbar-actions d-none d-lg-flex">
            {/* Cart */}
            <Link to="/cart" className="cart-button" onClick={closeSidebar}>
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
              <Link to="/login" className="btn btn-primary login-btn" onClick={closeSidebar}>
                <i className="fas fa-sign-in-alt me-2"></i>
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn d-lg-none" 
            onClick={toggleSidebar}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
        <div className="sidebar-content">
          {/* Sidebar Header */}
          <div className="sidebar-header">
            <div className="brand-container">
              <i className="fas fa-shopping-bag brand-icon"></i>
              <span className="brand-text">
                <span className="brand-primary">Deal</span>Mart
              </span>
            </div>
            <button className="close-sidebar-btn" onClick={closeSidebar}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="sidebar-nav">
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/" onClick={closeSidebar}>
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/products" onClick={closeSidebar}>
                  <i className="fas fa-shopping-cart"></i>
                  <span>Products</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/movie-booking" onClick={closeSidebar}>
                  <i className="fas fa-film"></i>
                  <span>Movies</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/about" onClick={closeSidebar}>
                  <i className="fas fa-info-circle"></i>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sidebar Actions */}
          <div className="sidebar-actions">
            {/* Cart */}
            <Link to="/cart" className="sidebar-cart-btn" onClick={closeSidebar}>
              <div className="cart-icon-wrapper">
                🛒
                <span className="cart-badge">
                  {props.cartCount || 0}
                </span>
              </div>
              <span className="cart-text">View Cart</span>
            </Link>
            
            {/* User Authentication */}
            {props.user ? (
              <div className="sidebar-user">
                <div className="user-avatar" title={props.user.name}>
                  {getInitials(props.user.name)}
                </div>
                <div className="user-info">
                  <h6 className="user-name">{props.user.name}</h6>
                  <p className="user-email">{props.user.email || 'User'}</p>
                </div>
                <button 
                  className="btn btn-outline-light btn-sm logout-btn" 
                  onClick={() => {
                    props.onLogout();
                    closeSidebar();
                  }}
                >
                  <i className="fas fa-sign-out-alt me-1"></i>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary login-btn w-100" onClick={closeSidebar}>
                <i className="fas fa-sign-in-alt me-2"></i>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
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
