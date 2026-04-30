import "./i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import setupAxiosInterceptor from "./utils/interceptor.js";
import { loadConfig } from "./config.js";

setupAxiosInterceptor();

const startApp = async () => {
    await loadConfig();
    createRoot(document.getElementById("root")).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
};

startApp();
