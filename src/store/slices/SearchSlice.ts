import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    searchUrls: string[],
    isLoading: boolean,
    isSuccess: boolean,
    error: string,
}

const initialState: UserState = {
    searchUrls: [],
    isLoading: false,
    isSuccess: false,
    error: '',
}

export const searchSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        searchFetching(state) {
            state.isLoading = true
            state.isSuccess = false
        },
        searchFetchingSuccess(state, action: PayloadAction<string[]>) {
            state.isLoading = false
            state.error = ''
            state.searchUrls = action.payload
            state.isSuccess = true
        },
        searchFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {searchFetching, searchFetchingSuccess, searchFetchingError} = searchSlice.actions

export default  searchSlice.reducer