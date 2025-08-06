import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import CartPopup from './components/CartPopup';
import MovieBooking from './components/MovieBooking';
import TshirtPage from './components/TShirtPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 3000); // Auto-hide popup after 3s
  };

  return (
    <Router>
      <Navbar 
        title="DealMart" 
        aboutText="About DealMart" 
        cartCount={cartItems.length} 
        totalPrice={totalPrice} 
      />

      {showPopup && <CartPopup cartItems={cartItems} totalPrice={totalPrice} />}

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} totalPrice={totalPrice} />} />
        <Route path="/book-movie" element={<MovieBooking />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} totalPrice={totalPrice} />} />
      </Routes>

      <Footer showPopup={() => setShowPopup(true)} />
    </Router>
  );
}

export default App;
