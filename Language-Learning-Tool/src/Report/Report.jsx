import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css';

// Importing images
import assignmentReport from '../assets/assignmentreport.jpg';
import insightReport from '../assets/insightreport.png';
import learnerReport from '../assets/learnerreport.png';
import trainerReport from '../assets/trainnerreport.png';

const reportData = [
  {
    title: 'Assignment Reports',
    image: assignmentReport,
    link: '/assignment-report',
  },
  {
    title: 'Learners Report',
    image: learnerReport,
    link: '/learner-report',
  },
  {
    title: 'Insights',
    image: insightReport,
    link: '/insight-report',
  },
  {
    title: 'Trainers Report',
    image: trainerReport,
    link: '/trainer-report',
  },
];

const ReportCards = () => {
  const navigate = useNavigate();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (link, index) => {
    setSelectedCardIndex(index);
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="cards-container">
      {reportData.map((report, index) => (
        <div
          className={`report-card ${selectedCardIndex === index ? 'selected-card' : ''}`}
          key={index}
          onClick={() => handleCardClick(report.link, index)}
        >
          <img src={report.image} alt={report.title} className="report-image" />
          <div className="separator-line"></div>
          <h3 className="report-title">{report.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ReportCards;
