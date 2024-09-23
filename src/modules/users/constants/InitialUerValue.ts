import { IUser } from "../interfaces/user";

export const initialUserValues: IUser = {
    _id: "", // ID puede ser vacío inicialmente
    firstName: "",
    lastName: "",
    dni: "",
    isActive: false, // Suponiendo que el usuario no está activo por defecto
    address: "",
    company: "",
    avatar: "", // Puedes usar una URL de una imagen o dejarlo vacío
    phone: "",
    email: "",
    role: "", // Puedes asignar un rol por defecto, como "user" o dejarlo vacío
  };