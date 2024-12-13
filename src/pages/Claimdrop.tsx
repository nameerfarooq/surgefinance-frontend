import raydium from "../assets/icons/raydium.svg";
import medium from "../assets/icons/medium.svg";
import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";
import ButtonStyle1 from "../components/Buttons/ButtonStyle2";
import ButtonStyle2 from "../components/Buttons/ButtonStyle2";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import NotEligible from "../components/ClaimdropSections/NotEligible";
import Eligible from "../components/ClaimdropSections/Eligible";

const Claimdrop = () => {
  const { connected } = useWallet();
  const [eligible, setEligible] = useState<Boolean>(true); 
  const [claimed, setClaimed] = useState<Boolean>(false);
  return (
    <div className="page1">
      <div className="page1-inner claimdrop-page">
        <div className="top">
          <div className="one">
            <div className="text-12">SURGE CLAIMDROP</div>
          </div>
          <div className="two">
            {connected ? (
              eligible ? (
                claimed ? (
                  <div className="text-4">The claimdrop has been closed.</div>
                ) : (
                  <Eligible />
                )
              ) : (
                <NotEligible />
              )
            ) : (
              <div className="text-4">
                Connect a wallet to check eligibility for the SURGE claimdrop
              </div>
            )}
          </div>
          <div className="three">
            <div className="left">
              <div className="text-13">Join our community!</div>
            </div>
            <div className="right">
              <div>
                <img src={raydium} alt="Raydium Logo" />
              </div>
              <div>
                <img src={twitter} alt="X Logo" />
              </div>
              <div>
                <img src={medium} alt="Medium Logo" />
              </div>
              <div>
                <img src={telegram} alt="Telegram Logo" />
              </div>
            </div>
          </div>
          <div className="four">
            <div className="left">
              <div className="text-5">
                Top holders of the <span className="text-6"> $JITO</span> and{" "}
                <span className="text-6"> $MNDE </span> governance tokens at our
                snapshot are eligible on a first come, first served basis.{" "}
                <br /> <br /> Once all the tokens are claimed, the claimdrop
                will close.
              </div>
            </div>
            <div className="right">
              <ButtonStyle2 text="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claimdrop;
