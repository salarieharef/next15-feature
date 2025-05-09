import axios, { AxiosResponse, AxiosError } from "axios";
import { getCookie, removeCookie } from '../cookie/cookies';

const baseURL = 'https://classapi.sepehracademy.ir/api';

const axiosApi = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response: AxiosResponse) => {
    return response.data;
}

const onError = (err: AxiosError) => {
    console.log(err);

    if (err.message === "Network Error") {
        removeCookie('token');
        window.location.pathname = '/login';
    }

    if (err.response?.status === 401) {
        removeCookie('token');
        window.location.pathname = '/login';
    }

    if (err.response?.status && err.response?.status >= 400 && err.response?.status < 500) {
        console.log("Client request error:", err.response?.status);
    }

    return Promise.reject(err);
}

axiosApi.interceptors.response.use(onSuccess, onError);

axiosApi.interceptors.request.use(async (opt:any) => {
    const token = await getCookie('token');
    if (token) {
        opt.headers.Authorization = 'Bearer ' + token;
    }
    return opt;
});

export default axiosApi;
