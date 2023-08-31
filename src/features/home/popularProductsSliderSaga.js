import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getPopularProducts } from "./getData";
import { theme } from "../../theme";

import {
    fetchGetPopularProducts,
    fetchPopularProductsError,
    fetchPopularProductsSuccess,
    selectPopularProductsIndex,
    selectPopularProductsWindowWidth,
    setPopularProductsLeftArrowVisibility,
    setPopularProductsNextIndex,
    setPopularProductsPrevIndex,
    setPopularProductsRightArrowVisibility,
} from "./popularProductsSliderSlice";

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
    const index = yield select(selectPopularProductsIndex);
    const windowWidth = yield select(selectPopularProductsWindowWidth);
    const { mobile, tablet } = theme.media;

    const showLeftArrow = index === 0;
    const showRightArrow =
        (windowWidth > tablet && index === 7) ||
        (windowWidth < tablet && windowWidth > mobile && index === 8) ||
        (windowWidth <= mobile && index === 9);

    yield put(setPopularProductsLeftArrowVisibility(showLeftArrow));
    yield put(setPopularProductsRightArrowVisibility(showRightArrow));
};

export function* popularProductsSaga() {
    yield takeEvery(fetchGetPopularProducts.type, fetchGetPopularProductsHandler);
    yield takeEvery(setPopularProductsPrevIndex.type, setArrowVisibilityHandler);
    yield takeEvery(setPopularProductsNextIndex.type, setArrowVisibilityHandler);
};