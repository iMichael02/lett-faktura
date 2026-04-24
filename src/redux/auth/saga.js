import { takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "./action";

function* handleLogin(action) {
    try {
        console.log("Handling login...");
    } catch (error) {
        console.error("Login failed:", error);
    }
}

export default function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}
