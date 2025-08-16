import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import CartPopup from './components/CartPopup';
import MovieBooking from './components/MovieBooking';
import TshirtPage from './components/TShirtPage';
import Login from './components/Login';
import MainHomePage from './components/MainHomePage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 3000); // Auto-hide popup after 3s
  };

  const handleLoginSuccess = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCartItems([]);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };

  // If not authenticated, show the main landing page
  if (!isAuthenticated) {
    return <MainHomePage onLoginSuccess={handleLoginSuccess} />;
  }

  // If authenticated, show the main app with navbar
  return (
    <Router>
      <Navbar 
        title="DealMart" 
        aboutText="About DealMart" 
        cartCount={cartItems.length} 
        totalPrice={totalPrice}
        user={user}
        onLogout={handleLogout}
      />

      {showPopup && <CartPopup cartItems={cartItems} totalPrice={totalPrice} />}

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} totalPrice={totalPrice} />} />
        <Route path="/book-movie" element={<MovieBooking />} />
        <Route path="/tshirt" element={<TshirtPage />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer showPopup={() => setShowPopup(true)} />
    </Router>
  );
}

export default App;
