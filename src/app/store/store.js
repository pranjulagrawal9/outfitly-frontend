import cartReducer from "./features/cart/cartSlice";
import menuReducer from "./features/menu/menuSlice";
import userReducer from "./features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("persistedState", serializedState);
  } catch (err) {
    console.log(err);
  }
};

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("persistedState");
    if (serializedState === null) {
      return undefined; // Return undefined to create a new Redux store
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined; // Return undefined to create a new Redux store
  }
};

const persistedState = typeof window === "undefined" ? undefined : loadState();
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    menu: menuReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
