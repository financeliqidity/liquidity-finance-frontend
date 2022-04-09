import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";
import "../../styles/globals.css";
import "../../styles/customStyles.css";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../utils/getLibrary";
import ApplicationUpdater from "../redux/application/updater";
import ListsUpdater from "../redux/lists/updater";
import MulticallUpdater from "../redux/multicall/updater";
import TransactionUpdater from "../redux/transactions/updater";

const Web3ReactProviderDefault = dynamic(() => import("./Provider"), {
  ssr: false,
});

import store from "../redux";

import WalletProvider from "../context/index";

import { Provider } from "react-redux";

// if (typeof window !== undefined && "ethereum" in window) {
//   (window.ethereum as any).autoRefreshOnNetworkChange = false;
// }

// window.addEventListener("error", () => {
//   localStorage?.removeItem("redux_localstorage_simple_lists");
// });

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderDefault getLibrary={getLibrary}>
        <RecoilRoot>
          <Provider store={store}>
            <>
              <ListsUpdater />
              <ApplicationUpdater />
              <TransactionUpdater />
              <MulticallUpdater />
            </>
            <WalletProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </WalletProvider>
          </Provider>
        </RecoilRoot>
      </Web3ReactProviderDefault>
    </Web3ReactProvider>
  );
}

export default MyApp;
