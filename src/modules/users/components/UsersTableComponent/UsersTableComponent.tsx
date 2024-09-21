import { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosConfig";

const UsersTableComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/user/profile")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>dsds{/* {userData?.name} */}</h1>
          <p>ddd{/* {userData?.email} */}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UsersTableComponent;
