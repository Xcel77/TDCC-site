import { useEffect, useState } from 'react';
import { fetchSheetData } from '../utils/googleSheets';

// Function to convert various share URLs to direct image URLs
function convertImageUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  url = url.trim();
  
  try {
    new URL(url);
  } catch {
    return '';
  }
  
  // 1. Google Drive Links
  // Match format: https://drive.google.com/file/d/FILE_ID/view...
  const driveFileRegex = /\/file\/d\/([a-zA-Z0-9_-]+)/;
  const driveFileMatch = url.match(driveFileRegex);
  if (driveFileMatch && driveFileMatch[1]) {
    // Google Drive changed policies and blocks uc?export=view with Cross-Origin-Resource-Policy: same-site.
    // Using lh3.googleusercontent.com/d/FILE_ID bypasses this restriction.
    return `https://lh3.googleusercontent.com/d/${driveFileMatch[1]}=w1000`;
  }
  
  // Match format: https://drive.google.com/open?id=FILE_ID
  const driveOpenRegex = /[?&]id=([a-zA-Z0-9_-]+)/;
  if (url.includes('drive.google.com') && url.match(driveOpenRegex)) {
    const match = url.match(driveOpenRegex);
    return `https://lh3.googleusercontent.com/d/${match[1]}=w1000`;
  }

  // 2. Google Photos or other direct links
  // Previously used proxies like cors-anywhere require manual unlock or block requests.
  // Direct image addresses (lh3.googleusercontent.com) typically work fine in <img> tags.
  // For photos.app.goo.gl sharing links, it's an HTML page, so it will fail to load as an image.
  // Users should use Google Drive or direct image addresses.
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
                          src={convertImageUrl(staff.Image)}
                          alt={`${staff.Name}'s photo`}
                          className="staff-image"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            if (e.target.parentElement) {
                              e.target.parentElement.classList.add('staff-image-placeholder');
                            }
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