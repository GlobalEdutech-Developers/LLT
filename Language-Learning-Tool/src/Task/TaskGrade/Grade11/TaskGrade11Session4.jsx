import React, { useState } from 'react';
import './TaskGrade11.css'; // Import the CSS file for styling

// Images
import NounsImage from '../../../assets/page4Images/Asset 135@4x.png';
import ArticlesImage from '../../../assets/page4Images/Asset 135@4x.png';
import PronounsImage from '../../../assets/page4Images/Asset 135@4x.png';
import VerbsImage from '../../../assets/page4Images/Asset 135@4x.png';
import AdverbsImage from '../../../assets/page4Images/Asset 135@4x.png';
import AdjectivesImage from '../../../assets/page4Images/Asset 135@4x.png';
import ActivePassiveVoiceImage from '../../../assets/page4Images/Asset 135@4x.png';
import SubjectVerbAgreementImage from '../../../assets/page4Images/Asset 135@4x.png';
import TensesImage from '../../../assets/page4Images/Asset 135@4x.png';
import SentencesImage from '../../../assets/page4Images/Asset 135@4x.png';
import DirectIndirectSpeechImage from '../../../assets/page4Images/Asset 135@4x.png';
import PrepositionsImage from '../../../assets/page4Images/Asset 135@4x.png';

const Grade1Page = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const closeVideoModal = () => {
    setIsVideoModalOpen(false); // Close the video modal
  };

  return (
    <div className="grade-container">
      <div className="main-content1">
        <div className="header1">
          <h2>Grade 1 | Foundation | Session 1: Meet the Children</h2>
        </div>
        <div className="content-grid">
          <div className="content-item">
            <h3>Nouns</h3>
            <div className="content-item-content">
              <img src={NounsImage} alt="Nouns" />
              <ul>
                <li
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
            <h3>Articles</h3>
            <div className="content-item-content">
              <img src={ArticlesImage} alt="Articles" />
              <ul>
                <li
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
            <h3>Pronouns</h3>
            <div className="content-item-content">
              <img src={PronounsImage} alt="Pronouns" />
              <ul>
                <li
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
            <h3>Verbs</h3>
            <div className="content-item-content">
              <img src={VerbsImage} alt="Verbs" />
              <ul>
                <li
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
            <h3>Adverbs</h3>
            <div className="content-item-content">
              <img src={AdverbsImage} alt="Adverbs" />
              <ul>
                <li
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
            <h3>Adjectives</h3>
            <div className="content-item-content">
              <img src={AdjectivesImage} alt="Adjectives" />
              <ul>
                <li
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
            <h3>Active & Passive Voice</h3>
            <div className="content-item-content">
              <img src={ActivePassiveVoiceImage} alt="Active and Passive Voice" />
              <ul>
                <li
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
            <h3>Subject-Verb Agreement</h3>
            
            <div className="content-item-content">
              <img src={SubjectVerbAgreementImage} alt="Subject-Verb Agreement" />
              <ul>
                <li
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
            <h3>Tenses</h3>
            <div className="content-item-content">
              <img src={TensesImage} alt="Tenses" />
              <ul>
                <li
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
            <h3>Sentences</h3>
            <div className="content-item-content">
              <img src={SentencesImage} alt="Sentences" />
              <ul>
                <li
                  style={{
                    cursor: 'pointer',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                >
                .ILT(Instructor-Led Training)
                </li>
              </ul>
            </div>
          </div>
          <div className="content-item">
            <h3>Direct & Indirect Speech</h3>
            <div className="content-item-content">
              <img src={DirectIndirectSpeechImage} alt="Direct and Indirect Speech" />
              <ul>
                <li
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
            <h3>Prepositions</h3>
            <div className="content-item-content">
              <img src={PrepositionsImage} alt="Prepositions" />
              <ul>
                <li
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
    </div>
  );
};

export default Grade1Page;
