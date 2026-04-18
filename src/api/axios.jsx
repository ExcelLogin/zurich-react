import axios from 'axios';
const BASE_URL = 'https://zurich-express.vercel.app';

// http://127.0.0.1:3000

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}); 