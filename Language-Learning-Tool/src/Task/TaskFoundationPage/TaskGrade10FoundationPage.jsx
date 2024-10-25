import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

// Correctly formatted sessions list based on the provided data
const sessions = [
  "Session 1: Thought Groups",
  "Session 2: Listening",
  "Session 3: Figures of Speech",
  "Session 4: Reading Skills",
  "Session 5: Analysis of Sentences",
  "Session 6: Synthesis of Sentences",
  "Session 7: Figures of Speech",
  "Session 8: Speaking Skills - A)",
  "Session 9: Speaking Skills - B)",
  "Session 10: Speaking Skills - C)",
  "Session 11: Transformation of Sentences",
  "Session 12: Narrative Writing",
  "Session 13: Figures of Speech",
  "Session 14: Formal Letter Writing",
  "Session 15: Reading Skills",
  "Session 16: Listening",
  "Session 17: Report Writing",
  "Session 18: Reading Skills",
  "Session 19: Figures of Speech",
  "Session 20: Listening - Conversation",
  "Session 21: Informal Letter Writing",
  "Session 22: Speaking Skills  - A)",
  "Session 23: Speaking Skills  - B)",
  "Session 24: Speaking Skills  - C)",
  "Session 25: E-mail Writing",
  "Session 26: Etymology",
  "Session 27: Analytical Paragraph Writing - A",
  "Session 28: Analytical Paragraph Writing - B",
  "Session 29: Listening - Narrative",
  "Session 30: Speech Writing",
  "Session 31: Analogy",
  "Session 32: Listening",
  "Session 33: Listening",
  "Session 34: Book Review"
];

const TaskGrade10FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = () => {
    navigate('/taskgrade'); // Redirect to the GradePage2 page
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 10 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 17).map((session, index) => ( // Split into two even columns
            <div
              key={index}
              className="session-item"
              onClick={handleSessionClick} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(17).map((session, index) => (
            <div
              key={index + 17} // Ensure unique key for each item
              className="session-item"
              onClick={handleSessionClick} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade10FoundationPage;
