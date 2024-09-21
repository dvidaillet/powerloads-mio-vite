// src/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      customRed: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      customRed?: string;
    };
  }
}
