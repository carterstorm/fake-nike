import { createSlice } from "@reduxjs/toolkit";

const productsSliderSlice = createSlice({
    name: 'productsSlider',
    initialState: {
        popularProducts: [],
        loading: null,
        index: 0,
        windowWidth: window.innerWidth,
        arrowVisibility: {
            leftArrowVisibility: true,
            rightArrowVisibility: false,
        },
        touchPoints: {
            startX: 0,
            startY: 0,
        },
    },
    reducers: {
        setTouchPointX: (state, { payload }) => {
            state.touchPoints.startX = payload;
        },
        setTouchPointY: (state, { payload }) => {
            state.touchPoints.startY = payload;
        },
        setLeftArrowVisibility: (state, { payload }) => {
            state.arrowVisibility.leftArrowVisibility = payload;
        },
        setRightArrowVisibility: (state, { payload }) => {
            state.arrowVisibility.rightArrowVisibility = payload;
        },
        setWindowWidth: (state, { payload: windowWidth }) => {
            state.windowWidth = windowWidth;
        },
        setIndex: (state, { payload }) => {
            if (payload === "right") {
                if (state.windowWidth > 960) {
                    if (state.index <= 6) {
                        state.index += 1;
                    };
                } else if (state.windowWidth < 960 && state.windowWidth > 600) {
                    if (state.index <= 7) {
                        state.index += 1;
                    };
                } else {
                    if (state.index <= 8) {
                        state.index += 1;
                    };
                };
            } else if (payload === "left") {
                if (state.index >= 1) {
                    state.index -= 1;
                };
            };
        },
        fetchGetPopularProducts: state => {
            state.loading = true;
        },
        fetchPopularProductsSuccess: (state, { payload: popularProducts }) => {
            state.loading = false;
            state.popularProducts = popularProducts;
        },
        fetchPopularProductsError: state => {
            state.loading = false;
        },
    },
});

export const {
    fetchGetPopularProducts,
    fetchPopularProductsSuccess,
    fetchPopularProductsError,
    setIndex,
    setWindowWidth,
    setLeftArrowVisibility,
    setRightArrowVisibility,
    setTouchPointX,
    setTouchPointY,
} = productsSliderSlice.actions;

export const selectProductsState = state => state.productsSlider;
export const selectPopularProducts = state => selectProductsState(state).popularProducts;
export const selectArePopularProductsLoading = state => selectProductsState(state).loading;
export const selectIndex = state => selectProductsState(state).index;
export const selectWindowWidth = state => selectProductsState(state).windowWidth;
export const selectLeftArrowVisibility = state => selectProductsState(state).arrowVisibility.leftArrowVisibility;
export const selectRightArrowVisibility = state => selectProductsState(state).arrowVisibility.rightArrowVisibility;
export const selectTouchPointX = state => selectProductsState(state).touchPoints.startX;
export const selectTouchPointY = state => selectProductsState(state).touchPoints.startY;

export default productsSliderSlice.reducer;