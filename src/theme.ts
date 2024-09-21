// src/theme.ts
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c40f40", // Color personalizado en tema claro
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c40f40", // Color personalizado en tema oscuro
    },
  },
});

export { lightTheme, darkTheme };
