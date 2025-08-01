import React from 'react';  
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Left side: Logo / Site Name and Navigation Links */}
      <div style={styles.left}>
        <div style={styles.logo}>
          <Link to="/Home" style={styles.logoLink}>
            <img src="/images/logo.png" alt="Trinity Day Care Center" style={{ height: '60px' }} />
          </Link>
        </div>
        <ul style={styles.navLinks}>
          {['About', 'Staff', 'Classrooms', 'Events', 'Donate', 'Resources'].map((page) => (
            <li key={page} style={styles.navItem}>
              <Link to={`/${page.toLowerCase()}`} style={styles.navLink}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Phone number and Facebook icon/link */}
      <div style={styles.right}>
        <a href="tel:+15551234567" style={styles.phone}>
          📞 717-530-5315
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61572572642465#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={styles.facebookLink}
        >
          {/* Simple Facebook SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="blue"
            width="24px"
            height="24px"
          >
            <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.324v21.352C0 23.404.594 24 1.325 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.919.001c-1.505 0-1.796.715-1.796 1.764v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.596 1.324-1.324V1.324C24 .593 23.405 0 22.675 0z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#F5CBA7', // peach accent color from your palette
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '40px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#2E4053',
  },
  logoLink: {
    color: '#2E4053',
    textDecoration: 'none',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '25px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: '#2E4053',
    fontWeight: '600',
    fontSize: '1rem',
  },
  phone: {
    color: '#2E4053',
    textDecoration: 'none',
  },
  facebookLink: {
    display: 'inline-block',
  },
};

export default Navbar;