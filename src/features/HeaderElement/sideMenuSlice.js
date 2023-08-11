import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState: {
        hidden: false,
    },
    reducers: {
        toggleHidden: state => {
            state.hidden = !state.hidden;
        },
    },
});

export const {
    toggleHidden,
} = sideMenuSlice.actions;

export const selectHiddenState = state => state.sideMenu;
export const selectHidden = state => selectHiddenState(state).hidden;

export default sideMenuSlice.reducer;