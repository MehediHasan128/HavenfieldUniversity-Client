import { baseapi } from "../../../api/baseApi";

const studentApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
        query: (data) => ({
            url: '/users/create-student',
            method: 'POST',
            body: data
        })
    })
  }),
});

export const { useCreateStudentMutation } = studentApi;
