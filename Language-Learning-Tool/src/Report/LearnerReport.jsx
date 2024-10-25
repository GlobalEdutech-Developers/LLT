import React, { useState, useEffect } from 'react';
import { Switch, MenuItem, Select, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import { Download as DownloadIcon, FilterList as FilterIcon } from '@mui/icons-material';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { DateRangePicker } from '@mui/lab';
import './LearnerReport.css';

const LearnerReport = () => {
  const [activeUsers, setActiveUsers] = useState(true);
  const [selectedClass, setSelectedClass] = useState('I-A');
  const [reportData, setReportData] = useState([]);
  const [allLearners, setAllLearners] = useState([]);
  const [classReportData, setClassReportData] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]); // Date range picker state
  const [openFilter, setOpenFilter] = useState(false); // Filter dialog state
  const [filterOption, setFilterOption] = useState('month'); // Default filter option is "month"
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month

  // Fetch learner data from API
  useEffect(() => {
    fetch('/api/learners') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setAllLearners(data);
        setReportData(data.filter(learner => learner.status === 'active'));
      })
      .catch(error => console.error('Error fetching learners:', error));
  }, []);

  // Fetch class report data based on selected date range or month
  const fetchClassReportData = () => {
    if (filterOption === 'range' && dateRange[0] && dateRange[1]) {
      const startDate = dateRange[0].toISOString().split('T')[0];
      const endDate = dateRange[1].toISOString().split('T')[0];
      fetch(`/api/class-report?startDate=${startDate}&endDate=${endDate}`) // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => setClassReportData(data))
        .catch(error => console.error('Error fetching class report:', error));
    } else if (filterOption === 'month') {
      fetch(`/api/class-report?month=${selectedMonth}`) // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => setClassReportData(data))
        .catch(error => console.error('Error fetching class report:', error));
    }
  };

  // Handle class selection
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  // Toggle active/inactive users
  const handleToggle = (event) => {
    setActiveUsers(event.target.checked);
    setReportData(
      allLearners.filter(learner => (event.target.checked ? learner.status === 'active' : learner.status === 'inactive'))
    );
  };

  // Function to download the report as Excel
  const downloadReport = () => {
    const worksheet = XLSX.utils.json_to_sheet(reportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Learner Report');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'Learner_Report.xlsx');
  };

  // Open and close the filter dialog
  const handleFilterOpen = () => {
    setOpenFilter(true);
  };
  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  // Apply the selected filter (date range or month)
  const handleApplyFilter = () => {
    fetchClassReportData(); // Fetch data based on selected filter option
    setOpenFilter(false); // Close filter dialog
  };

  // Handle reset for the popup (resets date range and selected month)
  const handleReset = () => {
    setDateRange([null, null]); // Reset date range picker
    setSelectedMonth(new Date().getMonth() + 1); // Reset month picker to the current month
  };

  return (
    <div className="learner-report-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="controls-container">
          {/* Download Icon and Button */}
          <IconButton onClick={downloadReport}>
            <DownloadIcon />
          </IconButton>
          <span>Active Users</span>
          <Switch checked={activeUsers} onChange={handleToggle} />
          {/* Class Dropdown */}
          <Select value={selectedClass} onChange={handleClassChange}>
          <MenuItem value="I-A">I-A</MenuItem>
            <MenuItem value="I-B">I-B</MenuItem>
            <MenuItem value="I-D">I-D</MenuItem>
            <MenuItem value="II-A">II-A</MenuItem>
            <MenuItem value="II-B">II-B</MenuItem>
            <MenuItem value="II-C">II-C</MenuItem>
            <MenuItem value="II-D">II-D</MenuItem>
            <MenuItem value="III-A">III-A</MenuItem>
            <MenuItem value="III-B">III-B</MenuItem>
            <MenuItem value="III-C">III-C</MenuItem>
            <MenuItem value="III-D">III-D</MenuItem>
            <MenuItem value="IV-A">IV-A</MenuItem>
            <MenuItem value="IV-B">IV-B</MenuItem>
            <MenuItem value="IV-C">IV-C</MenuItem>
            <MenuItem value="IV-D">IV-D</MenuItem>
            <MenuItem value="V-A">V-A</MenuItem>
            <MenuItem value="VI-A">VI-A</MenuItem>
            <MenuItem value="VII-A">VII-A</MenuItem>
            <MenuItem value="VIII-A">VIII-A</MenuItem>
            <MenuItem value="IX-A">IX-A</MenuItem>
            <MenuItem value="X-mango">X-mango</MenuItem>
            <MenuItem value="X-grapes">X-grapes</MenuItem>
            <MenuItem value="X-pineapple">X-pineapple</MenuItem>
          </Select>
          <Button variant="outlined" startIcon={<FilterIcon />} onClick={handleFilterOpen}>
            Filter
          </Button>
        </div>
      </div>

      {/* Filter Date Range Picker Dialog */}
      <Dialog open={openFilter} onClose={handleFilterClose}>
        <DialogTitle>Select Filter Options</DialogTitle>
        <DialogContent>
          <RadioGroup
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
            row
          >
            <FormControlLabel value="month" control={<Radio />} label="Month" />
            <FormControlLabel value="range" control={<Radio />} label="Range" />
          </RadioGroup>

          {/* Month Selector */}
          {filterOption === 'month' && (
            <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} fullWidth>
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>February</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>June</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
            </Select>
          )}

          {/* Date Range Picker */}
          {filterOption === 'range' && (
            <DateRangePicker
              startText="Start Date"
              endText="End Date"
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} fullWidth />
                  <TextField {...endProps} fullWidth />
                </>
              )}
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleReset} variant="outlined">
            Reset
          </Button>
          <Button onClick={handleApplyFilter} color="primary" variant="contained">
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {/* Class Report Section */}
      <div className="class-report-container">
        {classReportData.length > 0 ? (
          <div>
            <h3>Class Report</h3>
            <ul>
              {classReportData.map((item, index) => (
                <li key={index}>
                  {item.date}: {item.data}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No class report available for the selected period.</p>
        )}
      </div>

      {/* Learner Cards Section */}
      <div className="cards-container">
        {reportData.length > 0 ? (
          reportData.map((learner, index) => (
            <div className="learner-card" key={index}>
              <h3>{learner.name}</h3>
              <p>Active Assignment: {learner.activeAssignments}</p>
              <p>Attempted Assignments: {learner.attemptedAssignments}</p>
              <p>Usage (HH:MM): {learner.usage}</p>
              <a href="#">View</a>
            </div>
          ))
        ) : (
          <p>No students to display.</p>
        )}
      </div>
    </div>
  );
};

export default LearnerReport;
