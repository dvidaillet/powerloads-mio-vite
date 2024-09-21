import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";
import "./App.css";
import HomeHorizontalPanel from "./components/HomeHorizontalPanel/HomeHorizontalPanel";
import Home from "./pages/Home";
import About from "./pages/About";
import Loads from "./pages/Loads";
import Users from "./pages/Users";
import Incidences from "./pages/Incidences";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <HomeHorizontalPanel />

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/loads" element={<Loads />} />
            <Route path="/support" element={<Incidences />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
