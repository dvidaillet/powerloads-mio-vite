import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axiosInstance from "../../../../api/axiosConfig";
import { IUser } from "../../interfaces/user";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "../../constants/UserColuns";
import { Button, Typography } from "@mui/material";
import AddUserForm from "../AddUserForm/AddUserForm";
import { initialUserValues } from "../../constants/InitialUerValue";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

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
      {userData ? (
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
            rows={userData}
            columns={UserColumns}
            pageSizeOptions={[5, 10, 15, 20]}
            disableRowSelectionOnClick
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <AddUserForm
        open={open}
        handleClose={handleClose}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export default UsersTableComponent;
