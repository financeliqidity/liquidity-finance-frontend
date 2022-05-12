import React from "react";
import { Field } from "../../../../redux/mint/actions";
import DoubleCurrencyLogo from "../../../shared/DoubleLogo";

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

const ConfirmPoolTransaction = ({
  isOpen,
  onDismiss,
  onConfirm,
  noLiquidity,
  currencies,
  parsedAmounts,
  price,
  poolTokenPercentage,
}) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5">
                    {noLiquidity
                      ? "You are creating a pool"
                      : "You will receive"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={onDismiss}
                  >
                    <Close />
                  </button>
                </div>

                <div className="relative px-6 py-0.5 flex-auto">
                  <div className="p-4 text-2xl font-bold flex items-center justify-between mb-6">
                    <span>{`${currencies[Field.CURRENCY_A]?.symbol}/${
                      currencies[Field.CURRENCY_B]?.symbol
                    }`}</span>
                    <DoubleCurrencyLogo
                      currency0={currencies[Field.CURRENCY_A]}
                      currency1={currencies[Field.CURRENCY_B]}
                      size={36}
                    />
                  </div>

                  <div className="">
                    <div className="flex w-full justify-between mb-3">
                      <p className="text-sm text-gray-200">
                        {currencies[Field.CURRENCY_A]?.symbol} Deposited
                      </p>
                      <p className="text-sm text-gray-100">
                        {parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}
                      </p>
                    </div>
                    <div className="flex w-full justify-between mb-3">
                      <p className="text-sm text-gray-200">
                        {currencies[Field.CURRENCY_B]?.symbol} Deposited
                      </p>
                      <p className="text-sm text-gray-100">
                        {parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}
                      </p>
                    </div>
                    <div className="flex w-full justify-between mb-3">
                      <p className="text-sm text-gray-200">Rates</p>
                      <p className="text-sm text-gray-100">
                        {`1 ${
                          currencies[Field.CURRENCY_A]?.symbol
                        } = ${price?.toSignificant(4)} ${
                          currencies[Field.CURRENCY_B]?.symbol
                        }`}
                      </p>
                    </div>
                    <div className="flex w-full justify-between mb-3">
                      <p className="text-sm text-gray-200"></p>
                      <p className="text-sm text-gray-100">{`1 ${
                        currencies[Field.CURRENCY_B]?.symbol
                      } = ${price?.invert().toSignificant(4)} ${
                        currencies[Field.CURRENCY_A]?.symbol
                      }`}</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="text-sm text-gray-200">Share of Pool:</p>
                      <p className="text-sm text-gray-100">
                        {noLiquidity
                          ? "100"
                          : poolTokenPercentage?.toSignificant(4)}
                        %
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
                    {noLiquidity ? "Create Pool & Supply" : "Confirm Supply"}
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
};

export default ConfirmPoolTransaction;
