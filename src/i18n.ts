import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Cargar las traducciones usando HTTP
  .use(LanguageDetector) // Detectar idioma del navegador
  .use(initReactI18next) // Pasar la instancia de i18next a react-i18next
  .init({
    supportedLngs: ["en", "es"], // Idiomas soportados
    fallbackLng: "en", // Idioma por defecto si no se encuentra el preferido
    detection: {
      order: [
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // Guardar el idioma en una cookie
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Ruta donde están los archivos de traducción
    },
    react: {
      useSuspense: false, // Para manejar la carga de las traducciones
    },
  });

export default i18n;
