import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TaskGrade1FoundationPage.css'; // Import the CSS file for styling


// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Comparison of Vowel Sounds',
  'Session 2: Facts,Opinions',
  'Session 3: Listening Skills',
  'Session 4: Syllables,Word Stress',
  'Session 5: Sound Combination,Consonant Clusters',
  'Session 6: Word Stress,Syllable Stress Rules',
  'Session 7: Listening Skills',
  'Session 8: Skimming,Scanning Skills',
  'Session 9: Silent Reading',
  'Session 10: Noun-Verb Pronunciation Difference',
  'Session 11: Noun-Verb Pronunciation Difference',
  'Session 12: Listening - Narratives',
  'Session 13: Silent Reading',
  'Session 14: Pronunciation Rules',
  'Session 15: Pronunciation of "ed" at the End of Words',
  'Session 16: Sentence Stress',
  'Session 17: The Schwa Sound',
  'Session 18: Punctuation - A',
  'Session 19: Silent Reading',
  'Session 20: Order of Words',
  'Session 21: Informal Letter Writing',
  'Session 22: Question Tags - Meaning',
  'Session 23: Speaking Skills - A',
  'Session 24: Speaking Skills - B',
  'Session 25: Speaking Skills - C',
  'Session 26: Writing Skills',
  'Session 27: Formal Letter Writing',
  'Session 28: Punctuation - B',
  'Session 29: Transformation of Sentences',
  'Session 30: Writing Skills',
  'Session 31: Speaking Skills  - A',
  'Session 32: Speaking Skills  - B',
  'Session 33: Speaking Skills  - C',
  'Session 34: Paragrap,Blog Writing',
  'Session 35: Common Speech Errors',
  'Session 36: Listening - Speech',
  'Session 37: E-mail Writing',
  'Session 38: Intonation and Modulation'
];

// Mapping sessions to their corresponding routes
const sessionRoutes = {
  'Session 1: Comparison of Vowel Sounds': 'Grade8/taskgrade8session1',
  'Session 2: Facts,Opinions': 'Grade8/taskgrade8session2',
  'Session 3: Listening Skills': 'Grade8/taskgrade8session3',
  'Session 4: Syllables,Word Stress': 'Grade8/taskgrade8session4',
  'Session 5: Sound Combination,Consonant Clusters': 'Grade8/taskgrade8session5',
  'Session 6: Word Stress,Syllable Stress Rules': 'Grade8/taskgrade8session6',
  'Session 7: Listening Skills': 'Grade8/taskgrade8session7',
  'Session 8: Skimming,Scanning Skills': 'Grade8/taskgrade8session8',
  'Session 9: Silent Reading': 'Grade8/taskgrade8session9',
  'Session 10: Noun-Verb Pronunciation Difference': 'Grade8/taskgrade8session10',
  'Session 11: Noun-Verb Pronunciation Difference': 'Grade8/taskgrade8session11',
  'Session 12: Listening - Narratives': 'Grade8/taskgrade8session12',
  'Session 13: Silent Reading': 'Grade8/taskgrade8session13',
  'Session 14: Pronunciation Rules': 'Grade8/taskgrade8session14',
  'Session 15: Pronunciation of "ed" at the End of Words': 'Grade8/taskgrade8session15',
  'Session 16: Sentence Stress': 'Grade8/taskgrade8session16',
  'Session 17: The Schwa Sound': 'Grade8/taskgrade8session17',
  'Session 18: Punctuation - A': 'Grade8/taskgrade8session18',
  'Session 19: Silent Reading': 'Grade8/taskgrade8session19',
  'Session 20: Order of Words': 'Grade8/taskgrade8session20',
  'Session 21: Informal Letter Writing': 'Grade8/taskgrade8session21',
  'Session 22: Question Tags - Meaning': 'Grade8/taskgrade8session22',
  'Session 23: Speaking Skills - A': 'Grade8/taskgrade8session23',
  'Session 24: Speaking Skills - B': 'Grade8/taskgrade8session24',
  'Session 25: Speaking Skills - C': 'Grade8/taskgrade8session25',
  'Session 26: Writing Skills': 'Grade8/taskgrade8session26',
  'Session 27: Formal Letter Writing': 'Grade8/taskgrade8session27',
  'Session 28: Punctuation - B': 'Grade8/taskgrade8session28',
  'Session 29: Transformation of Sentences - Introduction': 'Grade8/taskgrade8session29',
  'Session 30: Writing Skills': 'Grade8/taskgrade8session30',
  'Session 31: Speaking Skills - A': 'Grade8/taskgrade8session31',
  'Session 32: Speaking Skills - B': 'Grade8/taskgrade8session32',
  'Session 33: Speaking Skills - C': 'Grade8/taskgrade8session33',
  'Session 34: Paragraph,Blog Writing': 'Grade8/taskgrade8session34',
  'Session 35: Common Speech Errors': 'Grade8/taskgrade8session35',
  'Session 36: Listening - Speech': 'Grade8/taskgrade8session36',
  'Session 37: E-mail Writing': 'Grade8/taskgrade8session37',
  'Session 38: Intonation and Modulation': 'Grade8/taskgrade8session38'
};

const TaskGrade8FoundationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation when a session is clicked
  const handleSessionClick = (session) => {
    const route = sessionRoutes[session];
    if (route) {
      navigate(route); // Navigate to the corresponding session page
    } else {
      console.error(`No route found for session: ${session}`);
    }
  };

  return (
    <div className="main-content">
      <div className="header1">
        <h2>Grade 8 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 19).map((session, index) => (
            <div
              key={index}
              className="session-item"
              onClick={() => handleSessionClick(session)} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
        <div className="session-column">
          {sessions.slice(19).map((session, index) => (
            <div
              key={index + 19} // Ensure unique key for each item
              className="session-item"
              onClick={() => handleSessionClick(session)} // Add onClick handler
            >
              {session}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskGrade8FoundationPage;
