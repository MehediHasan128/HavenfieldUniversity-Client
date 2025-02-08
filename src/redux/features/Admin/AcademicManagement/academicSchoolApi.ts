import { baseapi } from "../../../api/baseApi";

const academicSchool = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSchool: builder.mutation({
      query: (academicSchoolInfo) => ({
        url: "/academicSchool/create-academic-school",
        method: "POST",
        body: academicSchoolInfo,
      }),
    }),
    getAllAcademicSchool: builder.query({
      query: () => ({
        url: "/academicSchool",
        method: "GET"
      }),
      transformResponse: (responce) => {
        return {
          data: responce.data
        }
      }
    })
  })
});

export const { useCreateAcademicSchoolMutation, useGetAllAcademicSchoolQuery } = academicSchool;
