import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Making Friends - A',
  'Session 2: Making Friends - B',
  'Session 3: Making Friends - C',
  'Session 4: Buying Things - A',
  'Session 5: Buying Things - B',
  'Session 6: Buying Things - C',
  'Session 7: Listening Skills 1',
  'Session 8: Speaking Skills 1',
  'Session 9: Consolidated Activity 1',
  'Session 10: At the Park - A',
  'Session 11: At the Park - B',
  'Session 12: At the Park - C',
  'Session 13: Home Improvement - A',
  'Session 14: Home Improvement - B',
  'Session 15: Home Improvement - C',
  'Session 16: Reading Skills 1',
  'Session 17: Writing Skills 1',
  'Session 18: Consolidated Activity 2',
  'Session 19: The Calendar - A',
  'Session 20: The Calendar - B',
  'Session 21: The Calendar - C',
  'Session 22: Time Gone By - A',
  'Session 23: Time Gone By - B',
  'Session 24: Time Gone By - C',
  'Session 25: Listening Skills 2',
  'Session 26: Speaking Skills 2',
  'Session 27: Consolidated Activity 3',
  'Session 28: Know Your Planet - A',
  'Session 29: Know Your Planet - B',
  'Session 30: Know Your Planet - C',
  'Session 31: What Did you Do? - A',
  'Session 32: What Did you Do? - B',
  'Session 33: What You Did',
  'Session 34: Reading Skills 2',
  'Session 35: Writing Skills 2',
  'Session 36: Consolidated Activity 4'
];

const Grade4FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Making Friends - A':
        navigate('/grade4session1');
        break;
      case 'Session 2: Making Friends - B':
        navigate('/grade4session2');
        break;
      case 'Session 3: Making Friends - C':
        navigate('/grade4session3');
        break;
      case 'Session 4: Buying Things - A':
        navigate('/grade4session4');
        break;
      case 'Session 5: Buying Things - B':
        navigate('/grade4session5');
        break;
      case 'Session 6: Buying Things - C':
        navigate('/grade4session6');
        break;
      case 'Session 7: Listening Skills 1':
        navigate('/grade4session7');
        break;
      case 'Session 8: Speaking Skills 1':
        navigate('/grade4session8');
        break;
      case 'Session 9: Consolidated Activity 1':
        navigate('/grade4session9');
        break;
      case 'Session 10: At the Park - A':
        navigate('/grade4session10');
        break;
      case 'Session 11: At the Park - B':
        navigate('/grade4session11');
        break;
      case 'Session 12: At the Park - C':
        navigate('/grade4session12');
        break;
      case 'Session 13: Home Improvement - A':
        navigate('/grade4session13');
        break;
      case 'Session 14: Home Improvement - B':
        navigate('/grade4session14');
        break;
      case 'Session 15: Home Improvement - C':
        navigate('/grade4session15');
        break;
      case 'Session 16: Reading Skills 1':
        navigate('/grade4session16');
        break;
      case 'Session 17: Writing Skills 1':
        navigate('/grade4session17');
        break;
      case 'Session 18: Consolidated Activity 2':
        navigate('/grade4session18');
        break;
      case 'Session 19: The Calendar >> Seasons':
        navigate('/grade4session19');
        break;
      case 'Session 20: The Calendar - A':
        navigate('/grade4session20');
        break;
      case 'Session 21: The Calendar - B':
        navigate('/grade4session21');
        break;
      case 'Session 22: Time Gone By - A':
        navigate('/grade4session22');
        break;
      case 'Session 23: Time Gone By - B':
        navigate('/grade4session23');
        break;
      case 'Session 24: Time Gone By - C':
        navigate('/grade4session24');
        break;
      case 'Session 25: Listening Skills 2':
        navigate('/grade4session25');
        break;
      case 'Session 26: Speaking Skills 2':
        navigate('/grade4session26');
        break;
      case 'Session 27: Consolidated Activity 3':
        navigate('/grade4session27');
        break;
      case 'Session 28: Know Your Planet - A':
        navigate('/grade4session28');
        break;
      case 'Session 29: Know Your Planet - B':
        navigate('/grade4session29');
        break;
      case 'Session 30: Know Your Planet - C':
        navigate('/grade4session30');
        break;
      case 'Session 31: What Did you Do? - A':
        navigate('/grade4session31');
        break;
      case 'Session 32: What Did you Do? - B':
        navigate('/grade4session32');
        break;
      case 'Session 33: What You Did':
        navigate('/grade4session33');
        break;
      case 'Session 34: Reading Skills 2':
        navigate('/grade4session34');
        break;
      case 'Session 35: Writing Skills 2':
        navigate('/grade4session35');
        break;
      case 'Session 36: Consolidated Activity 4':
        navigate('/grade4session36');
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 4 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
            <div
              key={index}
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

export default Grade4FoundationPage;
