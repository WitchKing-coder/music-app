import {createApi} from "@reduxjs/toolkit/query";
import loginInterseptor from "../../helpers/http/LoginInterceptor";
import {AuthResponse} from "../../types/responses/authResponse";
import {setCredentials} from "../slices/TokenService";

enum authEnum {
    CLIENT_ID = "a0bedf84284d4a58a6cccf134ab15b76",
    REDIRECT_URI = "http://localhost:3000",
    RESPONSE_TYPE = "token"
}
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: loginInterseptor,
    endpoints: (build) => ({
        loginUser: build.query<AuthResponse, string>({
            query(data) {
                return {
                    url: `?client_id=${authEnum.CLIENT_ID}&redirect_uri=${authEnum.REDIRECT_URI}&response_type=${authEnum.RESPONSE_TYPE}`,
                    method: 'GET',
                    body: data,
                    credentials: 'include',
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch  (e:any) {
                    console.log(e);
                }
            },
        }),
    }),
});

// export const { useLoginUserMutation } = authApi;