import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Claimdrop from "../pages/Claimdrop";
import StakingPage from "../pages/StakingPage";
const AppRoutes = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/staking");
    }
  }, []);
  return (
    <div className="dashboard">
      <Routes>
        <Route path="/upfront-yield" element={<h2>Comming Soon</h2>} />
        <Route path="/staking" element={<StakingPage />} />
        <Route path="/*" element={<Claimdrop />} />
        <Route path="/claimdrop" element={<Claimdrop />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
