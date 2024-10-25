import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

import grade1Img from '../../assets/firstpagejpg/secondpagejpg/Asset 35@4x.png';
import grade2Img from '../../assets/firstpagejpg/secondpagejpg/Asset 34@4x.png';
import grade3Img from '../../assets/firstpagejpg/secondpagejpg/Asset 33@4x.png';
import grade4Img from '../../assets/firstpagejpg/secondpagejpg/Asset 32@4x.png';
import grade5Img from '../../assets/firstpagejpg/secondpagejpg/Asset 31@4x.png';
import grade6Img from '../../assets/firstpagejpg/secondpagejpg/Asset 30@4x.png';
import grade7Img from '../../assets/firstpagejpg/secondpagejpg/Asset 29@4x.png';
import grade8Img from '../../assets/firstpagejpg/secondpagejpg/Asset 28@4x.png';
import grade9Img from '../../assets/firstpagejpg/secondpagejpg/Asset 27@4x.png';
import grade10Img from '../../assets/firstpagejpg/secondpagejpg/Asset 26@4x.png';
import grade11Img from '../../assets/firstpagejpg/secondpagejpg/Asset 25@4x.png';
import grade12Img from '../../assets/firstpagejpg/secondpagejpg/Asset 24@4x.png';

const HomePage = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleGradeClick = (grade) => {
    if (grade === 1) {
      navigate('/grade1'); // Redirect to the Grade 1 page
    } else if (grade === 2) {
      navigate('/grade2-foundation'); // Redirect to the Grade 2 page
    }
   else if (grade === 3) {
    navigate('/grade3-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 4) {
    navigate('/grade4-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 5) {
    navigate('/grade5-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 6) {
    navigate('/grade6-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 7) {
    navigate('/grade7-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 8) {
    navigate('/grade8-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 9) {
    navigate('/grade9-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 10) {
    navigate('/grade10-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 11) {
    navigate('/grade11-foundation'); // Redirect to the Grade 3 page
  }
  else if (grade === 12) {
    navigate('/grade12-foundation'); // Redirect to the Grade 3 page
  }
    // Add more conditions for other grades if needed
  };

  return (
    <div className="content">
      <div className="teach-header2">
        <h2>Neo Language Labs</h2>
        <div className="language-select">
          <label htmlFor="language">Select Language</label>
          <select id="language">
            <option value="english">English</option>
          </select>
        </div>
      </div>
      <div className="grid-container">
        {[grade1Img, grade2Img, grade3Img, grade4Img, grade5Img, grade6Img, grade7Img, grade8Img, grade9Img, grade10Img, grade11Img, grade12Img].map((image, index) => (
          <div key={index} className="grid-item" onClick={() => handleGradeClick(index + 1)}>
            <img src={image} alt={`Grade ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
