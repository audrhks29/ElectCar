import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    keywords: null
}
export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        onChangeKeyword(state, action) {
            state.keywords = action.payload
        }
    },
})

export const { onChangeKeyword } = searchSlice.actions
export default searchSlice.reducer