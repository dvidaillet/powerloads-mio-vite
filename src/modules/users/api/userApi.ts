import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define el API usando RTK Query
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/powerload' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users', // Petición GET a /users
    }),
  }),
});

// Exporta los hooks generados automáticamente para usar en componentes
export const { useGetUsersQuery } = userApi;
