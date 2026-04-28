import axios from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
    PRICE_LISTING_REQUEST,
    priceListingSuccess,
    priceListingFailure,
} from "./action";
import setupAxiosInterceptor from "../../utils/interceptor";
import { getStoredToken } from "../../utils/tokenUtils";

const API_BASE = import.meta.env.VITE_API_URL || "";

const priceListingApi = async (payload) => {
    try {
        const params = new URLSearchParams(payload);
        const response = await axios.get(`${API_BASE}/pricelist?${params}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getStoredToken()}`,
            },
        });
        console.log("Price Listing API response:", response.data);
        return response.data;
    } catch (err) {
        const res = err?.response;
        const payload = res?.data || {};
        const message =
            payload?.message ||
            payload?.error ||
            err.message ||
            "Price listing failed";
        const error = new Error(message);
        error.status = res?.status;
        error.payload = payload;
        throw error;
    }
};

function* handlePriceListing(action) {
    try {
        yield call(setupAxiosInterceptor);
        const response = yield call(priceListingApi, action.payload);
        yield put(
            priceListingSuccess({
                data: response.data,
            }),
        );
    } catch (error) {
        yield put(
            priceListingFailure({
                message: error.message || "Price listing failed",
            }),
        );
    }
}

export default function* pricesSaga() {
    yield all([takeLatest(PRICE_LISTING_REQUEST, handlePriceListing)]);
}
