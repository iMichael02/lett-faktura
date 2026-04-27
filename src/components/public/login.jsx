import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/public/login.css";
import NavBar from "../shared/navbar";
import Footer from "../shared/footer";
import { loginSchema } from "../../validation/login";
import { validateForm } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const backgroundImage =
        "https://storage.123fakturera.se/public/wallpapers/sverige43.jpg";
    const showPasswordIcon =
        "https://online.123fakturera.se/components/icons/show_password.png";
    const hidePasswordIcon =
        "https://online.123fakturera.se/components/icons/hide_password.png";
    const [showPassword, setShowPassword] = useState(false);
    const passwordIcon = showPassword ? hidePasswordIcon : showPasswordIcon;
    const { t } = useTranslation(["login", "validation"]);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [validationErrors, setValidationErrors] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInput = (event) => {
        const data = {
            ...formData,
            [event.target.name]: event.target.value,
        };

        setFormData(data);

        const errors = validateForm(loginSchema, data, t);

        setValidationErrors(errors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validationErrors.email || validationErrors.password) {
            return;
        }

        dispatch(loginRequest(formData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/secure");
        }
    }, [isAuthenticated, navigate]);

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
                        <form onInput={handleInput} onSubmit={handleSubmit}>
                            <h2 class="login-heading">{t("login")}</h2>
                            <section class="login-section">
                                <div class="login-email">
                                    <div>
                                        <label
                                            for="email"
                                            class="login-email-label"
                                        >
                                            {t("enterEmail")}
                                        </label>
                                    </div>
                                    <input
                                        class="login-input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        autocomplete="on"
                                        placeholder={t("email")}
                                        onBlur={handleInput}
                                    />
                                </div>
                                {validationErrors.email && (
                                    <span class="email-error-span error-span">
                                        {validationErrors.email}
                                    </span>
                                )}
                                <div class="login-password">
                                    <div>
                                        <label
                                            for="password"
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
                                            name="password"
                                            placeholder={t("password")}
                                            onBlur={handleInput}
                                        />
                                        <img
                                            id="show-password-img"
                                            src={passwordIcon}
                                            alt={t("showPassword")}
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                </div>
                                {validationErrors.password && (
                                    <span class="password-error-span error-span">
                                        {validationErrors.password}
                                    </span>
                                )}
                                <section class="invalid-credentials"></section>
                            </section>
                            <div class="Login-Button-div">
                                <button class="Login-Button" type="submit">
                                    {t("login")}
                                </button>
                            </div>
                        </form>
                        <section class="gotodifferntlink">
                            <a href="#" class="login-new-customer">
                                {t("register")}
                            </a>
                            <a
                                id="forgot-password-link"
                                class="login-forgot-password"
                                href="#"
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
