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
    },
    reducers: {
        setLeftArrowVisibility: state => {
            state.leftArrowVisibility = !state.leftArrowVisibility;
        },
        setRightArrowVisibility: state => {
            state.rightArrowVisibility = !state.rightArrowVisibility;
        },
        setWindowWidth: (state, { payload: windowWidth }) => {
            state.windowWidth = windowWidth;
        },
        setNextIndex: state => {
            state.index += 1;
        },
        setPrevIndex: state => {
            state.index -= 1;
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
export const selectLeftArrowVisibility = state => selectProductsState(state).leftArrowVisibility;
export const selectRightArrowVisibility = state => selectProductsState(state).rightArrowVisibility;

export default productsSliderSlice.reducer;