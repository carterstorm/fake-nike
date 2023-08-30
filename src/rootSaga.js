import { all } from "redux-saga/effects";
import { popularProductsSaga } from "./features/home/popularProductsSliderSaga";
import { categoriesSaga } from "./features/home/categoriesSaga";

export default function* rootSaga() {
    yield all([
        popularProductsSaga(),
        categoriesSaga(),
    ]);
};