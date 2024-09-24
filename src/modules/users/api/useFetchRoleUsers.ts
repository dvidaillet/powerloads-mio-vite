// useFetchRoleUsers.ts
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useFetchRoleUsers = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axiosInstance.get("/user_app_roles");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedRoles = response.data.users.map((user: any) => ({
          value: user.name,
          label: user.name,
        }));
        setRoles(formattedRoles);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.log("🚀 - fetchRoles - err:", err.message);
      }
    };

    fetchRoles();
  }, []);

  return { roles };
};

export default useFetchRoleUsers;
