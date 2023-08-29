import { all } from "redux-saga/effects";
import { popularProductsSaga } from "./features/home/productsSliderSaga";
import { categoriresSaga } from "./features/home/categoriesSliderSaga";

export default function* rootSaga() {
    yield all([
        popularProductsSaga(),
        categoriresSaga(),
    ]);
};