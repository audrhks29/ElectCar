import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    popupState: false,
    selectContent: [],
    likeCounter: 0
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
        }
    }
})

export const { isPopupToggle, isLikeToggle } = stateSlice.actions
export default stateSlice.reducer