import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../modules/users/api/userApi";
import { loadsApi } from "../modules/loads/api/loadsApi";
import { incidencesApi } from "../modules/incidences/api/incidencesApi";

export const store = configureStore({
  reducer: {
    // Añade el reducer de userApi
    [userApi.reducerPath]: userApi.reducer,
    [loadsApi.reducerPath]: loadsApi.reducer,
    [incidencesApi.reducerPath]: incidencesApi.reducer,
  },
  // Añade el middleware de RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(loadsApi.middleware)
      .concat(incidencesApi.middleware),
});

// Tipos de store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
