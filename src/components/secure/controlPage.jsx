import { ControlHeader } from "../shared/controlHeader.jsx";
import { ControlSideBar } from "../shared/controlSidebar.jsx";
import { PriceList } from "./priceList.jsx";
import "../../styles/secure/controlPage.css";

const ControlPage = () => {
    return (
        <div className="control-page">
            <ControlHeader />

            <div className="control-layout">
                <ControlSideBar />

                <main className="control-content">
                    <PriceList />
                </main>
            </div>
        </div>
    );
};

export default ControlPage;
