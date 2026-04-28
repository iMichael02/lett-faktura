import { decodeToken } from "../../utils/tokenUtils";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./action";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    exp: null,
    iat: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS: {
            const { exp, iat } = decodeToken(action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                exp,
                iat,
                loading: false,
                error: null,
            };
        }
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                exp: null,
                iat: null,
                loading: false,
                error: action.payload.error,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                exp: null,
                iat: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
