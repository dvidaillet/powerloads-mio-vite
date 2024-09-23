import React from "react";
import { Box, Avatar, Typography, MenuItem, Menu } from "@mui/material";

interface UserMenuComponentProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
  t: (key: string) => string;
}

const UserPanelMenuComponent: React.FC<UserMenuComponentProps> = ({
  anchorEl,
  open,
  onClose,
  user,
  t,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.firstName}
          sx={{ width: 70, height: 70 }}
        />
        <Typography variant="body1" fontWeight="bold">
          {user.firstName} {user.lastName}
        </Typography>
      </Box>
      <MenuItem
        onClick={() => console.log("Perfil")}
        sx={{ justifyContent: "center" }}
      >
        {t("profile")}
      </MenuItem>
      <MenuItem
        onClick={() => console.log("Desconectarse")}
        sx={{ justifyContent: "center"}}
      >
        {t("logout")}
      </MenuItem>
    </Menu>
  );
};

export default UserPanelMenuComponent;
