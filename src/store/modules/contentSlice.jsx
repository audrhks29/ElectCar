import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    contentData: [],
    loading: true,
    itemAmount: 6, // 처음 표시되는 아이템 갯수
    onListNum: 1, // 카테고리 넘버
    listItems: [
        '인기 콘텐츠', // onListNum = 1
        '전기차 소개', // onListNum = 2
        '슬기로운 전기차 여행', // onListNum = 3
        '충전 및 문제 대처법', // onListNum = 4
        'FAQ', // onListNum = 5
        '제주 전기차 충전소 찾기', // onListNum = 6
    ],
    filteredData: [],
    slicedData: []
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

        changeOnListNum(state, action) {
            state.onListNum = action.payload
        },
        changeFilteredData(state, action) {
            if (state.onListNum === 1) {
                state.filteredData = [...state.contentData]
                console.log(state.contentData);
            } else {
                state.filteredData = state.contentData.filter(item =>
                    item.category === state.listItems[state.onListNum - 1]
                )
                console.log(state.onListNum);
                console.log(state.listItems[state.onListNum - 1]);
            }
            console.log(state.contentData);
        },
        changeSlicedData(state, action) {
            state.slicedData = action.payload
        },
        changeSearchedData(state, action) {
            if (state.onListNum === 1) {
                state.slicedData = state.contentData.filter(
                    item => item.MainTitle.includes(action.payload)
                )
            } else {
                state.slicedData = state.contentData.filter(
                    item => item.MainTitle.includes(action.payload)
                        && item.category === state.listItems[state.onListNum - 1])
            }
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

export const { increaseItemAmount, changeCategory, changeOnListNum, changeFilteredData, changeSlicedData, changeSearchedData } = contentSlice.actions
export default contentSlice.reducer