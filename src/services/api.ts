import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev4u-app-server.herokuapp.com'
});

export default api;
