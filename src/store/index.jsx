import { configureStore } from "@reduxjs/toolkit";
import contentR from './modules/contentSlice'
import stateR from './modules/stateSlice'
import searchR from './modules/searchSlice'
import noticeR from './modules/noticeSlice'
export const store = configureStore({
    reducer: {
        contentR,
        stateR,
        searchR,
        noticeR
    }
})