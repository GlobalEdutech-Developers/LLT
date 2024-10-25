import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../Task/TaskGrade/TaskGradepage.css"; // Ensure this path is correct
import classroomTeachingImg from '../../../assets/page4Images/Asset 135@4x.png'; // Ensure this path is correct

const Grade12Session1 = () => {
  const navigate = useNavigate();

  const handleSessionChange = (event) => {
    const selectedSession = event.target.value;
    if (selectedSession) {
      navigate(selectedSession);
    }
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 12 | Foundation | Session 1: Meet the Children</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <div className="session-dropdown">
                <label htmlFor="sessionSelect">Select a Session:</label>
                <select id="sessionSelect" onChange={handleSessionChange}>
                  <option value="">--Select Session--</option>
                  <option value="/session1">Prefix 1</option>
                  <option value="/session2">Suffix 1</option>
                  <option value="/session3">Prefix 2</option>
                  <option value="/session4">Suffix 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade12Session1;
