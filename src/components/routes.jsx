import { Route, BrowserRouter, Routes } from "react-router-dom";
import Public from "./public/routes";
import Secure from "./secure/routes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Public />} />
                {/* <Route path="/secure" element={<Secure />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
