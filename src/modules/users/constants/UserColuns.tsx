import { GridColDef } from "@mui/x-data-grid";
import { Avatar, Button } from "@mui/material";
import { IUser } from "../interfaces/user";

export const UserColumns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => <Avatar src={params.value} alt={params.row.nombre} />,
  },
  {
    field: "firstName",
    headerName: "Nombre",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    width: 150,
  },
  {
    field: "company",
    headerName: "Compañía",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Teléfono",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "isActive",
    headerName: "Activo",
    width: 100,
    renderCell: (params) =>
      params.value ? (
        <Button variant="contained" color="success">
          Activo
        </Button>
      ) : (
        <Button variant="contained" color="error">
          Inactivo
        </Button>
      ),
  },
  {
    field: "acciones",
    headerName: "Acciones",
    width: 150,
    renderCell: (params) => (
      <Button variant="outlined" onClick={() => handleMenuClick(params.row)}>
        Acciones
      </Button>
    ),
  },
];

// Función para manejar el clic en el botón de acciones
const handleMenuClick = (user: IUser) => {
  console.log("Acciones para:", user);
  // Aquí puedes agregar lógica para mostrar el menú de acciones
};
