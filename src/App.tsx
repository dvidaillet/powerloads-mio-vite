import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";
import "./App.css";
import HomeHorizontalPanel from "./components/HomeHorizontalPanel/HomeHorizontalPanel";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <header>
          <HomeHorizontalPanel />
        </header>
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
