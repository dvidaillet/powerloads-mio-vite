// useFetchRoleUsers.ts
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useFetchRoleUsers = () => {
  const [roles, setRoles] = useState([]);
  const fetchRoles = async () => {
    try {
      const response = await axiosInstance.get("/roles");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedRoles = response.data.map((rol: any) => ({
        value: rol.name,
        label:rol.name,
      }));
      setRoles(formattedRoles);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log("🚀 - fetchRoles - err:", err.message);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return { roles };
};

export default useFetchRoleUsers;
