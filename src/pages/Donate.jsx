import React from 'react';

// Icon components for donation methods
const VenmoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.664 7.163L17.61 23.041H14.82L10.1 8.675 6.43 9.335v-2l6.424-.172 3.596 9.271 2.063-8.017h1.152z" />
  </svg>
);

const PayPalIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.49 6.02c-.183-.653-1.075-2.132-2.94-2.132h-7.974l-.274 1.63s-2.39 13.758-2.448 14.11c-.066.496-.47 1.346-1.533 1.346h-2.577l-.174 1.124h4.118c3.132 0 6.93-.848 8.644-2.82 2.115-2.46 2.44-6.45 2.44-6.45.341-1.983.261-3.885-.008-4.807zm-9.388 8.647-1.57-7.36 4.646-.07c1.61 0 2.617 1.292 2.34 2.88-.211 1.157-1.25 6.25-1.25 6.25-.225.918-1.07 1.557-1.28 1.557-.255 0-1.677-.32-1.887-.257z" />
  </svg>
);

const CashAppIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.59 3.475A5.1 5.1 0 0 0 20.11.02L3.49.019A3.49 3.49 0 0 0 0 3.509v16.982A3.49 3.49 0 0 0 3.49 24h16.62a5.1 5.1 0 0 0 3.49-1.365c.9-.81 1.4-1.958 1.4-3.144V4.84c0-1.186-.5-2.334-1.4-3.144v-.221zM7.21 19.1c-.74 0-1.45-.17-2.08-.48a4.31 4.31 0 0 1-1.53-1.278l1.9-2.33c.74.74 1.6 1.1 2.64 1.1 1.17 0 1.75-.48 1.75-1.45 0-.43-.17-.78-.52-1.07-.35-.29-.96-.65-1.84-1.07-1.16-.58-2.02-1.19-2.57-1.85-.56-.65-.83-1.49-.83-2.5 0-1.3.46-2.38 1.38-3.23.92-.85 2.16-1.28 3.73-1.28 1.24 0 2.35.29 3.34.87.99.58 1.68 1.34 2.08 2.28l-2.14 2.08c-.58-.87-1.37-1.3-2.37-1.3-.94 0-1.41.35-1.41 1.06 0 .32.15.59.44.82.29.23.8.52 1.54.87 1.17.53 2.06 1.15 2.68 1.87.62.72.93 1.6.93 2.64 0 1.39-.49 2.51-1.47 3.37-.98.86-2.27 1.29-3.87 1.29z"/>
  </svg>
);

const ZelleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 6L14 11.5l3.5 3.5v2L14 13.5 10.5 17H8l3.5-3.5L8 10v-2l3.5 3.5L15 8h2.5z"/>
  </svg>
);

