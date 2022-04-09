import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletContext } from "../../../../context";
import SocialLinks from "../../Arcodions/SocialLinks";
import PoolDisclaimer from "../../Modals/PoolDisclaimer";
import SelectPair from "../../Modals/SelectPair";
import Settings from "../../Modals/Settings";
import TrxnHistory from "../../Modals/TrxnHistory";
import PercentageSelect from "../../PercentageSelect";
import { Field } from "../../../../redux/dex/actions";

import { useActiveWeb3React } from "../../../../hooks";
import { useDerivedSwapInfo, useSwapState } from "../../../../redux/dex/hooks";
import { useCurrencyBalance } from "../../../../redux/wallet/hooks";
import { JSBI, Trade, TradeType } from "cd3d-dex-libs-sdk";
import SwapNTransfer from "../../Forms/SwapNTransfer";
import {
  computeSlippageAdjustedAmounts,
  computeTradePriceBreakdown,
} from "../../../../utils/prices";

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
const Selector = () => (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0.5L4 3.5L7 0.5L8 1.5L4 5.5L0 1.5L1 0.5Z"
      fill="#B7BECB"
    />
  </svg>
);
const Dummy = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sc-jKTccl hmgxQB"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
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
}) {
  const { wallet, connectWallet } = React.useContext(WalletContext);

  const { active, activate, library: provider } = useWeb3React();

  const connect = async () => {
    try {
      activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const [pPercentage, setPPercentage] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleContinue = (values) => {
    onUserInput(values.pay);
  };

  const { account } = useActiveWeb3React();

  const Pay = () => {
    const selectedCurrencyBalance = useCurrencyBalance(
      account ?? undefined,
      currencies[Field.INPUT] ?? undefined
    );

    return (
      <div className="rounded-lg bg-grey_70 px-4 py-3 border border-solid border-grey_50">
        <div className="flex justify-between">
          <div className="left">
            <input
              type="number"
              name="pay"
              className="text-white bg-transparent border-none focus:border-none outline-none focus:outline-none text-xl font-bold w-full"
              {...register("pay", { required: true })}
              defaultValue={value}
            />
            {!errors.pay && (
              <span className="text-gray-100 text-xs mt-1 block">
                ~$ 2900.00
              </span>
            )}
            {errors.pay?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Pay is required
              </p>
            )}
          </div>
          <div className="right">
            <SelectPair
              onCurrencySelect={onCurrencySelectInput}
              content={
                <div className="flex items-center bg-grey_50 px-2 py-1 rounded-lg">
                  {/* <img
                src={tokenPair.pay.iconUrl}
                alt="..."
                className="w-5 h-5 mr-2"
              /> */}
                  <Dummy />

                  <span className="block truncate text-base text-white text-center w-full mr-2.5">
                    {currencies[Field.INPUT]?.symbol}
                  </span>
                  <span className="flex items-center justify-center">
                    <Selector />
                  </span>
                </div>
              }
            />
            <span className="mt-1 text-gray-100 text-xs">
              Balance: {`${selectedCurrencyBalance?.toSignificant(6)}`}{" "}
              {currencies[Field.INPUT]?.symbol}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const Receive = () => {
    const selectedCurrencyBalance = useCurrencyBalance(
      account ?? undefined,
      currencies[Field.OUTPUT] ?? undefined
    );

    return (
      <div className="rounded-lg bg-grey_70 px-4 py-3 border border-solid border-grey_50">
        <div className="flex justify-between">
          <div className="left">
            <input
              type="number"
              name="receive"
              className="text-white bg-transparent border-none focus:border-none outline-none focus:outline-none text-xl font-bold w-full"
              {...register("receive", { required: false })}
            />
            <span className="text-gray-100 text-xs mt-1 block">
              ~$ 0.944518
            </span>
          </div>
          <div className="right flex items-center">
            <span className="text-sm font-semibold text-gray-100 mr-3">
              $2.9K
            </span>
            <SelectPair
              onCurrencySelect={onCurrencySelectOutput}
              content={
                <div className="flex items-center bg-grey_50 px-2 py-1 rounded-lg">
                  {/* <img
                src={tokenPair.receive.iconUrl}
                alt="..."
                className="w-5 h-5 mr-2"
              /> */}
                  <Dummy />

                  <span className="block truncate text-base text-white text-center w-full mr-2.5">
                    {currencies[Field.OUTPUT]?.symbol}
                  </span>
                  <span className="flex items-center justify-center">
                    <Selector />
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  };

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
      <form onSubmit={handleSubmit(handleContinue)}>
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
          <p className="text-sm text-gray-100 mb-3">Pay</p>
          <Pay />
          <PercentageSelect value={pPercentage} setValue={setPPercentage} />
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
          <p className="text-sm text-gray-100 mb-3">Receive</p>
          <Receive />
        </div>
        <SocialLinks />
        {/* Swap & Transfer */}
        <SwapNTransfer
          swapNTransfer={swapNTransfer}
          setSwapNTransfer={setSwapNTransfer}
        />
        {account ? (
          <>
            {noRoute && userHasSpecifiedInputOutput ? (
              <span>No liquidity</span>
            ) : (
              <button
                type="submit"
                className="mt-8 w-full btn-primary text-white text-xl font-bold py-4 rounded-lg"
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
          </>
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
