import React, { useState } from 'react';
import './Vocabulary.css';

const VocabularyModule = () => {
  const [isListening, setIsListening] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentWordType, setCurrentWordType] = useState('preposition');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [pronunciationScore, setPronunciationScore] = useState(0); // Score state

  const wordDataList = {
    preposition: {
      word: 'Like',
      partOfSpeech: 'Preposition',
      meaning: 'similar to somebody or something',
      example: 'He is like his father.',
    },

    verb: {
      word: 'Like',
      partOfSpeech: 'Verb',
      meaning: 'to find somebody/something pleasant; to enjoy something',
      example: 'I like Soham, he is polite and friendly.',
    },
  };

  const wordData = wordDataList[currentWordType];
  const { word, partOfSpeech, meaning, example } = wordData;

  const handleMicClick = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("Media devices not supported");
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        const audioChunks = [];

        recorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setRecordedAudio(audioUrl);
        };

        setMediaRecorder(recorder);
        recorder.start();
        setIsListening(true);
      })
      .catch(error => {
        console.error('Error accessing media devices.', error);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsListening(false);
    }
  };

  const playRecordedAudio = () => {
    if (recordedAudio) {
      const audio = new Audio(recordedAudio);
      audio.play();
      audio.onended = () => {
        checkPronunciation();
      };
    }
  };

  const checkPronunciation = () => {
    // Simulate speech recognition result
    const recognizedWord = 'like'; // Placeholder for actual speech recognition
    const targetWord = word.toLowerCase();

    // Simple similarity check
    const maxLen = Math.max(recognizedWord.length, targetWord.length);
    let matchCount = 0;
    for (let i = 0; i < Math.min(recognizedWord.length, targetWord.length); i++) {
      if (recognizedWord[i] === targetWord[i]) {
        matchCount++;
      }
    }
    const score = Math.floor((matchCount / maxLen) * 100);
    setPronunciationScore(score);

    if (score >= 80) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    console.log(`Submitting word: ${word}, Pronunciation Score: ${pronunciationScore}%`);
    alert(`Submission Successful! Word: ${word}, Pronunciation Score: ${pronunciationScore}%`);
  };

  return (
    <div className="vocabulary-container">
      <div className="vocabulary-layout">
        {/* Left Side - Image */}
        <div className="vocabulary-image">
          <img src="/src/assets/image.png" alt="Vocabulary Visual" />
        </div>

        {/* Right Side - Content */}
        <div className="vocabulary-content">
          <h2 className="title"> English | Foundation | Vocabulary Session </h2>

          <div className="vocabulary-buttons">
            <button className="pos-button" onClick={() => setCurrentWordType('preposition')}>Preposition</button>
            <button className="pos-button" onClick={() => setCurrentWordType('verb')}>Verb</button>
          </div>

          {/* Icon Section */}
          <div className="icon-section">
            {!isListening ? (
              <span className="icon-mic" onClick={handleMicClick} title="Click to record">🎤</span>
            ) : (
              <span className="icon-stop" onClick={handleStopRecording} title="Stop recording">⏹</span>
            )}
            {recordedAudio && (
              <span className="icon-play" onClick={playRecordedAudio} title="Play recorded audio">▶</span>
            )}
          </div>
            
          <div className="vocabulary-card">
            <div className="vocabulary-word">
              <h1>{word}</h1>
            </div>

            <div className="part-of-speech">
              <p>{partOfSpeech}</p>
            </div>

            <div className="meaning-section">
              <h3>Meaning:</h3>
              <p>{meaning}</p>
              <h3>Example:</h3>
              <p>{example}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <p className="progress-text">Pronunciation Score: {pronunciationScore}%</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${pronunciationScore}%` }}
              ></div>
            </div>
          </div>

          <div className="submit-section">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyModule;

