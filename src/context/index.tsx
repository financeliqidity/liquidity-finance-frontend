import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { hexToUTF8 } from "@47ng/codec";

import Dex from "../artifacts/abis/Dex.json";
import ERC20Abi from "../artifacts/abis/ERC20Abi.json";

type ContextType = {
  connectWallet: () => void;
  wallet: any;
  disconnectWallet: () => void;
};

export const WalletContext = createContext<ContextType>({
  connectWallet: () => {},
  wallet: null,
  disconnectWallet: () => {},
});

const WalletProvider: React.FC = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [wallet, setWallet] = useState(null);
  const [contracts, setContracts] = useState(null);

  let ethereum;

  if (typeof window !== "undefined") {
    //@ts-ignore
    ethereum = window?.ethereum;
  }

  const connectWallet = async () => {
    try {
      if (!ethereum)
        return alert(
          "Missing install Metamask. Please access https://metamask.io/ to install extension on your browser"
        );

      //@ts-ignore
      const accountsList = await window?.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWallet(accountsList[0]);

      const provider = new ethers.providers.Web3Provider(ethereum);
      // const contracts = await getContracts(provider.provider);
      const accounts = await provider.listAccounts();

      setProvider(provider);
      // setContracts(contracts);
      setAccounts(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  };

  // const getContracts = async (web3) => {
  //   const networkId = await web3.provider.networkVersion;
  //   const deployedNetwork = Dex.networks[networkId];

  //   const signer = await web3.getSigner();

  //   const dex = new ethers.Contract(deployedNetwork.address, Dex.abi, signer);

  //   const tokens = await dex.getTokens();
  //   const tokenContracts = tokens.reduce(
  //     (acc, token) => ({
  //       ...acc,
  //       [hexToUTF8(token.ticker)]: new ethers.Contract(
  //         token.tokenAddress,
  //         ERC20Abi
  //       ),
  //     }),
  //     {}
  //   );
  //   return { dex, ...tokenContracts };
  // };

  const disconnectWallet = () => setWallet(null);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      //@ts-ignore
      const accountsList = await window?.ethereum.request({
        method: "eth_accounts",
      });

      if (accountsList.length) {
        setWallet(accountsList[0]);
      } else {
        console.log("No accounts found");
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      // const contracts = await getContracts(provider);
      const accounts = await provider.listAccounts();

      setProvider(provider);
      // setContracts(contracts);
      setAccounts(accounts);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object found");
    }
  };

  //@ts-ignore
  useEffect(() => checkIfWalletIsConnected(), []);

  console.log(accounts, contracts);

  const accountChangedHandler = () => checkIfWalletIsConnected();

  const chainChangedHandler = () => window.location.reload();

  ethereum?.on("accountsChanged", accountChangedHandler);

  ethereum?.on("chainChanged", chainChangedHandler);

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
