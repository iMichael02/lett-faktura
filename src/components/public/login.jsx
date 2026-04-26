import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/public/login.css";
import NavBar from "../shared/navbar";
import Footer from "../shared/footer";

const Login = () => {
    const backgroundImage =
        "https://storage.123fakturera.se/public/wallpapers/sverige43.jpg";
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
        <div className="login-page">
            <div className="background-container">
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="background-image"
                />
            </div>

            <NavBar />

            <div class="content">
                <div class="login-content-root">
                    <div class="back-login">
                        <form novalidate="" autocomplete="off">
                            <h2 class="login-heading">{t("login")}</h2>
                            <section class="login-section">
                                <div class="login-email">
                                    <div>
                                        <label for="" class="login-email-label">
                                            {t("enterEmail")}
                                        </label>
                                    </div>
                                    <input
                                        class="login-input"
                                        type="email"
                                        id="email"
                                        required=""
                                        name="username"
                                        value=""
                                        autocomplete="on"
                                        placeholder={t("email")}
                                    />
                                </div>
                                <span class="email-error-span error-span"></span>
                                <div class="login-password">
                                    <div>
                                        <label
                                            for=""
                                            class="login-password-label"
                                        >
                                            {t("enterPassword")}
                                        </label>
                                    </div>
                                    <div class="password-input-div">
                                        <input
                                            class="login-input"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="password"
                                            required=""
                                            name="password"
                                            value=""
                                            placeholder={t("password")}
                                        />
                                        <img
                                            id="show-password-img"
                                            src={passwordIcon}
                                            alt={t("showPassword")}
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                </div>
                                <span class="password-error-span error-span"></span>
                                <section class="invalid-credentials"></section>
                            </section>
                            <div class="Login-Button-div">
                                <button class="Login-Button" type="submit">
                                    {t("login")}
                                </button>
                            </div>
                        </form>
                        <section class="gotodifferntlink">
                            <a href="/register" class="login-new-customer">
                                {t("register")}
                            </a>
                            <a
                                id="forgot-password-link"
                                class="login-forgot-password"
                                href="/forgot-password"
                            >
                                {t("forgotPassword")}
                            </a>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
