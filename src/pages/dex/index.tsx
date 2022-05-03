import React, { useState } from "react";
import Layout from "../../components/Layout";

import Swap from "../../components/dex/Containers/Swap";
import Liquidity from "../../components/dex/Containers/Liquidity";
import BottomNavigation from "../../components/dex/Navbar/BottomNavigation";
import useMediaQuery from "../../hooks/useMediaQuery";
import PoolDetails from "../../components/dex/Containers/PoolDetails";

export default function Dex(props) {
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
    <React.Fragment>
      {page === "swap" && (
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
      )}
      {page === "swap" && isMobile && (
        <BottomNavigation mobileTab={mobileTab} setMobileTab={setMobileTab} />
      )}
      {page === "liquidity" && <Liquidity setPage={setPage} />}
      {page === "details" && <PoolDetails />}
    </React.Fragment>
  );
}

Dex.layout = Layout;
