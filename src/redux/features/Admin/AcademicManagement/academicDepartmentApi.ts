import { baseapi } from "../../../api/baseApi";

const academicDepartment = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicDepartment: builder.mutation({
        query: (departmentInfo) => ({
            url: "/academicDepartment/create-academic-department",
            method: "POST",
            body: departmentInfo
        })
    })
  })
});

export const { useCreateAcademicDepartmentMutation } = academicDepartment;
