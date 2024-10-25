import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Meeting People-A',
      'Session 2: Meeting People-B',
      'Session 3: Meeting People-C',
      'Session 4: My Family-A',
      'Session 5: My Family-B',
      'Session 6: My Family-C',
      'Session 7: Listening Skills 1',
      'Session 8: Speaking Skills 1',
      'Session 9: Consolidated Activity 1',
      'Session 10: Asking Questions-Questioning',
      'Session 11: Asking Questions-Yes or No',
      'Session 12: Asking Questions-This or That',
      'Session 13: Colours Around You-A',
      'Session 14: Colours Around You-B',
      'Session 15: Colours Around You-C',
      'Session 16: Reading Skills 1',
      'Session 17: Writing Skills 1',
      'Session 18: Consolidated Activity 2',
      'Session 19: Holiday Getaways-A',
      'Session 20: Holiday Getaways-B',
      'Session 21: Holiday Getaways-C',
      'Session 22: Home Sweet Home-A',
      'Session 23: Home Sweet Home-B',
      'Session 24: Home Sweet Home-C',
      'Session 25: Listening Skills 2',
      'Session 26: Speaking Skills 2',
      'Session 27: Consolidated Activity 3',
      'Session 28: Its My Life-A',
      'Session 29: Its My Life-B',
      'Session 30: Its My Life-C',
      'Session 31: Food for Thought-A',
      'Session 32: Food for Thought-B',
      'Session 33: Food for Thought-C',
      'Session 34: Reading Skills 2',
      'Session 35: Writing Skills 2',
      'Session 36: Consolidated Activity 4',
];

const Grade3FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    const sessionMap = {
      'Session 1: Meeting People-A': '/grade3session1',
      'Session 2: Meeting People-B': '/grade3session2',
      'Session 3: Meeting People-C': '/grade3session3',
      'Session 4: My Family-A': '/grade3session4',
      'Session 5: My Family-B': '/grade3session5',
      'Session 6: My Family-C': '/grade3session6',
      'Session 7: Listening Skills 1': '/grade3session7',
      'Session 8: Speaking Skills 1': '/grade3session8',
      'Session 9: Consolidated Activity 1': '/grade3session9',
      'Session 10: Asking Questions-Questioning': '/grade3session10',
      'Session 11: Asking Questions-Yes or No': '/grade3session11',
      'Session 12: Asking Questions-This or That': '/grade3session12',
      'Session 13: Colours Around You-A': '/grade3session13',
      'Session 14: Colours Around You-B': '/grade3session14',
      'Session 15: Colours Around You C': '/grade3session15',
      'Session 16: Reading Skills 1': '/grade3session16',
      'Session 17: Writing Skills 1': '/grade3session17',
      'Session 18: Consolidated Activity 2': '/grade3session18',
      'Session 19: Holiday Getaways-A': '/grade3session19',
      'Session 20: Holiday Getaways-B': '/grade3session20',
      'Session 21: Holiday Getaways-C': '/grade3session21',
      'Session 22: Home Sweet Home-A': '/grade3session22',
      'Session 23: Home Sweet Home-B': '/grade3session23',
      'Session 24: Home Sweet Home-C': '/grade3session24',
      'Session 25: Listening Skills 2': '/grade3session25',
      'Session 26: Speaking Skills 2': '/grade3session26',
      'Session 27: Consolidated Activity 3': '/grade3session27',
      'Session 28: Its My Life-A': '/grade3session28',
      'Session 29: Its My Life-B': '/grade3session29',
      'Session 30: Its My Life-C': '/grade3session30',
      'Session 31: Food for Thought-A': '/grade3session31',
      'Session 32: Food for Thought-B': '/grade3session32',
      'Session 33: Food for Thought-C': '/grade3session33',
      'Session 34: Reading Skills 2': '/grade3session34',
      'Session 35: Writing Skills 2': '/grade3session35',
      'Session 36: Consolidated Activity 4': '/grade3session36'
    };

    navigate(sessionMap[session]);
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 3 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
              id={`session-item-${index + 1}`} // Adding unique ID for each session item
              className="session-item"
              onClick={() => handleSessionClick(session)} // Pass the session to the handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18}
              id={`session-item-${index + 19}`} // Adding unique ID for each session item
              className="session-item"
              onClick={() => handleSessionClick(session)} // Pass the session to the handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade3FoundationPage;
