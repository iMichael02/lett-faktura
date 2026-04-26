import { useTranslation } from "react-i18next";
import "../../styles/shared/footer.css";

const Footer = () => {
    const { t } = useTranslation("login");
    return (
        <div class="footer">
            <footer class="footer-div">
                <div class="footer--text-section">
                    <div class="footer--lettafaktura-text">123 Fakturera</div>
                    <div class="footer-menu">
                        <a href="#">
                            <span>
                                <p>{t("home")}</p>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <p>{t("order")}</p>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <p>{t("contactUs")}</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p class="copyright-text">
                        © Lättfaktura, CRO no. 638537, 2025. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
