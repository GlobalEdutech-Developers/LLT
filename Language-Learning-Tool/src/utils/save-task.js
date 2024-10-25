const handleTaskCreation = () => {
    if (taskDetails.taskName && taskDetails.description) {
      const newTask = {
        taskName: taskDetails.taskName,
        description: taskDetails.description,
      };
  
      console.log('Sending task:', newTask);
  
      fetch('http://localhost:3000/save-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),  // Use JSON.stringify for sending data as JSON
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Task saved successfully, status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.message === 'Task saved successfully') {
            alert('Task saved successfully');
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
  