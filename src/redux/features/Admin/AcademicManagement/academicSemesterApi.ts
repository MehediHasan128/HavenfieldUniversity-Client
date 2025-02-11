import { TQueryParams } from "../../../../types/academicSemester";
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
        if(args){
            args.forEach((item: TQueryParams) => {
                params.append(item.filterTerm, item.value as string)
            });
        };

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
