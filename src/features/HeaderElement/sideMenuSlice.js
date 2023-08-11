import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState: {
        hidden: true,
        windowWidth: window.innerWidth,
    },
    reducers: {
        toggleHidden: state => {
            state.hidden = !state.hidden;
        },
        updateWindowWidth: (state, action) => {
            state.windowWidth = action.payload;

            if (state.windowWidth > 960) {
                state.hidden = true;
            };
        },
    },
});

export const {
    toggleHidden,
    updateWindowWidth,
} = sideMenuSlice.actions;

export const selectState = state => state.sideMenu;
export const selectHidden = state => selectState(state).hidden;

export default sideMenuSlice.reducer;