import React from 'react';

const upcomingEvents = [
  {
    date: 'August 15, 2025',
    title: 'Back to School Orientation',
    time: '6:00 PM - 7:30 PM',
    description: 'Join us for an informative evening to meet your child\'s teachers, tour the classrooms, and learn about our curriculum and daily routines.',
    icon: '🎒',
    location: 'Main Classroom Area'
  },
  {
    date: 'September 10, 2025',
    title: 'Family Picnic Day',
    time: '11:00 AM - 2:00 PM',
    description: 'A fun-filled day for the whole family! Enjoy games, activities, delicious food, and quality time with other families in our community.',
    icon: '🧺',
    location: 'Outdoor Playground & Pavilion'
  },
  {
    date: 'October 31, 2025',
    title: 'Halloween Costume Parade',
    time: '10:00 AM - 11:00 AM',
    description: 'Children can dress up in their favorite costumes for a fun parade around the center. Parents are welcome to watch and take photos!',
    icon: '🎃',
    location: 'Indoor & Outdoor Areas'
  },
  {
    date: 'November 22, 2025',
    title: 'Thanksgiving Feast',
    time: '11:30 AM - 1:00 PM',
    description: 'Celebrate gratitude with a special Thanksgiving meal. Children will share what they\'re thankful for in this heartwarming tradition.',
    icon: '🦃',
    location: 'Fellowship Hall'
  },
  {
    date: 'December 20, 2025',
    title: 'Winter Holiday Celebration',
    time: '6:00 PM - 8:00 PM',
    description: 'Join us for an evening of holiday joy with performances by our children, festive activities, and seasonal refreshments.',
    icon: '🎄',
    location: 'Fellowship Hall'
  }
];

const recurringEvents = [
  {
    title: 'Chapel Time',
    frequency: 'Every Wednesday',
    time: '10:00 AM',
    description: 'Weekly gathering for age-appropriate spiritual stories, songs, and reflection.',
    icon: '⛪'
  },
  {
    title: 'Library Visit',
    frequency: 'Monthly',
    time: 'Various Times',
    description: 'Field trips to the local library to foster love of reading and learning.',
    icon: '📚'
  },
  {
    title: 'Playground Safety Check',
    frequency: 'Every Friday',
    time: '7:00 AM',
    description: 'Weekly maintenance and safety inspection of all playground equipment.',
    icon: '🔧'
  }
];

function Events() {
  return (
    <div>
      <main className="page-container">
        <section className="section welcome-section">
          <h1>Events & Activities</h1>
          <p>
            Stay connected with our vibrant community through special events, celebrations, and activities designed to bring families together.
          </p>
        </section>

        {/* Upcoming Events */}
        <section className="section">
          <h2>📅 Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-header">
                  <div className="event-icon">{event.icon}</div>
                  <div className="event-date">{event.date}</div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <div className="event-time">
                      <span className="detail-icon">🕐</span>
                      {event.time}
                    </div>
                    <div className="event-location">
                      <span className="detail-icon">📍</span>
                      {event.location}
                    </div>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recurring Events */}
        <section className="section">
          <h2>🔄 Recurring Activities</h2>
          <div className="recurring-events">
            {recurringEvents.map((event, index) => (
              <div key={index} className="recurring-event-card">
                <div className="recurring-icon">{event.icon}</div>
                <div className="recurring-content">
                  <h3>{event.title}</h3>
                  <div className="recurring-frequency">
                    <strong>{event.frequency}</strong> at {event.time}
                  </div>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar Section */}
        <section className="section calendar-section">
          <h2>📆 Full Calendar</h2>
          <div className="calendar-container">
            <div className="calendar-info">
              <h3>Stay Updated</h3>
              <p>
                For the most up-to-date event information and last-minute changes, 
                please check our calendar regularly or contact our office directly.
              </p>
              <div className="calendar-contact">
                <a href="tel:717-530-5315" className="contact-button">
                  📞 Call for Event Details
                </a>
                <a href="mailto:tdcco2012@gmail.com?subject=Event Information" className="contact-button">
                  📧 Email Us
                </a>
              </div>
            </div>
            
            <div className="calendar-embed">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
                className="calendar-iframe"
                title="Trinity Day Care Center Events Calendar"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Event Guidelines */}
        <section className="section guidelines-section">
          <div className="guidelines-card">
            <h2>📋 Event Guidelines</h2>
            <div className="guidelines-content">
              <div className="guideline-item">
                <h4>👨‍👩‍👧‍👦 Family Events</h4>
                <p>All family members are welcome! Please RSVP by the date specified for each event to help us prepare.</p>
              </div>
              
              <div className="guideline-item">
                <h4>🍰 Food & Allergies</h4>
                <p>We provide snacks and meals for most events. Please inform us of any food allergies when you RSVP.</p>
              </div>
              
              <div className="guideline-item">
                <h4>📸 Photos & Videos</h4>
                <p>We love capturing memories! Photos may be taken during events for our newsletter and social media.</p>
              </div>
              
              <div className="guideline-item">
                <h4>🌧️ Weather Policy</h4>
                <p>Outdoor events may be moved indoors or rescheduled due to weather. We'll notify you as early as possible.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;