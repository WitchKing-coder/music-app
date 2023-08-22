import {configureStore} from "@reduxjs/toolkit";
import getValueUrl from "./slices/SearchValue";
import changeFavourites from './slices/FavouriteSongs';


export const store =  configureStore({
        reducer: {
            nameReducer: getValueUrl,
            favouriteReducer: changeFavourites,
        },
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch