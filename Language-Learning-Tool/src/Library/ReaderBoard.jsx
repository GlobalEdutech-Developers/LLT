// src/components/ReaderBoardPage.js
import React, { useState, useEffect } from 'react';
import './ReaderBoard.css';


const ReaderBoardPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [selectedClass, setSelectedClass] = useState('I-A');
  const [students, setStudents] = useState([]);
  const [sortField, setSortField] = useState('name'); // Sort by name by default

  useEffect(() => {
    // Simulate an API call to fetch students
    fetch(`/api/students?year=${selectedYear}&class=${selectedClass}`)
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedYear, selectedClass]);

  const handleSortChange = (e) => {
    const sortField = e.target.value;
    setSortField(sortField);
    // Sort the data here based on the selected field (name or books read)
    const sortedStudents = [...students].sort((a, b) => {
      if (sortField === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.booksRead - b.booksRead;
      }
    });
    setStudents(sortedStudents);
  };

  return (
    <div className="reader-board-page-no-sidebar">
      <header className="headerl">
     
        <h1>Reader Board</h1>
        <div className="filters">
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
          </select>
          <select value={sortField} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="booksRead">Books Read</option>
          </select>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="I-A">I-A</option>
            <option value="I-B">I-B</option>
            <option value="I-D">I-D</option>
            <option value="II-A">II-A</option>
            <option value="II-B">II-B</option>
            <option value="II-D">II-D</option>
            <option value="III-A">III-A</option>
          </select>
        </div>
      </header>

      <section className="reader-list">
        <table>
          <thead>
            <tr>
              <th>Books</th>
              <th>Readers</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.booksRead} books</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReaderBoardPage;
