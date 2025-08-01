function About() {
  return (
    <div>
      <main className="page-container">
        <section className="section welcome-section">
          <h1>About Trinity Day Care Center</h1>
          <p>
            Building strong foundations for our community's children through love, learning, and growth.
          </p>
        </section>
        
        <section className="section">
          <h2>Our Mission</h2>
          <div className="card">
            <p>
              At Trinity Day Care Center, our mission is to provide a safe, nurturing, and educational environment where children can thrive and develop to their fullest potential. We are committed to supporting families by offering high-quality childcare services that foster emotional, social, intellectual, and physical growth. Our dedicated team creates enriching experiences that prepare children for lifelong learning while building strong community connections. We believe every child deserves love, respect, and the opportunity to explore their unique gifts in a supportive Christian environment.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section">
          <h2>Who We Are</h2>
          <div className="card">
            <p>
              Founded with a heart for children and families, Trinity Day Care Center has been a cornerstone of our community for years. We are more than just a daycare – we are a second home where children feel loved, valued, and inspired to learn. Our experienced and passionate staff members are carefully selected for their dedication to early childhood development and their commitment to creating positive, lasting impacts in children's lives.
            </p>
            <p>
              We pride ourselves on maintaining small class sizes, individualized attention, and a warm, family-like atmosphere. Our facility is designed with children in mind, featuring safe, clean, and engaging spaces both indoors and outdoors. We believe in open communication with families and work as partners in your child's development journey.
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="section">
          <h2>Our Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <h3>🍼 Infant Room (0-12 months)</h3>
              <p>
                Our Infant Room provides a calm and nurturing environment focusing on sensory development and safe exploration. We offer individualized care with loving attention to feeding, sleeping, and developmental milestones.
              </p>
            </div>
            
            <div className="program-card">
              <h3>🧸 Toddler Rooms (12-24 months)</h3>
              <p>
                Our toddler programs encourage independence and exploration through age-appropriate activities. We focus on language development, motor skills, and social interaction in a safe, engaging environment.
              </p>
            </div>
            
            <div className="program-card">
              <h3>🎨 Pre-School Rooms (2-4 years)</h3>
              <p>
                Our preschool curriculum includes early literacy, math concepts, creative arts, and social skills development. Children engage in structured learning activities while developing school readiness skills.
              </p>
            </div>
            
            <div className="program-card">
              <h3>🎓 Pre-K Program (4-5 years)</h3>
              <p>
                Our comprehensive Pre-K program prepares children for kindergarten with advanced learning activities, including reading preparation, mathematical concepts, science exploration, and character development.
              </p>
            </div>
            
            <div className="program-card">
              <h3>🚌 Before & After School Care</h3>
              <p>
                Safe and fun care for school-age children with transportation, homework help, recreational activities, and nutritious snacks. We provide a structured yet relaxed environment for school-age children.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>❤️ Love & Care</h4>
              <p>Every child receives individual attention and unconditional love.</p>
            </div>
            <div className="value-item">
              <h4>🛡️ Safety First</h4>
              <p>We maintain the highest safety standards in all our practices.</p>
            </div>
            <div className="value-item">
              <h4>📚 Learning</h4>
              <p>We foster curiosity and provide engaging educational experiences.</p>
            </div>
            <div className="value-item">
              <h4>🤝 Community</h4>
              <p>We build strong relationships with families and our community.</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Contact Us</h2>
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

export default About;
