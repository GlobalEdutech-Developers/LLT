import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

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

const Grade1FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Meet the Children':
        navigate('/grade1session1');
        break;
      case 'Session 2: In a Classroom':
        navigate('/grade1session2');
        break;
      case 'Session 3: At the Sports Ground':
        navigate('/grade1session3');
        break;
      case 'Session 4: Inside a Room':
        navigate('/grade1session4');
        break;
      case 'Session 5: At a Farm':
        navigate('/grade1session5');
        break;
      case 'Session 6: In the Dining Room':
        navigate('/grade1session6');
        break;
      case 'Session 7: At the Street Shops':
        navigate('/grade1session7');
        break;
      case 'Session 8: In the Vegetable Market':
        navigate('/grade1session8');
        break;
      case 'Session 9: On a Road Trip':
        navigate('/grade1session9');
        break;
      case 'Session 10: On a Family Visit':
        navigate('/grade1session10');
        break;
      case 'Session 11: On a Picnic':
        navigate('/grade1session11');
        break;
      case 'Session 12: On a Wildlife Trip':
        navigate('/grade1session12');
        break;
      case 'Session 13: At the Funfair':
        navigate('/grade1session13');
        break;
      case 'Session 14: At the Sports Centre':
        navigate('/grade1session14');
        break;
      case 'Session 15: At a Birthday Party':
        navigate('/grade1session15');
        break;
      case 'Session 16: In the Animal Show':
        navigate('/grade1session16');
        break;
      case 'Session 17: On the Roadside':
        navigate('/grade1session17');
        break;
      case 'Session 18: On the Roadside':
        navigate('/grade1session18');
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-content"> {/* Changed to match Grade2FoundationPage class */}
      <div className="header1"> {/* Changed to match Grade2FoundationPage class */}
        <h2>Grade 1 | Foundation</h2>
      </div>
      
      <div className="session-list"> {/* Class is consistent with Grade2 */}
        {/* First Column of Sessions */}
        <div className="session-column">
          {sessions.slice(0, 9).map((session, index) => (
            <div
              key={index}
              id={`session-item-${index + 1}`} // Adding unique ID to each session item
              className="session-item"
              onClick={() => handleSessionClick(session)} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>

        {/* Second Column of Sessions */}
        <div className="session-column">
          {sessions.slice(9).map((session, index) => (
            <div
              key={index + 9}
              id={`session-item-${index + 10}`} // Adding unique ID to each session item
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

export default Grade1FoundationPage;
