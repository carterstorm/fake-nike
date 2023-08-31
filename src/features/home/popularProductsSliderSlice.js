import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../../theme";

const popularProductsSliderSlice = createSlice({
    name: 'popularProductsSlider',
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
        setPopularProductsLeftArrowVisibility: (state, { payload }) => {
            state.arrowVisibility.leftArrowVisibility = payload;
        },
        setPopularProductsRightArrowVisibility: (state, { payload }) => {
            state.arrowVisibility.rightArrowVisibility = payload;
        },
        setPopularProductsWindowWidth: (state, { payload: windowWidth }) => {
            state.windowWidth = windowWidth;
        },
        setPopularProductsPrevIndex: state => {
            if (state.index > 0) {
                state.index -= 1;
            };
        },
        setPopularProductsNextIndex: state => {
            const { windowWidth, index } = state;
            const { mobile, tablet } = theme.media;

            if (index < 9) {
                if ((windowWidth > tablet && index <= 6) ||
                    (windowWidth < tablet && windowWidth > mobile && index <= 7) ||
                    (windowWidth <= mobile && index <= 8)) {
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
    setPopularProductsNextIndex,
    setPopularProductsPrevIndex,
    setPopularProductsWindowWidth,
    setPopularProductsLeftArrowVisibility,
    setPopularProductsRightArrowVisibility,
} = popularProductsSliderSlice.actions;

export const selectPopularProductsState = state => state.popularProductsSlider;
export const selectPopularProducts = state => selectPopularProductsState(state).popularProducts;
export const selectArePopularProductsLoading = state => selectPopularProductsState(state).loading;
export const selectPopularProductsIndex = state => selectPopularProductsState(state).index;
export const selectPopularProductsWindowWidth = state => selectPopularProductsState(state).windowWidth;
export const selectPopularProductsLeftArrowVisibility = state => selectPopularProductsState(state).arrowVisibility.leftArrowVisibility;
export const selectPopularProductsRightArrowVisibility = state => selectPopularProductsState(state).arrowVisibility.rightArrowVisibility;

export default popularProductsSliderSlice.reducer;