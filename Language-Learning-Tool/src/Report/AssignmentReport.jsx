import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { saveAs } from "file-saver";
import * as XLSX from 'xlsx';
import { FaDownload } from 'react-icons/fa';
import './AssignmentReport.css';

const skillData = [
  { name: 'Grammar', value: 45 },
  { name: 'Reading', value: 30 },
  { name: 'Listening', value: 20 },
  { name: 'Speaking', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const trophies = ['🥇', '🥈', '🥉'];

const AssignmentReport = () => {
  const [view, setView] = useState('report'); // 'report', 'leaderboard', 'heatmap', 'skillwise'
  const [assignmentData, setAssignmentData] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [skillwiseData, setSkillwiseData] = useState(skillData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    switch (view) {
      case 'report':
        fetchAssignmentData();
        break;
      case 'heatmap':
        fetchHeatmapData();
        break;
      case 'leaderboard':
        fetchLeaderboardData();
        break;
      case 'skillwise':
        fetchSkillData();
        break;
      default:
        break;
    }
  }, [view]);

  const fetchAssignmentData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/assignments');
      if (!response.ok) throw new Error('Failed to load assignment data');
      const data = await response.json();
      setAssignmentData(data);
    } catch (error) {
      setError('Failed to load assignment data');
    } finally {
      setLoading(false);
    }
  };

  const fetchHeatmapData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/heatmap');
      if (!response.ok) throw new Error('Failed to load heatmap data');
      const data = await response.json();
      setHeatmapData(data);
    } catch (error) {
      setError('Failed to load heatmap data');
    } finally {
      setLoading(false);
    }
  };

  const fetchLeaderboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/leaderboard');
      if (!response.ok) throw new Error('Failed to load leaderboard data');
      const data = await response.json();
      setLeaderboardData(data);
    } catch (error) {
      setError('Failed to load leaderboard data');
    } finally {
      setLoading(false);
    }
  };

  const fetchSkillData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/skills');
      if (!response.ok) throw new Error('Failed to load skill data');
      const data = await response.json();
      setSkillwiseData(data);
    } catch (error) {
      setError('Failed to load skill data');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadExcel = () => {
    let dataToDownload = [];
    switch (view) {
      case 'leaderboard':
        dataToDownload = leaderboardData;
        break;
      case 'heatmap':
        dataToDownload = heatmapData;
        break;
      case 'skillwise':
        dataToDownload = skillwiseData;
        break;
      default:
        dataToDownload = assignmentData;
        break;
    }

    const worksheet = XLSX.utils.json_to_sheet(dataToDownload);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${view} Report`);

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${view}-report.xlsx`);
  };

  const sortedLeaderboardData = useMemo(() => {
    return [...leaderboardData].sort((a, b) => b.score - a.score);
  }, [leaderboardData]);

  const renderAssignmentReport = () => (
    <div>
      <h2>Assignment Report</h2>
      {error && <div className="error-message">{error}</div>}
      {assignmentData.length === 0 ? (
        <div>No assignment report data available</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Total Assets</th>
              <th>Attempted Assets</th>
              <th>Progress</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {assignmentData.map((item, index) => (
              <tr key={index}>
                <td>{item.studentName}</td>
                <td>{item.totalAssets}</td>
                <td>{item.attemptedAssets}</td>
                <td>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${(item.attemptedAssets / item.totalAssets) * 100}%` }}
                    ></div>
                  </div>
                </td>
                <td>{item.score}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  const renderLeaderboard = () => (
    <div>
      <h2>Leaderboard</h2>
      {error && <div className="error-message">{error}</div>}
      {leaderboardData.length === 0 ? (
        <div>No leaderboard data available</div>
      ) : (
        <ul>
          {sortedLeaderboardData.map((item, index) => (
            <li key={index}>
              {index < 3 && <span>{trophies[index]} </span>}
              {index + 1}. {item.studentName} - Score: {item.score}%
              <div className="progress-bar">
                <div className="progress" style={{ width: `${item.score}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderHeatmap = () => (
    <div>
      <h2>Heatmap</h2>
      {error && <div className="error-message">{error}</div>}
      {heatmapData.length === 0 ? (
        <div>No heatmap data available</div>
      ) : (
        <div className="heatmap-grid">
          {heatmapData.map((student, index) => (
            <div key={index} className="heatmap-row">
              <div className="student-name">{student.studentName}</div>
              {Array.from({ length: student.totalAssets }).map((_, assetIndex) => (
                <div
                  key={assetIndex}
                  className={`heatmap-cell ${assetIndex < student.attemptedAssets ? 'completed' : ''}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSkillwiseAnalytics = () => (
    <div>
      <h2>Skill-wise Analytics</h2>
      {error && <div className="error-message">{error}</div>}
      {skillwiseData.length === 0 ? (
        <div>No skill analysis data available</div>
      ) : (
        <PieChart width={400} height={400} aria-label="Skill-wise Analytics">
          <Pie
            data={skillwiseData}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {skillwiseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );

  const renderView = () => {
    if (loading) return <div className="loading-spinner">Loading...</div>;

    switch (view) {
      case 'leaderboard':
        return renderLeaderboard();
      case 'heatmap':
        return renderHeatmap();
      case 'skillwise':
        return renderSkillwiseAnalytics();
      default:
        return renderAssignmentReport();
    }
  };

  return (
    <div className="assignment-report-container">
      <h1 className="assignment-dashboard-title">Assignment Analytics Dashboard</h1>

      <div className="button-container">
        <button onClick={() => setView('report')}>Assignment Report</button>
        <button onClick={() => setView('leaderboard')}>Leaderboard</button>
        <button onClick={() => setView('heatmap')}>Heatmap</button>
        <button onClick={() => setView('skillwise')}>Skill Analysis</button>
        <FaDownload className="download-icon" onClick={handleDownloadExcel} aria-label="Download Excel" />
      </div>

      <div className="report-content">
        {renderView()}
      </div>
    </div>
  );
};

export default AssignmentReport;
