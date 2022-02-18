import { RecoilRoot } from "recoil";
import "../../styles/globals.css";
import "../../styles/customStyles.css";

import WalletProvider from "../context/index";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <RecoilRoot>
      <WalletProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletProvider>
    </RecoilRoot>
  );
}

export default MyApp;
