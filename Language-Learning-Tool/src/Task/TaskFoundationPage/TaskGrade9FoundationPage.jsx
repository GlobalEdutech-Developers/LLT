import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Thought Groups - Introduction',
  'Session 2: Order of Words',
  'Session 3: Listening Skills (Green House Effect)',
  'Session 4: Reading Skills (Mrs. Gupta\'s Diwali)',
  'Session 5: Figures of Speech',
  'Session 6: Transformation of Sentences',
  'Session 7: Speaking Skills (The Internet - A)',
  'Session 8: Speaking Skills (The Internet - B)',
  'Session 9: Speaking Skills (The Internet - C)',
  'Session 10: Reading Skills (Shikha Visited Swiss Alps)',
  'Session 11: Listening Skills - Narrative (Etiquette)',
  'Session 12: Figures of Speech',
  'Session 13: Report Writing',
  'Session 14: Comprehension - Report Writing',
  'Session 15: Formal Letter Writing'
];

// Mapping sessions to their corresponding routes
const sessionRoutes = {
  'Session 1: Thought Groups - Introduction': 'Grade9/taskgrade9session1',
  'Session 2: Order of Words': 'Grade9/taskgrade9session2',
  'Session 3: Listening Skills (Green House Effect)': 'Grade9/taskgrade9session3',
  'Session 4: Reading Skills (Mrs. Gupta\'s Diwali)': 'Grade9/taskgrade9session4',
  'Session 5: Figures of Speech': 'Grade9/taskgrade9session5',
  'Session 6: Transformation of Sentences': 'Grade9/taskgrade9session6',
  'Session 7: Speaking Skills (The Internet - A)': 'Grade9/taskgrade9session7',
  'Session 8: Speaking Skills (The Internet - B)': 'Grade9/taskgrade9session8',
  'Session 9: Speaking Skills (The Internet - C)': 'Grade9/taskgrade9session9',
  'Session 10: Reading Skills (Shikha Visited Swiss Alps)': 'Grade9/taskgrade9session10',
  'Session 11: Listening Skills - Narrative (Etiquette)': 'Grade9/taskgrade9session11',
  'Session 12: Figures of Speech': 'Grade9/taskgrade9session12',
  'Session 13: Report Writing': 'Grade9/taskgrade9session13',
  'Session 14: Comprehension - Report Writing': 'Grade9/taskgrade9session14',
  'Session 15: Formal Letter Writing': 'Grade9/taskgrade9session15'
};

const TaskGrade9FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    const route = sessionRoutes[session];
    if (route) {
      navigate(route); // Navigate to the corresponding session page
    } else {
      console.log(`No specific route for ${session}`);
    }
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 9 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 9).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)} // Pass session to onClick handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(9).map((session, index) => (
            <div
              key={index + 9} // Ensure unique key for each item
              className="session-item"
              onClick={() => handleSessionClick(session)} // Pass session to onClick handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade9FoundationPage;
