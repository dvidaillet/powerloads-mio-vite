import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loadsApi = createApi({
  reducerPath: "loadsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/powerload" }),
  endpoints: (builder) => ({
    getLoads: builder.query({
      query: ({ page = 1, limit = 10 }) => `/loads?page=${page}&limit=${limit}`,
    }),
    // Puedes añadir más endpoints si lo necesitas
  }),
});

export const { useGetLoadsQuery } = loadsApi;
