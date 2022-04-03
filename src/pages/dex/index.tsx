import { useState } from "react";
import Layout from "../../components/Layout";

import Swap from "../../components/dex/Containers/Swap";
import Liquidity from "../../components/dex/Containers/Liquidity";
import BottomNavigation from "../../components/dex/Navbar/BottomNavigation";
import useMediaQuery from "../../hooks/useMediaQuery";
import PoolDetails from "../../components/dex/Containers/PoolDetails";
import ConfirmSwapModal from "../../components/dex/Modals/ConfirmSwap";

export default function Dex() {
  const [buyMode, setBuyMode] = useState(true);

  const [page, setPage] = useState("swap");

  const [showModal, setShowModal] = useState(false);
  const [liquidityTerms, setLiquidityTerms] = useState(false);

  const [mobileTab, setMobileTab] = useState(0);
  const isMobile = useMediaQuery("(max-width: 568px)");

  const tabChanger = () => {
    setPage("liquidity");
    setShowModal(false);
  };

  return (
    <>
      {page === "swap" && (
        <>
          {/* <ConfirmSwapModal /> */}
          <Swap
            setShowModal={setShowModal}
            showModal={showModal}
            liquidityTerms={liquidityTerms}
            setLiquidityTerms={setLiquidityTerms}
            buyMode={buyMode}
            setBuyMode={setBuyMode}
            tabChanger={tabChanger}
            mobileTab={mobileTab}
            setMobileTab={setMobileTab}
            isMobile={isMobile}
          />
        </>
      )}
      {page === "swap" && isMobile && (
        <BottomNavigation mobileTab={mobileTab} setMobileTab={setMobileTab} />
      )}
      {page === "liquidity" && <Liquidity setPage={setPage} />}
      {page === "details" && <PoolDetails />}
    </>
  );
}

Dex.layout = Layout;
