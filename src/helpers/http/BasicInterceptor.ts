import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { getToken } from '../token/TokenHelpers';

const baseUrl = `https://api.musicapi.com/public`;

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        const token = getToken();
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const basicInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (
        (result.error?.data as any)?.message === 'required to access this resource'
    ) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const refreshResult = await baseQuery(
                    { credentials: 'include', url: 'auth/refresh' },
                    api,
                    extraOptions
                );

                if (refreshResult.data) {
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    //   api.dispatch(logout());
                    window.location.href = '/login';
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};
export default basicInterceptor;
