import surgelogo from "../../assets/images/surgelogo.svg";
import upfrontYeildIcon from "../../assets/icons/upfrontYieldIcon.svg";
import DashboardNavItem from "./DashboardNavItem";
import mintUSDSIcon from "../../assets/icons/mintUSDSIcon.svg";
import redeemIcon from "../../assets/icons/redeemIcon.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [Upfront, setUpfront] = useState("Upfront Yield");
  const [staking, setStaking] = useState("Staking");
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={surgelogo} alt="Surge Finance Logo" />
      </div>
      <div className="dashboard-nav">
        <div className="dashboard-heading heading-1">DASHBOARD</div>
        {/* <NavLink to={"/upfront-yield"}> */}
        <div
          onMouseEnter={() => setUpfront("Coming Soon")}
          onMouseLeave={() => setUpfront("Upfront Yield")}
        >
          <DashboardNavItem
            icon={upfrontYeildIcon}
            title={Upfront}
            active={pathname === "/upfront-yield" ? true : false}
          />
        </div>
        {/* </NavLink> */}
        {/* <NavLink to={"/mint-usds"}> */}
        {/* <div
          onMouseEnter={() => setMint("Coming Soon")}
          onMouseLeave={() => setMint("Mint USDS")}
        >
          <DashboardNavItem
            icon={mintUSDSIcon}
            title={mint}
            active={pathname === "/mint-usds" ? true : false}
          />
        </div> */}
        {/* </NavLink> */}
        <NavLink to={"/staking"}>
          <div

          >
            <DashboardNavItem
              icon={redeemIcon}
              title={staking}
              active={pathname === "/staking" ? true : false}
            />
          </div>
        </NavLink>
        <NavLink to={"/claimdrop"}>
          <div>
            <DashboardNavItem
              icon={redeemIcon}
              title={"Claimdrop"}
              active={pathname === "/claimdrop" ? true : false}
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
