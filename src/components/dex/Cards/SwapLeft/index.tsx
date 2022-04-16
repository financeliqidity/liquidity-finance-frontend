import React, { useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletContext } from "../../../../context";
import SocialLinks from "../../Arcodions/SocialLinks";
import PoolDisclaimer from "../../Modals/PoolDisclaimer";
import Settings from "../../Modals/Settings";
import TrxnHistory from "../../Modals/TrxnHistory";
import PercentageSelect from "../../PercentageSelect";
import { Field } from "../../../../redux/dex/actions";

import { useActiveWeb3React } from "../../../../hooks";
import { useSwapState } from "../../../../redux/dex/hooks";
import { JSBI, TradeType } from "cd3d-dex-libs-sdk";
import SwapNTransfer from "../../Forms/SwapNTransfer";
import {
  computeSlippageAdjustedAmounts,
  computeTradePriceBreakdown,
} from "../../../../utils/prices";
import ReceiveInput from "../../InputPanels/ReceiveInput";
import { PayInput } from "../../InputPanels/PayInput";

const HeartIcon = ({ className }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <path
      d="M12.5 21.65C12.19 21.65 11.89 21.61 11.64 21.52C7.82 20.21 1.75 15.56 1.75 8.68998C1.75 5.18998 4.58 2.34998 8.06 2.34998C9.75 2.34998 11.33 3.00998 12.5 4.18998C13.67 3.00998 15.25 2.34998 16.94 2.34998C20.42 2.34998 23.25 5.19998 23.25 8.68998C23.25 15.57 17.18 20.21 13.36 21.52C13.11 21.61 12.81 21.65 12.5 21.65ZM8.06 3.84998C5.41 3.84998 3.25 6.01998 3.25 8.68998C3.25 15.52 9.82 19.32 12.13 20.11C12.31 20.17 12.7 20.17 12.88 20.11C15.18 19.32 21.76 15.53 21.76 8.68998C21.76 6.01998 19.6 3.84998 16.95 3.84998C15.43 3.84998 14.02 4.55998 13.11 5.78998C12.83 6.16998 12.19 6.16998 11.91 5.78998C10.98 4.54998 9.58 3.84998 8.06 3.84998Z"
      fill="#7C8497"
    />
  </svg>
);

//@ts-ignore
const injected = new InjectedConnector();

