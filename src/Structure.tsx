import { useState, useEffect } from "react";
import AppRoutes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import TopRightWallet from "./components/TopRightWallet/TopRightWallet";
import TransactionModal from "./components/Modals/TransactionModal";

import { useSelector } from "react-redux";

const Structure = () => {
  const modal = useSelector((state: any) => state.modal);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="structure">
      {isWideScreen ? (
        <>
          <div className="side-nav">
            <Sidebar />
          </div>
          <div
            className="back-screen"
            onClick={() => setIsWideScreen(!isWideScreen)}
          ></div>
        </>
      ) : // Toggle button for smaller screens
      null}
      <div className="main-area">
        <TopRightWallet setIsWideScreen={setIsWideScreen} />
        <AppRoutes />
        {modal?.show && <TransactionModal />}
      </div>
    </div>
  );
};

export default Structure;
