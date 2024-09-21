import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Users from "../../pages/Users";
import Loads from "../../pages/Loads";
import Incidences from "../../pages/Incidences";
import Dashboard from "../../pages/Dashboard";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="/loads" element={<Loads />} />
    <Route path="/support" element={<Incidences />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesConfig;
