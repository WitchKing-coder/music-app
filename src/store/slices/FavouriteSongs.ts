import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface valueState {
    src: string[]
}

const initialState: valueState = {
    src: []
}

export const favouriteSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<string>) => {
            state.src.push(action.payload)
        },
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.src.splice(state.src.indexOf(action.payload), 1)
        }
    }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer