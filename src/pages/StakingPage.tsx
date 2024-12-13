import { useState } from "react";
import InfoBoxStyle1 from "../components/InfoBox/InfoBoxStyle1";
import Stake from "../components/StakingTabs/Stake";
import Unstake from "../components/StakingTabs/Unstake";
import Claim from "../components/StakingTabs/Claim";
const StakingPage = () => {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <div className="page1">
      <div className="page1-inner">
        <div className="top">
          <div className="tabs">
            <div
              className={`tab heading-2 ${activeTab === 0 && "active"}`}
              onClick={() => setactiveTab(0)}
            >
              STAKE
            </div>
            <div
              className={`tab heading-2 ${activeTab === 1 && "active"}`}
              onClick={() => setactiveTab(1)}
            >
              UNSTAKE
            </div>
            <div
              className={`tab heading-2 ${activeTab === 2 && "active"}`}
              onClick={() => setactiveTab(2)}
            >
              CLAIM
            </div>
          </div>
          {activeTab === 0 ? (
            <Stake />
          ) : activeTab === 1 ? (
            <Unstake />
          ) : activeTab === 2 ? (
            <Claim />
          ) : null}
        </div>
        <div className="bottom">
          <InfoBoxStyle1 text="Staked Amount" value="123 SURGE" />
          <InfoBoxStyle1 text="Claimable Rewards" value="123 SURGE" />
          <InfoBoxStyle1 text="Multiplier" value="2x" />
          <InfoBoxStyle1 text="Staking APR" value="24.00%" />
        </div>
      </div>
    </div>
  );
};

export default StakingPage;
