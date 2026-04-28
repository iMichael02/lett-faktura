import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import pricesReducer from "./prices/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    prices: pricesReducer,
});

export default rootReducer;
