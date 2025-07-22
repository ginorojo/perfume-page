import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://backend-perfumes.onrender.com/api/v1',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


 //http://localhost:3000/api/v1
//https://backend-perfumes.onrender.com/api/v1
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    if (error.status === 401 && window.location.pathname !== '/login') {
        window.location.href = '/#/login';
    }

    return Promise.reject(error);
});


export default instance;