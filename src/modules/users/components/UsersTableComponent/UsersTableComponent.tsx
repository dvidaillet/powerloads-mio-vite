import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import { UserColumns } from "../../constants/UserColumns";
import { Button, Typography } from "@mui/material";
import AddUserForm from "../AddUserForm/AddUserForm";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { useGetUsersQuery } from "../../api/userApi";
import CustomLoadingOverlay from "../../../../components/CustomSpinner/CustomLoadingOverlay";
import CustomNoRowsOverlay from "../../../../components/CustomNoRowsOverlay/CustomNoRowsOverlay";

const UsersTableComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // Control de la paginación (página y tamaño de página)
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0, // MUI es 0-indexed
    pageSize: 10, // Tamaño inicial de la página
  });

  // Pasar el estado de la paginación a la API
  const { data, error, isLoading } = useGetUsersQuery({
    page: paginationModel.page + 1, // La API espera 1-indexed
    limit: paginationModel.pageSize,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
    setPaginationModel(newPaginationModel);
  };
  // if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los usuarios</div>;

  console.log("🚀 - UsersTableComponent - data:", data?.users);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ height: 50 }}
        onClick={handleOpen}
      >
        <PersonAddAlt1OutlinedIcon />
        <Typography marginLeft={1}>{t("buttons.addUser")}</Typography>
      </Button>
      <div
        style={{
          // height: "auto",
          height: 400,
          width: "100%",
          marginTop: 20,
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 8,
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={data?.users || []}
          columns={UserColumns}
          rowCount={data?.totalUsers || 0}
          pageSizeOptions={[5, 10, 15, 20]}
          paginationMode="server"
          loading={isLoading}
          paginationModel={paginationModel}
          onPaginationModelChange={handlePaginationChange}
          disableRowSelectionOnClick
          slots={{
            noRowsOverlay: CustomNoRowsOverlay,
            loadingOverlay: CustomLoadingOverlay,
          }}
        />
      </div>

      <AddUserForm open={open} handleClose={handleClose} />
    </>
  );
};

export default UsersTableComponent;
