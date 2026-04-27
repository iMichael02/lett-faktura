import { useSelector } from "react-redux";
import "../../styles/shared/controlHeader.css";

export const ControlHeader = () => {
    const profileImage = "";
    const flagImage = "";
    const user = useSelector((state) => state.auth.user);
    return (
        <header className="control-header">
            <div className="header-left">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                />

                <div className="profile-info">
                    <h3>{user?.name || "User"}</h3>
                    <p>{user?.email || "Email"}</p>
                </div>
            </div>

            <div className="header-right">
                <span>Norsk Bokmal</span>
                <img src={flagImage} alt="Language" className="flag-image" />
            </div>
        </header>
    );
};
