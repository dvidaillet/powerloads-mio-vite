import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axiosInstance from "../../../../api/axiosConfig";
import { IUser } from "../../interfaces/user";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "../../constants/UserColuns";
import { Button, styled, Typography } from "@mui/material";
import AddUserForm from "../AddUserForm/AddUserForm";
import { initialUserValues } from "../../constants/InitialUerValue";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .no-rows-primary": {
    fill: "#3D4751",
    ...theme.applyStyles("light", {
      fill: "#AEB8C2",
    }),
  },
  "& .no-rows-secondary": {
    fill: "#1D2126",
    ...theme.applyStyles("light", {
      fill: "#E8EAED",
    }),
  },
}));

function CustomNoRowsOverlay() {
  const { t } = useTranslation();
  return (
    <StyledGridOverlay>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={96}
        viewBox="0 0 452 257"
        aria-hidden
        focusable="false"
      >
        <path
          className="no-rows-primary"
          d="M348 69c-46.392 0-84 37.608-84 84s37.608 84 84 84 84-37.608 84-84-37.608-84-84-84Zm-104 84c0-57.438 46.562-104 104-104s104 46.562 104 104-46.562 104-104 104-104-46.562-104-104Z"
        />
        <path
          className="no-rows-primary"
          d="M308.929 113.929c3.905-3.905 10.237-3.905 14.142 0l63.64 63.64c3.905 3.905 3.905 10.236 0 14.142-3.906 3.905-10.237 3.905-14.142 0l-63.64-63.64c-3.905-3.905-3.905-10.237 0-14.142Z"
        />
        <path
          className="no-rows-primary"
          d="M308.929 191.711c-3.905-3.906-3.905-10.237 0-14.142l63.64-63.64c3.905-3.905 10.236-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-63.64 63.64c-3.905 3.905-10.237 3.905-14.142 0Z"
        />
        <path
          className="no-rows-secondary"
          d="M0 10C0 4.477 4.477 0 10 0h380c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10ZM0 59c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 69 0 64.523 0 59ZM0 106c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 153c0-5.523 4.477-10 10-10h195.5c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 200c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 247c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10Z"
        />
      </svg>
      <Typography
        sx={{ mt: 2 }}
        color="textDisabled"
        fontWeight={600}
        fontSize={22}
      >
        {t("userView.noUsers")}
      </Typography>
    </StyledGridOverlay>
  );
}

const UsersTableComponent = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState<IUser[] | null>(null);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState<IUser>(initialUserValues); // Estado del nuevo usuario

  const handleAddUser = () => {
    // Aquí puedes hacer la lógica para enviar el nuevo usuario a la API
    console.log("New user:", newUser);
    // Puedes hacer una petición POST con axiosInstance.post() aquí
    setOpen(false); // Cierra el modal
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUsers = () => {
    axiosInstance
      .get("/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleOpen}
      >
        <PersonAddAlt1OutlinedIcon />
        <Typography marginLeft={1}>{t("buttons.addUser")}</Typography>
      </Button>
      <div
        style={{
          height: 500,
          width: "100%",
          marginTop: 20,
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 8,
        }}
      >
        <DataGrid
          rows={userData || []}
          columns={UserColumns}
          pageSizeOptions={[5, 10, 15, 20]}
          disableRowSelectionOnClick
          slots={{
            noRowsOverlay: CustomNoRowsOverlay,
          }}
        />
      </div>

      <AddUserForm
        open={open}
        handleClose={handleClose}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export default UsersTableComponent;
