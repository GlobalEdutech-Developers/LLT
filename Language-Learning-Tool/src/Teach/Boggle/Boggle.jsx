import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Boggle.css'; // Import the CSS file for styling

// List of boggle rounds with hints and answers
const boggleRounds = [
    {
        letters: ['P', 'E', 'G', 'Y', 'S', 'T', 'U', 'D', 'L', 'C', 'K', 'B', 'A', 'P', 'J', 'M'],
        hints: [
            { hint: '1. We do this for fun with our friends at a park', answer: 'play' },
            { hint: '2. A group of students studying together', answer: 'class' },
            { hint: '3. To speak or tell something', answer: 'speak' },
            { hint: '4. The opposite of no', answer: 'yes' },
            { hint: '5. We do this with our eyes', answer: 'see' }
        ]
    },
    {
        letters: ['S', 'R', 'A', 'M', 'E', 'N', 'T', 'O', 'C', 'L', 'I', 'B', 'K', 'R', 'P', 'G'],
        hints: [
            { hint: '1. To move swiftly', answer: 'run' },
            { hint: '2. A time to relax and do nothing', answer: 'rest' },
            { hint: '3. Something you write with', answer: 'pen' },
            { hint: '4. Opposite of weak', answer: 'strong' },
            { hint: '5. A place where people live', answer: 'home' }
        ]
    },
    {
        letters: ['B', 'A', 'T', 'E', 'R', 'S', 'U', 'N', 'D', 'C', 'O', 'G', 'M', 'F', 'L', 'H'],
        hints: [
          { hint: '1. Something you throw', answer: 'ball' },
          { hint: '2. A four-legged domestic animal', answer: 'dog' },
          { hint: '3. A type of fruit', answer: 'apple' },
          { hint: '4. Something you read', answer: 'book' },
          { hint: '5. The opposite of night', answer: 'day' }
        ]
    },
    {
        letters: ['W', 'A', 'T', 'E', 'R', 'L', 'S', 'C', 'D', 'N', 'P', 'H', 'T', 'O', 'F', 'M'],
        hints: [
          { hint: '1. The substance you drink', answer: 'water' },
          { hint: '2. A period between sunset and morning', answer: 'night' },
          { hint: '3. Something used to transport goods', answer: 'cart' },
          { hint: '4. Another word for happy', answer: 'glad' },
          { hint: '5. A small bug with wings', answer: 'moth' }
        ]
    },
    {
        letters: ['F', 'I', 'R', 'E', 'W', 'T', 'O', 'S', 'M', 'C', 'U', 'N', 'P', 'L', 'G', 'H'],
        hints: [
          { hint: '1. Something that burns', answer: 'fire' },
          { hint: '2. A place where we live', answer: 'home' },
          { hint: '3. A large animal in the jungle', answer: 'lion' },
          { hint: '4. A color of the sky on a sunny day', answer: 'blue' },
          { hint: '5. Something we wear on our feet', answer: 'shoe' }
        ]
    },
    {
        letters: ['S', 'T', 'A', 'R', 'E', 'C', 'L', 'O', 'U', 'N', 'D', 'B', 'K', 'I', 'G', 'H'],
        hints: [
          { hint: '1. A shiny object in the sky at night', answer: 'star' },
          { hint: '2. A fluffy object in the sky', answer: 'cloud' },
          { hint: '3. Opposite of tall', answer: 'short' },
          { hint: '4. A place to sleep', answer: 'bed' },
          { hint: '5. A number after two', answer: 'three' }
        ]
    },
    {
        letters: ['S', 'N', 'O', 'W', 'F', 'A', 'L', 'K', 'I', 'B', 'M', 'T', 'R', 'P', 'C', 'H'],
        hints: [
          { hint: '1. Frozen water falling from the sky', answer: 'snow' },
          { hint: '2. A structure made of ice', answer: 'igloo' },
          { hint: '3. A part of your body you use to walk', answer: 'foot' },
          { hint: '4. The opposite of left', answer: 'right' },
          { hint: '5. A hot drink made from beans', answer: 'coffee' }
        ]
    },
    {
        letters: ['R', 'A', 'I', 'N', 'D', 'S', 'L', 'O', 'E', 'C', 'F', 'G', 'P', 'B', 'T', 'M'],
        hints: [
          { hint: '1. Water falling from clouds', answer: 'rain' },
          { hint: '2. A four-legged farm animal', answer: 'goat' },
          { hint: '3. A game with a round object', answer: 'golf' },
          { hint: '4. A large body of water', answer: 'lake' },
          { hint: '5. Something used to write on a chalkboard', answer: 'chalk' }
        ]
    },
    {
        letters: ['C', 'A', 'T', 'R', 'E', 'S', 'L', 'I', 'P', 'N', 'M', 'O', 'K', 'U', 'J', 'B'],
        hints: [
          { hint: '1. A common household pet', answer: 'cat' },
          { hint: '2. Opposite of hot', answer: 'cold' },
          { hint: '3. Something used to draw', answer: 'pen' },
          { hint: '4. A tool used for measuring length', answer: 'ruler' },
          { hint: '5. A four-legged animal often found on farms', answer: 'pig' }
        ]
    },
    {
        letters: ['F', 'R', 'O', 'G', 'B', 'A', 'C', 'T', 'P', 'I', 'S', 'M', 'N', 'K', 'H', 'L'],
        hints: [
          { hint: '1. A small jumping animal that lives near water', answer: 'frog' },
          { hint: '2. Something to sit on', answer: 'chair' },
          { hint: '3. Opposite of big', answer: 'small' },
          { hint: '4. An insect that makes honey', answer: 'bee' },
          { hint: '5. A large wild cat', answer: 'tiger' }
        ]
    },
   
];

