import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  { name: 'Synonyms and Antonyms', path: 'Grade12/taskgrade12session1' },
  { name: 'One word Substitution', path: 'Grade12/taskgrade12session2' },
  { name: 'Prefix and Suffix', path: 'Grade12/taskgrade12session3' },
];

const TaskGrade12FoundationPage = () => {
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
          {sessions.slice(0, 2).map((session, index) => ( // Fixed slicing for demo
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session.path)} // Pass only the path
            >
              {session.name} {/* Display session name */}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(2).map((session, index) => ( // Fixed slicing for demo
            <div
              key={index + 2} // Ensure unique key for each item
              className="session-item"
              onClick={() => handleSessionClick(session.path)} // Pass only the path
            >
              {session.name} {/* Display session name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade12FoundationPage;
