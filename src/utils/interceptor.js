// utils/interceptor.js

import axios from "axios";
import { getStoredToken } from "./tokenUtils";
import { store } from "../redux/store";
import { logout } from "../redux/auth/action";

let isInterceptorSetup = false;

const setupAxiosInterceptor = () => {
    if (isInterceptorSetup) return;

    isInterceptorSetup = true;

    axios.interceptors.request.use(
        (config) => {
            const token = getStoredToken();

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => Promise.reject(error),
    );

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if ([401, 403].includes(error.response?.status)) {
                store.dispatch(logout());
                localStorage.removeItem("token");
                window.location.href = "/login";
            }

            return Promise.reject(error);
        },
    );
};

export default setupAxiosInterceptor;
