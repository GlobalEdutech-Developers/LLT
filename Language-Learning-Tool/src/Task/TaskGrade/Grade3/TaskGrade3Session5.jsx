import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../TaskGradePage.css'; // Import the CSS file for styling
import classroomTeachingImg from '../../../assets/page4Images/Asset 135@4x.png';
import practiceSessionImg from '../../../assets/page4Images/Asset 136@4x.png';
import challengeYourselfImg from '../../../assets/page4Images/Asset 137@4x.png';

const Grade3Page = () => {
  const navigate = useNavigate();

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 3 | Session 5: My Family-Tell Us Your Age</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <ul>
                <li style={{ color: 'black', textDecoration: 'underline' }}
                 onClick={() => navigate('/learningVideos')}
                 >
                  Learning Videos
                </li>
                <li style={{ color: 'black', textDecoration: 'underline' }}>
                  Vocabulary
                </li>
                <li style={{ color: 'black', textDecoration: 'underline' }}>
                  Lesson Plan
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Practice Session</h3>
            <div className="content-item-content">
              <img src={practiceSessionImg} alt="Practice Session" />
              <ul>
                <li style={{ color: 'black', textDecoration: 'underline' }}>
                  CBT (AI Based Learning)
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Challenge Yourself</h3>
            <div className="content-item-content">
              <img src={challengeYourselfImg} alt="Challenge Yourself" />
              <ul>
                <li style={{ color: 'black', textDecoration: 'underline' }}>
                  Quiz
                </li>
                <li
                  style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => navigate('/boggle')}
                >
                  Boggle
                </li>
                <li
                  style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => navigate('/test')}
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

export default Grade3Page;
