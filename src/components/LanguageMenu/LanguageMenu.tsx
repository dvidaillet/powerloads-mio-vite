import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Button, Menu, MenuItem } from "@mui/material";

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
      <Button onClick={handleClick} style={{ color: "white" }}>
        {language} {/* Mostrar el idioma seleccionado */}
      </Button>
      <Menu
        // style={{ color: "white" }}
        color="inherit"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem color="inherit" onClick={() => handleClose("es")}>
          ES
        </MenuItem>
        <MenuItem color="inherit" onClick={() => handleClose("en")}>
          EN
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
