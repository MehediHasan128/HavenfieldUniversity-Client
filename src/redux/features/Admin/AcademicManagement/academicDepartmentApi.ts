import { TDepartmentQuery } from "../../../../types/academicDepartment";
import { baseapi } from "../../../api/baseApi";

const academicDepartment = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicDepartment: builder.mutation({
      query: (departmentInfo) => ({
        url: "/academicDepartment/create-academic-department",
        method: "POST",
        body: departmentInfo,
      }),
    }),
    getAllAcademicDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
          if(args){
            args.forEach((item: TDepartmentQuery) => {
              params.append(item.field, item.value as string)
            })
          }

        return {
          url: "/academicDepartment",
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

export const {
  useCreateAcademicDepartmentMutation,
  useGetAllAcademicDepartmentQuery,
} = academicDepartment;
