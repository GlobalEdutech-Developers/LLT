import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './CreateTaskPage.css';

const CreateTaskPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [videoSessions, setVideoSessions] = useState(location.state?.videoSessions || [
    { id: 'Foundation_Starters_Session01', label: 'Foundation Starters Session 01', videoUrl: 'https://vimeo.com/994052031' },
   
  ]);

  const [taskDetails, setTaskDetails] = useState({ taskName: '', description: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleTaskCreation = () => {
    if (taskDetails.taskName && taskDetails.description) {
      const newTask = {
        taskName: taskDetails.taskName,
        description: taskDetails.description,
      };

      // Send data to backend API to save the task
      fetch('http://localhost:3000/save-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Task saved successfully') {
            // Redirect to Assets1Page after saving the task
            navigate('/assets1', { state: { newTask } });
          } else {
            alert('Failed to save task');
          }
        })
        .catch((error) => {
          console.error('Error saving task:', error);
        });
    } else {
      alert('Please fill in both the task name and description.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="CreateTask-learning-session-container1">
      <div className="CreateTask-task-list-section1">
        <div className="CreateTask-task-card1">
          <ul className="CreateTask-task-list1">
            {videoSessions.map((session) => (
              <li key={session.id} className="CreateTask-task-item1">
                <span className="CreateTask-task-name1">{session.label}</span>
                <FontAwesomeIcon icon={faEye} className="CreateTask-task-icon1" />
                <FontAwesomeIcon icon={faTrashAlt} className="CreateTask-task-icon1" />
              </li>
            ))}
          </ul>
          <button className="CreateTask-add-more-button1">Add More</button>
        </div>
      </div>

      <div className="CreateTask-details-section1">
        <h3>Task Name:</h3>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskDetails.taskName}
          onChange={(e) => setTaskDetails({ ...taskDetails, taskName: e.target.value })}
        />
        <h3>Description:</h3>
        <textarea
          placeholder="Enter task description"
          value={taskDetails.description}
          onChange={(e) => setTaskDetails({ ...taskDetails, description: e.target.value })}
        />
        <button className="CreateTask-save-button1" onClick={handleTaskCreation}>Save</button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Task has been saved</h2>
            <p>Do you want to assign it to students?</p>
            <div className="popup-actions">
              <button
                className="popup-button yes-button"
                onClick={() => navigate('/assign')}
              >
                YES
              </button>
              <button className="popup-button no-button" onClick={handleClosePopup}>NO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTaskPage;
