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
    },
    reducers: {
        setLeftArrowVisibility: (state, { payload }) => {
            state.arrowVisibility.leftArrowVisibility = payload;
        },
        setRightArrowVisibility: (state, { payload }) => {
            state.arrowVisibility.rightArrowVisibility = payload;
        },
        setWindowWidth: (state, { payload: windowWidth }) => {
            state.windowWidth = windowWidth;
        },
        setPrevIndex: state => {
            if (state.index > 0) {
                state.index -= 1;
            };
        },
        setNextIndex: state => {
            const { windowWidth, index } = state;

            if (index < 9) {
                if ((windowWidth > 960 && index <= 6) ||
                    (windowWidth < 960 && windowWidth > 600 && index <= 7) ||
                    (windowWidth <= 600 && index <= 8)) {
                    state.index += 1;
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
    setNextIndex,
    setPrevIndex,
    setWindowWidth,
    setLeftArrowVisibility,
    setRightArrowVisibility,
} = productsSliderSlice.actions;

export const selectProductsState = state => state.productsSlider;
export const selectPopularProducts = state => selectProductsState(state).popularProducts;
export const selectArePopularProductsLoading = state => selectProductsState(state).loading;
export const selectIndex = state => selectProductsState(state).index;
export const selectWindowWidth = state => selectProductsState(state).windowWidth;
export const selectLeftArrowVisibility = state => selectProductsState(state).arrowVisibility.leftArrowVisibility;
export const selectRightArrowVisibility = state => selectProductsState(state).arrowVisibility.rightArrowVisibility;

export default productsSliderSlice.reducer;