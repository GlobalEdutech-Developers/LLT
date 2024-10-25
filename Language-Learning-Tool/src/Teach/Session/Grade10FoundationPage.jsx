import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Correctly formatted sessions list based on the provided data
const sessions = [
  "Session 1: Thought Groups",
  "Session 2: Listening - Speech ",
  "Session 3: Figures of Speech",
  "Session 4: Reading Skills",
  "Session 5: Analysis of Sentences",
  "Session 6: Synthesis of Sentences",
  "Session 7: Figures of Speech",
  "Session 8: Speaking Skills (Health - A)",
  "Session 9: Speaking Skills (Health - B)",
  "Session 10: Speaking Skills (Health - C)",
  "Session 11: Transformation of Sentences",
  "Session 12: Narrative Writing",
  "Session 13: Figures of Speech",
  "Session 14: Formal Letter Writing",
  "Session 15: Reading Skills",
  "Session 16: Listening - Advertisement",
  "Session 17: Report Writing",
  "Session 18: Reading Skills ",
  "Session 19: Figures of Speech",
  "Session 20: Listening - Conversation",
  "Session 21: Informal Letter Writing",
  "Session 22: Speaking Skills - A",
  "Session 23: Speaking Skills - B",
  "Session 24: Speaking Skills - C",
  "Session 25: E-mail Writing",
  "Session 26: Etymology",
  "Session 27: Analytical Paragraph Writing - A",
  "Session 28: Analytical Paragraph Writing - B",
  "Session 29: Listening - Narrative (Education)",
  "Session 30: Speech Writing",
  "Session 31: Analogy",
  "Session 32: Listening - News Article",
  "Session 33: Listening - Advertisement",
  "Session 34: Book Review"
];

const Grade10FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (sessionIndex) => {
    navigate(`/grade10session${sessionIndex + 1}`); // Redirect to the corresponding Grade 10 session page
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 10 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => ( // Split into two even columns
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(index)} // Add onClick handler with session index
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18} // Ensure unique key for each item
              className="session-item"
              onClick={() => handleSessionClick(index + 18)} // Add onClick handler with session index
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade10FoundationPage;
