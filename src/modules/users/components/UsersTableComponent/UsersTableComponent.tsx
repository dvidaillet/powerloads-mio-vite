import { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosConfig";
import { IUser } from "../../interfaces/user";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "../../constants/UserColuns";

const UsersTableComponent = () => {
  const [userData, setUserData] = useState<IUser[] | null>(null);

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
    </div>
  );
};

export default UsersTableComponent;
