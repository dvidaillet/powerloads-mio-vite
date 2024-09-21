import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";
import LoadsPage from "../pages/LoadsPage";
import IncidencesPage from "../pages/IncidencesPage";
import DashboardPage from "../pages/DashboardPage";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="/loads" element={<LoadsPage />} />
    <Route path="/support" element={<IncidencesPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
);

export default RoutesConfig;
