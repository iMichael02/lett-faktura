import axios from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
    PRICE_LISTING_REQUEST,
    priceListingSuccess,
    priceListingFailure,
    PRICE_UPDATE_REQUEST,
    priceUpdateSuccess,
    priceUpdateFailure,
} from "./action";

const API_BASE = import.meta.env.VITE_API_URL || "";

const priceListingApi = async (payload) => {
    const params = new URLSearchParams(payload);

    const response = await axios.get(`${API_BASE}/pricelist?${params}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

function* handlePriceListing(action) {
    try {
        const response = yield call(priceListingApi, action.payload);

        yield put(
            priceListingSuccess({
                data: response.data,
            }),
        );
    } catch (error) {
        yield put(
            priceListingFailure({
                message:
                    error.response?.data?.message ||
                    error.message ||
                    "Price listing failed",
            }),
        );
    }
}

const priceUpdateApi = async ({ id, ...data }) => {
    const response = await axios.put(`${API_BASE}/pricelist/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};

function* handlePriceUpdate(action) {
    try {
        const response = yield call(priceUpdateApi, action.payload);

        yield put(
            priceUpdateSuccess({
                data: response.data,
            }),
        );
    } catch (error) {
        yield put(
            priceUpdateFailure({
                message:
                    error.response?.data?.message ||
                    error.message ||
                    "Price update failed",
            }),
        );
    }
}

export default function* pricesSaga() {
    yield all([
        takeLatest(PRICE_LISTING_REQUEST, handlePriceListing),
        takeLatest(PRICE_UPDATE_REQUEST, handlePriceUpdate),
    ]);
}
