import React, { useEffect, useState } from 'react';
import { fetchSheetData } from '../utils/googleSheets';

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recurringEvents, setRecurringEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSheetData('Events')
      .then((data) => {
        const today = new Date();
        // Reset time to start of day for accurate comparison
        today.setHours(0, 0, 0, 0);

        const thirtyDaysFromNow = new Date(today);
        thirtyDaysFromNow.setDate(today.getDate() + 30);

        const newUpcoming = [];
        const newRecurring = [];

        data.forEach(event => {
          // Normalize keys: CSV headers are Title, Description, Location, Start, End, Type
          const type = event.Type?.toLowerCase().trim();

          if (type === 'recurring') {
            // Map sheet columns to component expected properties if needed
            // Expected: title, frequency, time, description, icon
            // Mapped from sheet: Title, description, location (maybe?), start/end -> time?
            // Since schema is Title, description, location, start, end, type
            // We might need to map 'start' or 'time' column if it exists.
            // User said: Title, description, location, start, end, type.
            // Recurring events usually display "Frequency" and "Time".
            // let's use 'start' as 'frequency' or 'time' if needed, or just pass generic props.
            // The UI expects: title, frequency, time, description, icon.
            // Mapping strategy:
            // title -> Title
            // description -> description
            // frequency -> start (as text, e.g. "Every Monday")
            // time -> end (as text, e.g. "10am")
            // icon -> icon (if exists in sheet? User didn't say icon column exists, but UI uses it.
            // If icon missing, use default.)

            newRecurring.push({
              title: event.Title,
              description: event.Description,
              frequency: event.Start || 'Weekly', // Fallback mapping
              time: event.End || 'TBD',           // Fallback mapping
              icon: event.Icon || '🔄'            // Fallback icon
            });

          } else {
            // One-time events
            // Parse Dates
            // User schema: start, end. Assume compatible date strings.
            const startDate = new Date(event.Start);
            const endDate = event.End ? new Date(event.End) : new Date(startDate);
            // If end is invalid/missing, assume same day as start.

            // Check Validity
            if (isNaN(startDate.getTime())) return;

            // Expiry Check: If end date is BEFORE today, it's expired.
            // (Using end of the end-date day would be safer, but strictly < today means yesterday)
            // Let's set endDate to end of its day to be generous.
            endDate.setHours(23, 59, 59, 999);

            if (endDate < today) return; // Expired

            // Lookahead Check: If start date is within 30 days
            if (startDate <= thirtyDaysFromNow) {
              newUpcoming.push({
                date: startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                sortDate: startDate, // for sorting
                title: event.Title,
                time: event.End ? `${new Date(event.Start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(event.End).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'All Day', // Attempt to format time if parseable, else raw text
                // Actually, if 'start' contains time, we extracted it. If 'start' is just date, time is default.
                // User said columns: Title, description, location, start, end, type.
                // If they enter "2025-10-10 14:00", we get time.
                // Let's rely on what we can parse.
                description: event.Description,
                icon: event.Icon || '📅',
                location: event.Location
              });
            }
          }
        });

        // Sort upcoming by date
        newUpcoming.sort((a, b) => a.sortDate - b.sortDate);

        setUpcomingEvents(newUpcoming);
        setRecurringEvents(newRecurring);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <main className="page-container">
        <section className="section welcome-section">
          <h1>Events & Activities</h1>
          <p>
            Stay connected with our vibrant community through special events, celebrations, and activities designed to bring families together.
          </p>
        </section>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading upcoming events...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>❌ Error loading events: {error}</p>
          </div>
        )}

        {/* Upcoming Events */}
        {!loading && !error && (
          <section className="section">
            <h2>📅 Upcoming Events</h2>
            {upcomingEvents.length === 0 ? (
              <p>No upcoming events scheduled at this time.</p>
            ) : (
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
            )}
          </section>
        )}

        {/* Recurring Events */}
        {!loading && !error && recurringEvents.length > 0 && (
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
        )}

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