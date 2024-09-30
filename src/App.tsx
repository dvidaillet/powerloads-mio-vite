import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";
import "./App.css";
import RoutesConfig from "./routes/RoutesConfig";

const App = () => {
  return (
    <>
      <Router>
        <RoutesConfig />
      </Router>
    </>
  );
};

export default App;
