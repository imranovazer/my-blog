import axios from "axios";
export const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8000',
})
export const axiosPrivate = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token') && localStorage.getItem('token')}` }
})


