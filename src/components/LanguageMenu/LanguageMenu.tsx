import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Cambiar idioma
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string>("es"); // Valor por defecto

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    setLanguage(lang); // Actualizar el idioma seleccionado
    changeLanguage(lang);
    setAnchorEl(null); // Cerrar el menú
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        style={{ color: "primary", marginTop: -5 }}
      >
        <Typography variant="h6" fontSize={16} fontWeight={600} color="primary">
          {language.toUpperCase()}
        </Typography>
      </IconButton>
      <Menu
        color="inherit"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem color="primary" onClick={() => handleClose("es")}>
          <Typography
            variant="h6"
            fontSize={16}
            fontWeight={600}
            color="primary"
          >
            ES
          </Typography>
        </MenuItem>
        <MenuItem color="primary" onClick={() => handleClose("en")}>
          <Typography
            variant="h6"
            fontSize={16}
            fontWeight={600}
            color="primary"
          >
            EN
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
