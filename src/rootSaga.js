import { all } from "redux-saga/effects";
import { popularProductsSaga } from "./features/home/productsSliderSaga";

export default function* rootSaga() {
    yield all([
        popularProductsSaga(),
    ]);
};