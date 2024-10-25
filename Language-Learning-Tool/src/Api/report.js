let apiUrl;
if (reportType === 'least-assignments') {
  apiUrl = `http://localhost:3000/api/least-assignments?class=${selectedClass}`;
} else if (reportType === 'most-assignments') {
  apiUrl = `http://localhost:3000/api/most-assignments?class=${selectedClass}`;
} else if (reportType === 'top-performance') {
  apiUrl = `http://localhost:3000/api/top-performance?class=${selectedClass}`;
}
