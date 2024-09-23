import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import { userSchema } from "../../constants/userSchema";
import FormInputComponent from "../../../../components/Form/Input/FormInput";

const AddUserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema), // Resolver de Yup para las validaciones
    defaultValues: {
      name: "Juan",
      email: "juan@example.com",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 400,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <FormInputComponent
        name="name"
        control={control}
        label="Nombre"
        errorMessage={errors.name?.message}
      />

      <FormInputComponent
        name="email"
        control={control}
        label="Email"
        type="email"
        errorMessage={errors.email?.message}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </Box>
  );
};

export default AddUserForm;
