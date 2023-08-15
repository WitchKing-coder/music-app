import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    searchUrls: string[],
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    searchUrls: [],
    isLoading: false,
    error: '',
}

export const searchSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        searchFetching(state) {
            state.isLoading = true
        },
        searchFetchingSuccess(state, action: PayloadAction<string[]>) {
            state.isLoading = false
            state.error = ''
            state.searchUrls = action.payload
        },
        searchFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default  searchSlice.reducer