// Popup Component
const Popup = ({ message, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p>{message}</p>
                <button className="popup-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const navigate = useNavigate();
    const [currentRound, setCurrentRound] = useState(0);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [answers, setAnswers] = useState({});
    const [resultMessage, setResultMessage] = useState('');
    const [letterCount, setLetterCount] = useState({});
    const [correctAnswerForHint, setCorrectAnswerForHint] = useState({});
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [hintAttempts, setHintAttempts] = useState({});

    const round = boggleRounds[currentRound];
    
    const initializeHintAttempts = (hints) => {
        const attempts = {};
        hints.forEach((hint) => {
            attempts[hint.hint] = 3; // 3 attempts for each hint
        });
        return attempts;
    };

    // Initialize hint attempts when component mounts
    useEffect(() => {
        setHintAttempts(initializeHintAttempts(round.hints));
    }, [currentRound]);

    // Event listener for handling backspace functionality
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Backspace' && selectedLetters.length > 0) {
                const lastLetter = selectedLetters[selectedLetters.length - 1];
                const updatedLetters = selectedLetters.slice(0, -1);

                setSelectedLetters(updatedLetters);
                setLetterCount((prev) => ({
                    ...prev,
                    [lastLetter]: (prev[lastLetter] || 1) - 1,
                }));
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedLetters]);

    const handleLetterClick = (letter) => {
        const currentCount = letterCount[letter] || 0;

        if (currentCount < 2) {
            setSelectedLetters([...selectedLetters, letter]);
            setLetterCount({
                ...letterCount,
                [letter]: currentCount + 1
            });
        } else {
            setResultMessage(`Sorry, you can use the letter "${letter}" only twice.`);
        }
    };

    const handleSubmit = () => {
        const word = selectedLetters.join('').toLowerCase();
        const correctAnswer = round.hints.find(item => item.answer === word);

        if (correctAnswer) {
            const hint = correctAnswer.hint;

            if (hintAttempts[hint] > 0) {
                setAnswers({ ...answers, [hint]: word });
                setCorrectAnswerForHint({
                    ...correctAnswerForHint,
                    [hint]: correctAnswer.answer
                });
                setResultMessage(`Correct! The word "${word}" is a valid answer.`);
            } else {
                setResultMessage(`Sorry, you have no attempts left for this hint.`);
            }

            setHintAttempts({
                ...hintAttempts,
                [correctAnswer.hint]: hintAttempts[correctAnswer.hint] - 1
            });

        } else {
            setResultMessage(`Sorry! The word "${word}" is incorrect.`);
        }

        setSelectedLetters([]);
        setLetterCount({});
    };

    const handleNext = () => {
        setErrorMessage(''); // Reset error message
        if (Object.keys(correctAnswerForHint).length === round.hints.length) {
            if (currentRound < boggleRounds.length - 1) {
                setCurrentRound(currentRound + 1);
                setSelectedLetters([]);
                setAnswers({});
                setCorrectAnswerForHint({});
                setResultMessage('');
                setLetterCount({});
                setHintAttempts(initializeHintAttempts(boggleRounds[currentRound + 1].hints));
            } else {
                setPopupMessage('Congratulations! You completed all the Boggle rounds.');
                setShowPopup(true);
            }
        } else {
            setErrorMessage('You must answer all the hints before moving to the next round.');
        }
    };

    const handlePrevious = () => {
        setErrorMessage(''); // Reset error message
        if (currentRound > 0) {
            setCurrentRound(currentRound - 1);
            setSelectedLetters([]);
            setAnswers({});
            setCorrectAnswerForHint({});
            setResultMessage('');
            setLetterCount({});
            setHintAttempts(initializeHintAttempts(boggleRounds[currentRound - 1].hints));
        }
    };

    const handleFinish = () => {
        if (Object.keys(correctAnswerForHint).length === round.hints.length) {
            setPopupMessage('Well done! You finished this Boggle.');
            setShowPopup(true);
        } else {
            setErrorMessage('You must answer all the hints before finishing.');
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate('/grade');
    };

    return (
        <div className="container">
            <p>Round {currentRound + 1}: Use the hints to make suitable words. Click on the letters to create the words. All boxes need not be filled.</p>

            <div className="game-board">
                {round.letters.map((letter, index) => (
                    <div className="box" key={index} onClick={() => handleLetterClick(letter)}>
                        {letter}
                    </div>
                ))}
            </div>

            <div className="word-creation">
                <h3>Word Creation:</h3>
                <div className="word-box">
                    {selectedLetters.map((letter, index) => (
                        <div key={index} className="created-letter">{letter}</div>
                    ))}
                </div>
            </div>

            <div className="hints">
                <p><strong>Hints:</strong></p>
                <ul>
                    {round.hints.map((item, index) => (
                        <li key={index}>
                            <strong>{item.hint}</strong>
                            {correctAnswerForHint[item.hint] && (
                                <div className="answer-button-container">
                                    <button className="answer-button">{correctAnswerForHint[item.hint]}</button>
                                </div>
                            )}
                            {answers[item.hint] && (
                                <p className="user-answer">Your answer: {answers[item.hint]}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {resultMessage && <p className="result-message">{resultMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="buttons">
                <button className="previous" onClick={handlePrevious} disabled={currentRound === 0}>Previous</button>
                <button className="submit" onClick={handleSubmit}>Submit</button>
                <button className="next" onClick={handleNext}>Next</button>
                <button className="finish" onClick={handleFinish}>Finish</button>
            </div>

            {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
        </div>
    );
};

export default App;
