import { baseapi } from "../../api/baseApi";

const authApi = baseapi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo
            })
        })
    })
});

export const {useLoginMutation} = authApi;