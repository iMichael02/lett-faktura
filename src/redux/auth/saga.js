import axios from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGOUT, loginSuccess, loginFailure } from "./action";

const API_BASE = import.meta.env.VITE_API_URL || "";

const loginApi = async ({ email, password }) => {
    try {
        const response = await axios.post(
            `${API_BASE}/auth/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        console.log("Login API response:", response.data);
        return response.data;
    } catch (err) {
        const res = err?.response;
        const payload = res?.data || {};
        const message =
            payload?.message || payload?.error || err.message || "Login failed";
        const error = new Error(message);
        error.status = res?.status;
        error.payload = payload;
        throw error;
    }
};

function* handleLogin(action) {
    try {
        const credentials = action.payload;
        const response = yield call(loginApi, credentials);

        const user = response.user || null;
        const token = response.token || response.accessToken || null;

        if (token) {
            localStorage.setItem("auth_token", token);
        } else {
            yield put(
                loginFailure({
                    error: "No auth token received",
                }),
            );
            return;
        }

        yield put(
            loginSuccess({
                user,
                token,
            }),
        );
    } catch (error) {
        yield put(
            loginFailure({
                error: error.message || "Login failed",
            }),
        );
    }
}

function* handleLogout() {
    try {
        localStorage.removeItem("auth_token");
    } catch (error) {
        yield put(
            loginFailure({
                error: error.message || "Failed to remove auth token",
            }),
        );
    }
}

export default function* authSaga() {
    yield all([
        takeLatest(LOGIN_REQUEST, handleLogin),
        takeLatest(LOGOUT, handleLogout),
    ]);
}
