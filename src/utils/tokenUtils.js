// Decode JWT token to check expiration
export const decodeToken = (token) => {
    try {
        const parts = token.split(".");
        if (parts.length !== 3) {
            return null;
        }

        const decoded = JSON.parse(
            atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")),
        );
        return decoded;
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
};

export const isTokenExpired = (token) => {
    const decoded = decodeToken(token);
    console.log("Decoded token:", decoded);
    if (!decoded || !decoded.exp) return true;

    const expirationTime = decoded.exp * 1000;
    const currentTime = Date.now();

    return expirationTime - currentTime < 60000;
};

export const getStoredToken = () => {
    return localStorage.getItem("auth_token");
};

export const clearToken = () => {
    localStorage.removeItem("auth_token");
};

export const setToken = (token) => {
    localStorage.setItem("auth_token", token);
};
