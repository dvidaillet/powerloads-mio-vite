import * as yup from "yup";

// Esquema de validación
export const userSchema = yup.object().shape({
  firstName: yup.string().required("formErrors.frirstNameRequired"),
  lastName: yup.string().required("formErrors.lastNameRequired"),
  email: yup
    .string()
    .email("formErrors.emailIncorrectFormat")
    .required("formErrors.emailRequired"),
  role: yup.string().required("formErrors.roleRequired"),
});
