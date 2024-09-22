import axios from "axios";

// Crear una instancia de axios con la URL base
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/powerload", // URL base
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
