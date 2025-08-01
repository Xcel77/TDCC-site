import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const images = [  
  '/images/Pictures/building_front_2.jpeg',
  '/images/Pictures/building_front_with_sign.jpeg',
  '/images/Pictures/rear_parking.jpeg',
];

  function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  // Advance to next image, wrapping around
  function next() {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  // Go to previous image, wrapping around
  function prev() {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000); // 6000ms = 6 seconds
    return () => clearInterval(interval);
  }, []); // Empty dependency array so effect runs only once on mount

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <img
        src={images[index]}
        alt={`Carousel ${index + 1}`}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#85C1E9',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

function Home() {
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
        {/* Welcome */}
        <section style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome to Trinity Day Care Center!</h1>
          <p>
            We are delighted to welcome you and your family to our community. Our dedicated staff strives to provide a nurturing and
            stimulating environment that encourages growth, creativity, and happiness.
          </p>
        </section>
        {/* Photo Carousel */}
        <PhotoCarousel />

                {/* Testimonials */}
        <section
          style={{
            marginBottom: '40px',
            fontStyle: 'italic',
            backgroundColor: '#F5CBA7',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
          }}
        >
          <h2>What Parents Say</h2>
          <blockquote>"Our child has blossomed here! The caring teachers and engaging programs make all the difference." — Sarah P.</blockquote>
          <blockquote>
            "A wonderful place that truly cares about each child’s happiness and development." — Michael R.
          </blockquote>
        </section>     

        {/* Call to Action Buttons */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            style={buttonStyle}
            onClick={() => alert('Redirect to Registration page (to be implemented)')}
          >
            Register Your Child
          </button>
          <button
            style={{ ...buttonStyle, marginLeft: '15px' }}
            onClick={() => alert('Redirect to Donate page (to be implemented)')}
          >
            Donate
          </button>
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

export default Home;
