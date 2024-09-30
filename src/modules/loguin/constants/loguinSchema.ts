import * as yup from "yup";

// Esquema de validación
export const loguinSchema = yup.object().shape({
  password: yup.string().required("formErrors.lastNameRequired"),
  activeSection: yup.boolean(),
  email: yup
    .string()
    .email("formErrors.emailIncorrectFormat")
    .required("formErrors.emailRequired"),
});
