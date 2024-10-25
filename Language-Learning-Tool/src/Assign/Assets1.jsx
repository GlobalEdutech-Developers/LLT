import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import './Assets1.css';

const Assets1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const passedTaskName = location.state?.taskName || '';

  const [taskList, setTaskList] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [selectedTasks, setSelectedTasks] = useState([]); // State for managing selected tasks
  const [isTaskDropdownOpen, setIsTaskDropdownOpen] = useState(false); // Task dropdown visibility
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false); // Class dropdown visibility
  const [isEExam, setIsEExam] = useState(false); // State to manage E-Exam toggle
  const [selectedLearners, setSelectedLearners] = useState([]); // State to manage selected learners
  const [assignmentName, setAssignmentName] = useState(''); // State for assignment name
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [attempts, setAttempts] = useState(3);

  const [errors, setErrors] = useState({});

  const classes = [
    'I-A', 'I-B', 'I-C', 'I-D',
    'II-A', 'II-B', 'II-C', 'II-D',
    'III-A', 'III-B', 'III-C', 'III-D',
    'IV-A', 'IV-B', 'IV-C', 'IV-D',
    'V-A', 'VI-A', 'VII-A', 'VIII-A',
    'IX-A', 'X-A', 'X-mango', 'X-grapes', 'X-pineapple'
  ];

  const [selectedClasses, setSelectedClasses] = useState([]);
  const [learnersForClass, setLearnersForClass] = useState([]);

  const learnersData = {
    'I-A': ['Learner A1', 'Learner A2', 'Learner A3'],
    'I-B': ['Learner B1', 'Learner B2'],
    'II-A': ['Learner C1', 'Learner C2', 'Learner C3', 'Learner C4'],
  };

  useEffect(() => {
    if (passedTaskName) {
      setTaskList((prevTasks) => [...prevTasks, passedTaskName]);
    }
  }, [passedTaskName]);

  const handleTaskSelection = (task) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(task)
        ? prevSelectedTasks.filter((t) => t !== task)
        : [...prevSelectedTasks, task]
    );
    setErrors((prevErrors) => ({ ...prevErrors, selectedTasks: '' })); // Clear task error on selection
  };

  const handleClassChange = (className) => {
    setSelectedClasses((prevSelectedClasses) =>
      prevSelectedClasses.includes(className)
        ? prevSelectedClasses.filter((cls) => cls !== className)
        : [...prevSelectedClasses, className]
    );
  };

  useEffect(() => {
    const combinedLearners = selectedClasses.flatMap((className) => learnersData[className] || []);
    setLearnersForClass(combinedLearners);
  }, [selectedClasses]);

  const toggleLearnerSelection = (learner) => {
    setSelectedLearners((prevSelectedLearners) =>
      prevSelectedLearners.includes(learner)
        ? prevSelectedLearners.filter((l) => l !== learner)
        : [...prevSelectedLearners, learner]
    );
    setErrors((prevErrors) => ({ ...prevErrors, selectedLearners: '' })); // Clear learner error on selection
  };

  const handlePickAll = () => {
    setSelectedLearners(learnersForClass);
    setErrors((prevErrors) => ({ ...prevErrors, selectedLearners: '' })); // Clear learner error on pick all
  };

  const validateForm = () => {
    let formErrors = {};

    if (!assignmentName) {
      formErrors.assignmentName = "Assignment Name is required";
    }

    if (selectedTasks.length === 0) {
      formErrors.selectedTasks = "At least one task must be selected";
    }

    if (!startDate) {
      formErrors.startDate = "Start Date is required";
    }

    if (!endDate) {
      formErrors.endDate = "End Date is required";
    }

    if (selectedLearners.length === 0) {
      formErrors.selectedLearners = "At least one learner must be selected";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      const assignmentData = {
        product: 'Language Learning Tool',
        tasks: selectedTasks,
        assignmentName: assignmentName,
        startDate: startDate,
        endDate: endDate,
        selectedClasses: selectedClasses,
        selectedLearners: selectedLearners,
        isEExam: isEExam,
        attempts: attempts,
      };

      try {
        // Send the data to the backend to save into the database
        const response = await axios.post('http://localhost:3000/assignments', assignmentData);
        
        if (response.data.success) {
          alert('Assignment saved successfully!');
          navigate('/assign', { state: assignmentData });
        } else {
          alert('Failed to save the assignment.');
        }
      } catch (error) {
        console.error('Error saving assignment:', error);
        alert('An error occurred while saving the assignment.');
      }
    }
  };

  return (
    <div className="assets-page">
      <div className="assign-container">
        <div className="assign-form">
          {/* Product Selection */}
          <div className="form-group">
            <label htmlFor="product">Product:</label>
            <select id="product" name="product">
              <option value="words-worth-jr">Language Learning Tool</option>
            </select>
          </div>

          {/* Task Selection Dropdown with checkboxes */}
          <div className="form-group">
            <label htmlFor="task">Select Task:</label>
            <div className="dropdown-container">
              <button
                className="dropdown-btn"
                onClick={() => setIsTaskDropdownOpen(!isTaskDropdownOpen)}
              >
                {selectedTasks.length > 0
                  ? selectedTasks.join(', ')
                  : "--Select Task--"}
              </button>
              {isTaskDropdownOpen && (
                <div className="dropdown-content checkbox-list">
                  {taskList.map((task, index) => (
                    <div key={index} className="checkbox-item">
                      <input
                        type="checkbox"
                        id={`task-${index}`}
                        value={task}
                        checked={selectedTasks.includes(task)}
                        onChange={() => handleTaskSelection(task)}
                      />
                      <label htmlFor={`task-${index}`}>{task}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.selectedTasks && <span className="error">{errors.selectedTasks}</span>}
          </div>

          {/* Assignment Name */}
          <div className="form-group">
            <label htmlFor="assignmentName">Assignment Name:</label>
            <input
              type="text"
              id="assignmentName"
              name="assignmentName"
              value={assignmentName}
              onChange={(e) => {
                setAssignmentName(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, assignmentName: '' }));
              }}
              placeholder="Assignment Name"
            />
            {errors.assignmentName && <span className="error">{errors.assignmentName}</span>}
          </div>

          {/* Date Inputs */}
          <div className="date-group">
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setErrors((prevErrors) => ({ ...prevErrors, startDate: '' }));
                }}
              />
              {errors.startDate && <span className="error">{errors.startDate}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setErrors((prevErrors) => ({ ...prevErrors, endDate: '' }));
                }}
              />
              {errors.endDate && <span className="error">{errors.endDate}</span>}
            </div>
          </div>

          <button className="save-button" id="saveButton" onClick={handleSave}>
            Save
          </button>
        </div>

        <div className="right-sidebar">
          {/* Class Selection Dropdown with checkboxes */}
          <div className="form-group custom-dropdown">
            <label htmlFor="classSelect">Select Class:</label>
            <div className="dropdown-container">
              <button
                className="dropdown-btn"
                onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
              >
                {selectedClasses.length > 0
                  ? selectedClasses.join(', ')
                  : "--Select Class--"}
              </button>
              {isClassDropdownOpen && (
                <div className="dropdown-content checkbox-list">
                  {classes.map((className, index) => (
                    <div key={index} className="checkbox-item">
                      <input
                        type="checkbox"
                        id={`class-${index}`}
                        value={className}
                        checked={selectedClasses.includes(className)}
                        onChange={() => handleClassChange(className)}
                      />
                      <label htmlFor={`class-${index}`}>{className}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Learners List based on selected class */}
          {selectedClasses.length > 0 && (
            <div id="selectLearners" className="checkbox-list">
              {learnersForClass.map((learner, index) => (
                <div key={index} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`learner-${index}`}
                    value={learner}
                    checked={selectedLearners.includes(learner)}
                    onChange={() => toggleLearnerSelection(learner)}
                  />
                  <label htmlFor={`learner-${index}`}>{learner}</label>
                </div>
              ))}
            </div>
          )}
          {errors.selectedLearners && <span className="error">{errors.selectedLearners}</span>}

          <button className="pick-all-button" id="pickAllButton" onClick={handlePickAll}>
            Pick All
          </button>

          {/* Exam and Attempt Options */}
          <div className="options-group">
            <div className="toggle-switch">
              <label htmlFor="eExam">E-Exam</label>
              <label className="switch">
                <input
                  type="checkbox"
                  id="eExam"
                  name="eExam"
                  checked={isEExam}
                  onChange={() => setIsEExam(!isEExam)}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {!isEExam && (
              <>
                <div className="toggle-switch">
                  <label htmlFor="showAnswers">
                    <input type="checkbox" id="showAnswers" name="showAnswers" /> Show Answers
                  </label>
                </div>
                <div className="toggle-switch">
                  <label htmlFor="shuffleOptions">
                    <input type="checkbox" id="shuffleOptions" name="shuffleOptions" /> Shuffle Options
                  </label>
                </div>
              </>
            )}

            <div className="form-group attempts-group">
              <label htmlFor="attempts">Attempts:</label>
              <input
                type="number"
                id="attempts"
                name="attempts"
                min="1"
                value={attempts}
                onChange={(e) => setAttempts(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="assignment-summary">
        <p>
          Number of Tasks: {selectedTasks.length} | Total Assets: 0 | Learner Selected: {selectedLearners.length} | Estimated Time: 00:00 Mins
        </p>
      </div>
    </div>
  );
};

export default Assets1;
