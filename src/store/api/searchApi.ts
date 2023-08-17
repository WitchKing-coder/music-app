import {createApi} from "@reduxjs/toolkit/query";
import basicInterceptor from "../../helpers/http/BasicInterceptor";
import ISearch from "../../types/responses/search";

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: basicInterceptor,
    endpoints: (build) => ({
        setSearch: build.query<ISearch, string>({
            query(arg) {
                console.log(arg)
                return {
                    url: `/search`,
                    method: "post",
                    body: {

                    }
                }
            }
        })
    })
})

// export const {useSetSearchQuery} = searchApi;