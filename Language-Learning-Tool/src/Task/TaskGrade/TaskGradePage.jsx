import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskGradePage.css'; // Import the CSS file for styling
import classroomTeachingImg from '../../assets/page4Images/Asset 135@4x.png';
import storyTellingImg from '../../assets/page4Images/Asset 134@4x.png';
import practiceSessionImg from '../../assets/page4Images/Asset 136@4x.png';
import challengeYourselfImg from '../../assets/page4Images/Asset 137@4x.png';

const TaskGradePage = () => {
  const navigate = useNavigate();

  // Redirect to Learning Videos page
  const handleLearningVideosClick = () => {
    navigate('/learningvideos'); // Redirect to the Learning Videos page
  };

  const handleTestClick = () => {
    navigate('/test'); // Redirect to the test page
  };

  const handleBoggleClick = () => {
    navigate('/boggle'); // Redirect to the boggle page
  };

  const handleAudioVisualClick = () => {
    navigate('/storytelling'); // Redirect to the storytelling page
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 1 | Foundation</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <ul>
                <li 
                  onClick={handleLearningVideosClick}  // Navigate to LearningVideos page
                  style={{ 
                    cursor: 'pointer', 
                    color: 'black', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'
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
            <h3>Story Telling</h3>
            <div className="content-item-content">
              <img src={storyTellingImg} alt="Story Telling" />
              <ul>
                <li 
                  onClick={handleAudioVisualClick} 
                  style={{ 
                    cursor: 'pointer', 
                    color: 'black', 
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                >
                  Audio/Visual
                </li>
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
                    fontWeight: 'bold'
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
                    fontWeight: 'bold'
                  }}
                >
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskGradePage;