export default function SwapLeft({
  setSwapState,
  isExpertMode,
  onUserInput,
  value,
  showModal,
  setShowModal,
  swapNTransfer,
  setSwapNTransfer,
  liquidityTerms,
  setLiquidityTerms,
  tabChanger,
  onCurrencySelectInput,
  onCurrencySelectOutput,
  onSwitchTokens,
  currencies,
  trade,
  allowedSlippage,
  handleSwap,
  parsedAmounts,
  selectedCurrency,
  swapInputError,
  handleMaxInput,
}) {
  const { active, activate, library: provider } = useWeb3React();

  const connect = async () => {
    try {
      activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const [pPercentage, setPPercentage] = useState(value ?? null);

  const { account } = useActiveWeb3React();

  const { independentField, typedValue, recipient } = useSwapState();

  const route = trade?.route;
  const userHasSpecifiedInputOutput = Boolean(
    currencies[Field.INPUT] &&
      currencies[Field.OUTPUT] &&
      parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0))
  );
  const noRoute = !route;

  const slippageAdjustedAmounts = useMemo(
    () => computeSlippageAdjustedAmounts(trade, allowedSlippage),
    [allowedSlippage, trade]
  );

  const { priceImpactWithoutFee, realizedLPFee } = useMemo(
    () => computeTradePriceBreakdown(trade),
    [trade]
  );

  return (
    <div className="left w-full md:w-12/25 bg-blue_grey px-4 md:px-8 py-8 md:py-12 rounded-xl">
      <div className="w-full flex justify-between bg-grey_50 rounded-r-lg rounded-l-lg">
        <button className="md:py-5 py-3 w-1/3 btn-primary border-primary border-r border-solid rounded-r-lg rounded-l-lg font-bold md:text-xl text-base">
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
          tabChanger={tabChanger}
        />

        <button className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
          Loan
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mt-9 flex justify-between items-center">
          <span className="md:text-xl text-base">Swap Token</span>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <Settings />
              <TrxnHistory />
            </div>
            <button className="p-2.5">
              <HeartIcon className="hover-primary" />
            </button>
          </div>
        </div>
        <div className="disclaimer py-5 text-center text-xs">
          <p className="text-gray-200 mb-1 font-bold">
            This token is governance protected
          </p>
          <p className="text-primary font-bold cursor-pointer">more info</p>
        </div>
        {/* Pay */}
        <div className="pay">
          <PayInput
            currencies={currencies}
            value={value}
            onUserInput={onUserInput}
            selectedCurrency={selectedCurrency}
            onCurrencySelectInput={onCurrencySelectInput}
          />
          {selectedCurrency && (
            <PercentageSelect
              value={pPercentage}
              setValue={setPPercentage}
              onMax={handleMaxInput}
            />
          )}
        </div>
        {/* Switch Button */}
        <div className="my-5 flex justify-center">
          <button
            className="p-4 bg-grey_50 rounded-full"
            onClick={onSwitchTokens}
            type="button"
          >
            <img src="/assets/icons/switch.svg" alt="..." />
          </button>
        </div>
        {/* Receive */}
        <div className="receive mb-8">
          <ReceiveInput
            selectedCurrency={selectedCurrency}
            currencies={currencies}
            onCurrencySelectOutput={onCurrencySelectOutput}
          />
        </div>
        <SocialLinks />
        {/* Swap & Transfer */}
        <SwapNTransfer
          swapNTransfer={swapNTransfer}
          setSwapNTransfer={setSwapNTransfer}
        />
        {account ? (
          <React.Fragment>
            {noRoute && userHasSpecifiedInputOutput ? (
              <button
                type="button"
                className="mt-8 w-full text-xl font-bold py-4 rounded-lg bg-grey_40 text-grey_20"
                disabled
              >
                No liquidity
              </button>
            ) : (
              <button
                type="submit"
                className={
                  "mt-8 w-full text-xl font-bold py-4 rounded-lg text-white " +
                  (swapInputError ? "bg-grey_40 text-grey_20" : "btn-primary")
                }
                disabled={swapInputError}
                onClick={() => {
                  if (isExpertMode) {
                    handleSwap();
                  } else {
                    setSwapState({
                      tradeToConfirm: trade,
                      attemptingTxn: false,
                      swapErrorMessage: undefined,
                      showConfirm: true,
                      txHash: undefined,
                    });
                  }
                }}
              >
                Swap
              </button>
            )}
          </React.Fragment>
        ) : (
          <button
            className="mt-8 w-full btn-primary text-white text-xl font-bold py-4 rounded-lg"
            onClick={connect}
          >
            Connect Wallet
          </button>
        )}
      </form>

      {/* Summary */}
      <div className="mt-8 py-3 px-4 bg-dark_grey rounded-lg">
        <div className="flex w-full justify-between mb-3">
          <p className="text-sm text-gray-200">Estimated Cost</p>
          <p className="text-sm text-gray-100">~$39.55</p>
        </div>
        <div className="flex w-full justify-between mb-3">
          <p className="text-sm text-gray-200">Price Impact</p>
          <p className="text-sm text-gray-100">
            {priceImpactWithoutFee?.toFixed(2)}%
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-sm text-gray-200">
            {trade?.tradeType === TradeType.EXACT_INPUT
              ? "Minimum Received"
              : "Maximum sold"}
          </p>
          <p className="text-sm text-gray-100">
            {trade?.tradeType === TradeType.EXACT_INPUT
              ? slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4) ?? "-"
              : slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4) ?? "-"}

            <span className="ml-2">
              {trade?.tradeType === TradeType.EXACT_INPUT
                ? trade?.outputAmount.currency.symbol
                : trade?.inputAmount.currency.symbol}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
