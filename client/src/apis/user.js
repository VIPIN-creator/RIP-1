import axios from 'axios';

export default axios.create({
    baseURL: "http://10.34.176.190:6060/api/users",
    headers: {
        'Content-Type': 'application/json'
    }
});