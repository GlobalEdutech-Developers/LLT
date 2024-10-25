import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

const sessions = [
  'Session 1: Listening Skill',
  'Session 2: Speaking Skill',
  'Session 3: Reading Skill',
  'Session 4: Grammar',
  'Session 5: Grammar',
  'Session 6: Writing Skill',
  'Session 7: Listening Skill',
  'Session 8: Speaking Skill',
  'Session 9: Reading Skill',
  'Session 10: Grammar',
  'Session 11: Grammar-Pronouns',
  'Session 12: Writing Skill',
  'Session 13: Listening Skill',
  'Session 14: Speaking Skill',
  'Session 15: Reading Skill',
  'Session 16: Grammar',
  'Session 17: Grammar',
  'Session 18: Grammar',
  'Session 19: Writing Skill',
  'Session 20: Listening Skill',
  'Session 21: Speaking Skill',
  'Session 22: Reading Skill',
  'Session 23: Grammar',
  'Session 24: Grammar',
  'Session 25: Grammar'
];


const TaskGrade2FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Listening Skill':
        navigate('/Grade2/taskgrade2session1');
        break;
      case 'Session 2: Speaking Skill':
        navigate('/Grade2/taskgrade2session2');
        break;
      case 'Session 3: Reading Skill':
        navigate('/Grade2/taskgrade2session3');
        break;
      case 'Session 4: Grammar':
        navigate('/Grade2/taskgrade2session4');
        break;
      case 'Session 5: Grammar':
        navigate('/Grade2/taskgrade2session5');
        break;
      case 'Session 6: Writing Skill':
        navigate('/Grade2/taskgrade2session6');
        break;
      case 'Session 7: Listening Skill':
        navigate('/Grade2/taskgrade2session7');
        break;
      case 'Session 8: Speaking Skill':
        navigate('/Grade2/taskgrade2session8');
        break;
      case 'Session 9: Reading Skill':
        navigate('/Grade2/taskgrade2session9');
        break;
      case 'Session 10: Grammar':
        navigate('/Grade2/taskgrade2session10');
        break;
      case 'Session 11: Grammar':
        navigate('/Grade2/taskgrade2session11');
        break;
      case 'Session 12: Writing Skill':
        navigate('/Grade2/taskgrade2session12');
        break;
      case 'Session 13: Listening Skill':
        navigate('/Grade2/taskgrade2session13');
        break;
      case 'Session 14: Speaking Skill':
        navigate('/Grade2/taskgrade2session14');
        break;
      case 'Session 15: Reading Skill':
        navigate('/Grade2/taskgrade2session15');
        break;
      case 'Session 16: Grammar-Describing Words':
        navigate('/Grade2/taskgrade2session16');
        break;
      case 'Session 17: Grammar':
        navigate('/Grade2/taskgrade2session17');
        break;
      case 'Session 18: Grammar':
        navigate('/Grade2/taskgrade2session18');
        break;
      case 'Session 19: Writing Skill':
        navigate('/Grade2/taskgrade2session19');
        break;
      case 'Session 20: Listening Skill':
        navigate('/Grade2/taskgrade2session20');
        break;
      case 'Session 21: Speaking Skill':
        navigate('/Grade2/taskgrade2session21');
        break;
      case 'Session 22: Reading Skill':
        navigate('/Grade2/taskgrade2session22');
        break;
      case 'Session 23: Grammar':
        navigate('/Grade2/taskgrade2session23');
        break;
      case 'Session 24: Grammar':
        navigate('/Grade2/taskgrade2session24');
        break;
      case 'Session 25: Grammar':
        navigate('/Grade2/taskgrade2session25');
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 2 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 13).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(13).map((session, index) => (
            <div
              key={index + 13} // Ensure unique key for each item
              className="session-item"
              onClick={() => handleSessionClick(session)} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade2FoundationPage;