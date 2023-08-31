import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sideMenuReducer from "./features/HeaderElement/sideMenuSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        sideMenu: sideMenuReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;