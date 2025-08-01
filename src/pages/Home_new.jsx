import { useState, useEffect } from 'react';

const images = [  
  '/images/Pictures/building_front_2.jpeg',
  '/images/Pictures/building_front_with_sign.jpeg',
  '/images/Pictures/rear_parking.jpeg',
];

const testimonials = [
  {
    text: "Our child has blossomed here! The caring teachers and engaging programs make all the difference.",
    author: "Sarah P."
  },
  {
    text: "A wonderful place that truly cares about each child's happiness and development.",
    author: "Michael R."
  },
  {
    text: "The staff goes above and beyond to create a safe, nurturing environment. We couldn't be happier!",
    author: "Jennifer L."
  },
  {
    text: "Trinity Day Care Center has been like a second family to us. Our daughter loves going there every day.",
    author: "David M."
  }
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
    <div className="photo-carousel">
      <img
        src={images[index]}
        alt={`Carousel ${index + 1}`}
        className="carousel-image"
      />
    </div>
  );
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds per testimonial
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-container">
        <button 
          className="testimonial-arrow testimonial-arrow-left" 
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        
        <div className="testimonial-content">
          <blockquote className="testimonial-text">
            "{testimonials[currentIndex].text}"
          </blockquote>
          <cite className="testimonial-author">
            — {testimonials[currentIndex].author}
          </cite>
        </div>
        
        <button 
          className="testimonial-arrow testimonial-arrow-right" 
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
      
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <main className="page-container">
        {/* Welcome */}
        <section className="section welcome-section">
          <h1>Welcome to Trinity Day Care Center!</h1>
          <p>
            We are delighted to welcome you and your family to our community. Our dedicated staff strives to provide a nurturing and
            stimulating environment that encourages growth, creativity, and happiness.
          </p>
        </section>
        {/* Photo Carousel */}
        <PhotoCarousel />

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>What Parents Say</h2>
          <TestimonialCarousel />
        </section>

        {/* Call to Action Buttons */}
        <section className="cta-section">
          <button
            className="btn-primary"
            onClick={() => alert('Redirect to Registration page (to be implemented)')}
          >
            Register Your Child
          </button>
          <button
            className="btn-secondary"
            onClick={() => alert('Redirect to Donate page (to be implemented)')}
          >
            Donate
          </button>
        </section>

        {/* Contact Info */}
        <section className="contact-section">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>📞 Phone: 717-530-5315</p>
            <p>📧 Email: tdcc2012@gmail.com</p>
            <p>
              📍 Address:{' '}
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
        </section>

      </main>
    </div>
  );
}

export default Home;
