import { useEffect, useState } from 'react';
import { fetchSheetData } from '../utils/googleSheets';

// Function to convert Google Drive URLs to direct image URLs
function convertGoogleDriveUrl(url) {
  if (!url) return '';
  
  // Check if it's a Google Drive URL
  const driveRegex = /(?:https:\/\/drive\.google\.com\/file\/d\/)([a-zA-Z0-9-_]+)(?:\/.*)?/;
  const match = url.match(driveRegex);
  
  if (match) {
    const fileId = match[1];
    // Convert to direct image URL
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  // Return original URL if it's not a Google Drive URL
  return url;
}

function Staffing() {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSheetData('Staff')
      .then((data) => {
        setStaffList(data);
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
          <h1>Meet Our Amazing Staff</h1>
          <p>
            Our dedicated team of professionals is committed to providing exceptional care and education for your children.
          </p>
        </section>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading our wonderful staff...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>❌ Error loading staff data: {error}</p>
          </div>
        )}

        {!loading && !error && staffList.length === 0 && (
          <div className="no-data-container">
            <p>👥 No staff data available at the moment.</p>
          </div>
        )}

        {!loading && !error && staffList.length > 0 && (
          <section className="section">
            <div className="staff-grid">
              {staffList.map((staff, idx) => (
                <div key={idx} className="staff-card">
                  <div className="staff-header">
                    <h2 className="staff-name">{staff.Name}</h2>
                  </div>

                  <div className="staff-content">
                    <div className="staff-image-container">
                      {staff.Image ? (
                        <img
                          src={convertGoogleDriveUrl(staff.Image)}
                          alt={`${staff.Name}'s photo`}
                          className="staff-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '';
                            e.target.className = 'staff-image-placeholder';
                          }}
                        />
                      ) : (
                        <div className="staff-image-placeholder">
                          <span>👤</span>
                        </div>
                      )}
                    </div>

                    <div className="staff-details">
                      <div className="staff-info-item">
                        <span className="info-icon">🏫</span>
                        <strong>Classroom:</strong> {staff.Classroom}
                      </div>

                      <div className="staff-info-item">
                        <span className="info-icon">🎬</span>
                        <strong>Favorite Movie:</strong> {staff['Favorite Movie']}
                      </div>

                      <div className="staff-info-item quote-item">
                        <span className="info-icon">💭</span>
                        <strong>Favorite Quote:</strong>
                        <em>"{staff['Favorite Quote']}"</em>
                      </div>

                      <div className="staff-info-item">
                        <span className="info-icon">🎨</span>
                        <strong>Favorite Color:</strong>
                        <span
                          className="color-display"
                          style={{ color: staff['Favorite Color']?.toLowerCase() || 'inherit' }}
                        >
                          {staff['Favorite Color']}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Staffing;