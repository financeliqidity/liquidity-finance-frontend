import { TradeType } from "cd3d-dex-libs-sdk";
import React, { useMemo, useState } from "react";
import { Field } from "../../../../redux/dex/actions";
import {
  computeSlippageAdjustedAmounts,
  computeTradePriceBreakdown,
  warningSeverity,
} from "../../../../utils/prices";
import CurrencyLogo from "../../../shared/CurrencyLogo";

const Close = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7L17 17"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17L17 7"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ConfirmSwapModal({
  isOpen,
  onDismiss,
  trade,
  allowedSlippage,
  onConfirm,
}) {
  const slippageAdjustedAmounts = useMemo(
    () => computeSlippageAdjustedAmounts(trade, allowedSlippage),
    [trade, allowedSlippage]
  );

  const { priceImpactWithoutFee, realizedLPFee } = useMemo(
    () => computeTradePriceBreakdown(trade),
    [trade]
  );

  const severity = warningSeverity(priceImpactWithoutFee);

  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5">
                    Confirm Transaction
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={onDismiss}
                  >
                    <Close />
                  </button>
                </div>

                <div className="relative px-6 py-0.5 flex-auto">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CurrencyLogo
                        currency={trade?.inputAmount.currency}
                        size="24px"
                        classNames="mr-3"
                      />
                      <span className="ml-3 text-lg">
                        {trade?.inputAmount.toSignificant(6)}
                      </span>
                    </div>
                    <div className="token-name text-lg">
                      {trade?.inputAmount.currency.symbol}
                    </div>
                  </div>
                  <div className="flex my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A28BD4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="min-w-[16px] ml-1"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CurrencyLogo
                        currency={trade?.outputAmount.currency}
                        size="24px"
                        classNames="mr-3"
                      />
                      <span className="ml-3 text-lg">
                        {trade?.outputAmount.toSignificant(6)}
                      </span>
                    </div>
                    <div className="token-name text-lg">
                      {trade?.outputAmount.currency.symbol}
                    </div>
                  </div>
                  <div className="mt-4 text-white">
                    Output is estimated. You will receive at least{" "}
                    {slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(6)}{" "}
                    {trade?.outputAmount.currency.symbol} or the transaction
                    will revert.
                  </div>

                  <div className="mt-4">
                    <div className="flex w-full justify-between mb-3">
                      <p className="text-sm text-gray-200">Estimated Cost</p>
                      <p className="text-sm text-gray-100">~$39.55</p>
                    </div>
                    <div className="flex w-full justify-between mb-3">
                      <p className="text-sm text-gray-200">Price Impact</p>
                      <p className="text-sm text-gray-100">{`${priceImpactWithoutFee?.toFixed(
                        2
                      )}%`}</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="text-sm text-gray-200">
                        {trade?.tradeType === TradeType.EXACT_INPUT
                          ? "Minimum received"
                          : "Maximum sold"}
                      </p>
                      <p className="text-sm text-gray-100">
                        {trade?.tradeType === TradeType.EXACT_INPUT
                          ? slippageAdjustedAmounts[
                              Field.OUTPUT
                            ]?.toSignificant(4) ?? "-"
                          : slippageAdjustedAmounts[Field.INPUT]?.toSignificant(
                              4
                            ) ?? "-"}

                        <span className="ml-2">
                          {trade?.tradeType === TradeType?.EXACT_INPUT
                            ? trade?.outputAmount?.currency.symbol
                            : trade?.inputAmount?.currency.symbol}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6">
                  <hr />
                </div>
                <div className="flex p-6 rounded-b justify-center">
                  <button
                    type="button"
                    className="w-full btn-primary text-white text-xl font-bold py-4 rounded-lg"
                    onClick={onConfirm}
                  >
                    Confirm Swap
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
