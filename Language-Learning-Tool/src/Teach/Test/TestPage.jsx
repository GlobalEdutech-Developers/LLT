import React, { useState } from 'react';
import './TestPage.css';

const questions = [
  // (Your existing questions here)
  {
    text: 'What is the synonym of "Happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 'Joyful',
  },
  {
    text: 'What is the synonym of "Happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 'Joyful',
  },
  {
    text: 'Choose the correct spelling:',
    options: ['Recieve', 'Receive', 'Recive', 'Receve'],
    correctAnswer: 'Receive',
  },
  {
    text: 'What is the antonym of "Beautiful"?',
    options: ['Ugly', 'Pretty', 'Gorgeous', 'Lovely'],
    correctAnswer: 'Ugly',
  },
  {
    text: 'Which word is a noun?',
    options: ['Run', 'Quickly', 'Happiness', 'Bright'],
    correctAnswer: 'Happiness',
  },
  {
    text: 'What is the plural form of "Child"?',
    options: ['Childs', 'Children', 'Childes', 'Childrens'],
    correctAnswer: 'Children',
  },
  {
    text: 'Which sentence is in the past tense?',
    options: ['I eat an apple', 'I will eat an apple', 'I am eating an apple', 'I ate an apple'],
    correctAnswer: 'I ate an apple',
  },
  {
    text: 'What is the superlative form of "Good"?',
    options: ['Better', 'Best', 'Goodest', 'Worse'],
    correctAnswer: 'Best',
  },
  {
    text: 'What is the correct word for "She ____ a doctor."?',
    options: ['are', 'is', 'am', 'be'],
    correctAnswer: 'is',
  },
  {
    text: 'Which word is an adjective?',
    options: ['Quickly', 'Beautiful', 'Dog', 'Run'],
    correctAnswer: 'Beautiful',
  },
  {
    text: 'Which word is a verb?',
    options: ['Run', 'Red', 'Quick', 'Apple'],
    correctAnswer: 'Run',
  },
  {
    text: 'Choose the correct sentence:',
    options: ['He go to school.', 'He goes to school.', 'He going to school.', 'He goed to school.'],
    correctAnswer: 'He goes to school.',
  },
  {
    text: 'What is the opposite of "Hot"?',
    options: ['Warm', 'Cool', 'Cold', 'Burning'],
    correctAnswer: 'Cold',
  },
  {
    text: 'Which sentence is in future tense?',
    options: ['I went to the park', 'I go to the park', 'I am going to the park', 'I will go to the park'],
    correctAnswer: 'I will go to the park',
  },
  {
    text: 'What is the correct article for "____ apple"?',
    options: ['A', 'An', 'The', 'No article needed'],
    correctAnswer: 'An',
  },
  {
    text: 'What is the correct form of "I ____ a book now."?',
    options: ['reads', 'read', 'reading', 'am reading'],
    correctAnswer: 'am reading',
  },
  

  // (other questions...)
];

const MAX_ATTEMPTS = 3;

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [scores, setScores] = useState([]); // Track scores for each attempt

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setResult('Correct!');
    } else {
      setResult(`Incorrect! The correct answer is "${currentQuestion.correctAnswer}".`);
    }

    setTimeout(() => {
      setResult('');
      setSelectedOption('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsTestCompleted(true);
        setAttempts(attempts + 1);
        setScores([...scores, score + 1]); // Store the score for the current attempt
      }
    }, 1000);
  };

  const startTest = () => {
    if (attempts < MAX_ATTEMPTS) {
      setIsTestStarted(true);
      setCurrentQuestionIndex(0);
      setScore(0);
      setIsTestCompleted(false);
    }
  };

  return (
    <div className="test-container">
      <h2>English Language Test</h2>
      {!isTestStarted ? (
        <div>
          <button onClick={startTest} className="start-button" disabled={attempts >= MAX_ATTEMPTS}>
            {attempts >= MAX_ATTEMPTS ? 'No Attempts Left' : 'Start Test'}
          </button>
          {attempts > 0 && (
            <div className="attempt-info">
              <p>{`You have used ${attempts}/${MAX_ATTEMPTS} attempts.`}</p>
              <h3>Attempt-wise Scores:</h3>
              <ul>
                {scores.map((score, index) => (
                  <li key={index}>{`Attempt ${index + 1}: ${score}/${questions.length}`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : !isTestCompleted ? (
        <div>
          <div className="question">
            <p>{`Question ${currentQuestionIndex + 1}: ${currentQuestion.text}`}</p>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="button-group">
            <button
              type="button"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next Question'}
            </button>
          </div>
          {result && <p className="result">{result}</p>}
        </div>
      ) : (
        <div>
          <p className="result">Test completed!</p>
          <p className="final-score">Your final score is {score}/{questions.length}.</p>
          {attempts < MAX_ATTEMPTS && (
            <button onClick={startTest} className="start-button">
              Retry Test
            </button>
          )}
        </div>
      )}
      {attempts >= MAX_ATTEMPTS && (
        <p className="attempt-info">You have used all your attempts. No more attempts left.</p>
      )}
    </div>
  );
};

export default TestPage;
