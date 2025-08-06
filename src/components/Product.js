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
      <h2 className="text-center mb-4">Our Products</h2>

      <section className="d-flex flex-wrap justify-content-center gap-4">
        {products.map((product) => (
          <figure key={product.id} className="product-card shadow-sm p-3 mb-4 bg-white rounded">
            <img
              src={product.image}
              className="product-image mb-3"
              alt={product.name}
            />
            <figcaption className="text-center">
              <h5>{product.name}</h5>
              <p className="text-muted">₹{product.price}</p>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </figcaption>
          </figure>
        ))}
      </section>

      <p className="mt-5 text-center text-muted">
        Stylish. Comfortable. Handpicked just for you.
      </p>
    </div>
  );
}
