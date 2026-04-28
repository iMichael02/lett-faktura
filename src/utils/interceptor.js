import axios from "axios";
import { getStoredToken, isTokenExpired } from "./tokenUtils";
import { store } from "../redux/store";
import { logout } from "../redux/auth/action";

const setupAxiosInterceptor = () => {
    axios.interceptors.request.use(
        (config) => {
            const token = getStoredToken();
            if (token && !isTokenExpired(token)) {
                config.headers.Authorization = `Bearer ${token}`;
            } else {
                store.dispatch(logout());
                window.location.href = "/login";
            }
            return config;
        },
        (error) => Promise.reject(error),
    );

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                store.dispatch(logout());
                window.location.href = "/login";
            }
            return Promise.reject(error);
        },
    );
};

export default setupAxiosInterceptor;
