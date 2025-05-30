import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TAG_TYPES } from './tags'; // Import the shared tags
const API_URL = process.env.API_URL;

export const apiUserSlice = createApi({
  reducerPath:"apiUser",
  tagTypes: [TAG_TYPES.STUDENTS],
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    getStudents: builder.query({
      query: () => '/students',
      providesTags: [TAG_TYPES.STUDENTS],
    }),
    getStudent: builder.query({
      query: (studentId) => `/students/student/${studentId}`,
    }),
    filterStudent:builder.query({
      query: ({filter}) => ({
        url:`students/filter`,
        params:filter
      })
    }),
    addStudent:builder.mutation({
      query:(student)=>({
        url:`/students/student`,
        method:'POST',
        body:student
      }),
      invalidatesTags:[TAG_TYPES.STUDENTS]
    }),
    ImportStudents:builder.mutation({
      query:(file)=>({
        url:`/students/import`,
        method:'POST',
        body:file,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    }),
    deleteStudent:builder.mutation({
      query:(studentId)=>({
        url:`/students/student/${studentId}`,
        method:'DELETE',
        
      }),
      invalidatesTags:[TAG_TYPES.STUDENTS]
    })
    
  }),
});

export const { 
//   useGetStudentsQuery,
//   useGetStudentQuery,
//   useFilterStudentQuery,
//   useAddStudentMutation,
//   useImportStudentsMutation,
//   useDeleteStudentMutation
 } = apiUserSlice;