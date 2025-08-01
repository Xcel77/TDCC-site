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

  // Go to specific image
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000); // 6000ms = 6 seconds
    return () => clearInterval(interval);
  }, []); // Empty dependency array so effect runs only once on mount

  return (
    <div className="photo-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <div className="carousel-image-container">
          <img
            src={images[index]}
            alt={`Trinity Day Care Center ${index + 1}`}
            className="carousel-image"
          />
        </div>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_, imageIndex) => (
          <button
            key={imageIndex}
            className={`carousel-dot ${imageIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(imageIndex)}
            aria-label={`Go to image ${imageIndex + 1}`}
          />
        ))}
      </div>
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

export default Home;
