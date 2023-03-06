import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../constants";

const api = createApi({
  reducerPath: "formsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Forms"],
  endpoints: (builder) => ({
    // Submit form data
    submitForm: builder.mutation({
      query: (body) => ({
        url: "/forms",
        title: "Submit Form",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Forms"],
    }),

    // Get data for all submitted forms
    getFormsData: builder.query({
      query: (formName) => ({
        url: `/forms/${formName}`,
        title: "Get Forms Data",
        method: "GET",
      }),
      providesTags: ["Forms"],
    }),

    // Get Admin data for a user
    getAdminData: builder.query({
      query: (email) => ({
        url: `/admin/${email}`,
        title: "Get Admin Data",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSubmitFormMutation,
  useGetFormsDataQuery,
  useGetAdminDataQuery,
} = api;

export default api;
