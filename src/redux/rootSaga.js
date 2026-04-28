import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import pricesSaga from "./prices/saga";

export default function* rootSaga() {
    yield all([authSaga(), pricesSaga()]);
}
