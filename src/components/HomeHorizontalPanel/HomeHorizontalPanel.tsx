import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../buttons/ThemeToggleButton/ThemeToggleButton";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const HomeHorizontalPanel = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static" style={{ backgroundColor: "#F3F4F9" }}>
      <Toolbar
        style={{ display: "flex", justifyContent: "space-between" }}
        className="home-panel-container"
      >
        <IconButton>
          <Link to="/">
            <HomeIcon color="primary" />
          </Link>
        </IconButton>
        <Link to="/about" style={{ margin: "0 10px" }}>
          <Typography variant="h6" fontSize={14} color="grey">
            {t("about.linkText")}
          </Typography>
        </Link>
        <div>
          <Button style={{ padding: "15px 35px" }}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                color="grey"
              >
                {t("homePanel.panel")}
              </Typography>
            </Link>
          </Button>
          <Button color="inherit" style={{ padding: "15px 35px" }}>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                color="grey"
              >
                {t("homePanel.users")}
              </Typography>
            </Link>
          </Button>
          <Button color="inherit" style={{ padding: "15px 35px" }}>
            <Link to="/loads" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                color="grey"
              >
                {t("homePanel.loads")}
              </Typography>
            </Link>
          </Button>
          <Button color="inherit" style={{ padding: "15px 35px" }}>
            <Link to="/support" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                color="grey"
              >
                {t("homePanel.support")}
              </Typography>
            </Link>
          </Button>
          <IconButton>
            <Link to="/">
              <PersonOutlineIcon color="primary" />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/">
              <CommentIcon color="primary" />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/">
              <NotificationsNoneIcon color="primary" />
            </Link>
          </IconButton>
          <LanguageMenu />
          <ThemeToggleButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHorizontalPanel;
