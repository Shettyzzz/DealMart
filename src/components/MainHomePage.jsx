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
    <div className="min-h-screen bg-black flex items-center justify-center p-3 sm:p-4 md:p-6 relative">
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
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Welcome to DealMart
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Your ultimate shopping destination
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6">
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

          <p className="text-sm sm:text-base text-gray-300 mt-3 sm:mt-4">
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
          max-width: 320px;
          width: 100%;
          margin: auto;
          padding: 1.5rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (min-width: 640px) {
          .auth-container {
            max-width: 400px;
            padding: 2rem;
            border-radius: 20px;
          }
        }

        @media (min-width: 768px) {
          .auth-container {
            max-width: 450px;
            padding: 2.5rem;
          }
        }

        .auth-form input {
          display: block;
          width: 100%;
          margin: 0.75rem 0;
          padding: 0.875rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .auth-form input {
            margin: 0.5rem 0;
            padding: 1rem;
            border-radius: 10px;
            font-size: 16px;
          }
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
          padding: 0.875rem 1rem;
          margin-top: 1rem;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .submit-btn {
            padding: 1rem;
            border-radius: 10px;
            font-size: 16px;
          }
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #8b5cf6;
          cursor: pointer;
          text-decoration: underline;
          font-weight: 600;
          transition: color 0.3s ease;
          font-size: inherit;
        }

        .toggle-btn:hover {
          color: #a78bfa;
        }

        /* Mobile-specific improvements */
        @media (max-width: 639px) {
          .auth-container {
            margin: 1rem;
            padding: 1.25rem;
          }
          
          .auth-form input {
            margin: 0.5rem 0;
            padding: 0.75rem;
          }
          
          .submit-btn {
            padding: 0.75rem;
            margin-top: 0.75rem;
          }
        }

        /* Touch-friendly improvements for mobile */
        @media (max-width: 639px) {
          .auth-form input,
          .submit-btn {
            min-height: 44px; /* Minimum touch target size */
          }
          
          .toggle-btn {
            min-height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .auth-container {
            padding: 1rem;
            margin: 0.5rem;
          }
          
          .text-center.mb-6 {
            margin-bottom: 1rem !important;
          }
          
          .auth-form h2 {
            margin-bottom: 1rem !important;
          }
          
          .auth-form input {
            margin: 0.25rem 0;
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MainHomePage;
 