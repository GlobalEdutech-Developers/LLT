import React, { useState } from 'react';
import './TaskGrade11.css'; // Import the CSS file for styling

import Determiners from '../../../assets/page4Images/Asset 135@4x.png';
import LinkingWords from '../../../assets/page4Images/Asset 135@4x.png';
import AdverbsPlaceandType from '../../../assets/page4Images/Asset 135@4x.png';
import Clauses from '../../../assets/page4Images/Asset 135@4x.png';
import PassiveVoice from '../../../assets/page4Images/Asset 135@4x.png';
import AdjectivesComparativeandSuperlative from '../../../assets/page4Images/Asset 135@4x.png';
import ModalAuxiliaries from '../../../assets/page4Images/Asset 135@4x.png';
import WordOrderinSentenceTypes from '../../../assets/page4Images/Asset 135@4x.png';
import ReportedSpeech from '../../../assets/page4Images/Asset 135@4x.png';
import ThePresentTense from '../../../assets/page4Images/Asset 135@4x.png';
import ThePastTense from '../../../assets/page4Images/Asset 135@4x.png';
import TheFutureTense from '../../../assets/page4Images/Asset 135@4x.png';

const Grade1Page = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

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
          <h2>English | Grammar | Level 5</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Determiners</h3>
            <div className="content-item-content">
              <img src={Determiners} alt="Classroom Teaching" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT (Computer Based Learning)
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Linking Words</h3>
            <div className="content-item-content">
              <img src={LinkingWords} alt="Story Telling" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Adverbs</h3>
            <div className="content-item-content">
              <img src={AdverbsPlaceandType} alt="Practice Session" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Clauses</h3>
            <div className="content-item-content">
              <img src={Clauses} alt="Challenge Yourself" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>

          {/* Additional cards */}
          <div className="content-item">
            <h3>Passive Voice</h3>
            <div className="content-item-content">
              <img src={PassiveVoice} alt="Additional Section 1" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                    
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Adjectives</h3>
            <div className="content-item-content">
              <img src={AdjectivesComparativeandSuperlative} alt="Additional Section 2" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Modal Auxiliaries</h3>
            <div className="content-item-content">
              <img src={ModalAuxiliaries} alt="Additional Section 3" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3> The Word  Order  in  Sentence</h3>
            <div className="content-item-content">
              <img src={WordOrderinSentenceTypes} alt="Additional Section 4" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Reported Speech</h3>
            <div className="content-item-content">
              <img src={ReportedSpeech} alt="Additional Section 5" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Present Tense</h3>
            <div className="content-item-content">
              <img src={ThePresentTense} alt="Additional Section 6" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Past Tense</h3>
            <div className="content-item-content">
              <img src={ThePastTense} alt="Additional Section 7" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Future Tense</h3>
            <div className="content-item-content">
              <img src={TheFutureTense} alt="Additional Section 8" />
              <ul>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  ILT
                </li>
                <li
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                  CBT
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
    </div>
  );
};

export default Grade1Page;


