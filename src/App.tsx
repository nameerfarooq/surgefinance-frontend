import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";
import Structure from "./Structure";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
// import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { useMemo } from "react";
const App = () => {
  const theme = useSelector((state: any) => state.theme);
  const endpoint =
    "https://palpable-patient-resonance.solana-devnet.quiknode.pro/bdd5572aa6ebbc530988e73d26ab70eb6796406c/";

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <div className={`${theme.isDarkTheme ? "darkMode" : "lightMode"}`}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <Router>
            {/* <Provider store={store}> */}
            <Structure />
            {/* </Provider> */}
          </Router>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default App;
