import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    contentData: [],
    itemAmount: 6, // 처음 표시되는 아이템 갯수
    onListNum: 1,
    onListText: "인기 콘텐츠"
}
export const getContentData = createAsyncThunk(
    'content/getContentData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/0dba858bf5babf58a2d0a9c61aae8ff0/raw/a45514e80116da97e81f3b76634c7f05499a9cef/data.json')
        return res.data
    }
)
export const contentSlice = createSlice({
    name: 'content',
    initialState: initialState,
    reducers: {
        increaseItemAmount(state, action) {
            state.itemAmount += 6
        },
        changeCategory(state, action) {
            state.onListText = action.payload
        },
        changeOnListNum(state, action) {
            state.onListNum = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContentData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getContentData.fulfilled, (state, action) => {
                state.loading = false
                state.contentData = action.payload
            })
            .addCase(getContentData.rejected, (state, action) => {
                state.loading = true
            })
    }
})

export const { increaseItemAmount, changeCategory, changeOnListNum } = contentSlice.actions
export default contentSlice.reducer