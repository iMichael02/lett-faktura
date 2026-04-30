let config = null;

export const loadConfig = async () => {
    try {
        const response = await fetch("/config.json");

        if (!response.ok) {
            throw new Error("Failed to load config.json");
        }

        config = await response.json();
    } catch (error) {
        console.error("Config loading error:", error);

        config = {
            API_URL: "http://localhost:3000",
            APP_ENV: "local",
        };
    }
};

export const getConfig = () => config;
