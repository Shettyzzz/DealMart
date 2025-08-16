import React from 'react';
import './Product.css';

export default function Product({ onAddToCart }) {
  const products = [
    { id: 1, name: 'Shirt', image: '/images/shirt.jpg', price: 499 },
    { id: 2, name: 'Jeans', image: '/images/jeans.jpg', price: 899 },
    { id: 3, name: 'Shoes', image: '/images/shoes.jpg', price: 1299 },
    { id: 4, name: 'Goggles', image: '/images/spects.jpg', price: 799 },
    { id: 5, name: 'Wallet', image: '/images/image1.jpg', price: 399 },
    { id: 6, name: 'Smart Watch', image: '/images/image2.jpg', price: 1999 },
    { id: 7, name: 'Cap', image: '/images/cap.jpg', price: 299 },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-dark mb-3">Our Products</h2>
        <p className="lead text-muted">Discover amazing deals on quality products</p>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 product-card shadow-sm border-0">
              <div className="product-image-container">
                <img
                  src={product.image}
                  className="card-img-top product-image"
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
                <div className="text-center mb-3">
                  <span className="h4 text-success fw-bold">₹{product.price}</span>
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

      <div className="text-center mt-5">
        <p className="text-muted fs-5">
          <i className="fas fa-star text-warning me-2"></i>
          Stylish. Comfortable. Handpicked just for you.
        </p>
      </div>
    </div>
  );
}
