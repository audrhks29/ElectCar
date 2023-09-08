import { configureStore } from "@reduxjs/toolkit";
import contentR from './modules/contentSlice'
import stateR from './modules/stateSlice'
import searchR from './modules/searchSlice'
export const store = configureStore({
    reducer: {
        contentR,
        stateR,
        searchR
    }
})