import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../buttons/ThemeToggleButton/ThemeToggleButton";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavIconButton from "../buttons/NavIconButton/NavIconButton";
import UserPanelMenuComponent from "../UserPanelMenu/UserPanelMenu";
import NavButton from "../buttons/NavButton/NavButton";

const user = {
  avatar: "https://via.placeholder.com/150",
  firstName: "Juan",
  lastName: "Pérez",
};

const HomeHorizontalPanel = () => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F3F4F9", height:"90px" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between" }}
        className="home-panel-container"
      >
        <Button
          component={Link}
          to={"/"}
          sx={{ display: "flex", alignItems: "center", textTransform: "none" }}
        >
          <Box
            sx={{
              marginRight: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={"../../../public/images/logo_powerload_black.png"}
              alt="icon"
              style={{ width: "250px", height: "32px" }}
            />
          </Box>
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavButton to="/dashboard" text={t("homePanel.panel")} />
          <NavButton to="/users" text={t("homePanel.users")} />
          <NavButton to="/loads" text={t("homePanel.loads")} />
          <NavButton to="/support" text={t("homePanel.support")} />

          <IconButton
            onClick={handleMenuOpen}
            sx={{
              borderRadius: "8px",
              marginX: "3px",
              height: "38px",
              width: "38px",
              backgroundColor: "#f5e4e4",
              boxShadow: "0 2px 4px rgba(224, 75, 100, 0.808)",
              "&:hover": {
                backgroundColor: "#F8BBD0",
              },
            }}
          >
            <AccountCircleOutlinedIcon
              color="primary"
              sx={{ width: "24px", height: "24px" }}
            />
          </IconButton>
          <UserPanelMenuComponent
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            user={user}
            t={t}
          />

          <NavIconButton
            to="/messages"
            IconComponent={MarkEmailUnreadOutlinedIcon}
            text={t("messagge.linkText")}
          />
          <NavIconButton
            to="/notifications"
            IconComponent={NotificationsNoneIcon}
            text="notifications.linkText"
          />

          <LanguageMenu />
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHorizontalPanel;
