import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  { name: 'Synonyms and Antonyms', path: '/grade12session1' },
  { name: 'One word Substitution', path: '/grade12session2' },
  { name: 'Prefix and Sufix', path: '/grade12session3' },
];

const Grade12FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (path) => {
    navigate(path); // Redirect to the respective session page
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 12 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session.path)} // Add onClick handler with session path
            >
              {session.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade12FoundationPage;

