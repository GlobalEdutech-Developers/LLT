import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Grade1FoundationPage.css'; // Import the CSS file for styling

// Updated sessions list based on the provided data
const sessions = [
  'Session 1: Kinds of Consonant Sounds',
  'Session 2: Kinds of Consonant Sounds',
  'Session 3: Facts and Opinions',
  'Session 4: Listening - News Article',
  'Session 5: Punctuation - A',
  'Session 6: Skimming,Scanning Skills',
  'Session 7: Story Reading',
  'Session 8: Consolidated Activity',
  'Session 9: Kinds of Consonant Sounds',
  'Session 10: Kinds of Consonant Sounds',
  'Session 11: Listening - Conversation',
  'Session 12: Silent Reading',
  'Session 13: Writing Skills',
  'Session 14: Punctuation - B',
  'Session 15: Consolidated Activity',
  'Session 16: Kinds of Consonant Sounds',
  'Session 17: Listening - Advertisement',
  'Session 18: Story Reading',
  'Session 19: Speaking Skills - A',
  'Session 20: Speaking Skills- B',
  'Session 21: Speaking Skills- C',
  'Session 22: Writing Skills',
  'Session 23: Consolidated Activity',
  'Session 24: Kinds of Vowel Sounds',
  'Session 25: Kinds of Vowel Sounds',
  'Session 26: Short and Long Vowel Sounds',
  'Session 27: Speaking Skills A',
  'Session 28: Speaking Skills- B',
  'Session 29: Speaking and Writing Skills',
  'Session 30: Listening - Narratives',
  'Session 31: Formal and Informal Letter',
  'Session 32: Consolidated Activity',
  'Session 33: Silent Reading',
  'Session 34: Listening Skills',
  'Session 35: Order of Words',
  'Session 36: Writing Skills', 
  'Session 37: Consolidated Activity',
  'Session 38: Intonation and Modulation'
];

// Mapping sessions to their corresponding routes
const sessionRoutes = {
  'Session 1: Kinds of Consonant Sounds': '/grade7session1',
  'Session 2: Kinds of Consonant Sounds': '/grade7session2',
  'Session 3: Facts and Opinions': '/grade7session3',
  'Session 4: Listening - News Article': '/grade7session4',
  'Session 5: Punctuation - A': '/grade7session5',
  'Session 6: Skimming,Scanning Skills': '/grade7session6',
  'Session 7: Story Reading ': '/grade7session7',
  'Session 8: Consolidated Activity': '/grade7session8',
  'Session 9: Kinds of Consonant Sounds': '/grade7session9',
  'Session 10: Kinds of Consonant Sounds': '/grade7session10',
  'Session 11: Listening - Conversation': '/grade7session11',
  'Session 12: Silent Reading': '/grade7session12',
  'Session 13: Writing Skills': '/grade7session13',
  'Session 14: Punctuation - B': '/grade7session14',
  'Session 15: Consolidated Activity': '/grade7session15',
  'Session 16: Kinds of Consonant Sounds': '/grade7session16',
  'Session 17: Listening - Advertisement': '/grade7session17',
  'Session 18: Story Reading': '/grade7session18',
  'Session 19: Speaking Skills - A': '/grade7session19',
  'Session 20: Speaking Skills - B': '/grade7session20',
  'Session 21: Speaking Skills - C': '/grade7session21',
  'Session 22: Writing Skills ': '/grade7session22',
  'Session 23: Consolidated Activity': '/grade7session23',
  'Session 24: Kinds of Vowel Sounds': '/grade7session24',
  'Session 25: Kinds of Vowel Sounds': '/grade7session25',
  'Session 26: Short and Long Vowel Sounds': '/grade7session26',
  'Session 27: Speaking Skills - A': '/grade7session27',
  'Session 28: Speaking Skills - B': '/grade7session28',
  'Session 29: Speaking and Writing Skills': '/grade7session29',
  'Session 30: Listening - Narratives': '/grade7session30',
  'Session 31: Formal and Informal Letter': '/grade7session31',
  'Session 32: Consolidated Activity': '/grade7session32',
  'Session 33: Silent Reading': '/grade7session33',
  'Session 34: Listening Skills': '/grade7session34',
  'Session 35: Order of Words': '/grade7session35',
  'Session 36: Writing Skills': '/grade7session36',
  'Session 37: Consolidated Activity':'/grade7session37',
  'Session 38: Intonation and Modulation':'/grade7session38'
};

const Grade7FoundationPage = () => {
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
        <h2>Grade 7 | Foundation</h2>
      </div>
      <div className="session-list">
        <div className="session-column">
          {sessions.slice(0, 18).map((session, index) => (
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
          {sessions.slice(18).map((session, index) => (
            <div
              key={index + 18} // Ensure unique key for each item
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

export default Grade7FoundationPage;
