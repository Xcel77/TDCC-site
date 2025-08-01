import React from 'react';

const classrooms = [
  {
    title: 'Infant Room (0-12 months)',
    age: '0-12 months',
    icon: '👶',
    description: 'Our Infant Room provides a calm and nurturing environment focusing on sensory development and safe exploration. We offer individualized care with loving attention to feeding, sleeping, and developmental milestones.',
    image: '/images/Pictures/Classrooms/infant_room_1.jpeg',
    features: ['Individual attention', 'Sensory play', 'Flexible schedules', 'Milestone tracking']
  },
  {
    title: 'Toddler One (12-18 months)',
    age: '12-18 months',
    icon: '🧸',
    description: 'Toddler One encourages early language and motor skills development through play-based learning. We focus on exploration, communication, and building independence.',
    image: '/images/Pictures/Classrooms/toddler_one.jpeg',
    features: ['Language development', 'Motor skills', 'Independent play', 'Social interaction']
  },
  {
    title: 'Toddler Two (18-24 months)',
    age: '18-24 months',
    icon: '🎯',
    description: 'Toddler Two focuses on socialization and self-help skills, preparing children for preschool readiness. We encourage creativity and problem-solving through structured activities.',
    image: '/images/Pictures/Classrooms/toddler_two.jpeg',
    features: ['Self-help skills', 'Creative expression', 'Group activities', 'Routine building']
  },
  {
    title: 'Toddler Three (2-3 years)',
    age: '2-3 years',
    icon: '🎨',
    description: 'Our Toddler Three room deepens creativity, problem solving and group interaction skills. Children engage in more complex play and begin preparing for preschool learning.',
    image: '/images/Pictures/Classrooms/toddler_three.jpeg',
    features: ['Creative arts', 'Problem solving', 'Group play', 'Early academics']
  },
  {
    title: 'Pre-School (3-4 years)',
    age: '3-4 years',
    icon: '📚',
    description: 'The Preschool room stimulates early literacy, numeracy, and social-emotional growth in a fun learning environment. Children develop school readiness skills through engaging activities.',
    image: '/images/Pictures/Classrooms/pre_school_2.jpeg',
    features: ['Early literacy', 'Math concepts', 'Science exploration', 'Social skills']
  },
  {
    title: 'Pre-K (4-5 years)',
    age: '4-5 years',
    icon: '🎓',
    description: 'Pre Kindergarten prepares children for the transition to elementary school with focused curriculum on academics and independence. We emphasize school readiness and character development.',
    image: '/images/Pictures/Classrooms/pre_k_1.jpeg',
    features: ['Kindergarten prep', 'Advanced academics', 'Independence', 'Leadership skills']
  },
];

function Classrooms() {
  return (
    <div>
      <main className="page-container">
        <section className="section welcome-section">
          <h1>Our Classrooms</h1>
          <p>
            Discover our age-appropriate learning environments designed to nurture growth, creativity, and development at every stage of your child's early years.
          </p>
        </section>

        <section className="section">
          <div className="classrooms-grid">
            {classrooms.map((room, index) => (
              <div key={index} className="classroom-card">
                <div className="classroom-header">
                  <div className="classroom-icon">{room.icon}</div>
                  <div className="classroom-title-section">
                    <h2 className="classroom-title">{room.title}</h2>
                    <span className="classroom-age">{room.age}</span>
                  </div>
                </div>
                
                <div className="classroom-image-container">
                  <img
                    src={room.image}
                    alt={`${room.title} classroom`}
                    className="classroom-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="classroom-content">
                  <p className="classroom-description">{room.description}</p>
                  
                  <div className="classroom-features">
                    <h4>Key Features:</h4>
                    <ul className="features-list">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-bullet">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="section classroom-info-section">
          <div className="classroom-info-card">
            <h2>📋 Enrollment Information</h2>
            <div className="info-content">
              <div className="info-item">
                <h3>👥 Class Sizes</h3>
                <p>We maintain small class sizes to ensure personalized attention for every child. Our teacher-to-child ratios exceed state requirements for optimal care and learning.</p>
              </div>
              
              <div className="info-item">
                <h3>🕐 Operating Hours</h3>
                <p>Monday - Friday: 6:00 AM - 5:30 PM<br/>We're here when you need us most!</p>
              </div>
              
              <div className="info-item">
                <h3>📞 Ready to Enroll?</h3>
                <p>Contact us today to schedule a tour and learn more about our programs!</p>
                <a href="tel:717-530-5315" className="contact-button">
                  📞 Call 717-530-5315
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Classrooms;
