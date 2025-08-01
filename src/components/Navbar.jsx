import React, { useState, useEffect } from 'react';  
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src="/images/logo.png" alt="Trinity Day Care Center" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Staff', path: '/staff' },
            { name: 'Classrooms', path: '/classrooms' },
            { name: 'Events', path: '/events' },
            { name: 'Donate', path: '/donate' },
            { name: 'Resources', path: '/resources' }
          ].map((item) => (
            <li key={item.name} className="navbar-item">
              <Link 
                to={item.path} 
                className={`navbar-link ${isActive(item.path) ? 'navbar-link-active' : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact & Social Section */}
        <div className="navbar-actions">
          {/* Quick Contact */}
          <div className="contact-actions">
            <a href="tel:717-530-5315" className="contact-button phone-button">
              <span className="contact-icon">📞</span>
              <span className="contact-text">717-530-5315</span>
            </a>
            <a href="mailto:tdcco012@gmail.com" className="contact-button email-button">
              <span className="contact-icon">📧</span>
              <span className="contact-text">Email Us</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61572572642465"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="social-link facebook-link"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a
              href="https://www.google.com/maps/search/?api=1&query=118+W+Main+St,+Walnut+Bottom,+PA+17266"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our location on Google Maps"
              className="social-link maps-link"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              {[
                { name: 'Home', path: '/', icon: '🏠' },
                { name: 'About', path: '/about', icon: 'ℹ️' },
                { name: 'Staff', path: '/staff', icon: '👥' },
                { name: 'Classrooms', path: '/classrooms', icon: '🏫' },
                { name: 'Events', path: '/events', icon: '📅' },
                { name: 'Donate', path: '/donate', icon: '💝' },
                { name: 'Resources', path: '/resources', icon: '📚' }
              ].map((item) => (
                <li key={item.name} className="mobile-nav-item">
                  <Link 
                    to={item.path} 
                    className={`mobile-nav-link ${isActive(item.path) ? 'mobile-nav-link-active' : ''}`}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Actions */}
            <div className="mobile-contact-actions">
              <a href="tel:717-530-5315" className="mobile-contact-button">
                <span className="mobile-contact-icon">📞</span>
                Call Us: 717-530-5315
              </a>
              <a href="mailto:tdcco2012@gmail.com" className="mobile-contact-button">
                <span className="mobile-contact-icon">📧</span>
                Email Us
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="mobile-social-links">
              <a href="https://www.facebook.com/profile.php?id=61572572642465" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <span>📘</span> Facebook
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=118+W+Main+St,+Walnut+Bottom,+PA+17266" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <span>📍</span> Directions
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;