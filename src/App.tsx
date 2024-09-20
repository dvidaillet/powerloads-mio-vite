import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import ThemeToggleButton from './components/buttons/ThemeToggleButton/ThemeToggleButton';
import './i18n'; // Importar configuración de i18n
import './App.css'; // Importar estilos globales

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Cambiar idioma
  };

  return (
    <div className="app-container">
      <header>
        <ThemeToggleButton />
      </header>
      <Router>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
