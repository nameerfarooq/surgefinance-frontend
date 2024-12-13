import moon from "../../assets/icons/moon.svg";
import burger from "../../assets/icons/burger.svg";
import wallet from "../../assets/icons/wallet.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";
import { useDispatch } from "react-redux";
import { setTheme } from "../../store/features/themeSlice";
interface TopRightWalletProps {
  setIsWideScreen: Function;
}
const TopRightWallet: React.FC<TopRightWalletProps> = ({ setIsWideScreen }) => {
  const { connected, connect, disconnect, select, publicKey } = useWallet();
  select(PhantomWalletName);
  const handleConnect = async () => {
    if (connected) {
      disconnect();
    } else {
      connect();
    }
  };
  const dispatch = useDispatch();
  const toggleTheme = async () => {
    dispatch(setTheme());
  };
  return (
    <>
      <div className="top-right-wallet">
        <div className="left">
          <div className="theme-icon" onClick={() => setIsWideScreen(true)}>
            <img src={burger} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wallet-btn text-2" onClick={handleConnect}>
            {publicKey
              ? `0x${publicKey.toString().slice(0, 4)}...${publicKey
                  .toString()
                  .slice(-3)}`
              : "CONNECT WALLET"}
          </div>
          <div
            className="theme-icon wallet-icon-responsive"
            onClick={handleConnect}
          >
            <img src={wallet} alt="" />
          </div>
          <div className="theme-icon" onClick={toggleTheme}>
            <img src={moon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRightWallet;
