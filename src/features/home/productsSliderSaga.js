import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getPopularProducts } from "./getData";

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

function* setArrowVisibilityHandler() {
    const index = yield select(selectIndex);
    const windowWidth = yield select(selectWindowWidth);

    const showLeftArrow = index === 0;
    const showRightArrow =
        (windowWidth > 960 && index === 7) ||
        (windowWidth < 960 && windowWidth > 600 && index === 8) ||
        (windowWidth <= 600 && index === 9);

    yield put(setLeftArrowVisibility(showLeftArrow));
    yield put(setRightArrowVisibility(showRightArrow));
};

export function* popularProductsSaga() {
    yield takeEvery(fetchGetPopularProducts.type, fetchGetPopularProductsHandler);
    yield takeEvery(setPrevIndex.type, setArrowVisibilityHandler);
    yield takeEvery(setNextIndex.type, setArrowVisibilityHandler);
};