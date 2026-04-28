export const PRICE_LISTING_REQUEST = "PRICE_LISTING_REQUEST";
export const PRICE_LISTING_SUCCESS = "PRICE_LISTING_SUCCESS";
export const PRICE_LISTING_FAILURE = "PRICE_LISTING_FAILURE";
export const LOGOUT = "LOGOUT";

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
