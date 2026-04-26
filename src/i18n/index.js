import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import seCommon from "./locales/se/common.json";
import enLogin from "./locales/en/login.json";
import seLogin from "./locales/se/login.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "se",
        debug: true,

        resources: {
            en: {
                common: enCommon,
                login: enLogin,
            },
            se: {
                common: seCommon,
                login: seLogin,
            },
        },

        ns: ["common", "login"],
        defaultNS: "common",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
