import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../modules/users/api/userApi';

export const store = configureStore({
  reducer: {
    // Añade el reducer de userApi
    [userApi.reducerPath]: userApi.reducer,
  },
  // Añade el middleware de RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Tipos de store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
