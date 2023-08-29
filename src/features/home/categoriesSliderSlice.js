import { createSlice } from "@reduxjs/toolkit";

export const categoriesSliderSlice = createSlice({
    name: "categoriesSlice",
    initialState: {
        categoriesData: [],
        index: 0,
        loading: null,
    },
    reducers: {
        setPrevIndex: state => {
            if (state.index - 1 < 0) {
                state.index = state.categoriesData.length - 1;
            } else {
                state.index = state.index - 1;
            };
        },
        setNextIndex: state => {
            if (state.index + 1 >= state.categoriesData.length) {
                state.index = 0;
            } else {
                state.index = state.index + 1;
            };
        },
        fetchGetCategoriesData: state => {
            state.loading = true;
        },
        fetchGetCategoriesDataSuccess: (state, { payload: categoriesData }) => {
            state.loading = false;
            state.categoriesData = categoriesData;
        },
        fetchGetCategoriesDataError: state => {
            state.loading = false;
        },
    },
});

export const {
    setNextIndex,
    setPrevIndex,
    fetchGetCategoriesData,
    fetchGetCategoriesDataSuccess,
    fetchGetCategoriesDataError,
} = categoriesSliderSlice.actions;

export const selectCategoriesState = state => state.categoriesSlice;
export const selectCategoriesData = state => selectCategoriesState(state).categoriesData;
export const selectIndex = state => selectCategoriesState(state).index;

export default categoriesSliderSlice.reducer;