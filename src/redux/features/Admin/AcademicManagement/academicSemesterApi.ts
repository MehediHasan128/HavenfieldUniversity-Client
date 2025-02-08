import { baseapi } from "../../../api/baseApi";

const academicSemesterApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSemester: builder.mutation({
      query: (semesterInfo) => ({
        url: "/academicSemester/create-academic-semester",
        method: "POST",
        body: semesterInfo,
      }),
    }),
    getAllSemester: builder.query({
      query: (args) => {
        
        const params = new URLSearchParams();
        params.append(args[0].filterTerm, args[0].value)

        return {
          url: "/academicSemester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (responce) => {
        return {
          data: responce.data,
        };
      },
    }),
  }),
});

export const { useCreateAcademicSemesterMutation, useGetAllSemesterQuery } =
  academicSemesterApi;
