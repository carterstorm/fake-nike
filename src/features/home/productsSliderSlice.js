import { createSlice } from "@reduxjs/toolkit";

const productsSliderSlice = createSlice({
    name: 'productsSlider',
    initialState: {
        popularProducts: [],
        loading: null,
        index: 2,
    },
    reducers: {
        setNextIndex: state => {
            if (state.index < 9) {
                state.index += 1;
            };
        },
        setPrevIndex: state => {
            if (state.index > 2) {
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
} = productsSliderSlice.actions;

export const selectProductsState = state => state.productsSlider;
export const selectPopularProducts = state => selectProductsState(state).popularProducts;
export const selectArePopularProductsLoading = state => selectProductsState(state).loading;
export const selectIndex = state => selectProductsState(state).index;

export default productsSliderSlice.reducer;