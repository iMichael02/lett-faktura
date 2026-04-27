import { useTranslation } from "react-i18next";
import "../../styles/shared/footer.css";

const Footer = () => {
    const { t } = useTranslation(["common"]);
    return (
        <div className="footer">
            <footer className="footer-div">
                <div className="footer--text-section">
                    <div className="footer--lettafaktura-text">
                        123 Fakturera
                    </div>
                    <div className="footer-menu">
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
                <div className="footer-copyright">
                    <p className="copyright-text">
                        © Lättfaktura, CRO no. 638537, 2025. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
