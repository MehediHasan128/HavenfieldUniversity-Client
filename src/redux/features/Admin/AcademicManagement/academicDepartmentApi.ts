import { TDepartmentQuery } from "../../../../types/academicDepartment";
import { TQueryParams } from "../../../../types/academicSemester";
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
            args.forEach((item: TQueryParams) => {
              params.append(item.filterTerm, item.value as string)
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
