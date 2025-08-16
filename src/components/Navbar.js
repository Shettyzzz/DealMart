import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">{props.aboutText}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/book-movie">Book Movie</Link></li>
            <li className="nav-item"><span className="nav-link disabled">DM</span></li>
          </ul>

          {/* Cart Section */}
          <div className="d-flex align-items-center me-3">
            <Link to="/cart" className="d-flex align-items-center text-white text-decoration-none">
              <span className="me-2 fs-5">🛒</span>
              <span className="me-2">{props.cartCount} item(s)</span>
              <span className="badge bg-primary rounded-pill">{props.cartCount}</span>
            </Link>
          </div>

          {/* User Authentication Section */}
          <div className="d-flex align-items-center me-3">
            {props.user ? (
              <div className="d-flex align-items-center text-white">
                <span className="me-2">👤</span>
                <span className="me-3">Welcome, {props.user.name}</span>
                <button 
                  onClick={props.onLogout}
                  className="btn btn-outline-light btn-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-light btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// ✅ Prop type validation
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  cartCount: PropTypes.number,
  totalPrice: PropTypes.number,
  user: PropTypes.object,
  onLogout: PropTypes.func
};

// ✅ Default values
Navbar.defaultProps = {
  title: "DealMart",
  aboutText: "About",
  cartCount: 0,
  totalPrice: 0,
  user: null,
  onLogout: () => {}
};
