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
      activeSection:false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("🚀 - onSubmit - data:", data);
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: "auto",
        mt: 10,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <FormInputComponent
        name="email"
        control={control}
        label="Email"
        type="email"
        errorMessage={t(errors.email?.message || "")}
      />
      <FormInputComponent
        name="password"
        control={control}
        label="password"
        type="password"
        errorMessage={t(errors.email?.message || "")}
      />
      <FormCheckboxComponent control={control} label="Mantener sesion activa" name="activeSection" />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Iniciar sesión
      </Button>
    </Box>
  );
};

export default LoguinView;
