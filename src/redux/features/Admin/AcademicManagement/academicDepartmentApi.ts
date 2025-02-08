import { baseapi } from "../../../api/baseApi";

const academicDepartment = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicDepartment: builder.mutation({
        query: (departmentInfo) => ({
            url: "/academicDepartment/create-academic-department",
            method: "POST",
            body: departmentInfo
        })
    }),
    getAllAcademicDepartment: builder.query({
      query: () => ({
        url: "/academicDepartment",
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

export const { useCreateAcademicDepartmentMutation, useGetAllAcademicDepartmentQuery } = academicDepartment;
