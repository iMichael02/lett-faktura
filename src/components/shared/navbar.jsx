import { useTranslation } from "react-i18next";
import "../../styles/shared/navbar.css";

const NavBar = () => {
    const logoImage =
        "https://storage.123fakturera.se/public/icons/diamond.png";
    const flagImageSE = "https://storage.123fakturera.se/public/flags/SE.png";
    const flagImageGB = "https://storage.123fakturere.no/public/flags/GB.png";

    const { t } = useTranslation("login");

    return (
        <nav className="navigation-out">
            <header className="navigation-header">
                <section className="navigation-section">
                    <div className="logoa">
                        <a href="/">
                            <img
                                alt=""
                                className="navigation-logo"
                                src={logoImage}
                            />
                        </a>
                    </div>
                    <div className="open-menu-dds">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="navigation-svg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                        </svg>
                    </div>
                    <div className="navigation-menu-bar">
                        <div className="menu-drop-down">
                            <div className="menu-drop-down-container">
                                <a className="menu-drop-down-item" href="#">
                                    <span className="collectionSpan">
                                        <p className="menu-item-name">
                                            {t("home")}
                                        </p>
                                    </span>
                                </a>
                                <a className="menu-drop-down-item" href="#">
                                    <span className="collectionSpan">
                                        <p className="menu-item-name">
                                            {t("order")}
                                        </p>
                                    </span>
                                </a>
                                <a className="menu-drop-down-item" href="#">
                                    <span className="collectionSpan">
                                        <p className="menu-item-name">
                                            {t("ourCustomers")}
                                        </p>
                                    </span>
                                </a>
                                <a className="menu-drop-down-item" href="#">
                                    <span className="collectionSpan">
                                        <p className="menu-item-name">
                                            {t("aboutUs")}
                                        </p>
                                    </span>
                                </a>
                                <a className="menu-drop-down-item" href="#">
                                    <span className="collectionSpan">
                                        <p className="menu-item-name">
                                            {t("contactUs")}
                                        </p>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="pc-menu">
                            <a className="pc-menu-items" href="#">
                                <span className="collectionSpan">
                                    <p className="collectionitem">
                                        {t("home")}
                                    </p>
                                </span>
                            </a>
                            <a className="pc-menu-items" href="#">
                                <span className="collectionSpan">
                                    <p className="collectionitem">
                                        {t("order")}
                                    </p>
                                </span>
                            </a>
                            <a className="pc-menu-items" href="#">
                                <span className="collectionSpan">
                                    <p className="collectionitem">
                                        {t("ourCustomers")}{" "}
                                    </p>
                                </span>
                            </a>
                            <a className="pc-menu-items" href="#">
                                <span className="collectionSpan">
                                    <p className="collectionitem">
                                        {t("aboutUs")}
                                    </p>
                                </span>
                            </a>
                            <a className="pc-menu-items" href="#">
                                <span className="collectionSpan">
                                    <p className="collectionitem">
                                        {t("contactUs")}
                                    </p>
                                </span>
                            </a>
                            <a
                                className="pc-menu-items language-pc-menu-items"
                                href="#"
                            >
                                <div className="">
                                    <div className="language-title-box">
                                        {" "}
                                        <p className="language-name">Svenska</p>
                                        <img
                                            src={flagImageSE}
                                            className="flag-icon drop-down-image"
                                            alt=""
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="lang-drop">
                            <div className="lang-drop-container">
                                <div className="dropdownList">
                                    <div className="language-Svenska drop-down-element">
                                        <div className="drop-down-lang-name">
                                            Svenska
                                        </div>
                                        <div className="drop-down-image-div">
                                            <img
                                                src={flagImageSE}
                                                className="drop-down-image"
                                                alt="Svenska"
                                            />
                                        </div>
                                    </div>
                                    <div className="language-English drop-down-element">
                                        <div className="drop-down-lang-name">
                                            English
                                        </div>
                                        <div className="drop-down-image-div">
                                            <img
                                                src={flagImageGB}
                                                className="drop-down-image"
                                                alt="English"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lang-dropk">
                        <div>
                            <div className="dropdownContainer">
                                <div className="language-box">
                                    {" "}
                                    <p className="flag-name collectionitem">
                                        {t("language")}
                                    </p>
                                    <img
                                        src={flagImageSE}
                                        className="icon-flag-nav"
                                        alt="Svenska"
                                    />{" "}
                                </div>
                            </div>
                            <div className="dropdownList">
                                <div className="language-Svenska drop-down-element">
                                    <div className="drop-down-lang-name">
                                        {t("language")}
                                    </div>
                                    <div className="drop-down-image-div">
                                        <img
                                            src={flagImageSE}
                                            className="drop-down-image"
                                            alt="Svenska"
                                        />
                                    </div>
                                </div>
                                <div className="language-English drop-down-element">
                                    <div className="drop-down-lang-name">
                                        {t("language")}
                                    </div>
                                    <div className="drop-down-image-div">
                                        <img
                                            src={flagImageGB}
                                            className="drop-down-image"
                                            alt="English"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </nav>
    );
};

export default NavBar;
