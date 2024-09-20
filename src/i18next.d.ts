import "react-i18next";

// Definir el tipo de las traducciones para TypeScript
declare module "react-i18next" {
  interface Resources {
    translation: typeof import("../public/locales/en/translation.json");
  }
}
