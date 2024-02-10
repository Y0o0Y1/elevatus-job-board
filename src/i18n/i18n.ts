import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTranslation from "./locales/en.json"
import ArTranslation from "./locales/ar.json"
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: EnTranslation,
    },
    ar: {
        translation: ArTranslation,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
