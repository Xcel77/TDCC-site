<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/Navbar';

function Events() {
  return (
    <div>
      <Navbar />
      <main
        style={{
          paddingTop: '80px', // space for fixed navbar
          maxWidth: '900px',
          margin: 'auto',
          padding: '20px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          backgroundColor: '#FDF6E3',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>Events</h1>

        <p style={{ marginBottom: '20px' }}></p>
        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2>Upcoming Events</h2>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'inline-block', textAlign: 'left' }}>
            <li>
              <strong>August 15:</strong> Back to School Orientation
            </li>
            <li>
              <strong>September 10:</strong> Family Picnic Day
            </li>
          </ul>

          {/* Google Calendar iframe widget */}
          <div style={{ marginTop: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone"
              style={{ border: 0, width: '100%', height: '400px' }}
              title="Upcoming Events Calendar"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;
=======
import React from 'react';
import Navbar from '../components/Navbar';

function Events() {
  return (
    <div>
      <Navbar />
      <main
        style={{
          paddingTop: '80px', // space for fixed navbar
          maxWidth: '900px',
          margin: 'auto',
          padding: '20px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          backgroundColor: '#FDF6E3',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>Events</h1>

        <p style={{ marginBottom: '20px' }}></p>
        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2>Upcoming Events</h2>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'inline-block', textAlign: 'left' }}>
            <li>
              <strong>August 15:</strong> Back to School Orientation
            </li>
            <li>
              <strong>September 10:</strong> Family Picnic Day
            </li>
          </ul>

          {/* Google Calendar iframe widget */}
          <div style={{ marginTop: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone"
              style={{ border: 0, width: '100%', height: '400px' }}
              title="Upcoming Events Calendar"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;
>>>>>>> 100ac9effa3e79a096ac46167925c54927d8bbeb
