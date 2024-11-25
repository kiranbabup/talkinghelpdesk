import { Routes, Route } from "react-router-dom";
// import HelpHome from "./pages/HelpHome";
// import ServicesDB from "./pages/ServicesDB";
import Home from "./pages/Home";
import HomePage from "./mainPages/HomePage";

const CustomRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/help-home" element={<HelpHome />} /> */}
      {/* <Route path="/services" element={<ServicesDB />} /> */}
    </Routes>
  );
};

export default CustomRoutes;
