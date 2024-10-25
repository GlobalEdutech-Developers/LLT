import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling

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
const TaskGrade3FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    switch (session) {
      case 'Session 1: Meeting People-A':
        navigate('Grade3/taskgrade3session1');
        break;
      case 'Session 2: Meeting People-B':
        navigate('Grade3/taskgrade3session2');
        break;
      case 'Session 3: Meeting People-C':
        navigate('Grade3/taskgrade3session3');
        break;
      case 'Session 4: My Family-A':
        navigate('Grade3/taskgrade3session4');
        break;
      case 'Session 5: My Family-B':
        navigate('Grade3/taskgrade3session5');
        break;
      case 'Session 6: My Family-C':
        navigate('Grade3/taskgrade3session6');
        break;
      case 'Session 7: Listening Skills 1':
        navigate('Grade3/taskgrade3session7');
        break;
      case 'Session 8: Speaking Skills 1':
        navigate('Grade3/taskgrade3session8');
        break;
      case 'Session 9: Consolidated Activity 1':
        navigate('Grade3/taskgrade3session9');
        break;
      case 'Session 10: Asking Questions':
        navigate('Grade3/taskgrade3session10');
        break;
      case 'Session 11: Asking Questions':
        navigate('Grade3/taskgrade3session11');
        break;
      case 'Session 12: Asking Questions':
        navigate('Grade3/taskgrade3session12');
        break;
      case 'Session 13: Colours Around You':
        navigate('Grade3/taskgrade3session13');
        break;
      case 'Session 14: Colours Around You':
        navigate('Grade3/taskgrade3session14');
        break;
      case 'Session 15: Colours Around You':
        navigate('Grade3/taskgrade3session15');
        break;
      case 'Session 16: Reading Skills 1':
        navigate('Grade3/taskgrade3session16');
        break;
      case 'Session 17: Writing Skills 1':
        navigate('Grade3/taskgrade3session17');
        break;
      case 'Session 18: Consolidated Activity 2':
        navigate('Grade3/grade3session18');
        break;
      case 'Session 19: Holiday Getaways':
        navigate('Grade3/taskgrade3session19');
        break;
      case 'Session 20: Holiday Getaways':
        navigate('Grade3/taskgrade3session20');
        break;
      case 'Session 21: Holiday Getaways':
        navigate('Grade3/taskgrade3session21');
        break;
      case 'Session 22: Home Sweet Home':
        navigate('Grade3/taskgrade3session22');
        break;
      case 'Session 23: Home Sweet Home':
        navigate('Grade3/taskgrade3session23');
        break;
      case 'Session 24: Home Sweet Home':
        navigate('Grade3/taskgrade3session24');
        break;
      case 'Session 25: Listening Skills 2':
        navigate('Grade3/taskgrade3session25');
        break;
      case 'Session 26: Speaking Skills 2':
        navigate('Grade3/taskgrade3session26');
        break;
      case 'Session 27: Consolidated Activity 3':
        navigate('Grade3/taskgrade3session27');
        break;
      case 'Session 28: Its My Life-A':
        navigate('Grade3/taskgrade3session28');
        break;
      case 'Session 29: Its My Life-B':
        navigate('Grade3/taskgrade3session29');
        break;
      case 'Session 30: Its My Life-C':
        navigate('Grade3/taskgrade3session30');
        break;
      case 'Session 31: Food for Thought-A':
        navigate('Grade3/taskgrade3session31');
        break;
      case 'Session 32: Food for Thought-B':
        navigate('Grade3/taskgrade3session32');
        break;
      case 'Session 33: Food for Thought-C':
        navigate('Grade3/taskgrade3session33');
        break;
      case 'Session 34: Reading Skills 2':
        navigate('Grade3/taskgrade3session34');
        break;
      case 'Session 35: Writing Skills 2':
        navigate('Grade3/taskgrade3session35');
        break;
      case 'Session 36: Consolidated Activity 4':
        navigate('Grade3/taskgrade3session36');
        break;
      default:
        break;
    }
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

export default TaskGrade3FoundationPage;
