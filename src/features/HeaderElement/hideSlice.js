import { createSlice } from "@reduxjs/toolkit";

const hideSlice = createSlice({
    name: 'hide',
    initialState: {
        hide: false,
    },
    reducers: {
        toogleHide: state => {
            state.hide = !state.hide;
        },
    },
});

export const {
    toogleHide,
} = hideSlice.actions;

export const selectHideState = state => state.hide;
export const selectHide = state => selectHideState(state).hide;

export default hideSlice.reducer;