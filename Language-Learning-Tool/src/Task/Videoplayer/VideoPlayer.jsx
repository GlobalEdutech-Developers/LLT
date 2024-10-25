import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './VideoPlayer.css'; // Import your CSS file

const VideoPlayerPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the back button click to go to the previous page
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="video-player-page">
      <h3>Now Playing: Foundation Starters Session</h3>
      <div className="video-wrapper">
        {/* Embed Vimeo video using iframe */}
        <iframe
          src="https://player.vimeo.com/video/994052031"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Foundation Starters Session"
        ></iframe>
      </div>
      <button className="back-button" onClick={handleBack}>
        Back to Learning Session
      </button>
    </div>
  );
};


export default VideoPlayerPage;
