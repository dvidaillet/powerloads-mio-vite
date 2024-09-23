export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  dni: string;
  isActive: boolean;
  address: string;
  company: string;
  avatar: string;
  phone?: string;
  email: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}
