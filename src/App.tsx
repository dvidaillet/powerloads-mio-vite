import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggleButton from "./components/buttons/ThemeToggleButton/ThemeToggleButton";
import "./i18n"; // Importar configuración de i18n
import "./App.css"; // Importar estilos globales
import Button from "@mui/material/Button";

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Cambiar idioma
  };

  return (
    <div className="app-container">
      <header>
        <ThemeToggleButton />
        <div style={{ padding: "20px" }}>
          <Button onClick={() => changeLanguage("en")}>En</Button>
          <Button onClick={() => changeLanguage("es")}>Es</Button>
        </div>
      </header>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
