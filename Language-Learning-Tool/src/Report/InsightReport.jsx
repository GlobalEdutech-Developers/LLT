import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './InsightReport.css';

const InsightsReport = () => {
  const [selectedClass, setSelectedClass] = useState('I-A'); // Default class
  const [reportType, setReportType] = useState(null); // To track which report to show
  const [reportData, setReportData] = useState([]); // To store the report data
  const [loading, setLoading] = useState(false); // Loading state for API requests
  const [error, setError] = useState(null); // Error state

  // Array for trophies (Gold, Silver, Bronze)
  const trophies = ['🥇', '🥈', '🥉'];

  // Handle class change
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  // Fetch data from API based on report type
  useEffect(() => {
    if (reportType) {
      setLoading(true); // Set loading to true before API call
      setError(null); // Reset error state

      // Define the API endpoint based on the report type
      let apiUrl;
      if (reportType === 'least-assignments') {
        apiUrl = `http://localhost:3000/api/least-assignments?class=${selectedClass}`;
      } else if (reportType === 'most-assignments') {
        apiUrl = `http://localhost:3000/api/most-assignments?class=${selectedClass}`;
      } else if (reportType === 'top-performance') {
        apiUrl = `http://localhost:3000/api/top-performance?class=${selectedClass}`;
      }

      // Fetch data from API
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch report data');
          }
          return response.json();
        })
        .then((data) => {
          setReportData(data); // Store the fetched data
          setLoading(false); // Turn off loading
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false); // Turn off loading
        });
    }
  }, [reportType, selectedClass]);

  // Handle category clicks to fetch the relevant data and set the report type
  const handleCategoryClick = (category) => {
    setReportType(category); // This will trigger the `useEffect` to fetch data
  };

  return (
    <div className="insights-report-container">
      {/* Header */}
      <div className="insights-header">
        <h2>Insights for a clear view!</h2>
      </div>

      {/* Insights categories */}
      <div className="insights-category-list">
        <Button
          variant="contained"
          className="insight-button"
          onClick={() => handleCategoryClick('least-assignments')}
        >
          Students who have attempted the least number of assignments.
        </Button>
        <Button
          variant="contained"
          className="insight-button"
          onClick={() => handleCategoryClick('most-assignments')}
        >
          Students who have attempted the largest number of assignments.
        </Button>
        <Button
          variant="contained"
          className="insight-button"
          onClick={() => handleCategoryClick('top-performance')}
        >
          Students who are at the top on the performance chart.
        </Button>
      </div>

      {/* Class selector */}
      <div className="class-selector">
        <Select
          value={selectedClass}
          onChange={handleClassChange}
          className="class-dropdown"
        >
          {[
 'I-A', 'I-B', 'I-D', 'II-A', 'II-B', 'II-C', 'II-D', 'III-A', 'III-B', 
 'III-C', 'III-D', 'IV-A', 'IV-B', 'IV-C', 'IV-D', 'IX-A', 'V-A', 
 'VI-A', 'VII-A', 'VIII-A', 'X-grapes', 'X-mango', 'X-pineapple'
].map((classOption) => (
            <MenuItem value={classOption} key={classOption}>
              {classOption}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Report Display */}
      <div className="report-table-container">
        {loading ? (
          <p>Loading...</p> // Show loading state
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p> // Show error message
        ) : reportType === 'least-assignments' ? (
          <TableContainer component={Paper} className="insights-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Learner Name</TableCell>
                  <TableCell align="center">Unattempted Assignments</TableCell>
                  <TableCell align="center">Attempted Assignments</TableCell>
                  <TableCell align="center">Total Assignments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportData.map((learner, index) => (
                  <TableRow key={index}>
                    <TableCell>{learner.learnerName}</TableCell>
                    <TableCell align="center">{learner.unattemptedAssignments}</TableCell>
                    <TableCell align="center">{learner.attemptedAssignments}</TableCell>
                    <TableCell align="center">{learner.totalAssignments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : reportType === 'most-assignments' ? (
          <TableContainer component={Paper} className="insights-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Learner Name</TableCell>
                  <TableCell align="center">Attempted Assignments</TableCell>
                  <TableCell align="center">Unattempted Assignments</TableCell>
                  <TableCell align="center">Total Assignments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportData.map((learner, index) => (
                  <TableRow key={index}>
                    <TableCell>{learner.learnerName}</TableCell>
                    <TableCell align="center">{learner.attemptedAssignments}</TableCell>
                    <TableCell align="center">{learner.unattemptedAssignments}</TableCell>
                    <TableCell align="center">{learner.totalAssignments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : reportType === 'top-performance' ? (
          <TableContainer component={Paper} className="insights-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Learner Name</TableCell>
                  <TableCell align="center">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportData.map((learner, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {learner.rank <= 3 ? trophies[learner.rank - 1] : learner.rank}
                    </TableCell>
                    <TableCell>{learner.learnerName}</TableCell>
                    <TableCell align="center">{learner.percentage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </div>
  );
};

export default InsightsReport;
