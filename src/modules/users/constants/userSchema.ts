import * as yup from 'yup';

// Esquema de validación
export const userSchema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Formato de email inválido").required("El email es obligatorio"),
});