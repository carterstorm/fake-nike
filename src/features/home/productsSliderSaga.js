import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getPopularProducts } from "./getPopularProducts";
import {
    fetchGetPopularProducts,
    fetchPopularProductsError,
    fetchPopularProductsSuccess,
    selectIndex,
    selectWindowWidth,
    setLeftArrowVisibility,
    setNextIndex,
    setPrevIndex,
    setRightArrowVisibility
} from "./productsSliderSlice";

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

function* setNextIndexHandler() {
    const windowWidth = yield select(selectWindowWidth);
    const index = yield select(selectIndex);

    if (windowWidth > 960) {
        if (index === 1) {
            yield put(setLeftArrowVisibility());
        };
        if (index === 7) {
            yield put(setRightArrowVisibility());
        };
    } else if (windowWidth < 960 && windowWidth > 600) {
        if (index === 1) {
            yield put(setLeftArrowVisibility());
        };
        if (index === 8) {
            yield put(setRightArrowVisibility());
        };
    } else {
        if (index === 1) {
            yield put(setLeftArrowVisibility());
        };
        if (index === 9) {
            yield put(setRightArrowVisibility());
        };
    };
};

function* setPrevIndexHandler() {
    const windowWidth = yield select(selectWindowWidth);
    const index = yield select(selectIndex);

    if (windowWidth > 960) {
        if (index === 6) {
            yield put(setRightArrowVisibility());
        };
        if (index === 0) {
            yield put(setLeftArrowVisibility());
        };
    } else if (windowWidth < 960 && windowWidth > 600) {
        if (index === 7) {
            yield put(setRightArrowVisibility());
        };
        if (index === 0) {
            yield put(setLeftArrowVisibility());
        };
    } else {
        if (index === 8) {
            yield put(setRightArrowVisibility());
        };
        if (index === 0) {
            yield put(setLeftArrowVisibility());
        };
    };
};

export function* popularProductsSaga() {
    yield takeEvery(fetchGetPopularProducts.type, fetchGetPopularProductsHandler);
    yield takeEvery(setNextIndex.type, setNextIndexHandler);
    yield takeEvery(setPrevIndex.type, setPrevIndexHandler);
};