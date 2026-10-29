import React from 'react';
import '../styles/Hero.css';

export default function Hero({ activeAudience }) {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="hero-content">
        <h1 className="hero-title">PayPal Open</h1>
        
        <p className="hero-subtitle">
          {activeAudience === 'personal' 
            ? 'One platform for your personal needs'
            : 'One platform for your business needs'}
        </p>

        <p className="hero-description">
          PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn-cta-signup">
            Sign Up
          </button>
          <button type="button" className="btn-cta-contact">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
