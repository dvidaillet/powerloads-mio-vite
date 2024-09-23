// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';

// Aquí es donde más adelante importaremos los reducers (slices) de nuestros features
// import usersReducer from '../features/users/userSlice'; 

// Crear el store usando Redux Toolkit
export const store = configureStore({
  reducer: {
    // Aquí irán los reducers (ej. users: usersReducer)
  },
});

// Tipos para el estado y el dispatch (para facilitar el uso en TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
