import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";
import LoadsPage from "../pages/LoadsPage";
import IncidencesPage from "../pages/IncidencesPage";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
import MessagesPage from "../pages/MessagesPage";
import NotificationPage from "../pages/NotificationPage";
import LoginPage from "../pages/LoginPage";
import RegisterUserPage from "../pages/RegisterUserPage";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="/loads" element={<LoadsPage />} />
    <Route path="/support" element={<IncidencesPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/messages" element={<MessagesPage />} />
    <Route path="/notifications" element={<NotificationPage />} />
    <Route path="/loguin" element={<LoginPage />} />
    <Route path="/register" element={<RegisterUserPage />} />
  </Routes>
);

export default RoutesConfig;
