import { Button, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { registerUserSchema } from "./constants/registerUserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputComponent from "../../components/Form/Input/FormInput";
import FormCheckboxComponent from "../../components/Form/Checkbox/FormCheckbox";
import GoogleIcon from "@mui/icons-material/Google";
import FormsLinksButtons from "../loguin/components/FormsLinksButtons/FormsLinksButtons";

const RegisterUser = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
    defaultValues: {
      firstName: "daniel",
      lastName: "daniel",
      email: "juan@example.com",
      password: "1224456",
      confirmPassword: "1224456",
      term: false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("🚀 - onSubmit - data:", data);
  };

  return (
    <Box
      sx={{
        width: 450,
        margin: "auto",
        mt: 10,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "white",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 1,
        }}
      >
        <img
          src={"../../../public/images/logo_powerload_black.png"}
          alt="icon"
          style={{ width: "270px", height: "35px" }}
        />
      </Box>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        color="primary"
        fontSize={22}
        fontWeight={600}
      >
        Registrate
      </Typography>
      <FormInputComponent
        name="firstName"
        required={true}
        control={control}
        label="headerColumns.firstName"
        type="text"
        errorMessage={t(errors.firstName?.message || "")}
      />
      <FormInputComponent
        name="lastName"
        required={true}
        control={control}
        label="headerColumns.lastName"
        type="text"
        errorMessage={t(errors.lastName?.message || "")}
      />
      <FormInputComponent
        name="email"
        required={true}
        control={control}
        label="headerColumns.email"
        type="email"
        errorMessage={t(errors.email?.message || "")}
      />
      <FormInputComponent
        name="password"
        control={control}
        required={true}
        label="formFields.password"
        type="password"
        errorMessage={t(errors.password?.message || "")}
      />
      <FormInputComponent
        name="confirmPassword"
        control={control}
        required={true}
        label="formFields.password"
        type="password"
        errorMessage={t(errors.confirmPassword?.message || "")}
      />
      <FormCheckboxComponent
        control={control}
        label="Acepto terminos y condiciones"
        name="term"
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Registrarse
      </Button>
      <Typography textAlign="center">
        Tambien puede iniciar sesion con
      </Typography>
      <Button
        color="inherit"
        sx={{
          backgroundColor: "#eeeeee",
          border: "#ccc 1px solid ",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 1,
          // boxShadow: "#ccc 100px"
        }}
      >
        <GoogleIcon color="primary" sx={{ width: "18px", height: "18px" }} />
        <Typography fontWeight={600} fontSize={16} mt="3px">
          Google
        </Typography>
      </Button>
      <Typography textAlign="center">
        Ya esta registrado?
        <FormsLinksButtons text="Iniciar sesión" to="/loguin" />
      </Typography>
    </Box>
  );
};

export default RegisterUser;
