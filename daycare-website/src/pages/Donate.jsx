import React from 'react';
import Navbar from '../components/Navbar';

// Example icons as SVG components, replace with your own or from libraries if desired
const VenmoIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="#3D95CE"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M22.664 7.163L17.61 23.041H14.82L10.1 8.675 6.43 9.335v-2l6.424-.172 3.596 9.271 2.063-8.017h1.152z" />
  </svg>
);

const PayPalIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="#003087"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M23.49 6.02c-.183-.653-1.075-2.132-2.94-2.132h-7.974l-.274 1.63s-2.39 13.758-2.448 14.11c-.066.496-.47 1.346-1.533 1.346h-2.577l-.174 1.124h4.118c3.132 0 6.93-.848 8.644-2.82 2.115-2.46 2.44-6.45 2.44-6.45.341-1.983.261-3.885-.008-4.807zm-9.388 8.647-1.57-7.36 4.646-.07c1.61 0 2.617 1.292 2.34 2.88-.211 1.157-1.25 6.25-1.25 6.25-.225.918-1.07 1.557-1.28 1.557-.255 0-1.677-.32-1.887-.257z" />
  </svg>
);

function Donate() {
  return (
    <div>
      <Navbar />
      <main
      style={{
          paddingTop: '80px',  // add or increase this value if missing or smaller
          paddingLeft: '20px',
          paddingRight: '20px',
          maxWidth: '900px',
          margin: 'auto',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          backgroundColor: '#FDF6E3',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>Donate</h1>
        {/* Intro Text Block */}
        <section
          style={{
            backgroundColor: '#F5CBA7',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '40px',
            boxShadow: '0 0 8px rgba(46,64,83,0.1)',
          }}
        >
          <h1>Support Trinity Day Care Center</h1>
          <p>
            Your generous donations help us provide a safe and nurturing environment for children. Every dollar 
            supports educational programs, nutritious meals, and resources that enrich the lives of our community’s young learners.
          </p>
        </section>

        {/* Fundraiser Info */}
        <section
          style={{
            backgroundColor: '#F5CBA7',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '40px',
            boxShadow: '0 0 8px rgba(46,64,83,0.1)',
          }}
        >
          <h2>Current Fundraiser</h2>
          <p>
            <strong>“Playground Renewal Project”</strong> — We’re raising funds to update our outdoor playground equipment to
            create a safer and more engaging play space for all children.  
          </p>
          <p>
            Our goal is to raise <strong>$15,000</strong> by September 30, 2025. Thank you for considering a contribution to this important cause!
          </p>
        </section>

        {/* Donation Methods */}
        <section
          style={{
            backgroundColor: '#F5CBA7',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 0 8px rgba(46,64,83,0.1)',
            textAlign: 'center',
          }}
        >
          <h2>Donate Now</h2>
          <p>You can make a donation conveniently via Venmo or PayPal:</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
            <a
              href="https://venmo.com/YourVenmoHandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate with Venmo"
              style={{ color: '#3D95CE', textDecoration: 'none' }}
            >
              <VenmoIcon />
              <div style={{ marginTop: '8px', color: '#3D95CE', fontWeight: 'bold' }}>Venmo</div>
            </a>

            <a
              href="https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_ID"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate with PayPal"
              style={{ color: '#003087', textDecoration: 'none' }}
            >
              <PayPalIcon />
              <div style={{ marginTop: '8px', color: '#003087', fontWeight: 'bold' }}>PayPal</div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Donate;