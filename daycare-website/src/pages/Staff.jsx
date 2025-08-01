import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Navbar from '../components/Navbar';

// Replace with your actual published CSV URL from Google Sheets
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrdIG2-leUoe3ehO6G4MYrlUhnKuDAWbB8lT2LDpD_C3k5ipjHWR-ohU4kywxKFnHl8olvuDAVPyGt/pub?output=csv';

function Staffing() {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setStaffList(results.data);
            setLoading(false);
          },
          error: (err) => {
            setError(err.message);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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
          backgroundColor: '#FDF6E3', // Optional page background to match your theme
          minHeight: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>Our Staff</h1>

        {loading && <p>Loading staff data...</p>}
        {error && <p style={{ color: 'red' }}>Error loading staff data: {error}</p>}

        {!loading && !error && staffList.length === 0 && (
          <p>No staff data available.</p>
        )}

        {!loading && !error && staffList.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {staffList.map((staff, idx) => (
              <li
  key={idx}
  style={{
    backgroundColor: '#F5CBA7',
    borderRadius: '8px',
    boxShadow: '0 0 8px rgba(46,64,83,0.1)',
    marginBottom: '20px',
    padding: '20px',
  }}
>
  {/* Name centered above */}
  <h2 style={{ textAlign: 'center', color: '#2E4053', marginBottom: '20px' }}>{staff.Name}</h2>

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px', // spacing between image and details
    }}
  >
    {/* Image container 20% width */}
    <div style={{ flexBasis: '20%', maxWidth: '20%' }}>
      {staff.Image ? (
        <img
          src={staff.Image}
          alt={`${staff.Name}'s photo`}
          style={{
            width: '100%',
            aspectRatio: '1 / 1',
            objectFit: 'cover',
            borderRadius: '8px',
            backgroundColor: '#ddd',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '';
            e.target.style.backgroundColor = '#ccc';
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            paddingTop: '100%', // keep square aspect ratio
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '14px',
            fontStyle: 'italic',
            userSelect: 'none',
            position: 'relative',
          }}
        >
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            No Image
          </span>
        </div>
      )}
    </div>

    {/* Details container 80% width, left aligned */}
    <div style={{ flexBasis: '80%', maxWidth: '80%', color: '#2E4053', textAlign: 'left' }}>
      <p><strong>Classroom:</strong> {staff.Classroom}</p>
      <p><strong>Favorite Movie:</strong> {staff['Favorite Movie']}</p>
      <p><strong>Favorite Quote:</strong> {staff['Favorite Quote']}</p>
      <p>
        <strong>Favorite Color:</strong>{' '}
        <span style={{ color: staff['Favorite Color'].toLowerCase() || 'inherit' }}>
          {staff['Favorite Color']}
        </span>
      </p>
    </div>
  </div>
</li>



            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default Staffing;