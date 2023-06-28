import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:4000/api/exec",
    headers: {
        'Content-Type': 'application/json'
    }
});