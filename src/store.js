import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sideMenuReducer from "./features/HeaderElement/sideMenuSlice";
import popularProductsSliderReducer from "./features/home/popularProductsSliderSlice";
import categoriesReducer from "./features/home/categoriesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        sideMenu: sideMenuReducer,
        popularProductsSlider: popularProductsSliderReducer,
        categoriesSlice: categoriesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;