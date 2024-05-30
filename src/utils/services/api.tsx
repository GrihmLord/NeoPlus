// Path: src/utils/api.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
    baseURL: 'https://your-api-url.com',  // Replace with your actual API endpoint.
});

// Example function to get user data
export const getUserData = async () => {
    try {
        const response = await api.get('/user');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// You can add more API functions here as needed

export default api;
