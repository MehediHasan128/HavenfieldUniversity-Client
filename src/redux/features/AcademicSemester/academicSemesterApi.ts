import { baseapi } from "../../api/baseApi";

const academicSemesterApi = baseapi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: () => ({
                url: '/academicSemester',
                method: 'GET'
            })
        })
    })
});

export const {useGetAllSemesterQuery} = academicSemesterApi;