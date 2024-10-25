const handleTaskCreation = () => {
    if (taskDetails.taskName && taskDetails.description) {
      const newTask = {
        taskName: taskDetails.taskName,
        description: taskDetails.description,
      };
  
      fetch('http://localhost:3000/save-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Task saved successfully') {
            // Redirect to Assign page, passing the new task data
            navigate('/assign', { state: { newTask: { ...newTask, id: data.taskId } } });
          } else {
            alert('Failed to save task');
          }
        })
        .catch((error) => {
          console.error('Error saving task:', error);
        });
    } else {
      alert('Please fill in both the task name and description.');
    }
  };
  