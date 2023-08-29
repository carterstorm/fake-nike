import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchGetCategoriesData, fetchGetCategoriesDataError, fetchGetCategoriesDataSuccess } from "./categoriesSliderSlice";
import { getCategoriesData } from "./getCategoriesData";

function* fetchGetCategoriesDataHandler() {
    try {
        yield delay(1000);
        const categoriesData = yield call(getCategoriesData);
        yield put(fetchGetCategoriesDataSuccess(categoriesData));
    } catch {
        console.error("Coś poszło nie tak...");
        yield put(fetchGetCategoriesDataError());
    };
};

export function* categoriresSaga() {
    yield takeEvery(fetchGetCategoriesData.type, fetchGetCategoriesDataHandler);
};