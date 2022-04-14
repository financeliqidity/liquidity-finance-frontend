import React from "react";
import { useActiveWeb3React } from "../../../../hooks";
import { Field } from "../../../../redux/dex/actions";
import { useCurrencyBalance } from "../../../../redux/wallet/hooks";
import CurrencyLogo from "../../../shared/CurrencyLogo";
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

export default function ReceiveInput({
  currencies,
  selectedCurrency,
  onCurrencySelectOutput,
}) {
  const { account } = useActiveWeb3React();

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
          />
          <span className="text-gray-100 text-xs mt-1 block">~$ 0.944518</span>
        </div>
        <div className="right flex items-center">
          <span className="text-sm font-semibold text-gray-100 mr-3">
            $2.9K
          </span>
          <SelectPair
            selectedCurrency={selectedCurrency}
            onCurrencySelect={onCurrencySelectOutput}
            content={
              <div className="flex items-center bg-grey_50 px-2 py-1 rounded-lg">
                <CurrencyLogo currency={currencies[Field.OUTPUT]} />

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
}
