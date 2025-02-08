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
  }),
});

export const { useCreateAcademicSchoolMutation } = academicSchool;
