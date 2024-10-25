import React, { useState, useEffect } from 'react';
import './CBT.css'; // Ensure to create a CSS file for styling

const CBT = () => {
    // Define 10 rounds of questions
    const rounds = [
        { 
            questions: { Sam: '', Matt: '', Kim: '', Alice: '' }, 
            correctAnswers: { Sam: '5', Matt: '7', Kim: '6', Alice: '8' }, 
            audio: '/path_to_audio/round1.mp3',
            image: '/src/assets/cbt1.png'
        },
        { 
            questions: { John: '', Mary: '', Steve: '', Lucy: '' }, 
            correctAnswers: { John: '9', Mary: '10', Steve: '11', Lucy: '8' }, 
            audio: '/path_to_audio/round2.mp3',
            image: '/src/assets/cbt2.png'
        },
        { 
            questions: { Tim: '', Emma: '', Ryan: '', Anna: '' }, 
            correctAnswers: { Tim: '12', Emma: '13', Ryan: '11', Anna: '10' }, 
            audio: '/path_to_audio/round3.mp3',
            image: '/src/assets/cbt3.png'
        },
        { 
            questions: { Leo: '', Sara: '', Jake: '', Bella: '' }, 
            correctAnswers: { Leo: '9', Sara: '8', Jake: '10', Bella: '12' }, 
            audio: '/path_to_audio/round4.mp3',
            image: '/src/assets/cbt4.png'
        },
        { 
            questions: { Max: '', Zoe: '', Ethan: '', Mia: '' }, 
            correctAnswers: { Max: '14', Zoe: '12', Ethan: '13', Mia: '15' }, 
            audio: '/path_to_audio/round5.mp3',
            image: '/src/assets/cbt5.png'
        },
        { 
            questions: { Luke: '', Kate: '', Owen: '', Lily: '' }, 
            correctAnswers: { Luke: '11', Kate: '9', Owen: '10', Lily: '13' }, 
            audio: '/path_to_audio/round6.mp3',
            image: '/src/assets/cbt6.png'
        },
        { 
            questions: { Adam: '', Grace: '', Noah: '', Ava: '' }, 
            correctAnswers: { Adam: '8', Grace: '7', Noah: '9', Ava: '10' }, 
            audio: '/path_to_audio/round7.mp3',
            image: '/src/assets/cbt7.png'
        },
        { 
            questions: { Josh: '', Ella: '', Liam: '', Chloe: '' }, 
            correctAnswers: { Josh: '6', Ella: '8', Liam: '7', Chloe: '9' }, 
            audio: '/path_to_audio/round8.mp3',
            image: '/src/assets/cbt8.png'
        },
        { 
            questions: { Jack: '', Emily: '', Harry: '', Sophie: '' }, 
            correctAnswers: { Jack: '13', Emily: '14', Harry: '12', Sophie: '15' }, 
            audio: '/path_to_audio/round9.mp3',
            image: '/src/assets/cbt9.png'
        },
        { 
            questions: { Ben: '', Isla: '', Oscar: '', Ruby: '' }, 
            correctAnswers: { Ben: '16', Isla: '15', Oscar: '17', Ruby: '18' }, 
            audio: '/path_to_audio/round10.mp3',
            image: '/src/assets/cbt10.png'
        }
    ];

    const [currentRound, setCurrentRound] = useState(0);
    const [answers, setAnswers] = useState(rounds[currentRound].questions);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [audio, setAudio] = useState(new Audio(rounds[currentRound].audio));

    useEffect(() => {
        const newAudio = new Audio(rounds[currentRound].audio);
        setAudio(newAudio);
        setIsPlaying(false);

        return () => {
            newAudio.pause();
            newAudio.currentTime = 0;
        };
    }, [currentRound]);

    const handleAudioToggle = () => {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        } else {
            audio.play();
            audio.onended = () => setIsPlaying(false);
            setIsPlaying(true);
        }
    };

    const handleInputChange = (event, name) => {
        setAnswers({
            ...answers,
            [name]: event.target.textContent
        });
    };

    const handleKeyDown = (event, name) => {
        if (event.key === 'Backspace') {
            const newValue = event.target.textContent.slice(0, -1);
            setAnswers({
                ...answers,
                [name]: newValue
            });
        }
    };

    const checkAnswers = () => {
        const allAnswered = Object.values(answers).every(answer => answer.trim() !== '');

        if (!allAnswered) {
            setModalMessage('Please fill in all the answers.');
            setShowModal(true);
            return;
        }

        const correctAnswers = rounds[currentRound].correctAnswers;
        const allCorrect = Object.keys(correctAnswers).every(key => answers[key] === correctAnswers[key]);
        setIsCorrect(allCorrect);

        if (allCorrect) {
            setModalMessage('🎉 Congratulations! All answers are correct.');
        } else {
            setModalMessage('❌ Some answers are incorrect. Please try again.');
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);

        if (currentRound < rounds.length - 1) {
            setCurrentRound(currentRound + 1);
            setAnswers(rounds[currentRound + 1].questions);
            setIsCorrect(null);
        }
    };

    const handleNext = () => {
        if (currentRound < rounds.length - 1) {
            setCurrentRound(currentRound + 1);
            setAnswers(rounds[currentRound + 1].questions);
            setIsCorrect(null);
        }
    };

    const handlePrevious = () => {
        if (currentRound > 0) {
            setCurrentRound(currentRound - 1);
            setAnswers(rounds[currentRound - 1].questions);
            setIsCorrect(null);
        }
    };

    const handleFinish = () => {
        setModalMessage('You have completed all the CBT rounds!');
        setShowModal(true);
    };

    return (
        <div className="cbt-container">
            <p>Type the correct age for each child in the blank space.</p>

            <div className="image-container">
                <img src={rounds[currentRound].image} alt="Children" className="cbt-image" />
            </div>

            <button className="audio-button" onClick={handleAudioToggle}>
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>

            <div className="questions">
                {Object.keys(answers).map((name, index) => (
                    <div className="question" key={index}>
                        <label>{index + 1}. {name} <span
                            className="answer-line"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            onInput={(e) => handleInputChange(e, name)}
                            onKeyDown={(e) => handleKeyDown(e, name)}
                        >{answers[name]}</span> years.</label>
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button onClick={handlePrevious} disabled={currentRound === 0}>Previous</button>
                <button className="submit-button" onClick={checkAnswers}>Submit</button>
                {currentRound < rounds.length - 1 ? (
                    <button className="next-button" onClick={handleNext}>Next</button>
                ) : (
                    <button className="finish-button" onClick={handleFinish}>Finish</button>
                )}
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalMessage}</p>
                    </div>
                </div>
            )}

            {isCorrect !== null && (
                <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? 'All answers are correct!' : 'Some answers are incorrect. Please try again.'}
                </div>
            )}
        </div>
    );
};

export default CBT;
