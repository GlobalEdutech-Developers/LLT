import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../GradePage.css'; // Import the CSS file for styling
import classroomTeachingImg from '../../../assets/page4Images/Asset 135@4x.png';
import storyTellingImg from '../../../assets/page4Images/Asset 134@4x.png';
import practiceSessionImg from '../../../assets/page4Images/Asset 136@4x.png';
import challengeYourselfImg from '../../../assets/page4Images/Asset 137@4x.png';

const Grade2Page = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isTeachVideoModalOpen, setIsTeachVideoModalOpen] = useState(false);
  const [isTeachPdfModalOpen, setIsTeachPdfModalOpen] = useState(false);

  // Functions to close the modals
  const closeTeachVideoModal = () => setIsTeachVideoModalOpen(false);
  const closeTeachPdfModal = () => setIsTeachPdfModalOpen(false);

  // Click Handlers for navigation and modals
  const handleTeachLearningVideosClick = () => navigate('/learning-videos');
  const handleTeachVocabularyClick = () => navigate('/vocabulary');
  const handleTeachLessonPlanClick = () => setIsTeachPdfModalOpen(true); // Open PDF modal
  const handleTeachAudioVisualClick = () => navigate('/audio-visual');
  const handleTeachCBTClick = () => navigate('/cbt');
  const handleTeachQuizClick = () => navigate('/quiz');
  const handleTeachBoggleClick = () => navigate('/boggle');
  const handleTeachTestClick = () => navigate('/test');

  return (
    <div className="grade-teach-container">
      <div className="main-teach-content">
        <div className="teach-header">
          <h2>Grade 5 | Session 30: Know Your Planet - C</h2>
        </div>

        {/* Content Grid */}
        <div className="teach-content-grid">
          {/* Classroom Teaching Card */}
          <div className="teach-content-item">
            <h3>Classroom Teaching</h3>
            <div className="teach-content-item-content">
              <img src={classroomTeachingImg} alt="Classroom Teaching" />
              <ul>
                <li onClick={handleTeachLearningVideosClick} className="teach-clickable">
                  Learning Videos
                </li>
                <li onClick={handleTeachVocabularyClick} className="teach-clickable">
                  Vocabulary
                </li>
                <li onClick={handleTeachLessonPlanClick} className="teach-clickable">
                  Lesson Plan
                </li>
              </ul>
            </div>
          </div>

          {/* Story Telling Card */}
          <div className="teach-content-item">
            <h3>Story Telling</h3>
            <div className="teach-content-item-content">
              <img src={storyTellingImg} alt="Story Telling" />
              <ul>
                <li onClick={handleTeachAudioVisualClick} className="teach-clickable">
                  Audio/Visual
                </li>
              </ul>
            </div>
          </div>

          {/* Practice Session Card */}
          <div className="teach-content-item">
            <h3>Practice Session</h3>
            <div className="teach-content-item-content">
              <img src={practiceSessionImg} alt="Practice Session" />
              <ul>
                <li onClick={handleTeachCBTClick} className="teach-clickable">
                  CBT (Computer Based Learning)
                </li>
              </ul>
            </div>
          </div>

          {/* Challenge Yourself Card */}
          <div className="teach-content-item">
            <h3>Challenge Yourself</h3>
            <div className="teach-content-item-content">
              <img src={challengeYourselfImg} alt="Challenge Yourself" />
              <ul>
                <li onClick={handleTeachQuizClick} className="teach-clickable">
                  Quiz
                </li>
                <li onClick={handleTeachBoggleClick} className="teach-clickable">
                  Boggle
                </li>
                <li onClick={handleTeachTestClick} className="teach-clickable">
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isTeachVideoModalOpen && (
        <div className="teach-video-modal-overlay">
          <div className="teach-video-modal-content">
            <button className="close-teach-video-modal" onClick={closeTeachVideoModal}>
              X
            </button>
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
      {isTeachPdfModalOpen && (
        <div className="teach-pdf-modal-overlay">
          <div className="teach-pdf-modal-content">
            <button className="close-teach-pdf-modal" onClick={closeTeachPdfModal}>
              X
            </button>
            <iframe
              src="/src/assets/pdf/School Profile Final 2024.pdf" // Ensure the correct path is provided
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

export default Grade2Page;
