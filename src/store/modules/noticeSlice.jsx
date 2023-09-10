import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    noticeData: [],
    loading: true,
    currentPage: 1,
    pagePerData: 5,
    arrayPageNumbers: [],
    slicedNoticeData: [],
}
export const getNoticeData = createAsyncThunk(
    'notice/getNoticeData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/d19e1685c520879143668d3993c15b83/raw/a20c4cdc0c9872aac37878e8cf86ea9e7cd5e826/newsData.json')
        const sortedData = [...res.data].sort((a, b) => b.id - a.id);
        return sortedData
    }
)
export const noticeSlice = createSlice({
    name: 'notice',
    initialState: initialState,
    reducers: {
        setInitialPagination(state, action) {
            const totalPage = Math.ceil(state.noticeData.length / state.pagePerData)
            state.arrayPageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1)
        },
        setSlicedData(state, action) {
            state.slicedNoticeData = state.noticeData.slice((state.currentPage - 1) * state.pagePerData, state.currentPage * state.pagePerData);
        },
        goToPage(state, action) {
            state.currentPage = action.payload
            const lastPage = state.arrayPageNumbers.length
            if (state.currentPage > lastPage) {
                state.currentPage = lastPage
            } else if (state.currentPage < 1) {
                state.currentPage = 1
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNoticeData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getNoticeData.fulfilled, (state, action) => {
                state.loading = false
                state.noticeData = action.payload
            })
            .addCase(getNoticeData.rejected, (state, action) => {
                state.loading = true
            })
    }
})

export const { setInitialPagination, setSlicedData, goToPage, setSelectedData } = noticeSlice.actions
export default noticeSlice.reducer