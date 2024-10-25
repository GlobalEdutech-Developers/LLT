import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskPage.css';

const TaskPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleCreateTaskClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleOptionClick = (option) => {
    setShowDropdown(false); // Hide the dropdown after selection
    if (option === 'assets') {
      navigate('/assets');
    } else if (option === 'library') {
      navigate('/library');
    }
  };

  return (
    <div className="task-page">
      <div className="create-task-container">
        <button className="create-task-button" onClick={handleCreateTaskClick}>
          Create Task
          <span className="dropdown-icon">&#x25BC;</span>
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <a href="./Assets  " onClick={() => handleOptionClick('assets')}>Assets</a>
            <a href="./Library" onClick={() => handleOptionClick('library')}>Library</a>
          </div>
        )}
      </div>
      {/* Additional content or cards can go here */}
    </div>
  );
};

export default TaskPage;
