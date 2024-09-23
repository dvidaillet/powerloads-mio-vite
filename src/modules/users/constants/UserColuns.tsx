import { GridColDef } from "@mui/x-data-grid";
import { Avatar, Button, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IUser } from "../interfaces/user";

export const UserColumns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "",
    width: 85,
    renderCell: (params) => (
      <Avatar
        src={params.value}
        alt={params.row.nombre}
        sx={{ width: 45, height: 45, marginLeft: 1 }}
      />
    ),
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "firstName",
    headerName: "headerColumns.firstName",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "lastName",
    headerName: "headerColumns.lastName",
    width: 250,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "email",
    headerName: "headerColumns.email",
    width: 200,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "company",
    headerName: "headerColumns.company",
    width: 200,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "phone",
    headerName: "headerColumns.phone",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "role",
    headerName: "headerColumns.role",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },

  {
    field: "isActive",
    headerName: "headerColumns.Activo",
    width: 100,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-columns-header",
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
    headerName: "headerColumns.actions",
    width: 113,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
    renderCell: (params) => (
      <IconButton onClick={() => handleMenuClick(params.row)}>
        <MoreHorizIcon />
      </IconButton>
    ),
  },
];

// Función para manejar el clic en el botón de acciones
const handleMenuClick = (user: IUser) => {
  console.log("Acciones para:", user);
  // Aquí puedes agregar lógica para mostrar el menú de acciones
};
