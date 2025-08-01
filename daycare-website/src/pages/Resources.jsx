<<<<<<< HEAD
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Navbar from '../components/Navbar';

// Replace with your published CSV URL for the Resources tab
const RESOURCES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYHlWOKHAN9AshZ9ZBbQWDXGB8SO0aUqq0JZUgAww9y6IeT03pgaF1DU0oJMI86t-IQAo1_ak3Fglu/pub?output=csv';

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(RESOURCES_CSV_URL)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setResources(results.data);
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
          paddingTop: '80px', // for fixed navbar spacing
          maxWidth: '900px',
          margin: 'auto',
          padding: '20px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          backgroundColor: '#FDF6E3',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>Resources</h1>

        {loading && <p>Loading resources...</p>}
        {error && <p style={{ color: 'red' }}>Error loading resources: {error}</p>}

        {!loading && !error && resources.length === 0 && <p>No resources available.</p>}

        {!loading && !error && resources.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
  {resources.map((res, idx) => (
    <li
      key={idx}
      style={{
        backgroundColor: '#F5CBA7',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(46,64,83,0.1)',
        marginBottom: '20px',
        padding: '20px',
        color: '#2E4053',
      }}
    >
      <h2 style={{ marginBottom: '8px' }}>{res.Name}</h2>
      <p>{res.Description}</p>
      <p>
        <a
          href={res.Link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#85C1E9', textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Download here
        </a>
      </p>
    </li>
  ))}
</ul>

        )}
      </main>
    </div>
  );
}

export default Resources;
=======
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Navbar from '../components/Navbar';

// Replace with your published CSV URL for the Resources tab
const RESOURCES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYHlWOKHAN9AshZ9ZBbQWDXGB8SO0aUqq0JZUgAww9y6IeT03pgaF1DU0oJMI86t-IQAo1_ak3Fglu/pub?output=csv';

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(RESOURCES_CSV_URL)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setResources(results.data);
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
          paddingTop: '80px', // for fixed navbar spacing
          maxWidth: '900px',
          margin: 'auto',
          padding: '20px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          backgroundColor: '#FDF6E3',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#2E4053' }}>Resources</h1>

        {loading && <p>Loading resources...</p>}
        {error && <p style={{ color: 'red' }}>Error loading resources: {error}</p>}

        {!loading && !error && resources.length === 0 && <p>No resources available.</p>}

        {!loading && !error && resources.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
  {resources.map((res, idx) => (
    <li
      key={idx}
      style={{
        backgroundColor: '#F5CBA7',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(46,64,83,0.1)',
        marginBottom: '20px',
        padding: '20px',
        color: '#2E4053',
      }}
    >
      <h2 style={{ marginBottom: '8px' }}>{res.Name}</h2>
      <p>{res.Description}</p>
      <p>
        <a
          href={res.Link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#85C1E9', textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Download here
        </a>
      </p>
    </li>
  ))}
</ul>

        )}
      </main>
    </div>
  );
}

export default Resources;
>>>>>>> 100ac9effa3e79a096ac46167925c54927d8bbeb
