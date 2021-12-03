import { useState } from "react";
import Layout from "../../components/Layout";
import TokensDropdown from "../../components/Dropdowns/TokensDropdown";
import LiquidityAlert from "../../components/dex/Cards/LiquidityAlert";
import OrderCard from "../../components/dex/Cards/OrderCard";

import OrderFunds from "../../components/dex/Cards/OrderFunds";

import TradingHistory from "../../components/dex/Tables/TradingHistory";

import eth from "../../../public/assets/icons/eth.png";
import usdt from "../../../public/assets/icons/usdt.png";
import PoolDisclaimer from "../../components/dex/Modals/PoolDisclaimer";
import Swap from "../../components/dex/Cards/Swap";
import Liquidity from "../../components/dex/Cards/Liquidity";
import LiquidityLeft from "../../components/dex/Cards/LiquidityLeft";

export default function Dex() {
  const [trade, setTrade] = useState("buy");

  const [showModal, setShowModal] = useState(false);
  const [liquidityTerms, setLiquidityTerms] = useState(false);

  const pay = [
    { name: "Ethereum", symbol: "ETH", logo: eth },
    { name: "Tether", symbol: "USDT", logo: usdt },
    { name: "Ethereum", symbol: "ETH", logo: eth },
    { name: "Tether", symbol: "USDT", logo: usdt },
  ];
  const [currentPay, setCurrentPay] = useState(pay[0]);

  return (
    <div className="bg-grey_70">
      <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
        <div className="flex flex-col justify-between md:flex-row mb-10">
          <div className="left w-full md:w-12/25 bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg">
            <div className="w-full flex justify-between bg-grey_50 rounded-r-lg">
              <button className="md:py-5 py-3 w-1/3 btn-primary border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
                Swap
              </button>
              <PoolDisclaimer
                content={
                  <button
                    onClick={() => setShowModal(true)}
                    className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base"
                  >
                    Liquidity
                  </button>
                }
                showModal={showModal}
                setShowModal={setShowModal}
                liquidityTerms={liquidityTerms}
                setLiquidityTerms={setLiquidityTerms}
              />
              <button className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
                Loan
              </button>
            </div>
            <div>
              {/* <Swap
                pay={pay}
                currentPay={currentPay}
                setCurrentPay={setCurrentPay}
              /> */}
              <LiquidityLeft />
            </div>
          </div>
          {/* <div className="right w-full md:mt-0 mt-10 md:w-12/25">
            <div className="bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg">
              <div className="flex justify-between items-center mb-5">
                <div className="pair-rate flex items-center">
                  <div className="pair flex items-center">
                    <img src="/assets/icons/arrow-swap.svg" alt="..." />
                    <span className="text-lg font-semibold ml-2">BNB/LFI</span>
                  </div>
                  <div className="ml-3 md:ml-4 flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.50929 4.74561H15.4907C16.3888 4.74561 16.8378 5.83033 16.2021 6.46603L9.7139 12.9593C9.32037 13.3528 8.67963 13.3528 8.2861 12.9593L1.79791 6.46603C1.16221 5.83033 1.61124 4.74561 2.50929 4.74561Z"
                        fill="#F84239"
                      />
                    </svg>
                    <span className="ml-1 text-xs text-sell font-semibold">
                      2.08
                    </span>
                  </div>
                </div>
                <div className="controls flex items-center">
                  <button className="mr-4">
                    <img src="assets/icons/candle.svg" alt="..." />
                  </button>
                  <button className="mr-4">
                    <img src="assets/icons/dollar-circle.svg" alt="..." />
                  </button>
                  <button className="">
                    <img src="assets/icons/more-grey.svg" alt="..." />
                  </button>
                </div>
              </div>
              <LiquidityAlert />
              <div className="buy-sell flex bg-grey_50 rounded-lg mb-5 mt-6">
                <button
                  className={`${
                    trade === "buy" ? "bg-secondary" : "bg-grey_50"
                  } rounded-l-lg rounded-r-full font-bold text-xl w-1/2 md:py-2.5 py-2`}
                  onClick={() => setTrade("buy")}
                >
                  Buy
                </button>
                <button
                  className={`${
                    trade === "sell" ? "bg-sell" : "bg-grey_50"
                  } rounded-r-lg rounded-l-full font-bold text-xl w-1/2 md:py-2.5 py-2`}
                  onClick={() => setTrade("sell")}
                >
                  Sell
                </button>
              </div>

              <OrderCard />

              <div className="mt-16">
                <p className="flex mb-3 justify-between">
                  <span className="text-lg text-grey_20">Avbl</span>
                  <span className="text-lg flex">
                    0 BUSD
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M12.1483 2C6.62412 2 2.14832 6.47581 2.14832 12C2.14832 17.5242 6.62412 22 12.1483 22C17.6725 22 22.1483 17.5242 22.1483 12C22.1483 6.47581 17.6725 2 12.1483 2ZM17.9548 13.129C17.9548 13.3952 17.737 13.6129 17.4709 13.6129H13.7612V17.3226C13.7612 17.5887 13.5435 17.8065 13.2773 17.8065H11.0193C10.7532 17.8065 10.5354 17.5887 10.5354 17.3226V13.6129H6.82573C6.55961 13.6129 6.34186 13.3952 6.34186 13.129V10.871C6.34186 10.6048 6.55961 10.3871 6.82573 10.3871H10.5354V6.67742C10.5354 6.41129 10.7532 6.19355 11.0193 6.19355H13.2773C13.5435 6.19355 13.7612 6.41129 13.7612 6.67742V10.3871H17.4709C17.737 10.3871 17.9548 10.6048 17.9548 10.871V13.129Z"
                        fill="#2669F5"
                      />
                    </svg>
                  </span>
                </p>
                <button
                  type="submit"
                  className={`w-full py-4 ${
                    trade === "buy" ? "bg-secondary" : "bg-sell"
                  } text-xl font-bold rounded-lg`}
                >
                  {trade === "buy" ? "Buy" : "Sell"} LFI
                </button>

                <div className="pt-8 flex justify-between items-center">
                  <span className="text-sm text-gray-100">Slippage: 2%</span>
                  <button className="p-2.5 bg-grey_50 rounded-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.91 8.08998C12.4165 8.59654 12.7011 9.28359 12.7011 9.99998C12.7011 10.7164 12.4165 11.4034 11.91 11.91C11.4034 12.4165 10.7164 12.7011 9.99998 12.7011C9.28359 12.7011 8.59654 12.4165 8.08998 11.91C7.58341 11.4034 7.29883 10.7164 7.29883 9.99998C7.29883 9.64526 7.3687 9.29401 7.50444 8.96629C7.64019 8.63857 7.83915 8.3408 8.08998 8.08998C8.3408 7.83915 8.63857 7.64019 8.96629 7.50444C9.29401 7.3687 9.64526 7.29883 9.99998 7.29883C10.7164 7.29883 11.4034 7.58341 11.91 8.08998"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.24993 10C3.24993 10.297 3.27693 10.594 3.31293 10.882L1.72493 12.124C1.55461 12.2574 1.43817 12.4478 1.39702 12.6602C1.35586 12.8725 1.39276 13.0926 1.50093 13.28L2.91293 15.723C3.02107 15.9101 3.19304 16.0519 3.39729 16.1224C3.60155 16.193 3.82439 16.1875 4.02493 16.107L5.44693 15.536C5.58536 15.4824 5.73477 15.4634 5.8822 15.4807C6.02963 15.4979 6.17062 15.5509 6.29293 15.635C6.51293 15.781 6.74093 15.915 6.97693 16.035C7.24693 16.172 7.44293 16.417 7.48593 16.717L7.70293 18.23C7.76593 18.672 8.14493 19 8.59093 19H11.4079C11.6238 19 11.8325 18.9221 11.9956 18.7807C12.1587 18.6393 12.2654 18.4437 12.2959 18.23L12.5129 16.718C12.5366 16.5712 12.5955 16.4323 12.6847 16.3134C12.7739 16.1944 12.8907 16.0989 13.0249 16.035C13.2599 15.917 13.4869 15.784 13.7059 15.639C13.8286 15.554 13.9701 15.5002 14.1183 15.4825C14.2664 15.4647 14.4167 15.4834 14.5559 15.537L15.9749 16.107C16.1755 16.1873 16.3983 16.1927 16.6025 16.1221C16.8067 16.0516 16.9786 15.9099 17.0869 15.723L18.4989 13.28C18.6071 13.0926 18.644 12.8725 18.6028 12.6602C18.5617 12.4478 18.4453 12.2574 18.2749 12.124L16.6869 10.882C16.7229 10.594 16.7499 10.297 16.7499 10C16.7499 9.703 16.7229 9.406 16.6869 9.118L18.2749 7.876C18.4453 7.74261 18.5617 7.55222 18.6028 7.33984C18.644 7.12745 18.6071 6.90735 18.4989 6.72L17.0869 4.277C16.9788 4.08991 16.8068 3.94809 16.6026 3.87755C16.3983 3.80702 16.1755 3.8125 15.9749 3.893L14.5559 4.463C14.4166 4.51634 14.2664 4.53492 14.1183 4.51715C13.9702 4.49938 13.8287 4.44578 13.7059 4.361C13.487 4.21555 13.2596 4.08332 13.0249 3.965C12.8907 3.90113 12.7739 3.8056 12.6847 3.68663C12.5955 3.56766 12.5366 3.4288 12.5129 3.282L12.2969 1.77C12.2664 1.55627 12.1597 1.36074 11.9966 1.2193C11.8335 1.07785 11.6248 0.999991 11.4089 1H8.59193C8.37603 0.999991 8.16737 1.07785 8.00425 1.2193C7.84113 1.36074 7.7345 1.55627 7.70393 1.77L7.48593 3.284C7.46228 3.43026 7.40365 3.56865 7.31503 3.68739C7.22641 3.80613 7.11042 3.90171 6.97693 3.966C6.74093 4.086 6.51293 4.221 6.29293 4.366C6.17024 4.44971 6.02906 4.50236 5.88152 4.51943C5.73397 4.5365 5.58449 4.51748 5.44593 4.464L4.02493 3.893C3.82439 3.8125 3.60155 3.80702 3.39729 3.87755C3.19304 3.94809 3.02107 4.08991 2.91293 4.277L1.50093 6.72C1.39276 6.90735 1.35586 7.12745 1.39702 7.33984C1.43817 7.55222 1.55461 7.74261 1.72493 7.876L3.31293 9.118C3.27372 9.41042 3.25268 9.70498 3.24993 10V10Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Order-Funds Card */}
          {/* <OrderFunds /> */}
          {/* </div> */}
          <Liquidity />
        </div>
        <TradingHistory />
      </div>
    </div>
  );
}

Dex.layout = Layout;
