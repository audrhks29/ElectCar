import { configureStore } from "@reduxjs/toolkit";
import contentR from './modules/contentSlice'
import stateR from './modules/stateSlice'
export const store = configureStore({
    reducer: {
        contentR,
        stateR
    }
})