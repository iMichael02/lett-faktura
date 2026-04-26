import { useTranslation } from "react-i18next";
import "../../styles/shared/navbar.css";

const NavBar = () => {
    const logoImage =
        "https://storage.123fakturera.se/public/icons/diamond.png";
    const flagImageSE = "https://storage.123fakturera.se/public/flags/SE.png";
    const flagImageGB = "https://storage.123fakturere.no/public/flags/GB.png";

    const { t } = useTranslation("login");

    return (
        // <header className="header">
        //     <img src={logoImage} alt="Logo" className="logo" />

        //     <nav className="nav-menu">
        //         <a href="#">{t("home")}</a>
        //         <a href="#">{t("order")}</a>
        //         <a href="#">{t("ourCustomers")}</a>
        //         <a href="#">{t("aboutUs")}</a>
        //         <a href="#">{t("contactUs")}</a>
        //         <a href="#" className="language-link">
        //             <div className="language-selector">
        //                 <span>{t("language")}</span>
        //                 <img src={flagImageSE} alt="Language" className="flag" />
        //             </div>
        //         </a>
        //     </nav>
        // </header>
        <nav class="navigation-out">
            <header class="navigation-header">
                <section class="navigation-section">
                    <div class="logoa">
                        <a href="/">
                            <img
                                alt=""
                                class="navigation-logo"
                                src={logoImage}
                            />
                        </a>
                    </div>
                    <div class="open-menu-dds">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="navigation-svg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                        </svg>
                    </div>
                    <div class="navigation-menu-bar">
                        <div class="menu-drop-down">
                            <div class="menu-drop-down-container">
                                <a class="menu-drop-down-item" href="#">
                                    <span class="collectionSpan">
                                        <p class="menu-item-name">
                                            {t("home")}
                                        </p>
                                    </span>
                                </a>
                                <a class="menu-drop-down-item" href="#">
                                    <span class="collectionSpan">
                                        <p class="menu-item-name">
                                            {t("order")}
                                        </p>
                                    </span>
                                </a>
                                <a class="menu-drop-down-item" href="#">
                                    <span class="collectionSpan">
                                        <p class="menu-item-name">
                                            {t("ourCustomers")}
                                        </p>
                                    </span>
                                </a>
                                <a class="menu-drop-down-item" href="#">
                                    <span class="collectionSpan">
                                        <p class="menu-item-name">
                                            {t("aboutUs")}
                                        </p>
                                    </span>
                                </a>
                                <a class="menu-drop-down-item" href="#">
                                    <span class="collectionSpan">
                                        <p class="menu-item-name">
                                            {t("contactUs")}
                                        </p>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="pc-menu">
                            <a class="pc-menu-items" href="#">
                                <span class="collectionSpan">
                                    <p class="collectionitem">{t("home")}</p>
                                </span>
                            </a>
                            <a class="pc-menu-items" href="#">
                                <span class="collectionSpan">
                                    <p class="collectionitem">{t("order")}</p>
                                </span>
                            </a>
                            <a class="pc-menu-items" href="#">
                                <span class="collectionSpan">
                                    <p class="collectionitem">
                                        {t("ourCustomers")}{" "}
                                    </p>
                                </span>
                            </a>
                            <a class="pc-menu-items" href="#">
                                <span class="collectionSpan">
                                    <p class="collectionitem">{t("aboutUs")}</p>
                                </span>
                            </a>
                            <a class="pc-menu-items" href="#">
                                <span class="collectionSpan">
                                    <p class="collectionitem">
                                        {t("contactUs")}
                                    </p>
                                </span>
                            </a>
                            <a
                                class="pc-menu-items language-pc-menu-items"
                                href="#"
                            >
                                <div class="">
                                    <div class="language-title-box">
                                        {" "}
                                        <p class="language-name">Svenska</p>
                                        <img
                                            src={flagImageSE}
                                            class="flag-icon drop-down-image"
                                            alt=""
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="lang-drop">
                            <div class="lang-drop-container">
                                <div class="dropdownList">
                                    <div class="language-Svenska drop-down-element">
                                        <div class="drop-down-lang-name">
                                            Svenska
                                        </div>
                                        <div class="drop-down-image-div">
                                            <img
                                                src={flagImageSE}
                                                class="drop-down-image"
                                                alt="Svenska"
                                            />
                                        </div>
                                    </div>
                                    <div class="language-English drop-down-element">
                                        <div class="drop-down-lang-name">
                                            English
                                        </div>
                                        <div class="drop-down-image-div">
                                            <img
                                                src={flagImageGB}
                                                class="drop-down-image"
                                                alt="English"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lang-dropk">
                        <div>
                            <div class="dropdownContainer">
                                <div class="language-box">
                                    {" "}
                                    <p class="flag-name collectionitem">
                                        {t("language")}
                                    </p>
                                    <img
                                        src={flagImageSE}
                                        class="icon-flag-nav"
                                        alt="Svenska"
                                    />{" "}
                                </div>
                            </div>
                            <div class="dropdownList">
                                <div class="language-Svenska drop-down-element">
                                    <div class="drop-down-lang-name">
                                        {t("language")}
                                    </div>
                                    <div class="drop-down-image-div">
                                        <img
                                            src={flagImageSE}
                                            class="drop-down-image"
                                            alt="Svenska"
                                        />
                                    </div>
                                </div>
                                <div class="language-English drop-down-element">
                                    <div class="drop-down-lang-name">
                                        {t("language")}
                                    </div>
                                    <div class="drop-down-image-div">
                                        <img
                                            src={flagImageGB}
                                            class="drop-down-image"
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
