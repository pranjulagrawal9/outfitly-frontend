import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    closeMenu: () => {
      return false;
    },
    openMenu: () => {
      return true;
    },
    toggleMenu: (state) => {
      return !state;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
