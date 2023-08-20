import { createSlice } from "@reduxjs/toolkit";

const productsSliderSlice = createSlice({
    name: 'productsSlider',
    initialState: {
        popularProducts: [],
        loading: null,
        index: 0,
        windowWidth: window.innerWidth,
        leftArrowVisibility: true,
        rightArrowVisibility: false,
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
        setLeftArrowVisibility: state => {
            if (state.index === 0) {
                state.leftArrowVisibility = true;
            } else {
                state.leftArrowVisibility = !state.leftArrowVisibility;
            };
        },
        setRightArrowVisibility: state => {
            if (state.index === 9) {
                state.rightArrowVisibility = true;
            } else {
                state.rightArrowVisibility = !state.rightArrowVisibility;
            };
        },
        setWindowWidth: (state, { payload: windowWidth }) => {
            state.windowWidth = windowWidth;
        },
        setNextIndex: state => {
            if (state.index <= 8) {
                state.index += 1;
            };
        },
        setPrevIndex: state => {
            if (state.index >= 1) {
                state.index -= 1;
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
    setNextIndex,
    setPrevIndex,
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
export const selectLeftArrowVisibility = state => selectProductsState(state).leftArrowVisibility;
export const selectRightArrowVisibility = state => selectProductsState(state).rightArrowVisibility;
export const selectTouchPointX = state => selectProductsState(state).touchPoints.startX;
export const selectTouchPointY = state => selectProductsState(state).touchPoints.startY;

export default productsSliderSlice.reducer;