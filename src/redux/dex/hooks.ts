import { parseUnits } from "@ethersproject/units";

import { ParsedQs } from "qs";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "..";
import { Currency, ETHER } from "../../sdk-demo/dist/entities/currency";
import { Token } from "../../sdk-demo/dist/entities/token";
import {
  Field,
  selectCurrency,
  setRecipient,
  switchCurrencies,
  typeInput,
} from "./actions";

import { SwapState } from "./reducers";

export function useSwapState(): AppState["swap"] {
  return useSelector<AppState, AppState["swap"]>((state) => state.swap);
}

export function useSwapActionHandlers(): {
  onCurrencySelection: (field: Field, currency: Currency) => void;
  onSwitchTokens: () => void;
  onUserInput: (field: Field, typedValue: string) => void;
  onChangeRecipient: (recipient: string | null) => void;
} {
  const dispatch = useDispatch<AppDispatch>();
  const onCurrencySelection = useCallback(
    (field: Field, currency: Currency) => {
      dispatch(
        selectCurrency({
          field,
          currencyId:
            currency instanceof Token
              ? currency.address
              : currency === ETHER
              ? "BNB"
              : "",
        })
      );
    },
    [dispatch]
  );

  const onSwitchTokens = useCallback(() => {
    dispatch(switchCurrencies());
  }, [dispatch]);

  const onUserInput = useCallback(
    (field: Field, typedValue: string) => {
      dispatch(typeInput({ field, typedValue }));
    },
    [dispatch]
  );

  const onChangeRecipient = useCallback(
    (recipient: string | null) => {
      dispatch(setRecipient({ recipient }));
    },
    [dispatch]
  );

  return {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
    onChangeRecipient,
  };
}

// // from the current swap inputs, compute the best trade and return it.
// export function useDerivedSwapInfo(): {
//   currencies: { [field in Field]?: Currency };
//   currencyBalances: { [field in Field]?: CurrencyAmount };
//   parsedAmount: CurrencyAmount | undefined;
//   v2Trade: Trade | undefined;
//   inputError?: string;
// } {
//   const { account } = useActiveWeb3React();

//   const {
//     independentField,
//     typedValue,
//     [Field.INPUT]: { currencyId: inputCurrencyId },
//     [Field.OUTPUT]: { currencyId: outputCurrencyId },
//     recipient,
//   } = useSwapState();

//   const inputCurrency = useCurrency(inputCurrencyId);
//   const outputCurrency = useCurrency(outputCurrencyId);
//   const recipientLookup = useENS(recipient ?? undefined);
//   const to: string | null =
//     (recipient === null ? account : recipientLookup.address) ?? null;

//   const relevantTokenBalances = useCurrencyBalances(account ?? undefined, [
//     inputCurrency ?? undefined,
//     outputCurrency ?? undefined,
//   ]);

//   const isExactIn: boolean = independentField === Field.INPUT;
//   const parsedAmount = tryParseAmount(
//     typedValue,
//     (isExactIn ? inputCurrency : outputCurrency) ?? undefined
//   );

//   const bestTradeExactIn = useTradeExactIn(
//     isExactIn ? parsedAmount : undefined,
//     outputCurrency ?? undefined
//   );
//   const bestTradeExactOut = useTradeExactOut(
//     inputCurrency ?? undefined,
//     !isExactIn ? parsedAmount : undefined
//   );

//   const v2Trade = isExactIn ? bestTradeExactIn : bestTradeExactOut;

//   const currencyBalances = {
//     [Field.INPUT]: relevantTokenBalances[0],
//     [Field.OUTPUT]: relevantTokenBalances[1],
//   };

//   const currencies: { [field in Field]?: Currency } = {
//     [Field.INPUT]: inputCurrency ?? undefined,
//     [Field.OUTPUT]: outputCurrency ?? undefined,
//   };

//   let inputError: string | undefined;
//   if (!account) {
//     inputError = "Connect Wallet";
//   }

//   if (!parsedAmount) {
//     inputError = inputError ?? "Enter an amount";
//   }

//   if (!currencies[Field.INPUT] || !currencies[Field.OUTPUT]) {
//     inputError = inputError ?? "Select a token";
//   }

//   const formattedTo = isAddress(to);
//   if (!to || !formattedTo) {
//     inputError = inputError ?? "Enter a recipient";
//   } else if (
//     BAD_RECIPIENT_ADDRESSES.indexOf(formattedTo) !== -1 ||
//     (bestTradeExactIn && involvesAddress(bestTradeExactIn, formattedTo)) ||
//     (bestTradeExactOut && involvesAddress(bestTradeExactOut, formattedTo))
//   ) {
//     inputError = inputError ?? "Invalid recipient";
//   }

//   const [allowedSlippage] = useUserSlippageTolerance();

//   const slippageAdjustedAmounts =
//     v2Trade &&
//     allowedSlippage &&
//     computeSlippageAdjustedAmounts(v2Trade, allowedSlippage);

//   // compare input balance to max input based on version
//   const [balanceIn, amountIn] = [
//     currencyBalances[Field.INPUT],
//     slippageAdjustedAmounts ? slippageAdjustedAmounts[Field.INPUT] : null,
//   ];

//   if (balanceIn && amountIn && balanceIn.lessThan(amountIn)) {
//     inputError = `Insufficient ${amountIn.currency.symbol} balance`;
//   }

//   return {
//     currencies,
//     currencyBalances,
//     parsedAmount,
//     v2Trade: v2Trade ?? undefined,
//     inputError,
//   };
// }
