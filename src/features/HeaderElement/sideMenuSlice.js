import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState: {
        hidden: true,
        isSideMenuVisible: window.innerWidth > 960,
    },
    reducers: {
        toggleHidden: state => {
            state.hidden = !state.hidden;
        },
        setWindowHidden: (state, action) => {
            if (action.payload > 960) {
                state.hidden = true;
            };
        },
    },
});

export const {
    toggleHidden,
    setWindowHidden,
} = sideMenuSlice.actions;

export const selectState = state => state.sideMenu;
export const selectHidden = state => selectState(state).hidden;
export const selectIsSideMenuVisible = state => state.sideMenu.isSideMenuVisible;

export default sideMenuSlice.reducer;