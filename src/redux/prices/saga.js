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
import { getConfig } from "../../config";

const priceListingApi = async (payload) => {
    const config = getConfig();
    const params = new URLSearchParams(payload);

    const response = await axios.get(`${config.API_URL}/pricelist?${params}`, {
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
    const config = getConfig();
    const response = await axios.put(
        `${config.API_URL}/pricelist/${id}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
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
