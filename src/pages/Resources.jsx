import { useEffect, useState } from 'react';
import { fetchSheetData } from '../utils/googleSheets';

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSheetData('Resources')
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Helper function to determine file type icon
  const getFileIcon = (link) => {
    if (!link) return '📄';
    const url = link.toLowerCase();
    if (url.includes('.pdf')) return '📋';
    if (url.includes('.doc') || url.includes('.docx')) return '📝';
    if (url.includes('.xls') || url.includes('.xlsx')) return '📊';
    if (url.includes('.ppt') || url.includes('.pptx')) return '📺';
    if (url.includes('.jpg') || url.includes('.png') || url.includes('.gif')) return '🖼️';
    return '📄';
  };

  return (
    <div>
      <main className="page-container">
        <section className="section welcome-section">
          <h1>Resources & Downloads</h1>
          <p>
            Access important documents, forms, and resources for Trinity Day Care Center families. All documents are available for download or viewing.
          </p>
        </section>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading resources...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>❌ Error loading resources: {error}</p>
            <p>Please try refreshing the page or contact us directly for assistance.</p>
          </div>
        )}

        {!loading && !error && resources.length === 0 && (
          <div className="no-data-container">
            <p>📂 No resources available at the moment.</p>
          </div>
        )}

        {!loading && !error && resources.length > 0 && (
          <section className="section">
            <div className="resources-grid">
              {resources.map((resource, idx) => (
                <div key={idx} className="resource-card">
                  <div className="resource-header">
                    <div className="resource-icon">
                      {getFileIcon(resource.Link)}
                    </div>
                    <h3 className="resource-title">{resource.Name}</h3>
                  </div>

                  <div className="resource-content">
                    <p className="resource-description">{resource.Description}</p>

                    <div className="resource-actions">
                      <a
                        href={resource.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-button"
                      >
                        <span className="button-icon">⬇️</span>
                        Download
                      </a>

                      <a
                        href={resource.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-button"
                      >
                        <span className="button-icon">👁️</span>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick Links Section */}
        <section className="section quick-links-section">
          <h2>📚 Quick Links</h2>
          <div className="quick-links-grid">
            <div className="quick-link-card">
              <div className="quick-link-icon">📋</div>
              <h3>Enrollment Forms</h3>
              <p>Complete enrollment packages and registration documents for new families.</p>
            </div>

            <div className="quick-link-card">
              <div className="quick-link-icon">🏥</div>
              <h3>Health & Safety</h3>
              <p>Medical forms, immunization requirements, and safety protocols.</p>
            </div>

            <div className="quick-link-card">
              <div className="quick-link-icon">📅</div>
              <h3>Policies & Procedures</h3>
              <p>Parent handbook, pickup/drop-off policies, and center guidelines.</p>
            </div>

            <div className="quick-link-card">
              <div className="quick-link-icon">💰</div>
              <h3>Financial Information</h3>
              <p>Tuition rates, payment schedules, and financial assistance information.</p>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="section help-section">
          <div className="help-card">
            <h2>❓ Need Help?</h2>
            <div className="help-content">
              <div className="help-item">
                <h4>📞 Phone Support</h4>
                <p>Call us during business hours for immediate assistance with documents or questions.</p>
                <a href="tel:717-530-5315" className="contact-button">717-530-5315</a>
              </div>

              <div className="help-item">
                <h4>📧 Email Support</h4>
                <p>Send us an email and we'll respond as soon as possible with the help you need.</p>
                <a href="mailto:tdcco2012@gmail.com?subject=Resource Help Request" className="contact-button">
                  tdcco2012@gmail.com
                </a>
              </div>

              <div className="help-item">
                <h4>🏢 In-Person</h4>
                <p>Visit our office during business hours. We're happy to help you with any documents or forms.</p>
                <p><strong>Hours:</strong> Monday - Friday, 6:00 AM - 5:30 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Resources;