import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Left Section: Logo & Primary Nav Links */}
        <div className="navbar-left">
          <a href="#" className="navbar-logo" aria-label="PayPal Home">
            <svg 
              className="paypal-svg-monogram" 
              viewBox="0 0 154.728 190.5" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g transform="translate(898.192 276.071)">
                <path 
                  d="M-837.663-237.968a5.49 5.49 0 0 0-5.423 4.633l-9.013 57.15-8.281 52.514-.005.044.01-.044 8.281-52.514c.421-2.669 2.719-4.633 5.42-4.633h26.404c26.573 0 49.127-19.387 53.246-45.658.314-1.996.482-3.973.52-5.924v-.003h-.003c-6.753-3.543-14.683-5.565-23.372-5.565z" 
                  fill="#001c64"
                />
                <path 
                  d="M-766.506-232.402c-.037 1.951-.207 3.93-.52 5.926-4.119 26.271-26.673 45.658-53.246 45.658h-26.404c-2.701 0-4.999 1.964-5.42 4.633l-8.281 52.514-5.197 32.947a4.46 4.46 0 0 0 4.405 5.153h28.66a5.49 5.49 0 0 0 5.423-4.633l7.55-47.881c.423-2.669 2.722-4.636 5.423-4.636h16.876c26.573 0 49.124-19.386 53.243-45.655 2.924-18.649-6.46-35.614-22.511-44.026z" 
                  fill="#0070e0"
                />
                <path 
                  d="M-870.225-276.071a5.49 5.49 0 0 0-5.423 4.636l-22.489 142.608a4.46 4.46 0 0 0 4.405 5.156h33.351l8.281-52.514 9.013-57.15a5.49 5.49 0 0 1 5.423-4.633h47.782c8.691 0 16.621 2.025 23.375 5.563.46-23.917-19.275-43.666-46.412-43.666z" 
                  fill="#003087"
                />
              </g>
            </svg>
          </a>

          <div className="navbar-links-desktop">
            <div className="nav-item-dropdown">
              <button type="button" className="nav-link-btn">
                <span>Personal</span>
                <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="nav-item-dropdown">
              <button type="button" className="nav-link-btn">
                <span>Business</span>
                <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="nav-item-dropdown">
              <button type="button" className="nav-link-btn">
                <span>Partners</span>
                <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="nav-item-dropdown">
              <button type="button" className="nav-link-btn">
                <span>Useful Info</span>
                <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="navbar-right-desktop">
          <button type="button" className="btn-login">
            Log In
          </button>
          <button type="button" className="btn-signup-nav">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          type="button" 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-slide-down">
          <div className="mobile-nav-links">
            <button type="button" className="mobile-nav-item">
              <span>Personal</span>
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="mobile-nav-item">
              <span>Business</span>
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="mobile-nav-item">
              <span>Partners</span>
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="mobile-nav-item">
              <span>Useful Info</span>
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1.25L5 4.75L9 1.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mobile-actions">
            <button type="button" className="btn-login mobile-btn">
              Log In
            </button>
            <button type="button" className="btn-signup-nav mobile-btn">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
