import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enLogin from "./locales/en/login.json";
import enValidation from "./locales/en/validation.json";
import seCommon from "./locales/se/common.json";
import seLogin from "./locales/se/login.json";
import seValidation from "./locales/se/validation.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "se",
        debug: true,

        resources: {
            en: {
                common: enCommon,
                login: enLogin,
                validation: enValidation,
            },
            se: {
                common: seCommon,
                login: seLogin,
                validation: seValidation,
            },
        },

        ns: ["common", "login", "validation"],
        defaultNS: "common",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
