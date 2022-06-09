import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice' // we're pulling the reducer from navSlice.page

export const store = configureStore({
    reducer: {
        nav: navReducer, // export the reducer to the store in App
    },
});