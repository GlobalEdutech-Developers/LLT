import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TaskGradePage.css';
import classroomTeachingImg from '../../../assets/page4Images/Asset 135@4x.png';
import storyTellingImg from '../../../assets/page4Images/Asset 134@4x.png';
import practiceSessionImg from '../../../assets/page4Images/Asset 136@4x.png';
import challengeYourselfImg from '../../../assets/page4Images/Asset 137@4x.png';

const Grade1Page = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const navigate = useNavigate();

  // Functions to close the modals
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false);
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 1 | Foundation|Session 4: Inside a Room</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Classroom Teaching</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <ul>
                <li
                  style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }}
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
            <h3>Story Telling</h3>
            <div className="content-item-content">
              <img src={storyTellingImg} alt="Story Telling" />
              <ul>
                <li style={{ color: 'black', textDecoration: 'underline' }}>
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
                <li style={{ color: 'black', textDecoration: 'underline' }}
                 onClick={() => navigate('/boggle')}>
                  Boggle
                </li>
                <li style={{ color: 'black', textDecoration: 'underline' }}
                onClick={() => navigate('/test')}>
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay">
          <div className="video-modal-content">
            <button className="close-video-modal" onClick={closeVideoModal}>X</button>
            <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/-ERWlp828kY?si=SECeltEHU1F669g2"
              title="Self Review Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {isPdfModalOpen && (
        <div className="pdf-modal-overlay">
          <div className="pdf-modal-content">
            <button className="close-pdf-modal" onClick={closePdfModal}>X</button>
            <iframe
              src="/src/assets/pdf/School Profile  Final 2024.pdf"
              title="Lesson Plan PDF"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade1Page;


