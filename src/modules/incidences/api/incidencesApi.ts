import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Definir el servicio para las incidencias
export const incidencesApi = createApi({
  reducerPath: 'incidencesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/powerload' }),
  endpoints: (builder) => ({
    getIncidences: builder.query({
      query: ({ page = 1, limit = 10 }) => `/incidences?page=${page}&limit=${limit}`,
    }),
    // Aquí puedes agregar más peticiones como POST, PUT, DELETE, etc.
  }),
});

// Exportar los hooks para las peticiones
export const { useGetIncidencesQuery } = incidencesApi;

