import {
    PRICE_LISTING_FAILURE,
    PRICE_LISTING_REQUEST,
    PRICE_LISTING_SUCCESS,
} from "./action";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const pricesReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRICE_LISTING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PRICE_LISTING_SUCCESS:
            return {
                ...state,
                items: action.payload.data || [],
                loading: false,
                error: null,
            };
        case PRICE_LISTING_FAILURE:
            return {
                ...state,
                items: [],
                loading: false,
                error: action.payload.message,
            };
        default:
            return state;
    }
};

export default pricesReducer;
