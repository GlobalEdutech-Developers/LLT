import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grade11.css'; // Import the CSS file for styling

// Images (you may need to replace these with appropriate images)
import NounsKinds from '../../../assets/page4Images/Asset 135@4x.png';
import NounsNumber from '../../../assets/page4Images/Asset 135@4x.png';
import Pronouns from '../../../assets/page4Images/Asset 135@4x.png';
import AdjectiveComparison from '../../../assets/page4Images/Asset 135@4x.png';
import VerbForms from '../../../assets/page4Images/Asset 135@4x.png';
import VerbIngForm from '../../../assets/page4Images/Asset 135@4x.png';
import Adverbs from '../../../assets/page4Images/Asset 135@4x.png';
import Punctuation from '../../../assets/page4Images/Asset 135@4x.png';
import AdjectiveKinds from '../../../assets/page4Images/Asset 135@4x.png';
import AdverbsComparison from '../../../assets/page4Images/Asset 135@4x.png';
import Interjections from '../../../assets/page4Images/Asset 135@4x.png';
import Conjunctions from '../../../assets/page4Images/Asset 135@4x.png';
import DirectIndirectSpeech from '../../../assets/page4Images/Asset 135@4x.png';
import SubjectPredicate from '../../../assets/page4Images/Asset 135@4x.png';
import SubjectVerbAgreement from '../../../assets/page4Images/Asset 135@4x.png';
import TransitiveIntransitiveVerbs from '../../../assets/page4Images/Asset 135@4x.png';
import KindsOfSentences from '../../../assets/page4Images/Asset 135@4x.png';
import Prepositions from '../../../assets/page4Images/Asset 135@4x.png';
import PastParticiplesPerfectTenses from '../../../assets/page4Images/Asset 135@4x.png';

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
          <h2>Grade 11 | Grammar | Level 1</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Nouns Kinds</h3>
            <div className="content-item-content">
              <img src={NounsKinds} alt="Nouns Kinds" />
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
                  CBT (AI Based Learning)
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
            <h3>Nouns Number</h3>
            <div className="content-item-content">
              <img src={NounsNumber} alt="Nouns Number" />
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
            <h3>Pronouns</h3>
            <div className="content-item-content">
              <img src={Pronouns} alt="Pronouns" />
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
            <h3>Adjective Comparison</h3>
            <div className="content-item-content">
              <img src={AdjectiveComparison} alt="Adjective Comparison" />
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
            <h3>Verb Forms</h3>
            <div className="content-item-content">
              <img src={VerbForms} alt="Verb Forms" />
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
            <h3>Verb ing Form</h3>
            <div className="content-item-content">
              <img src={VerbIngForm} alt="Verb ing Form" />
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
            <h3>Adverbs</h3>
            <div className="content-item-content">
              <img src={Adverbs} alt="Adverbs" />
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
            <h3>Punctuation</h3>
            <div className="content-item-content">
              <img src={Punctuation} alt="Punctuation" />
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

          {/* Additional cards */}
          <div className="content-item">
            <h3>Adjective Kinds</h3>
            <div className="content-item-content">
              <img src={AdjectiveKinds} alt="Adjective Kinds" />
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
            <h3>Adverbs Comparison</h3>
            <div className="content-item-content">
              <img src={AdverbsComparison} alt="Adverbs Comparison" />
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
            <h3>Interjections</h3>
            <div className="content-item-content">
              <img src={Interjections} alt="Interjections" />
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
              <img src={Conjunctions} alt="Conjunctions" />
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
            <h3>Direct-Indirect Speech</h3>
            <div className="content-item-content">
              <img src={DirectIndirectSpeech} alt="Direct-Indirect Speech" />
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
            <h3>Subject and Predicate</h3>
            <div className="content-item-content">
              <img src={SubjectPredicate} alt="Subject and Predicate" />
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
            <h3>Subject-verb Agreement</h3>
            <div className="content-item-content">
              <img src={SubjectVerbAgreement} alt="Subject-verb Agreement" />
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
            <h3>Transitive and Intransitive Verbs</h3>
            <div className="content-item-content">
              <img src={TransitiveIntransitiveVerbs} alt="Transitive and Intransitive Verbs" />
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
            <h3>Kinds of Sentences</h3>
            <div className="content-item-content">
              <img src={KindsOfSentences} alt="Kinds of Sentences" />
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
              <img src={Prepositions} alt="Prepositions" />
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
            <h3>Past Participles and</h3>
            <h3>Perfect Tenses</h3> 
            <div className="content-item-content">
              <img src={PastParticiplesPerfectTenses} alt="Past Participles and Perfect Tenses" />
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
