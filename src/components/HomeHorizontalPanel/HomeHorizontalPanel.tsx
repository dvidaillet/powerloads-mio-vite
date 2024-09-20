import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../buttons/ThemeToggleButton/ThemeToggleButton";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

const HomeHorizontalPanel = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {t("homePanel.panel")}
          </Link>
        </Typography>
        <div>
          <Button>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              {t("homePanel.panel")}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/usuarios"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("homePanel.users")}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/cargas"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("homePanel.loads")}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/incidencias"
              style={{ textDecoration: "none", color: "white" }}
            >
              Incidencias
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/soporte"
              style={{ textDecoration: "none", color: "white" }}
            >
              Soporte
            </Link>
          </Button>
          <ThemeToggleButton />
          <LanguageMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHorizontalPanel;
