import axios from 'axios';

// Function to register the user
export const registerUser = async (firstName, lastName, email, password) => {
    try {
        // Send a POST request to the backend API for user registration
        const response = await axios.post('http://localhost:5000/api/auth/register', {
            firstName,
            lastName,
            email,
            password
        });

        // Return the response data (like a success message or token)
        return response.data;
    } catch (error) {
        console.error('There was an error registering the user!', error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function to save the assignment data
export const saveAssignment = async (assignmentData) => {
    try {
        // Structure of the assignment data to be sent
        const dataToSend = {
            product: assignmentData.product, // e.g. 'words-worth-jr'
            tasks: assignmentData.tasks, // Array of selected tasks
            assignmentName: assignmentData.assignmentName, // String
            startDate: assignmentData.startDate, // String (datetime-local format)
            endDate: assignmentData.endDate, // String (datetime-local format)
            selectedClasses: assignmentData.selectedClasses, // Array of selected class names
            selectedLearners: assignmentData.selectedLearners, // Array of selected learners
            isEExam: assignmentData.isEExam, // Boolean
            attempts: assignmentData.attempts // Number
        };

        // Send a POST request to save the assignment data to the backend API
        const response = await axios.post('http://localhost:5000/api/auth/save_assignment.php', dataToSend);

        // Return the response data (success or failure message)
        return response.data;
    } catch (error) {
        console.error('There was an error saving the assignment!', error);
        throw error; // Rethrow the error for handling in the component
    }
};
