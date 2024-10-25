import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskGrade11.css'; // Import the CSS file for styling

// Images
import classroomTeachingImg from '../../../assets/page4Images/Asset 135@4x.png';
import storyTellingImg from '../../../assets/page4Images/Asset 135@4x.png';
import practiceSessionImg from '../../../assets/page4Images/Asset 135@4x.png';
import challengeYourselfImg from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg1 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg2 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg3 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg4 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg5 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg6 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg7 from '../../../assets/page4Images/Asset 135@4x.png';
import additionalImg8 from '../../../assets/page4Images/Asset 135@4x.png';

const Grade1Page = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleCbtClick = () => {
    navigate('/cbt'); // Redirect to the CBT page
  };

  const handleIltClick = () => {
    navigate('/ilt'); // Redirect to the ILT page
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the first popup
  };

  const closeSecondPopup = () => {
    setIsSecondPopupOpen(false); // Close the second popup
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false); // Close the video modal
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false); // Close the PDF modal
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 1 | Foundation | Session 1: Meet the Children</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Order of Words and Clauses</h3>
            <div className="content-item-content">
              <img src={classroomTeachingImg} alt="Order of Words and Clauses" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Direct and Indirect Speech</h3>
            <div className="content-item-content">
              <img src={storyTellingImg} alt="Direct and Indirect Speech" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Active and Passive Voice</h3>
            <div className="content-item-content">
              <img src={practiceSessionImg} alt="Active and Passive Voice" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Noun</h3>
            <div className="content-item-content">
              <img src={challengeYourselfImg} alt="Noun" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          {/* Additional cards */}
          <div className="content-item">
            <h3>Pronoun</h3>
            <div className="content-item-content">
              <img src={additionalImg1} alt="Pronoun" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Verb</h3>
            <div className="content-item-content">
              <img src={additionalImg2} alt="Verb" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Adverb</h3>
            <div className="content-item-content">
              <img src={additionalImg3} alt="Adverb" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Conjunction</h3>
            <div className="content-item-content">
              <img src={additionalImg4} alt="Conjunction" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>The Present Tense</h3>
            <div className="content-item-content">
              <img src={additionalImg5} alt="The Present Tense" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>The Past Tense</h3>
            <div className="content-item-content">
              <img src={additionalImg6} alt="The Past Tense" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>The Future Tense</h3>
            <div className="content-item-content">
              <img src={additionalImg7} alt="The Future Tense" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Preposition of Time</h3>
            <div className="content-item-content">
              <img src={additionalImg8} alt="Preposition of Time" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Preposition of Place</h3>
            <div className="content-item-content">
              <img src={additionalImg8} alt="Preposition of Place" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
              </ul>
            </div>
          </div>

          <div className="content-item">
            <h3>Preposition of Direction</h3>
            <div className="content-item-content">
              <img src={additionalImg8} alt="Preposition of Direction" />
              <ul>
                <li
                  onClick={handleCbtClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleIltClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
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
            <button className="close-video-modal" onClick={closeVideoModal}>
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
      {isPdfModalOpen && (
        <div className="pdf-modal-overlay">
          <div className="pdf-modal-content">
            <button className="close-pdf-modal" onClick={closePdfModal}>
              X
            </button>
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

      {/* Popups */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-icon">
              <img src="https://path-to-your-icon.png" alt="Icon" />
            </div>
            <h3>View the content for ?</h3>
            <div className="popup-buttons">
              <button onClick={handleCbtClick}>CBT</button>
              <button onClick={handleIltClick}>ILT</button>
            </div>
          </div>
        </div>
      )}

      {isSecondPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content select-class-popup show-dropdown">
            <h3>Select Class</h3>
            <select className="select-class">
              <option value="">Select Class</option>
              {/* Add your class options here */}
            </select>
            <div className="popup-buttons">
              <button className="go-button" onClick={handleGoButtonClick}>
                GO
              </button>
              <button className="cancel-button" onClick={closeSecondPopup}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade1Page;
