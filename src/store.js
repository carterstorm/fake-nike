import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sideMenuReducer from "./features/HeaderElement/sideMenuSlice";
import productsSliderReducer from "./features/home/productsSliderSlice";
import popularProductsReducer from "./features/home/popularProductsSliderSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        sideMenu: sideMenuReducer,
        productsSlider: productsSliderReducer,
        popularProductsSlider: popularProductsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;