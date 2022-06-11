import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en", // default language
    fallbackLng: "en", 
    debug: false,
    resources: {
      en: {
        translation: en,
      },
      hi: { 
        translation: hi,
      },
    }, 
    interpolation: { 
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
