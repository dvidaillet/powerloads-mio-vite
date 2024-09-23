import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { userSchema } from "../../constants/userSchema";
import FormInputComponent from "../../../../components/Form/Input/FormInput";
import FormSelectComponent from "../../../../components/Form/Select/FormSelect";
import CloseIcon from "@mui/icons-material/Close";

type AddUserFormProps = {
  open: boolean;
  handleClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAddUser: (data: any) => void;
};
const AddUserForm = ({ open, handleClose, onAddUser }: AddUserFormProps) => {
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
    onAddUser(data); // Llama a la función para agregar el usuario
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{ backgroundColor: "#c40f40", px: 5, paddingTop: 2 }}
          height={60}
          alignContent={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            color="white"
            component="h2"
            sx={{ mb: 2 }}
          >
            Agregar Nuevo Usuario
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "white", marginTop: -1 }} />
          </IconButton>
        </Box>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: 540,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 4,
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
          <FormSelectComponent
            name="role"
            control={control}
            label="Selecciona opciones"
            options={[
              { value: "option1", label: "Opción 1" },
              { value: "option2", label: "Opción 2" },
              { value: "option3", label: "Opción 3" },
            ]}
            errorMessage={errors.role?.message}
          />

          <ButtonGroup fullWidth sx={{ marginTop: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginRight: 6 }}
            >
              Enviar
            </Button>
            <Button
              type="button"
              variant="contained"
              color="inherit"
              onClick={handleClose}
              sx={{ marginLeft: 6 }}
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUserForm;
