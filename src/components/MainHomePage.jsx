import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const MainHomePage = ({ onLoginSuccess }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      console.log("Logging in with:", {
        email: formData.email,
        password: formData.password,
      });
      setTimeout(() => {
        onLoginSuccess?.({ name: formData.name || "Demo User" }, "fake-token");
      }, 1000);
    } else {
      console.log("Signing up with:", formData);
      setTimeout(() => {
        onLoginSuccess?.({ name: formData.name || "Demo User" }, "fake-token");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/images/cap.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Auth Box */}
      <motion.div
        className="auth-container relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            DealMart
          </h1>
          <p className="text-gray-200 text-sm md:text-base">
            Your ultimate shopping destination
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-5 text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>

          {!isLoginMode && (
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoginMode ? "Login" : "Sign Up"}
          </motion.button>

          <p className="text-sm text-gray-300 mt-4 text-center">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="toggle-btn"
            >
              {isLoginMode ? "Sign Up" : "Login"}
            </button>
          </p>
        </form>
      </motion.div>

      <style jsx>{`
        .auth-container {
          max-width: 380px;
          width: 100%;
          margin: auto;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 8px 8px 20px black; /* ✅ Shadow only right & bottom */
        }

        .input-group {
          position: relative;
          margin: 1rem 0;
        }

        .input-group .icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #aaa;
        }

        .input-group input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .input-group input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .input-group input:focus {
          outline: none;
          border-color: #000;
          box-shadow: 5px 5px 12px black; /* ✅ right & bottom glow */
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          margin-top: 1.5rem;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          box-shadow: 6px 6px 18px black; /* ✅ Hover shadow only right & bottom */
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #ec4899;
          cursor: pointer;
          font-weight: 600;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .toggle-btn:hover {
          color: #f472b6;
        }
      `}</style>
    </div>
  );
};

export default MainHomePage;
