import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    } else {
        delete config.headers["Authorization"]; 
    }
    return config;
});

const API = {
    post: (apiEndPoint: string, payload = {}) => {
        const url = `${baseURL}/${apiEndPoint}`;
        return axios.post(url, payload);
    },
    get: (apiEndPoint: string, payload = {}) => {
        const url = `${baseURL}/${apiEndPoint}`;
        return axios.get(url, {params: payload});
    },
    getExternal: (url: string, payload = {}) => {
        return axios.get(url, {params: payload});
    },
    postExternal: (url: string, payload = {}) => {
        return axios.post(url, payload);
    },
};

export default API;