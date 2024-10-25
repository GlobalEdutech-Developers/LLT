import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import '../Style/Sidebar.css'; // Import the CSS file for styling
import logo from '../assets/firstpagejpg/Asset 10@4x.png';
import bottomImage from '../assets/firstpagejpg/secondpagejpg/Asset 42@4x.png';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Initialize useLocation to get the current path

  // Hide sidebar on login and registration pages
  if (location.pathname === '/' || location.pathname === '/register') {
    return null;
  }

  // Function to handle navigation when a menu item is clicked
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="menu-list">
        <li className="menu-item" onClick={() => handleNavigation('/home')}>Teach</li>
        <li className="menu-item" onClick={() => handleNavigation('/task')}>Task</li>
        <li className="menu-item" onClick={() => handleNavigation('/assign')}>Assign</li>
        <li className="menu-item" onClick={() => handleNavigation('/assess')}>Assess</li>
        <li className="menu-item" onClick={() => handleNavigation('/report')}>Report</li>
        <li className="menu-item" onClick={() => handleNavigation('/library')}>Library</li>
      </ul>
      <div className="sidebar-bottom-image">
        <img src={bottomImage} alt="Bottom Graphic" />
      </div>
    </div>
  );
};

export default Sidebar;