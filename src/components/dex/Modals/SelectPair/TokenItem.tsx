import { Currency, ETHER, Token } from "cd3d-dex-libs-sdk";
import React from "react";
import { useActiveWeb3React } from "../../../../hooks";
import { useIsUserAddedToken } from "../../../../hooks/Tokens";
import { useSelectedTokenList } from "../../../../redux/lists/hooks";
import {
  useAddUserToken,
  useRemoveUserAddedToken,
} from "../../../../redux/user/hooks";
import { useCurrencyBalance } from "../../../../redux/wallet/hooks";
import { isTokenOnList } from "../../../../utils";
import CurrencyLogo from "../../../shared/CurrencyLogo";

function currencyKey(currency: Currency): string {
  return currency instanceof Token
    ? currency.address
    : currency === ETHER
    ? "ETHER"
    : "";
}

export default function TokenItem({ currency, handleCurrencySelect }) {
  const { account, chainId } = useActiveWeb3React();
  const key = currencyKey(currency);

  const selectedTokenList = useSelectedTokenList();
  const isOnSelectedList = isTokenOnList(selectedTokenList, currency);
  const customAdded = useIsUserAddedToken(currency);
  const balance = useCurrencyBalance(account ?? undefined, currency);

  const removeToken = useRemoveUserAddedToken();
  const addToken = useAddUserToken();

  return (
    <li
      key={currency.address}
      className="flex justify-between items-center mb-5 cursor-pointer px-2 py-1 hover:bg-grey_50 rounded-lg"
      onClick={() => handleCurrencySelect(currency)}
    >
      <div className="flex items-center">
        <CurrencyLogo currency={currency} />
        <span className="text-sm font-bold ml-2">{currency.symbol}</span>
      </div>
      <span className="font-bold text-base grey-10">
        {balance?.toSignificant(4)}
      </span>
    </li>
  );
}
