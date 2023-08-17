import { createSlice } from "@reduxjs/toolkit";

const productsSliderSlice = createSlice({
    name: 'productsSlider',
    initialState: {
        popularProducts: [],
        loading: null,
    },
    reducers: {
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
} = productsSliderSlice.actions;

export const selectProductsState = state => state.productsSlider;
export const selectPopularProducts = state => selectProductsState(state).popularProducts;
export const selectArePopularProductsLoading = state => selectProductsState(state).loading;

export default productsSliderSlice.reducer;