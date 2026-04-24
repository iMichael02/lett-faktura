import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./login";

const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Public;
