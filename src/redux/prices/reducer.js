import {
    PRICE_LISTING_FAILURE,
    PRICE_LISTING_REQUEST,
    PRICE_LISTING_SUCCESS,
    PRICE_UPDATE_FAILURE,
    PRICE_UPDATE_REQUEST,
    PRICE_UPDATE_SUCCESS,
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
        case PRICE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PRICE_UPDATE_SUCCESS: {
            const newPrices = state.items.map((price) =>
                price.id === action.payload.data.id
                    ? action.payload.data
                    : price,
            );
            return {
                ...state,
                items: newPrices,
                loading: false,
                error: null,
            };
        }
        case PRICE_UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            };
        default:
            return state;
    }
};

export default pricesReducer;
