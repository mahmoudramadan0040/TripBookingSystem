import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tags"; // Import the shared tags
const API_URL = process.env.API_URL;

export const apiTourSlice = createApi({
  reducerPath: "apiTours",
  tagTypes: [TAG_TYPES.Tour],
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTours: builder.query({
      query: () => "/tour",
      providesTags: [TAG_TYPES.Tour],
    }),
    getTour: builder.query({
      query: (tourId) => `/tour/${tourId}`,
    }),
    addTour: builder.mutation({
      query: (tour) => ({
        url: `/tour`,
        method: "POST",
        body: tour,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: [TAG_TYPES.Tour],
    }),
    searchTours: builder.query({
      query: (params) => {
        const query = new URLSearchParams(params).toString();
        return `/search?${query}`;
      },
    }),
    deleteTour: builder.mutation({
      query: (tourId) => ({
        url: `/tour/${tourId}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.Tour],
    }),
    deleteSoftTour: builder.mutation({
      query: (tourId) => ({
        url: `/tour/${tourId}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.Tour],
    }),
  }),
});

export const {
  useGetToursQuery,
  useGetTourQuery,
  useSearchToursQuery,
  useAddTourMutation,
  useDeleteTourMutation,
} = apiTourSlice;
