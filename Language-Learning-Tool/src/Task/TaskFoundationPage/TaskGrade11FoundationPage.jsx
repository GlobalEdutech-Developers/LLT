import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade11FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
  'Level 5',
  'Level 6',
  'Level 7',
  'Level 8',
];

const TaskGrade11FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session.trim()) {
      case 'Level 1':
        navigate('Grade11/taskgrade11session1');
        break;
      case 'Level 2':
        navigate('Grade11/taskgrade11session2');
        break;
      case 'Level 3':
        navigate('Grade11/taskgrade11session3');
        break;
      case 'Level 4':
        navigate('Grade11/taskgrade11session4');
        break;
      case 'Level 5':
        navigate('Grade11/taskgrade11session5');
        break;
      case 'Level 6':
        navigate('Grade11/taskgrade11session6');
        break;
      case 'Level 7':
        navigate('Grade11/taskgrade11session7');
        break;
      case 'Level 8':
        navigate('Grade11/taskgrade11session8');
        break;
      default:
        navigate('/taskgrade2'); // Redirect to the GradePage2 page for other levels
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 11 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
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
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18} // Ensure unique key for each item
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

export default TaskGrade11FoundationPage;
