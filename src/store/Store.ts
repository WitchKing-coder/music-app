import {configureStore} from "@reduxjs/toolkit";
import {searchApi} from "./api/searchApi";
import getValueUrl from "./slices/SearchValue";


export const store =  configureStore({
        reducer: {
            [searchApi.reducerPath]: searchApi.reducer,
            nameReducer: getValueUrl,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat([
                searchApi.middleware
            ])
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch