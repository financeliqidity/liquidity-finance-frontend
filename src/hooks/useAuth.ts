import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";

import { connectorsByName } from "../connectors";
export declare const connectorLocalStorageKey = "connectorId";

declare enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      activate(connector, async (error: Error) => {
        window.localStorage.removeItem(connectorLocalStorageKey);
        if (error instanceof UnsupportedChainIdError) {
          console.error(
            "Unsupported Chain Id",
            "Unsupported Chain Id Error. Check your chain Id."
          );
        } else if (
          error instanceof NoEthereumProviderError ||
          error instanceof NoBscProviderError
        ) {
          console.error("Provider Error", "No provider was found");
        } else if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (connector instanceof WalletConnectConnector) {
            const walletConnector = connector as WalletConnectConnector;
            walletConnector.walletConnectProvider = null;
          }
          console.error(
            "Authorization Error",
            "Please authorize to access your account"
          );
        } else {
          console.error(error.name, error.message);
        }
      });
    } else {
      console.error("Can't find connector", "The connector config is wrong");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { login, logout: deactivate };
};

export default useAuth;
