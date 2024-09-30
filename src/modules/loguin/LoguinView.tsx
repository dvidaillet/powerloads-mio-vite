import { useTranslation } from "react-i18next";
import { Button, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputComponent from "../../components/Form/Input/FormInput";
import { loguinSchema } from "./constants/loguinSchema";
import FormCheckboxComponent from "../../components/Form/Checkbox/FormCheckbox";

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
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        color="primary"
        fontSize={28}
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
        <Button color="inherit">
          <Typography fontWeight={600} fontSize={14}>
            Olvido su contraseña ?
          </Typography>
        </Button>
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
        // variant="outlined"
        sx={{
          backgroundColor: "grey",
          border: "black 1px solid ",
        }}
      >
        <Typography fontWeight={600} fontSize={14}>
          Google
        </Typography>
      </Button>
      <Typography textAlign="center">
        No te has regiistrado?
        <Button color="inherit">
          <Typography fontWeight={600} fontSize={14}>
            Registrarse
          </Typography>
        </Button>
      </Typography>
    </Box>
  );
};

export default LoguinView;
