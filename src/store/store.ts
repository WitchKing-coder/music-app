import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

const rootreducer = combineReducers({
    userReducer
})
export const store =  configureStore({
        reducer: rootreducer
    })

export type RootState = ReturnType<typeof rootreducer>
export type AppDispatch = typeof store.dispatch