import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
import useFetchRoleUsers from "../../api/useFetchRoleUsers";

type AddUserFormProps = {
  open: boolean;
  handleClose: () => void;
};
const AddUserForm = ({ open, handleClose }: AddUserFormProps) => {
  const { t } = useTranslation();
  const { roles } = useFetchRoleUsers();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema), // Resolver de Yup para las validaciones
    defaultValues: {
      firstName: "Juan",
      lastName: "Panfilo",
      email: "juan@example.com",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("🚀 - onSubmit - data:", data);
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
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#c40f40",
            pl: 4,
            pr: 2,
            paddingTop: 1,
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
          }}
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
            {t("addUserModal.title")}
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
            name="firstName"
            control={control}
            label="headerColumns.firstName"
            errorMessage={t(errors.firstName?.message || "")}
          />
          <FormInputComponent
            name="lastName"
            control={control}
            label="headerColumns.lastName"
            errorMessage={t(errors.lastName?.message || "")}
          />

          <FormInputComponent
            name="email"
            control={control}
            label="headerColumns.email"
            type="email"
            errorMessage={t(errors.email?.message || "")}
          />
          <FormSelectComponent
            name="role"
            control={control}
            label="Selecciona opciones"
            options={roles}
            errorMessage={t(errors.role?.message || "")}
          />

          <ButtonGroup fullWidth sx={{ marginTop: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginRight: 6 }}
            >
              <Typography>{t("buttons.save")}</Typography>
            </Button>
            <Button
              type="button"
              variant="contained"
              size="large"
              color="inherit"
              onClick={handleClose}
              sx={{ marginLeft: 6 }}
            >
              <Typography>{t("buttons.cancel")}</Typography>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUserForm;
