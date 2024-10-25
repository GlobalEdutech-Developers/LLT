import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grade11.css'; // Import the CSS file for styling

// Images
import AdverbsImage from '../../../assets/page4Images/Asset 135@4x.png';
import AdjectivesImage from '../../../assets/page4Images/Asset 135@4x.png';
import PrepositionsImage from '../../../assets/page4Images/Asset 135@4x.png';
import PronounsImage from '../../../assets/page4Images/Asset 135@4x.png';
import VerbsIncompletePredicationsImage from '../../../assets/page4Images/Asset 135@4x.png';
import ActivePassiveVoiceImage from '../../../assets/page4Images/Asset 135@4x.png';
import PossessiveAdjectivesPronounsImage from '../../../assets/page4Images/Asset 135@4x.png';
import VerbsContractedFormImage from '../../../assets/page4Images/Asset 135@4x.png';
import SentencesPhrasesClausesImage from '../../../assets/page4Images/Asset 135@4x.png';
import KindsOfPhrasesImage from '../../../assets/page4Images/Asset 135@4x.png';
import KindsOfSentencesClausesImage from '../../../assets/page4Images/Asset 135@4x.png';
import DirectIndirectSpeechImage from '../../../assets/page4Images/Asset 135@4x.png';
import ConjunctionsImage from '../../../assets/page4Images/Asset 135@4x.png';
import ParticiplesGerundsImage from '../../../assets/page4Images/Asset 135@4x.png';

const Grade1Page = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

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

  const handleSelfReviewClick = () => {
    setIsVideoModalOpen(true); // Open the video modal
  };

  const handleGoButtonClick = () => {
    setIsSecondPopupOpen(false); // Close the second popup
    navigate('/video'); // Navigate to the video page
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
          <h2>Grade 11 | Grammar | Level 3</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Adverbs</h3>
            <div className="content-item-content">
              <img src={AdverbsImage} alt="Adverbs" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Adjectives</h3>
            <div className="content-item-content">
              <img src={AdjectivesImage} alt="Adjectives" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Prepositions</h3>
            <div className="content-item-content">
              <img src={PrepositionsImage} alt="Prepositions" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Pronouns (Reflexive)</h3>
            <div className="content-item-content">
              <img src={PronounsImage} alt="Pronouns (Reflexive)" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Verbs Incomplete Predications</h3>
            <div className="content-item-content">
              <img src={VerbsIncompletePredicationsImage} alt="Verbs Incomplete Predications" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Active & Passive Voice</h3>
            <div className="content-item-content">
              <img src={ActivePassiveVoiceImage} alt="Active and Passive Voice" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Possessive Adjectives and</h3>
            <h3> Possessive Pronouns</h3>
            <div className="content-item-content">
              <img src={PossessiveAdjectivesPronounsImage} alt="Possessive Adjectives and Possessive Pronouns" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Verbs Contracted Form</h3>
            <div className="content-item-content">
              <img src={VerbsContractedFormImage} alt="Verbs Contracted Form" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Sentences, Phrases and Clauses</h3>
            <div className="content-item-content">
              <img src={SentencesPhrasesClausesImage} alt="Sentences, Phrases and Clauses" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Kinds of Phrases</h3>
            <div className="content-item-content">
              <img src={KindsOfPhrasesImage} alt="Kinds of Phrases" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Kinds of Sentences & Clauses</h3>
            <div className="content-item-content">
              <img src={KindsOfSentencesClausesImage} alt="Kinds of Sentences and Clauses" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Direct and Indirect Speech</h3>
            <div className="content-item-content">
              <img src={DirectIndirectSpeechImage} alt="Direct and Indirect Speech" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Conjunctions</h3>
            <div className="content-item-content">
              <img src={ConjunctionsImage} alt="Conjunctions" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Participles and Gerunds</h3>
            <div className="content-item-content">
              <img src={ParticiplesGerundsImage} alt="Participles and Gerunds" />
              <ul>
                <li
                  onClick={handleLearningVideosClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  onClick={handleTeachingClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
                <li
                  onClick={handleSelfReviewClick}
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  WBT
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
              <button onClick={handleTeachingClick}>Teaching</button>
              <button onClick={handleSelfReviewClick}>Self Review</button>
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
