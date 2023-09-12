"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, qty: 1 });
    },
    removeItem: (state, action) => {
      const idx = state.findIndex((item) => item.id === action.payload);
      state.splice(idx, 1);
    },
    changeQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.qty = action.payload.qty;
    },
    changeSize: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.selectedSize = action.payload.size;
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeItem, changeQuantity, changeSize, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
