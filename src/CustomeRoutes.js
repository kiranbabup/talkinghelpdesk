import { Routes, Route } from "react-router-dom";
// import HelpHome from "./pages/HelpHome";
// import ServicesDB from "./pages/ServicesDB";
import Home from "./pages/Home";

const CustomRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/help-home" element={<HelpHome />} /> */}
      {/* <Route path="/services" element={<ServicesDB />} /> */}
    </Routes>
  );
};

export default CustomRoutes;
