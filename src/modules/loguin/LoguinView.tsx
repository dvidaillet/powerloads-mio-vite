import { useTranslation } from "react-i18next";
import { Button, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputComponent from "../../components/Form/Input/FormInput";
import { loguinSchema } from "./constants/loguinSchema";
import FormCheckboxComponent from "../../components/Form/Checkbox/FormCheckbox";
import FormsLinksButtons from "./components/FormsLinksButtons/FormsLinksButtons";
import GoogleIcon from "@mui/icons-material/Google";

const LoguinView = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loguinSchema), // Resolver de Yup para las validaciones
    defaultValues: {
      email: "juan@example.com",
      password: "1224456",
      activeSection: false,
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
        Iniciar sesión
      </Typography>
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
        errorMessage={t(errors.email?.message || "")}
      />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FormCheckboxComponent
          control={control}
          label="Mantener sesion activa"
          name="activeSection"
        />
        <FormsLinksButtons text="Olvido su contraseña ?" to="/register" />
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        sx={{ mt: 2 }}
      >
        <Typography fontWeight={600}>Iniciar sesión</Typography>
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
        No te has regiistrado?
        <FormsLinksButtons text="Registrarse" to="/register" />
      </Typography>
    </Box>
  );
};

export default LoguinView;
