import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getToken, removeToken, setToken} from '../../helpers/token/TokenHelpers';
import { AuthResponse } from '../../types/responses/authResponse';

interface initialStateProps {
    token: string | null;
    refreshToken: string | null;
}

const initialState: initialStateProps = {
    token: getToken(),
    refreshToken: null
};

export const tokenSlice = createSlice({
    initialState,
    name: 'tokenSlice',
    reducers: {
        setCredentials: (state, action: PayloadAction<AuthResponse>) => {
            const { accessToken, refreshToken } = action.payload.tokens;
            state.token = accessToken
            state.refreshToken = refreshToken
            setToken(accessToken);
        },
        removeCredentials: () => {
            removeToken();
        },
    },
});

export default tokenSlice.reducer;

export const {  setCredentials, removeCredentials } = tokenSlice.actions;


