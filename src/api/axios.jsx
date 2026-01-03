import axios from 'axios';
const BASE_URL = 'https://l6s96xx0-3500.uks1.devtunnels.ms';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}); 