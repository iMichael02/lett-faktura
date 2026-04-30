import { ControlHeader } from "../shared/controlHeader";
import { ControlSideBar } from "../shared/controlSidebar";
import { PriceList } from "./pricelist";
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
