import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import "./i18n"; // Importar configuración de i18n
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Cambiar idioma
  };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("es")}>Español</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
