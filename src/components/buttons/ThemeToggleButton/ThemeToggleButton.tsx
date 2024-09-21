import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const ThemeToggleButton = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <IconButton onClick={toggleTheme} style={{ marginTop: -3 }}>
      {theme === "light" ? (
        <DarkModeIcon color="primary" style={{ width: 20, height: 20 }} />
      ) : (
        <LightModeIcon color="primary" style={{ width: 20, height: 20 }} />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
