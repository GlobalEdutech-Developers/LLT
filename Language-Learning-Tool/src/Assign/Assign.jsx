import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Adjust based on the task folder location
  // Adjust based on the assign folder location

import './Assign.css';

// Function to format date to 'DD MMM YYYY' (e.g., '12 Sep 2024')
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Assign = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  // Fetch assignments from the backend when the component is mounted
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/assignments');
        setAssignments(response.data); // Assuming the data is returned as an array of assignments
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  const handleCreateTaskClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleOptionClick = (option) => {
    setShowDropdown(false); // Hide the dropdown after selection
    if (option === 'assets1') {
      navigate('/assets1'); // Navigate to Assets1 form
    } else if (option === 'library') {
      navigate('/library'); // Navigate to Library form
    }
  };

  return (
    <div className="assign-page">
      <div className="create-assign-container">
        <button className="create-assign-button" onClick={handleCreateTaskClick}>
          Create Assignment
          <span className="dropdown-icon">&#x25BC;</span>
        </button>
        {showDropdown && (
          <div className="assign-dropdown-menu">
            <a href="#" onClick={() => handleOptionClick('assets1')}>Assets</a>
            <a href="#" onClick={() => handleOptionClick('library')}>Library</a>
          </div>
        )}
      </div>

      {/* Display Assignments Section */}
      <h1>Assigned Tasks</h1>
      <div className="assignments-grid">
        {assignments.length === 0 ? (
          <p>No assignments found</p>
        ) : (
          assignments.map((assignment, index) => (
            <div key={index} className="assignment-card">
              <div className="assignment-header">
                <h2 className="assignment-title">{assignment.assignment_name}</h2>
              </div>
              <p className="learners-count">Learners: {assignment.selectedLearners?.length || 0}</p>
              <div className="tasks-info">
                <span className="tasks-count">Tasks: {assignment.tasks?.length || 0}</span>
                <div className="task-due-info">
                  <p>Due: {assignment.end_date ? formatDate(assignment.end_date) : 'N/A'}</p>
                  <p>Created On: {assignment.start_date ? formatDate(assignment.start_date) : 'N/A'}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-task" element={<CreateTaskPage />} />
        <Route path="/assign" element={<AssignPage />} /> {/* Add this route */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default Assign;
