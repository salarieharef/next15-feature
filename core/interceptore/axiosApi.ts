import axios, { AxiosResponse, AxiosError } from "axios";
import { getCookie , deleteCookie } from "@/utils/jsCookie";

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
        deleteCookie('token');
        window.location.pathname = '/clientLogin';
    }

    if (err.response?.status === 401) {
        deleteCookie('token');
        window.location.pathname = '/clientLogin';
    }

    if (err.response?.status && err.response?.status >= 400 && err.response?.status < 500) {
        console.log("Client request error:", err.response?.status);
    }

    return Promise.reject(err);
}

axiosApi.interceptors.response.use(onSuccess, onError);

axiosApi.interceptors.request.use(async (opt) => {
    const token = await getCookie('token');
    if (token) {
        opt.headers.Authorization = 'Bearer ' + token;
    }
    return opt;
});

export default axiosApi;
