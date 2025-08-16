import React, { useState, useEffect } from "react";
import { FaFilter, FaShoppingCart, FaHeart, FaStar, FaEye } from "react-icons/fa";
import OrderHistory from "./OrderHistory";

const tShirtData = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 499,
    image: "/images/lion.jpg",
    rating: 4.5,
    reviews: 128,
    description: "Premium cotton comfort with a timeless design",
  },
  {
    id: 2,
    name: "Graphic White Tee",
    price: 599,
    image: "/images/lion.jpg",
    rating: 4.3,
    reviews: 95,
    description: "Stylish graphic print on soft white fabric",
  },
  {
    id: 3,
    name: "Vintage Blue Tee",
    price: 699,
    image: "/images/lion.jpg",
    rating: 4.7,
    reviews: 156,
    description: "Vintage-inspired design with modern comfort",
  },
  {
    id: 4,
    name: "Premium Cotton Tee",
    price: 799,
    image: "/images/lion.jpg",
    rating: 4.8,
    reviews: 203,
    description: "Ultra-soft premium cotton for everyday wear",
  },
  {
    id: 5,
    name: "Slim Fit Tee",
    price: 549,
    image: "/images/lion.jpg",
    rating: 4.2,
    reviews: 87,
    description: "Modern slim fit for a contemporary look",
  },
  {
    id: 6,
    name: "Oversized Tee",
    price: 649,
    image: "/images/lion.jpg",
    rating: 4.6,
    reviews: 134,
    description: "Trendy oversized fit with street style appeal",
  },
];

const TShirtPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const createOrder = async () => {
    if (cart.length === 0) return;
    try {
      const token = localStorage.getItem("token");
      const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const orderItems = cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      }));

      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: orderItems, totalAmount }),
      });

      if (response.ok) {
        setCart([]);
        alert("Order placed successfully! Check your order history.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
    }
  };

  const filteredAndSortedTShirts = tShirtData
    .filter(
      (item) =>
        selectedCategory === "All" ||
        item.name.toLowerCase().includes(selectedCategory.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/images/cap.jpg')`
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-800/90 via-purple-800/90 to-slate-800/90 py-16 text-center text-white shadow-lg backdrop-blur-sm">
          <h1 className="text-5xl font-extrabold drop-shadow-md">
            Trendy T-Shirt Collection
          </h1>
          <p className="mt-3 text-lg opacity-90">
            Comfort. Style. Premium Quality – All in One Place
          </p>
        </div>

        <div className="px-6 py-10 max-w-7xl mx-auto">
          {/* User Actions */}
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={() => setShowOrderHistory(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-xl"
            >
              <FaShoppingCart />
              Order History
            </button>

            {cart.length > 0 && (
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20 text-white">
                <span className="font-semibold">
                  Cart: {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                </span>
                <span className="text-green-400 font-bold text-lg">
                  ₹
                  {cart.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </span>
                <button
                  onClick={createOrder}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-white/20">
              <FaFilter className="text-white text-lg" />
              <select
                className="bg-transparent focus:outline-none text-white font-semibold"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All" className="bg-slate-800 text-white">All</option>
                <option value="Classic" className="bg-slate-800 text-white">Classic</option>
                <option value="Graphic" className="bg-slate-800 text-white">Graphic</option>
                <option value="Vintage" className="bg-slate-800 text-white">Vintage</option>
                <option value="Premium" className="bg-slate-800 text-white">Premium</option>
                <option value="Slim" className="bg-slate-800 text-white">Slim Fit</option>
                <option value="Oversized" className="bg-slate-800 text-white">Oversized</option>
              </select>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-white/20">
              <span className="text-white font-medium">Sort:</span>
              <select
                className="bg-transparent focus:outline-none text-white font-semibold"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default" className="bg-slate-800 text-white">Default</option>
                <option value="price-low" className="bg-slate-800 text-white">Price: Low → High</option>
                <option value="price-high" className="bg-slate-800 text-white">Price: High → Low</option>
                <option value="rating" className="bg-slate-800 text-white">Top Rated</option>
                <option value="reviews" className="bg-slate-800 text-white">Most Reviewed</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredAndSortedTShirts.map((shirt) => (
              <div
                key={shirt.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={shirt.image}
                    alt={shirt.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Wishlist */}
                  <button
                    onClick={() => addToWishlist(shirt.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                      wishlist.includes(shirt.id)
                        ? "bg-red-500 text-white scale-110"
                        : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <FaHeart className="h-5 w-5" />
                  </button>

                  {/* Quick View */}
                  <button className="absolute top-4 left-4 p-2 rounded-full bg-white/60 backdrop-blur-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <FaEye className="h-5 w-5" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
                    {shirt.name}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {shirt.description}
                  </p>
                  <div className="flex justify-between items-center mb-5">
                    <p className="text-green-400 text-2xl font-bold">
                      ₹{shirt.price}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(shirt.rating)
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(shirt)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.05] shadow-lg flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredAndSortedTShirts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 text-white animate-pulse">
                👕
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No T-shirts found
              </h3>
              <p className="text-gray-300">
                Try adjusting your filters or search criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Order History Modal */}
      {showOrderHistory && (
        <OrderHistory
          isVisible={showOrderHistory}
          onClose={() => setShowOrderHistory(false)}
        />
      )}
    </div>
  );
};

export default TShirtPage;
