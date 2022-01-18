import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";

type ContextType = {
  connectWallet: () => void;
  wallet: any;
  walletBalance: string;
};

export const WalletContext = createContext<ContextType>({
  connectWallet: () => {},
  wallet: null,
  walletBalance: "0",
});

const WalletProvider: React.FC = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [walletBalance, setWalletBalance] = useState("0");

  // eslint-disable-next-line
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    try {
      //@ts-ignore
      if (!window.ethereum) return alert("Please install metamask");

      //@ts-ignore
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        accountChangeHandler(accounts[0]);
      } else {
        return alert("No wallet account found");
      }

      //@ts-ignore
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  };

  const accountChangeHandler = (account) => {
    setWallet(account);
    getWalletBalance(account.toString());
  };

  const chainChangeHandler = () => window.location.reload();

  const getWalletBalance = (address) => {
    //@ts-ignore
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setWalletBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (typeof window !== "undefined") {
    //@ts-ignore
    window.ethereum.on("accountsChanged", accountChangeHandler);

    //@ts-ignore
    window.ethereum.on("chainChanged", chainChangeHandler);
  }

  // console.log(walletBalance);
  // console.log(provider);

  const checkIfWalletIsConnected = async () => {
    try {
      //@ts-ignore
      if (!window.ethereum) return alert("Please install metamask");

      //@ts-ignore
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        accountChangeHandler(accounts[0]);
      } else {
        return alert("No wallet account found");
      }

      //@ts-ignore
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object found");
    }
  };

  // useEffect(() => {
  //   checkIfWalletIsConnected();
  // }, []);

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, walletBalance }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
