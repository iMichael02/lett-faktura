import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/public/login.css";

const Login = () => {
    const backgroundImage =
        "https://storage.123fakturera.se/public/wallpapers/sverige43.jpg";
    const logoImage =
        "https://storage.123fakturera.se/public/icons/diamond.png";
    const flagImage = "https://storage.123fakturere.no/public/flags/SE.png";
    const showPasswordIcon =
        "https://online.123fakturera.se/components/icons/show_password.png";
    const hidePasswordIcon =
        "https://online.123fakturera.se/components/icons/hide_password.png";
    const [showPassword, setShowPassword] = useState(false);
    const passwordIcon = showPassword ? hidePasswordIcon : showPasswordIcon;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { t } = useTranslation("login");

    return (
        <div
            className="login-page"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <header className="header">
                <img src={logoImage} alt="Logo" className="logo" />

                <nav className="nav-menu">
                    <a href="#">{t("home")}</a>
                    <a href="#">{t("order")}</a>
                    <a href="#">{t("ourCustomers")}</a>
                    <a href="#">{t("aboutUs")}</a>
                    <a href="#">{t("contactUs")}</a>

                    <div className="language-selector">
                        <span>{t("language")}</span>
                        <img src={flagImage} alt="Language" className="flag" />
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <div className="login-card">
                    <h1 className="login-title">{t("login")}</h1>

                    <form className="login-form">
                        <div className="form-group">
                            <label>{t("enterEmail")}</label>
                            <input type="email" placeholder={t("email")} />
                        </div>

                        <div className="form-group">
                            <label>{t("enterPassword")}</label>
                            <div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder={t("password")}
                                />
                                <img
                                    className="password-toggle"
                                    src={passwordIcon}
                                    alt="show password"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>

                        <button type="submit" className="login-button">
                            {t("login")}
                        </button>

                        <div className="form-links">
                            <a href="#">{t("register")}</a>
                            <a href="#">{t("forgotPassword")}</a>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-brand">123 Fakturera</div>

                <div className="footer-bottom">
                    <p>
                        © Lättfaktura, CRO no.638537, 2025. All rights reserved.
                    </p>

                    <div className="footer-links">
                        <a href="#">{t("home")}</a>
                        <a href="#">{t("order")}</a>
                        <a href="#">{t("contactUs")}</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;
