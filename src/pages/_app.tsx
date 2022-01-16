import "../../styles/globals.css";
import "../../styles/customStyles.css";

import WalletProvider from "../context/index";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <WalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletProvider>
  );
}

export default MyApp;
