import { GridColDef } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IUser } from "../interfaces/user";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import HeaderNameCell from "../../../components/HeaderNameCell/HeaderNameCell";

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
    renderHeader: () => <HeaderNameCell title="headerColumns.firstName" />,
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "lastName",
    renderHeader: () => <HeaderNameCell title="headerColumns.lastName" />,
    width: 250,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "email",
    renderHeader: () => <HeaderNameCell title="headerColumns.email" />,
    width: 200,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "company",
    renderHeader: () => <HeaderNameCell title="headerColumns.company" />,
    width: 200,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "phone",
    renderHeader: () => <HeaderNameCell title="headerColumns.phone" />,
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },
  {
    field: "role",
    renderHeader: () => <HeaderNameCell title="headerColumns.role" />,
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "custom-columns-header",
  },

  {
    field: "isActive",
    renderHeader: () => <HeaderNameCell title="headerColumns.active" />,
    width: 100,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-columns-header",
    renderCell: (params) =>
      params.value ? (
        <IconButton color="success">
          <CheckCircleIcon />
        </IconButton>
      ) : (
        <IconButton color="error">
          <NotInterestedIcon />
        </IconButton>
      ),
  },
  {
    field: "acciones",
    renderHeader: () => <HeaderNameCell title="headerColumns.actions" />,
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
