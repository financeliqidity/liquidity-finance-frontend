import { ChainId, Token } from "cd3d-dex-libs-sdk";
import React from "react";
import { SUGGESTED_BASES } from "../../../../constants";
import { useAllTokens } from "../../../../hooks/Tokens";
import CurrencyLogo from "../../../shared/CurrencyLogo";

export default function CommonBases({
  onSelect,
  chainId,
  selectedCurrency,
}: {
  chainId?: ChainId;
  selectedCurrency?: Token | null;
  onSelect: (currency: Token) => void;
}) {
  const allTokens = useAllTokens();
  return (
    <div className="mt-6 mb-5">
      <h4 className="font-bold mb-4">Common base</h4>
      <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-1">
        {(chainId ? SUGGESTED_BASES[chainId] : []).map((token: Token) => {
          const selected =
            selectedCurrency instanceof Token &&
            selectedCurrency.address === token.address;
          return (
            <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
              <div
                className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer"
                onClick={() => onSelect(token)}
              >
                <CurrencyLogo currency={allTokens[token.address] ?? token} />
                <span className="text-sm font-bold ml-2">{token.symbol}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
