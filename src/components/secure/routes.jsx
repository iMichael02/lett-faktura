import { Navigate, Routes, Route } from "react-router-dom";
import ControlPage from "./controlPage";

const Secure = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="control-page" />} />
            <Route path="control-page" element={<ControlPage />} />
        </Routes>
    );
};

export default Secure;
