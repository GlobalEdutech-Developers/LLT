import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";
import "./TrainerReport.css";
import * as XLSX from "xlsx"; // Import SheetJS library
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function App() {
  // State to store the fetched data
  const [reportData, setReportData] = useState({});
  const [selectedReportType, setSelectedReportType] = useState("content_usage");
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("1 Month"); // Month Selector state

  // Function to fetch the report data
  const fetchReportData = async (reportType, month) => {
    setLoading(true);
    try {
      const response = await axios.post("https://your-backend-api/fetchReport", {
        reportType: reportType,
        month: month,  // Send selected month to the backend
      });
      setReportData(response.data);
    } catch (error) {
      console.error("Error fetching report data", error);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data on report type or month change
  useEffect(() => {
    fetchReportData(selectedReportType, selectedMonth);
  }, [selectedReportType, selectedMonth]);

  // Handle report type change
  const handleReportTypeChange = (event) => {
    setSelectedReportType(event.target.value);
  };

  // Handle month selection change
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Chart Data for Pie Chart
  const chartData = {
    labels: ["Presentation", "Task", "Assignment", "Evaluation"],
    datasets: [
      {
        data: reportData.chartValues || [0, 0, 0, 0], // Fetched data
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"],
        hoverOffset: 4,
      },
    ],
  };

  // Function to download the report data as an Excel file
  const downloadExcel = () => {
    if (!reportData.details || reportData.details.length === 0) {
      alert("No report data available for download.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(reportData.details || []); // Convert report data to Excel sheet
    const workbook = XLSX.utils.book_new(); // Create a new Excel workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report"); // Append the worksheet to the workbook

    // Generate Excel file and prompt the user to download
    XLSX.writeFile(workbook, `${selectedReportType}_report_${selectedMonth}.xlsx`);
  };

  return (
    <div className="App">
      <h1>Trainer Usage Report</h1>

      {/* Dropdown to select report type */}
      <div className="report-controls">
        <label>Report Type: </label>
        <select value={selectedReportType} onChange={handleReportTypeChange}>
          <option value="content_usage">Content Usage Summary</option>
          <option value="detailed_report">Detailed Report</option>
          <option value="batchwise_report">Batchwise Usage Report</option>
          <option value="library_report">Library Report</option>
        </select>

        {/* Dropdown to select month */}
        <label>Select Month: </label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="1 Month">1 Month</option>
          <option value="3 Month">3 Month</option>
          <option value="6 Month">6 Month</option>
          <option value="9 Month">9 Month</option>
          <option value="1 Year">1 Year</option>
        </select>
      </div>

      {/* Chart Section for Content Usage */}
      {selectedReportType === "content_usage" && !loading && (
        <div className="chart-container">
          <Pie data={chartData} />
        </div>
      )}

      {/* Table Section for Detailed Report */}
      {selectedReportType === "detailed_report" && !loading && (
        <div className="report-details">
          <h2>Detailed Report</h2>
          {reportData.details ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Presentation</th>
                    <th>Task</th>
                    <th>Assignment</th>
                    <th>Evaluation</th>
                    <th>Total Time</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.details.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.presentation}</td>
                      <td>{item.task}</td>
                      <td>{item.assignment}</td>
                      <td>{item.evaluation}</td>
                      <td>{item.totalTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Icon to download report as Excel */}
              <i
                className="fas fa-file-download download-icon"
                onClick={downloadExcel}
                title="Download as Excel"
              ></i>
            </>
          ) : (
            <p>No report data available</p>
          )}
        </div>
      )}

      {/* More sections for Batchwise and Library reports with download icon */}
    </div>
  );
}

export default App;
