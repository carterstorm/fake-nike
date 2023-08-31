import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getCategoriesData } from "../../getData";
import {
    fetchGetCategoriesData,
    fetchGetCategoriesDataError,
    fetchGetCategoriesDataSuccess
} from "./categoriesSlice";

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

export function* categoriesSaga() {
    yield takeEvery(fetchGetCategoriesData.type, fetchGetCategoriesDataHandler);
};