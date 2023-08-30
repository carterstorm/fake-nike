import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sideMenuReducer from "./features/HeaderElement/sideMenuSlice";
import productsSliderReducer from "./features/home/popularProductsSliderSlice";
import categoriesReducer from "./features/home/categoriesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        sideMenu: sideMenuReducer,
        productsSlider: productsSliderReducer,
        categoriesSlice: categoriesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;