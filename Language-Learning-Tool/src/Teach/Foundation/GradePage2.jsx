import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GradePage.css'; // Import the CSS file for styling
import classroomTeachingImg from '../../assets/page4Images/Asset 135@4x.png';
import practiceSessionImg from '../../assets/page4Images/Asset 136@4x.png';
import challengeYourselfImg from '../../assets/page4Images/Asset 137@4x.png';

const Grade2Page = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);

  const handleTestClick = () => {
    navigate('/test'); // Redirect to the test page
  };

  const handleBoggleClick = () => {
    navigate('/boggle'); // Redirect to the boggle page
  };

  const handleLearningVideosClick = () => {
    setIsPopupOpen(true); // Open the first popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the first popup
  };

  const handleTeachingClick = () => {
    setIsPopupOpen(false); // Close the first popup
    setIsSecondPopupOpen(true); // Open the second popup
  };

  const closeSecondPopup = () => {
    setIsSecondPopupOpen(false); // Close the second popup
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 2 | Foundation</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <ul>
                <li 
                  onClick={handleLearningVideosClick} 
                  style={{ 
                    cursor: 'pointer', 
                    color: 'black', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'  // Optional: Make text bold
                  }}
                >
                  Learning Videos
                </li>
                <li>Vocabulary</li>
                <li>Lesson Plan</li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Practice Session</h3>
            <div className="content-item-content">
              <img src={practiceSessionImg} alt="Practice Session" />
              <ul>
                <li>CBT(AI Based Learning)</li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Challenge Yourself</h3>
            <div className="content-item-content">
              <img src={challengeYourselfImg} alt="Challenge Yourself" />
              <ul>
                <li>Quiz</li>
                <li 
                  onClick={handleBoggleClick} 
                  style={{ 
                    cursor: 'pointer', 
                    color: 'black', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'  // Optional: Make text bold
                  }}
                >
                  Boggle
                </li>
                <li 
                  onClick={handleTestClick} 
                  style={{ 
                    cursor: 'pointer', 
                    color: 'black', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'  // Optional: Make text bold
                  }}
                >
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-icon">
              <img src="https://path-to-your-icon.png" alt="Icon" />
            </div>
            <h3>View the content for ?</h3>
            <div className="popup-buttons">
              <button onClick={handleTeachingClick}>Teaching</button>
              <button onClick={closePopup}>Self Review</button>
            </div>
          </div>
        </div>
      )}

      {isSecondPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content select-class-popup">
            <h3>Select Class</h3>
            <select className="select-class">
              <option value="">Select Class</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              {/* Add more classes as needed */}
            </select>
            <div className="popup-buttons">
              <button className="go-button" onClick={() => { /* Logic for GO button */ }}>GO</button>
              <button className="cancel-button" onClick={closeSecondPopup}>CANCEL</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade2Page;
