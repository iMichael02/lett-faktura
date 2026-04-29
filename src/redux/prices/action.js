export const PRICE_LISTING_REQUEST = "PRICE_LISTING_REQUEST";
export const PRICE_LISTING_SUCCESS = "PRICE_LISTING_SUCCESS";
export const PRICE_LISTING_FAILURE = "PRICE_LISTING_FAILURE";
export const PRICE_UPDATE_REQUEST = "PRICE_UPDATE_REQUEST";
export const PRICE_UPDATE_SUCCESS = "PRICE_UPDATE_SUCCESS";
export const PRICE_UPDATE_FAILURE = "PRICE_UPDATE_FAILURE";

export const priceListingRequest = (payload) => ({
    type: PRICE_LISTING_REQUEST,
    payload,
});

export const priceListingSuccess = (payload) => ({
    type: PRICE_LISTING_SUCCESS,
    payload,
});

export const priceListingFailure = (payload) => ({
    type: PRICE_LISTING_FAILURE,
    payload,
});

export const priceUpdateRequest = (payload) => ({
    type: PRICE_UPDATE_REQUEST,
    payload,
});

export const priceUpdateSuccess = (payload) => ({
    type: PRICE_UPDATE_SUCCESS,
    payload,
});

export const priceUpdateFailure = (payload) => ({
    type: PRICE_UPDATE_FAILURE,
    payload,
});
