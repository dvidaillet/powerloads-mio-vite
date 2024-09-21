import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../buttons/ThemeToggleButton/ThemeToggleButton";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

// Componente reutilizable para botones de navegación
const NavButton = ({ to, text }: { to: string; text: string }) => (
  <Button sx={{ padding: "15px 35px" }}>
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography variant="h6" fontSize={14} fontWeight={600} color="grey">
        {text}
      </Typography>
    </Link>
  </Button>
);

const NavIconButton = ({
  to,
  IconComponent,
}: {
  to: string;
  IconComponent: React.ElementType;
}) => (
  <IconButton
    title="ass"
    sx={{
      borderRadius: "8px",
      marginX: "3px",
      height: "40px",
      width: "40px",
      backgroundColor: "#f5e4e4", // Rosado claro
      boxShadow: "0 2px 4px rgba(224, 75, 100, 0.808)",
      "&:hover": {
        backgroundColor: "#F8BBD0", // Un tono más oscuro en hover
        boxShadow: "0 0px 0px rgba(206, 33, 62, 0.808)",
      },
    }}
  >
    <Link to={to}>
      <IconComponent color="primary" sx={{ with: "20px", height: "20px" }} />
    </Link>
  </IconButton>
);

const HomeHorizontalPanel = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F3F4F9" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between" }}
        className="home-panel-container"
      >
        {/* Sección del icono Home */}
        <NavIconButton to="/" IconComponent={HomeIcon} />

        {/* Enlace a 'About' */}
        <Link to="/about" style={{ margin: "0 10px" }}>
          <Typography variant="h6" fontSize={14} color="grey">
            {t("about.linkText")}
          </Typography>
        </Link>

        {/* Sección de botones y otros iconos */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavButton to="/dashboard" text={t("homePanel.panel")} />
          <NavButton to="/users" text={t("homePanel.users")} />
          <NavButton to="/loads" text={t("homePanel.loads")} />
          <NavButton to="/support" text={t("homePanel.support")} />

          {/* Iconos de perfil, mensajes y notificaciones */}
          <NavIconButton to="/" IconComponent={PersonOutlineIcon} />
          <NavIconButton to="/" IconComponent={CommentIcon} />
          <NavIconButton to="/" IconComponent={NotificationsNoneIcon} />

          {/* Menú de idioma y botón de tema */}
          <LanguageMenu />
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHorizontalPanel;
