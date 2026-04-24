import { Navigate, Routes, Route } from "react-router-dom";
import Pricelist from "./pricelist";

const Secure = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/pricelist" />} />
            <Route path="/pricelist" element={<Pricelist />} />
        </Routes>
    );
};

export default Secure;
