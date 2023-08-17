import {configureStore} from "@reduxjs/toolkit";
import getValueUrl from "./slices/SearchValue";
import getSearchStatus from './slices/SearchSlice'


export const store =  configureStore({
        reducer: {
            nameReducer: getValueUrl,
            searchReducer: getSearchStatus,
        },
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch