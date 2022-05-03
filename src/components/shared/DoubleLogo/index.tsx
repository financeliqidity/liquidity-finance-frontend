import React from "react";
import { Currency } from "cd3d-dex-libs-sdk";
import CurrencyLogo from "../CurrencyLogo";

interface DoubleCurrencyLogoProps {
  margin?: boolean;
  size?: number;
  currency0?: Currency;
  currency1?: Currency;
}

export default function DoubleCurrencyLogo({
  currency0,
  currency1,
  size = 16,
  margin = false,
}: DoubleCurrencyLogoProps) {
  return (
    <div className="flex">
      {currency0 && (
        <CurrencyLogo
          currency={currency0}
          size={size.toString()}
          classNames="rounded-full"
        />
      )}
      {currency1 && (
        <CurrencyLogo
          currency={currency1}
          size={size.toString()}
          classNames="rounded-full -ml-4 max-w-none"
        />
      )}
    </div>
  );
}
