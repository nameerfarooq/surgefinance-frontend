import greenCross from "../../assets/icons/greenCross.svg";
import gift from "../../assets/icons/gift.svg";
import ButtonStyle3 from "../Buttons/ButtonStyle3";
import { useState } from "react";

const Eligible = () => {
  const [tokensClaimed, setTokensClaimed] = useState(false);
  return (
    <div className="eligible">
      <div className="text-14">
        Congratulations! You are eligible to receive SURGE tokens.
      </div>
      <br />
      <br />
      <br />
      <div className="last-row">
        <div className="left">
          <img src={gift} alt="Cross Icon" />
          <div className="text-15">123.00 SURGE</div>
        </div>
        <div className="right">
          {tokensClaimed ? (
            <div className="text-14">TOKENS CLAIMED</div>
          ) : (
            <>
              <ButtonStyle3 text="1. RETWEET" />
              <ButtonStyle3 text="2. CLAIM" disabled={true} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eligible;
