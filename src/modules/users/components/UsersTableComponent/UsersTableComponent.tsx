import { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosConfig";
import { IUser } from "../../interfaces/user";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "../../constants/UserColuns";
import { Button } from "@mui/material";
import AddUserForm from "../AddUserForm/AddUserForm";
import { initialUserValues } from "../../constants/InitialUerValue";

const UsersTableComponent = () => {
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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Agregar Usuario
      </Button>
      {userData ? (
        <div style={{ height: 500, width: "100%" }}>
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
      {/* Aquí se muestra el formulario */}
      <AddUserForm
        open={open}
        handleClose={handleClose}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export default UsersTableComponent;
