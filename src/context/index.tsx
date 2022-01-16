import { createContext, useState, useEffect } from "react";

type ContextType = { connectWallet: () => void; wallet: any };

export const WalletContext = createContext<ContextType>({
  connectWallet: () => {},
  wallet: null,
});

const WalletProvider: React.FC = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  //@ts-ignore
  // const { ethereum } = window;

  const connectWallet = async () => {
    try {
      //@ts-ignore
      if (!window.ethereum) return alert("Please install metamask");

      //@ts-ignore
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      //@ts-ignore
      if (!window.ethereum) return alert("Please install metamask");
      //@ts-ignore
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setWallet(accounts[0]);

        //get all account transaction
      } else {
        console.log("No accounts found");
      }

      console.log(accounts);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
