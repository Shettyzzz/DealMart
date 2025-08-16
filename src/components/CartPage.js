import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import './CartPage.css';

export default function CartPage({ cartItems, totalPrice }) {
  const [cart, setCart] = useState(cartItems || []);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== itemId));
    } else {
      setCart(cart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <div className="empty-cart">
          <FaShoppingBag className="empty-cart-icon mb-4" />
          <h2 className="text-muted mb-3">Your Cart is Empty</h2>
          <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <h2 className="mb-4">
            <FaShoppingBag className="me-2" />
            Shopping Cart ({getTotalItems()} items)
          </h2>
          
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    {/* Product Image */}
                    <div className="col-md-2 col-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="img-fluid rounded"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="col-md-4 col-8">
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <p className="text-muted mb-0">Product ID: {item.id}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        >
                          <FaMinus />
                        </button>
                        <span className="mx-3 fw-bold">{item.quantity || 1}</span>
                        <button 
                          className="btn btn-outline-secondary btn-sm ms-2"
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-md-2 col-3">
                      <p className="text-success fw-bold mb-0">
                        ₹{item.price}
                      </p>
                    </div>
                    
                    {/* Remove Button */}
                    <div className="col-md-1 col-3 text-end">
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Cart Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({getTotalItems()} items):</span>
                <span className="fw-bold">₹{calculateTotal()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span className="text-success">FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span className="h5 mb-0">Total:</span>
                <span className="h5 mb-0 text-primary">₹{calculateTotal()}</span>
              </div>
              
              <button className="btn btn-primary w-100 mb-2">
                Proceed to Checkout
              </button>
              <Link to="/" className="btn btn-outline-secondary w-100">
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="card mt-3">
            <div className="card-body">
              <h6 className="card-title">Need Help?</h6>
              <p className="card-text small text-muted">
                Our customer support team is available 24/7 to assist you with any questions.
              </p>
              <div className="d-flex align-items-center">
                <span className="me-2">📞</span>
                <span className="small">+91 98765 43210</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">📧</span>
                <span className="small">support@dealmart.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
