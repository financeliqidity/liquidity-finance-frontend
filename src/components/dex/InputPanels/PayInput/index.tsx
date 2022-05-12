import React from "react";
import { useActiveWeb3React } from "../../../../hooks";
import { Field } from "../../../../redux/dex/actions";
import { useCurrencyBalance } from "../../../../redux/wallet/hooks";
import CurrencyLogo from "../../../shared/CurrencyLogo";
import { NumericInput } from "../../../shared/NumericInput";
import SelectPair from "../../Modals/SelectPair";

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

export const PayInput = ({
  value,
  onUserInput,
  selectedCurrency,
  currencies,
  onCurrencySelectInput,
  hideBalance = false,
}) => {
  const { account } = useActiveWeb3React();

  const selectedCurrencyBalance = useCurrencyBalance(
    account ?? undefined,
    currencies[Field.INPUT] ?? undefined
  );

  return (
    <React.Fragment>
      <p className="text-sm text-gray-100 mb-3">Pay</p>

      <div className="rounded-lg bg-grey_70 px-4 py-3 border border-solid border-grey_50 flex justify-between">
        <div className="left">
          <NumericInput
            value={value}
            onUserInput={(val) => onUserInput(val)}
            classNames="text-xl"
          />
          <span className="text-gray-100 text-xs mt-1 block">~ $2900.00</span>
        </div>
        <div className="right">
          <SelectPair
            selectedCurrency={selectedCurrency}
            onCurrencySelect={onCurrencySelectInput}
            content={
              <div className="flex items-center bg-grey_50 px-2 py-1 rounded-lg">
                <CurrencyLogo currency={selectedCurrency} />

                <span className="block truncate text-base text-white text-center w-full mr-2.5">
                  {currencies[Field.INPUT]?.symbol}
                </span>
                <span className="flex items-center justify-center">
                  <Selector />
                </span>
              </div>
            }
          />
          {account && (
            <span className="mt-1 text-gray-100 text-xs">
              {!hideBalance &&
              !!currencies[Field.INPUT] &&
              selectedCurrencyBalance
                ? `Balance: ${selectedCurrencyBalance?.toSignificant(6)} ${
                    currencies[Field.INPUT]?.symbol
                  }`
                : " --"}
            </span>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
