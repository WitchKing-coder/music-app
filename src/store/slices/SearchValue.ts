import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface valueState {
    value: string,
    type: string,
}

const initialState: valueState = {
    value: "",
    type: "",
}

export const valueUrl = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setUrl: (state, action: PayloadAction<string[]>) => {
            state.value = action.payload[0]
            state.type = action.payload[1]
        }
    }
})

export const { setUrl } = valueUrl.actions
export default valueUrl.reducer