import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../buttons/ThemeToggleButton/ThemeToggleButton";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import HomeIcon from "@mui/icons-material/Home";

const HomeHorizontalPanel = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {/* {t("homePanel.panel")} */}
            <HomeIcon />
          </Link>
        </IconButton>
        <div>
          <Button>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("homePanel.panel")}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("homePanel.users")}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/loads"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("homePanel.loads")}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/support"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("homePanel.support")}
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
