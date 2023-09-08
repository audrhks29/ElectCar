import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    popupState: false, // 팝업 표시 유무
    selectContent: [], // 선택한 데이터 
    likeCounter: 0,
    searchBox: false, //검색창 표시 유무
}
export const stateSlice = createSlice({
    name: 'state',
    initialState: initialState,
    reducers: {
        isPopupToggle(state, action) {
            state.popupState = !state.popupState
            state.popupState
                ? state.selectContent = action.payload
                : state.selectContent = null
        },
        isLikeToggle(state, action) {
            state.likeCounter += 1;
            state.likeCounter % 2 == 1
                ? state.selectContent.like += 1
                : state.selectContent.like -= 1;
        },
        isSearchBoxToggle(state, action) {
            state.searchBox = !state.searchBox
        }
    }
})

export const { isPopupToggle, isLikeToggle, isSearchBoxToggle } = stateSlice.actions
export default stateSlice.reducer