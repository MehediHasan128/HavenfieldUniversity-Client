import { baseapi } from "../api/baseApi";

const getAllUsers = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (args) => ({
        url: `${args}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = getAllUsers;
