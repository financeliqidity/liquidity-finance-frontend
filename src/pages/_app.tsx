import { RecoilRoot } from "recoil";
import "../../styles/globals.css";
import "../../styles/customStyles.css";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../utils/getLibrary";

import store from "../redux";

import WalletProvider from "../context/index";

import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <RecoilRoot>
        <Provider store={store}>
          <WalletProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletProvider>
        </Provider>
      </RecoilRoot>
    </Web3ReactProvider>
  );
}

export default MyApp;
