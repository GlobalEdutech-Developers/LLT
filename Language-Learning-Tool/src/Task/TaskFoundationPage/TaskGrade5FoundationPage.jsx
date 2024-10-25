import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskGrade1FoundationPage.css';

// Define the sessions array
const sessions = [
  'Session 1: Going Places-A',
  'Session 2: Going Places-B',
  'Session 3: Going Places-C',
  'Session 4: Do\'s and Don\'ts - A',
  'Session 5: Do\'s and Don\'ts - B',
  'Session 6: Do\'s and Don\'ts - C',
  'Session 7: Listening Skills 1',
  'Session 8: Speaking Skills 1',
  'Session 9: Consolidated Activity 1',
  'Session 10: Parts of Body-A',
  'Session 11: Parts of Body-B',
  'Session 12: Parts of Body-C',
  'Session 13: Better Than the Best - A',
  'Session 14: Better Than the Best - B',
  'Session 15: Better Than the Best - C',
  'Session 16: Reading Skills 1',
  'Session 17: Writing Skills 1',
  'Session 18: Consolidated Activity 2',
  'Session 19: A Look into the Future - A',
  'Session 20: A Look into the Future - B',
  'Session 21: A Look into the Future - C',
  'Session 22: How Do You Feel? - A',
  'Session 23: How Do You Feel? - B',
  'Session 24: Time Gone By - A',
  'Session 25: Time Gone By - B',
  'Session 26: Listening Skills 2',
  'Session 27: Speaking Skills 2',
  'Session 28: Know Your Planet - A',
  'Session 29: Know Your Planet - B',
  'Session 30: Know Your Planet - C',
  'Session 31: What Did You Do? - A',
  'Session 32: What Did You Do? - B',
  'Session 33: What Did You Do? - C',
  'Session 34: Reading Skills 2',
  'Session 35: Writing Skills 2',
  'Session 36: Consolidated Activity 4',
];

const TaskGrade5FoundationPage = () => {
  const navigate = useNavigate();

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    // Extract the session number from the session string
    const sessionNumber = session.match(/\d+/)[0]; // Extracts the first number found in the string
    const path = `Grade5/taskgrade5session${sessionNumber}`;

    // Navigate to the respective session page
    navigate(path);
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 5 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)}
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18}
              className="session-item"
              onClick={() => handleSessionClick(session)}
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade5FoundationPage;
