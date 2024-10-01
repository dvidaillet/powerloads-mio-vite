import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
  firstName: yup.string().required("formErrors.lastNameRequired"),
  lastName: yup.string().required("formErrors.lastNameRequired"),
  password: yup.string().required("formErrors.lastNameRequired"),
  confirmPassword: yup.string().required("formErrors.lastNameRequired"),
  term: yup.boolean().required("formErrors.lastNameRequired"),
  email: yup
    .string()
    .email("formErrors.emailIncorrectFormat")
    .required("formErrors.emailRequired"),
});