function Donate() {
  return (
    <div>
      <main className="page-container">
        <section className="section welcome-section">
          <h1>Support Trinity Day Care Center</h1>
          <p>
            Your generous support helps us create brighter futures for our community's children. Every donation makes a meaningful difference in their lives.
          </p>
        </section>

        {/* Impact Section */}
        <section className="section">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">🍎</div>
              <h3>$25</h3>
              <p>Provides nutritious meals for one child for a week</p>
            </div>
            
            <div className="impact-card">
              <div className="impact-icon">📚</div>
              <h3>$50</h3>
              <p>Supplies educational materials for an entire classroom</p>
            </div>
            
            <div className="impact-card">
              <div className="impact-icon">🧸</div>
              <h3>$100</h3>
              <p>Funds developmental toys and learning equipment</p>
            </div>
            
            <div className="impact-card">
              <div className="impact-icon">🎨</div>
              <h3>$250</h3>
              <p>Sponsors art and creative programs for a month</p>
            </div>
          </div>
        </section>

        {/* Current Fundraiser */}
        <section className="section fundraiser-section">
          <div className="fundraiser-card">
            <h2>🌟 Current Fundraiser: Playground Renewal Project</h2>
            <div className="fundraiser-content">
              <div className="fundraiser-info">
                <p>
                  We're creating a safer and more engaging outdoor play space for all our children. 
                  This project will include new playground equipment, safety surfaces, and enhanced 
                  outdoor learning areas that will benefit children for years to come.
                </p>
                
                <div className="progress-info">
                  <div className="goal-amount">
                    <span className="goal-label">Goal:</span>
                    <span className="goal-value">$15,000</span>
                  </div>
                  <div className="deadline">
                    <span className="deadline-label">Deadline:</span>
                    <span className="deadline-value">September 30, 2025</span>
                  </div>
                </div>
                
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '35%'}}></div>
                </div>
                <p className="progress-text">$5,250 raised so far - 35% of our goal!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="section">
          <h2>Ways to Donate</h2>
          
          {/* Digital Payment Options */}
          <div className="donation-category">
            <h3>💳 Digital Payment Options</h3>
            <div className="donation-methods">
              <a
                href="https://venmo.com/YourVenmoHandle"
                target="_blank"
                rel="noopener noreferrer"
                className="donation-method venmo"
              >
                <VenmoIcon />
                <div className="method-info">
                  <strong>Venmo</strong>
                  <span>@TrinityDaycare</span>
                </div>
              </a>

              <a
                href="https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="donation-method paypal"
              >
                <PayPalIcon />
                <div className="method-info">
                  <strong>PayPal</strong>
                  <span>Secure online giving</span>
                </div>
              </a>

              <a
                href="https://cash.app/$TrinityDaycare"
                target="_blank"
                rel="noopener noreferrer"
                className="donation-method cashapp"
              >
                <CashAppIcon />
                <div className="method-info">
                  <strong>Cash App</strong>
                  <span>$TrinityDaycare</span>
                </div>
              </a>

              <a
                href="mailto:tdcco2012@gmail.com?subject=Zelle Donation"
                className="donation-method zelle"
              >
                <ZelleIcon />
                <div className="method-info">
                  <strong>Zelle</strong>
                  <span>tdcco2012@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Traditional Methods */}
          <div className="donation-category">
            <h3>🏦 Traditional Methods</h3>
            <div className="traditional-methods">
              <div className="traditional-method">
                <div className="method-icon">✉️</div>
                <div className="method-details">
                  <strong>Mail a Check</strong>
                  <p>Make checks payable to:</p>
                  <p>"Trinity Day Care Center"</p>
                  <address>
                    118 W Main St<br/>
                    Walnut Bottom, PA 17266
                  </address>
                </div>
              </div>

              <div className="traditional-method">
                <div className="method-icon">🏢</div>
                <div className="method-details">
                  <strong>In-Person</strong>
                  <p>Drop off donations during business hours.</p>
                  <p>Monday - Friday: 6:30 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="traditional-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <strong>Call to Donate</strong>
                  <p>Speak with our staff about donation options</p>
                  <a href="tel:717-530-5315" className="phone-link">717-530-5315</a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Ways to Help */}
          <div className="donation-category">
            <h3>🤝 Other Ways to Help</h3>
            <div className="other-ways">
              <div className="help-option">
                <h4>📦 Wish List Items</h4>
                <p>Donate specific items we need like educational supplies, cleaning products, or playground equipment. Contact us for our current wish list.</p>
              </div>
              
              <div className="help-option">
                <h4>⏰ Volunteer Time</h4>
                <p>Share your skills and time with us. We welcome volunteers for special events, reading programs, and facility improvements.</p>
              </div>
              
              <div className="help-option">
                <h4>📢 Spread the Word</h4>
                <p>Help us reach more families by sharing our mission with friends, family, and on social media.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Information */}
        <section className="section tax-info-section">
          <div className="tax-info-card">
            <h3>💰 Tax Deductible Donations</h3>
            <p>
              Trinity Day Care Center is a registered non-profit organization. All donations are tax-deductible 
              to the full extent allowed by law. We will provide receipts for all donations over $25.
            </p>
            <p><strong>Tax ID:</strong> XX-XXXXXXX (Please contact us for our actual Tax ID number)</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Questions About Donating?</h2>
              <div className="contact-item">
                <p>
                  <span className="icon">📞</span>
                  <strong>Phone:</strong> 
                  <a href="tel:717-530-5315" className="map-link">717-530-5315</a>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span className="icon">📧</span>
                  <strong>Email:</strong> 
                  <a href="mailto:tdcco2012@gmail.com" className="map-link">tdcco2012@gmail.com</a>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span className="icon">📍</span>
                  <strong>Address:</strong>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=118+W+Main+St,+Walnut+Bottom,+PA+17266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    118 W Main St, Walnut Bottom, PA 17266
                  </a>
                </p>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.2875!2d-77.5891!3d40.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9b234567890ab%3A0x1234567890abcdef!2s118%20W%20Main%20St%2C%20Walnut%20Bottom%2C%20PA%2017266!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus&q=118+W+Main+St,+Walnut+Bottom,+PA+17266"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trinity Day Care Center Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Donate;
