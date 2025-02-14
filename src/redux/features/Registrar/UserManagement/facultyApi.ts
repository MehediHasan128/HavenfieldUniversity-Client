import { baseapi } from "../../../api/baseApi";

const facultyApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createFaculty: builder.mutation({
        query: (data) => ({
            url: '/users/create-faculty',
            method: 'POST',
            body: data
        })
    })
  }),
});

export const { useCreateFacultyMutation } = facultyApi;
