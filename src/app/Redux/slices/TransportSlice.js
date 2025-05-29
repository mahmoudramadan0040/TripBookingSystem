import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tags"; // Import the shared tags
const API_URL = process.env.API_URL;

export const apiTransportSlice = createApi({
  reducerPath: "apiTransport",
  tagTypes: [TAG_TYPES.Transport],
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTransports: builder.query({
      query: () => "/transport",
      providesTags: [TAG_TYPES.Transport],
    }),
    getTransport: builder.query({
      query: (transportId) => `/transport/${transportId}`,
    }),
    addTransport: builder.mutation({
      query: (transport) => ({
        url: `/transport`,
        method: "POST",
        body: transport,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: [TAG_TYPES.Transport],
    }),
    searchTransport: builder.query({
      query: (params) => {
        const query = new URLSearchParams(params).toString();
        return `/search?${query}`;
      },
    }),
    deleteTransport: builder.mutation({
      query: (transportId) => ({
        url: `/transport/${transportId}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.Transport],
    }),
    deleteSoftTransport: builder.mutation({
      query: (transportId) => ({
        url: `/transport/${transportId}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.Transport],
    }),
  }),
});

export const {
  useGetTransportQuery,
  useGetTransportsQuery,
  useSearchTransportQuery,
  useAddTransportMutation,
  useDeleteSoftTransportMutation,
} = apiTransportSlice;
