import { useState } from "react";
import Layout from "../../components/Layout";
// import TokensDropdown from "../../components/Dropdowns/TokensDropdown";
// import LiquidityAlert from "../../components/dex/Cards/LiquidityAlert";
import TokenSelectbox from "../../components/shared/Selectboxes/TokenSelectbox";
// import OrderCard from "../../components/dex/Cards/OrderCard";

// import OrderFunds from "../../components/dex/Cards/OrderFunds";

// import TradingHistory from "../../components/dex/Tables/TradingHistory";

import eth from "../../../public/assets/icons/eth.png";
import usdt from "../../../public/assets/icons/usdt.png";
// import PoolDisclaimer from "../../components/dex/Modals/PoolDisclaimer";

import Swap from "../../components/dex/Containers/Swap";
import Liquidity from "../../components/dex/Containers/Liquidity";

export default function Dex() {
  const [trade, setTrade] = useState("buy");

  const [page, setPage] = useState("swap");

  const [showModal, setShowModal] = useState(false);
  const [liquidityTerms, setLiquidityTerms] = useState(false);

  const pay = [
    { name: "Ethereum", symbol: "ETH", logo: eth },
    { name: "Tether", symbol: "USDT", logo: usdt },
  ];
  const [currentPay, setCurrentPay] = useState(pay[0]);

  const tabChanger = () => {
    setPage("liquidity");
    setShowModal(false);
  };

  return (
    <>
      {page === "swap" ? (
        <Swap
          setShowModal={setShowModal}
          showModal={showModal}
          liquidityTerms={liquidityTerms}
          setLiquidityTerms={setLiquidityTerms}
          pay={pay}
          currentPay={currentPay}
          setCurrentPay={setCurrentPay}
          trade={trade}
          setTrade={setTrade}
          tabChanger={tabChanger}
          setPage={setPage}
          page={page}
        />
      ) : (
        <Liquidity pay={pay} currentPay={currentPay} setPage={setPage} />
      )}
    </>
  );
}

Dex.layout = Layout;
