import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";
import "./App.css";
import HomeHorizontalPanel from "./components/HomeHorizontalPanel/HomeHorizontalPanel";
import RoutesConfig from "./routes/RoutesConfig";

const App = () => {
  return (
    <div>
      <Router>
        <HomeHorizontalPanel />

        <div className="app-container">
          <RoutesConfig />
        </div>
      </Router>
    </div>
  );
};

export default App;
