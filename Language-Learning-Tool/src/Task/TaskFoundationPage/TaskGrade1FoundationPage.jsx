import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

const sessions = [
  'Session 1: Meet the Children',
  'Session 2: In a Classroom',
  'Session 3: At the Sports Ground',
  'Session 4: Inside a Room',
  'Session 5: At a Farm',
  'Session 6: In the Dining Room',
  'Session 7: At the Street Shops',
  'Session 8: In the Vegetable Market',
  'Session 9: On a Road Trip',
  'Session 10: On a Family Visit',
  'Session 11: On a Picnic',
  'Session 12: On a Wildlife Trip',
  'Session 13: At the Funfair',
  'Session 14: At the Sports Centre',
  'Session 15: At a Birthday Party',
  'Session 16: In the Animal Show',
  'Session 17: On the Roadside',
  'Session 18: On the Roadside'
];

const TaskGrade1FoundationPage = () => {
  const navigate = useNavigate();

  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Meet the Children':
        navigate('/taskgrade');
        break;
      case 'Session 2: In a Classroom':
        navigate('/Grade1/taskgrade1session2');
        break;
      case 'Session 3: At the Sports Ground':
        navigate('/Grade1/taskgrade1session3');
        break;
      case 'Session 4: Inside a Room':
        navigate('/Grade1/taskgrade1session4');
        break;
      case 'Session 5: At a Farm':
        navigate('/Grade1/taskgrade1session5');
        break;
      case 'Session 6: In the Dining Room':
        navigate('/Grade1/taskgrade1session6');
        break;
      case 'Session 7: At the Street Shops':
        navigate('/Grade1/taskgrade1session7');
        break;
      case 'Session 8: In the Vegetable Market':
        navigate('/Grade1/taskgrade1session8');
        break;
      case 'Session 9: On a Road Trip':
        navigate('/Grade1/taskgrade1session9');
        break;
      case 'Session 10: On a Family Visit':
        navigate('/Grade1/taskgrade1session10');
        break;
      case 'Session 11: On a Picnic':
        navigate('/Grade1/taskgrade1session11');
        break;
      case 'Session 12: On a Wildlife Trip':
        navigate('/Grade1/taskgrade1session12');
        break;
      case 'Session 13: At the Funfair':
        navigate('/Grade1/taskgrade1session13');
        break;
      case 'Session 14: At the Sports Centre':
        navigate('/Grade1/taskgrade1session14');
        break;
      case 'Session 15: At a Birthday Party':
        navigate('Grade1/taskgrade1session15');
        break;
      case 'Session 16: In the Animal Show':
        navigate('/Grade1/taskgrade1session16');
        break;
      case 'Session 17: On the Roadside':
        navigate('/Grade1/taskgrade1session17');
        break;
      case 'Session 18: On the Roadside':
        navigate('/Grade1/taskgrade1session18');
        break;
      default:
        break;
    }
  };

  return (
    <div className="grade1-main-content">
      {/* Header section for the page */}
      <div className="grade1-header1">
        <h2>Grade 1 Foundation </h2>
      </div>
      <div className="grade1-session-list">
        <div className="grade1-session-column">
          {sessions.slice(0, 9).map((session, index) => (
            <div
              key={index}
              className="grade1-session-item"
              onClick={() => handleSessionClick(session)} // Pass the session to the handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="grade1-session-column">
          {sessions.slice(9).map((session, index) => (
            <div
              key={index + 9}
              className="grade1-session-item"
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

export default TaskGrade1FoundationPage;
