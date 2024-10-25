import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate
import './Assets.css';

import grade1Img from '../assets/firstpagejpg/secondpagejpg/Asset 35@4x.png';
import grade2Img from '../assets/firstpagejpg/secondpagejpg/Asset 34@4x.png';
import grade3Img from '../assets/firstpagejpg/secondpagejpg/Asset 33@4x.png';
import grade4Img from '../assets/firstpagejpg/secondpagejpg/Asset 32@4x.png';
import grade5Img from '../assets/firstpagejpg/secondpagejpg/Asset 31@4x.png';
import grade6Img from '../assets/firstpagejpg/secondpagejpg/Asset 30@4x.png';
import grade7Img from '../assets/firstpagejpg/secondpagejpg/Asset 29@4x.png';
import grade8Img from '../assets/firstpagejpg/secondpagejpg/Asset 28@4x.png';
import grade9Img from '../assets/firstpagejpg/secondpagejpg/Asset 27@4x.png';
import grade10Img from '../assets/firstpagejpg/secondpagejpg/Asset 26@4x.png';
import grade11Img from '../assets/firstpagejpg/secondpagejpg/Asset 25@4x.png';
import grade12Img from '../assets/firstpagejpg/secondpagejpg/Asset 24@4x.png';

const Assets = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleGradeClick = (taskgrade) => {
    if (taskgrade === 1) {
      navigate('/taskgrade1foundation'); // Redirect to the Grade 1 page
    } else if (taskgrade === 2) {
      navigate('/taskgrade2foundation'); // Redirect to the Grade 2 page
    } else if (taskgrade === 3) {
      navigate('/taskgrade3foundation'); // Redirect to the Grade 3 page
    } else if (taskgrade === 4) {
      navigate('/taskgrade4foundation'); // Redirect to the Grade 4 page
    } else if (taskgrade === 5) {
      navigate('/taskgrade5foundation'); // Redirect to the Grade 5 page
    } else if (taskgrade === 6) {
      navigate('/taskgrade6foundation'); // Redirect to the Grade 6 page
    } else if (taskgrade === 7) {
      navigate('/taskgrade7foundation'); // Redirect to the Grade 7 page
    } else if (taskgrade === 8) {
      navigate('/taskgrade8foundation'); // Redirect to the Grade 8 page
    } else if (taskgrade === 9) {
      navigate('/taskgrade9foundation'); // Redirect to the Grade 9 page
    } else if (taskgrade === 10) {
      navigate('/taskgrade10foundation'); // Redirect to the Grade 10 page
    } else if (taskgrade === 11) {
      navigate('/taskgrade11foundation'); // Redirect to the Grade 11 page
    } else if (taskgrade === 12) {
      navigate('/taskgrade12foundation'); // Redirect to the Grade 12 page
    }
  };

  return (
    <div className="asset-main-content">
     
      <div className="asset-content">
        <div className="asset-header">
          <h2>Neo Language Labs</h2>
          <div className="asset-language-select">
           
            <select id="asset-language">
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className="asset-grid-container">
          <div className="asset-grid-item" onClick={() => handleGradeClick(1)}>
            <img src={grade1Img} alt="Grade 1" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(2)}>
            <img src={grade2Img} alt="Grade 2" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(3)}>
            <img src={grade3Img} alt="Grade 3" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(4)}>
            <img src={grade4Img} alt="Grade 4" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(5)}>
            <img src={grade5Img} alt="Grade 5" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(6)}>
            <img src={grade6Img} alt="Grade 6" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(7)}>
            <img src={grade7Img} alt="Grade 7" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(8)}>
            <img src={grade8Img} alt="Grade 8" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(9)}>
            <img src={grade9Img} alt="Grade 9" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(10)}>
            <img src={grade10Img} alt="Grade 10" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(11)}>
            <img src={grade11Img} alt="Grade 11" />
          </div>
          <div className="asset-grid-item" onClick={() => handleGradeClick(12)}>
            <img src={grade12Img} alt="Grade 12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
