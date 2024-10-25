import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './LearningVideos.css';

const LearningSessionPage = () => {
  const videoSessions = [
    { id: 'Foundation_Starters_Session01', label: 'Foundation Starters Session 01', videoUrl: 'https://vimeo.com/994052031' },
    { id: 'Foundation_Starters_Session02', label: 'Foundation Starters Session 02', videoUrl: 'https://vimeo.com/12345678' },
  ];

  const [isPickAllChecked, setIsPickAllChecked] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [taskDetails, setTaskDetails] = useState({ taskName: '', description: '' });
  const navigate = useNavigate();

  const handlePickAllChange = (e) => {
    const isChecked = e.target.checked;
    setIsPickAllChecked(isChecked);

    if (isChecked) {
      const allVideoIds = videoSessions.map((session) => session.id);
      setSelectedVideos(allVideoIds);
      setTaskDetails({ taskName: 'All Videos', description: 'All sessions selected.' });
    } else {
      setSelectedVideos([]);
      setTaskDetails({ taskName: '', description: '' });
    }
  };

  const handleVideoSelect = (videoId) => {
    const newSelectedVideos = selectedVideos.includes(videoId)
      ? selectedVideos.filter((id) => id !== videoId)
      : [...selectedVideos, videoId];

    setSelectedVideos(newSelectedVideos);
    setIsPickAllChecked(newSelectedVideos.length === videoSessions.length);

    const selectedSession = videoSessions.find((session) => session.id === videoId);
    setTaskDetails({
      taskName: selectedSession ? selectedSession.label : '',
      description: selectedSession ? `Description for ${selectedSession.label}` : '',
    });
  };

  const handleTaskCreation = () => {
    navigate('/CreateTask', { state: { selectedVideos, taskDetails } });
  };

  const handleShowVideo = (videoId) => {
    navigate('/videoplayer', { state: { videoId } });
  };

  return (
    <div className="learning-session-container">
      <div className="task-list-section">
        <h2 className="page-title">Learning Session</h2>
        <h3 className="subtitle">Video Time</h3>

        <div className="pick-all-section">
          <input 
            type="checkbox" 
            id="pick-all" 
            checked={isPickAllChecked} 
            onChange={handlePickAllChange} 
          />
          <label htmlFor="pick-all">Pick All</label>
        </div>

        <div className="video-list">
          {videoSessions.map((session) => (
            <div className="video-item" key={session.id}>
              <input 
                type="checkbox" 
                id={session.id} 
                name="video" 
                value={session.id} 
                checked={selectedVideos.includes(session.id)}
                onChange={() => handleVideoSelect(session.id)} 
              />
              <label htmlFor={session.id}>{session.label}</label>
              <FontAwesomeIcon icon={faEye} className="eye-icon" onClick={() => handleShowVideo(session.id)} />
            </div>
          ))}
        </div>

        {(isPickAllChecked || selectedVideos.length > 0) && (
          <div className="create-task-button1">
            <button onClick={handleTaskCreation}>Create Task</button>
          </div>
        )}
      </div>

      <div className="details-section">
        <h3>Assigned Task</h3>
        {taskDetails.taskName ? (
          <div>
            <p><strong>Task Name:</strong> {taskDetails.taskName}</p>
            <p><strong>Description:</strong> {taskDetails.description}</p>
          </div>
        ) : (
          <p>No task selected</p>
        )}
      </div>
    </div>
  );
};

export default LearningSessionPage;
