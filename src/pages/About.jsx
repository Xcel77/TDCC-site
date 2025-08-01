import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <main
        style={{
          paddingTop: '80px', // to clear fixed navbar ~60px + 20px space
          paddingLeft: '20px',
          paddingRight: '20px',
          maxWidth: '900px',
          margin: 'auto',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>About Us</h1>
        
        <section style={{ marginBottom: '40px' }}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a safe, nurturing, and educational environment for children, supporting families and building a
            strong community.
          </p>
        </section>

        {/* Who We Are */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Who We Are</h2>
          <p>
            Founded in 1990, our daycare has been serving the community for over 35 years. We pride ourselves on our dedicated staff,
            enriching programs, and commitment to early childhood development.
          </p>
        </section>

        {/* Programs */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Our Programs</h2>
          <ul style={{ textAlign: 'left' }}>
            <li>
              <strong>Infants & Toddlers (0-2 years):</strong> Gentle care focused on sensory development and socialization.
            </li>
            <li>
              <strong>Preschool (3-5 years):</strong> Early learning curriculum including literacy, math, and creative arts.
            </li>
            <li>
              <strong>Before & After School Care:</strong> Safe and fun care for school-age children with homework help and activities.
            </li>
          </ul>
        </section>

        {/* Contact Info */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Contact Us</h2>
          <p>Phone: 717-530-5315</p>
          <p>Email: tdcc2012@gmail.com</p>
          <p>
            Address:{' '}
            <a
              href="https://www.google.com/maps/search/?api=1&query=118+W+Main+St,+Walnut+Bottom,+PA+17266"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#85C1E9', textDecoration: 'underline' }}
            >
              118 W Main St, Walnut Bottom, PA 17266
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
