import React, { useState } from 'react';

const MainHomePage = ({ onLoginSuccess }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isLoginMode) {
      console.log('Logging in with:', {
        email: formData.email,
        password: formData.password
      });
      // Simulate successful login
      setTimeout(() => {
        onLoginSuccess?.({ name: formData.name || "Demo User" }, "fake-token");
      }, 1000);
    } else {
      console.log('Signing up with:', formData);
      // Simulate successful signup
      setTimeout(() => {
        onLoginSuccess?.({ name: formData.name || "Demo User" }, "fake-token");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/images/cap.jpg')`
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="auth-container relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to DealMart</h1>
          <p className="text-gray-300">Your ultimate shopping destination</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </h2>

          {!isLoginMode && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>

          <p className="text-gray-300 mt-4">
            {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="toggle-btn"
            >
              {isLoginMode ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </form>
      </div>

      <style jsx>{`
        .auth-container {
          max-width: 400px;
          margin: auto;
          padding: 2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .auth-form input {
          display: block;
          width: 100%;
          margin: 0.5rem 0;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .auth-form input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .auth-form input:focus {
          outline: none;
          border-color: #8b5cf6;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          margin-top: 1rem;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #8b5cf6;
          cursor: pointer;
          text-decoration: underline;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .toggle-btn:hover {
          color: #a78bfa;
        }
      `}</style>
    </div>
  );
};

export default MainHomePage;
 