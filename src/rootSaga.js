import { all } from "redux-saga/effects";
import { popularProductsSaga } from "./features/home/popularProductsSliderSaga";

export default function* rootSaga() {
    yield all([
        popularProductsSaga(),
    ]);
};