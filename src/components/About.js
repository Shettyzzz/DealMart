import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5" style={{ backgroundImage: "url('/images/cap.jpg')" }}>
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4 fw-bold mb-3">About DealMart</h1>
            <p className="lead">Your Trusted Shopping Partner Since 2024</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Story</h2>
            <p className="text-muted mb-3">
              DealMart was born from a simple idea: shopping should be joyful, affordable, and accessible to everyone. 
              What started as a small local store has grown into a trusted online marketplace serving customers across India.
            </p>
            <p className="text-muted mb-3">
              We believe that quality products shouldn't come with premium price tags. Our team works tirelessly to 
              source the best products at the most competitive prices, ensuring you get maximum value for your money.
            </p>
            <p className="text-muted">
              Today, DealMart is proud to serve over 100,000+ happy customers, offering everything from trendy fashion 
              to essential gadgets, all under one digital roof.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="about-image-container">
              <img src="/images/cap.jpg" alt="DealMart Store" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mission-icon mb-3">🎯</div>
                  <h3 className="fw-bold mb-3">Our Mission</h3>
                  <p className="text-muted">
                    To democratize quality shopping by making premium products accessible to everyone, 
                    regardless of their budget. We strive to create a seamless, enjoyable shopping 
                    experience that puts customer satisfaction first.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="vision-icon mb-3">🌟</div>
                  <h3 className="fw-bold mb-3">Our Vision</h3>
                  <p className="text-muted">
                    To become India's most trusted and loved online shopping platform, known for 
                    exceptional customer service, unbeatable prices, and a curated selection of 
                    products that enhance our customers' lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-5">Our Core Values</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="value-icon mb-3">💎</div>
              <h5 className="fw-bold">Quality First</h5>
              <p className="text-muted">We never compromise on quality, ensuring every product meets our high standards.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="value-icon mb-3">🤝</div>
              <h5 className="fw-bold">Customer Trust</h5>
              <p className="text-muted">Building lasting relationships through transparency, honesty, and exceptional service.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="value-icon mb-3">💰</div>
              <h5 className="fw-bold">Best Prices</h5>
              <p className="text-muted">Negotiating directly with suppliers to bring you the most competitive prices.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="value-icon mb-3">🚀</div>
              <h5 className="fw-bold">Innovation</h5>
              <p className="text-muted">Continuously improving our platform and services to enhance your shopping experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose DealMart?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="feature-icon mb-3">🛡️</div>
                <h5 className="fw-bold">100% Secure Shopping</h5>
                <p>Your data and transactions are protected with bank-level security.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="feature-icon mb-3">🚚</div>
                <h5 className="fw-bold">Fast & Free Delivery</h5>
                <p>Get your orders delivered quickly with our efficient logistics network.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="feature-icon mb-3">🔄</div>
                <h5 className="fw-bold">Easy Returns</h5>
                <p>Not satisfied? Return products hassle-free within 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="team-avatar mb-3">
                  <img src="/images/me.jpg" alt="Eashwar Shetty" className="ceo-portrait" />
                </div>
                <h5 className="fw-bold">Eashwar Shetty</h5>
                <p className="text-muted">FOUNDER & CEO</p>
                <p className="small text-muted">
                  Passionate about revolutionizing online shopping in India with innovative solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="team-avatar mb-3">
                  <img src="/images/ani.jpg" alt="Eashwar Shetty" className="ceo-portrait" />
                </div>
                <h5 className="fw-bold">Anirudh Kulkarni</h5>
                <p className="text-muted">TECH LEAD</p>       
                <p className="small text-muted">
                  Building cutting-edge technology solutions for seamless shopping experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-4">Get in Touch</h2>
              <p className="text-muted mb-4">
                Have questions or feedback? We'd love to hear from you!
              </p>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <div className="contact-icon mb-2">📧</div>
                    <h6>Email</h6>
                    <p className="text-muted">support@dealmart.com</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <div className="contact-icon mb-2">📞</div>
                    <h6>Phone</h6>
                    <p className="text-muted">+91 98765 43210</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <div className="contact-icon mb-2">📍</div>
                    <h6>Address</h6>
                    <p className="text-muted">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
