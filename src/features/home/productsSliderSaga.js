import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchGetPopularProducts, fetchPopularProductsError, fetchPopularProductsSuccess } from "./productsSliderSlice";
import { getPopularProducts } from "./getPopularProducts";

function* fetchGetPopularProductsHandler() {
    try {
        yield delay(1000);
        const popularProducts = yield call(getPopularProducts);
        yield put(fetchPopularProductsSuccess(popularProducts));
    } catch {
        console.error("Coś poszło nie tak...");
        yield put(fetchPopularProductsError());
    };
};

export function* popularProductsSaga() {
    yield takeEvery(fetchGetPopularProducts.type, fetchGetPopularProductsHandler);
};