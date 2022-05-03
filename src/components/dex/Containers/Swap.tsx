import { useCallback, useEffect, useState } from "react";
import TradingHistory from "../../dex/Tables/TradingHistory";

import PoolDisclaimer from "../../dex/Modals/PoolDisclaimer";
import PairChart from "../Arcodions/PairChart";
import SelectPair from "../Modals/SelectPair";
import SwapLeft from "../Cards/SwapLeft";
import SwapRight from "../Cards/SwapRight";
import {
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
} from "../../../redux/dex/hooks";
import { Field } from "../../../redux/dex/actions";
import {
  computeTradePriceBreakdown,
  warningSeverity,
} from "../../../utils/prices";
import useSwapCallback from "../../../hooks/useSwapCallback";
import {
  useExpertModeManager,
  useUserDeadline,
  useUserSlippageTolerance,
} from "../../../redux/user/hooks";
import { useActiveWeb3React } from "../../../hooks";
import useWrapCallback, { WrapType } from "../../../hooks/useWrapCallback";
import { CurrencyAmount, JSBI, Trade } from "cd3d-dex-libs-sdk";
import confirmPriceImpactWithoutFee from "./confirmPriceImpactWithoutFee";
import {
  ApprovalState,
  useApproveCallbackFromTrade,
} from "../../../hooks/useApproveCallback";
import ConfirmSwapModal from "../Modals/ConfirmSwap";
import PendingTransactionModal from "../Modals/PendingTransactionModal";
import TransactionSubmittedModal from "../Modals/TransactionSubmittedModal";
import maxAmountSpend from "../../../utils/maxAmountSpend";
import { useRouter } from "next/router";

function Swap({
  setShowModal,
  showModal,
  liquidityTerms,
  setLiquidityTerms,
  tabChanger,
  buyMode,
  setBuyMode,
  mobileTab,
  setMobileTab,
  isMobile,
}) {
  const [swapNTransfer, setSwapNTransfer] = useState<boolean>(false);

  // check if user has gone through approval process, used to show two step buttons, reset on token change
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false);

  const [isExpertMode] = useExpertModeManager();

  // get custom setting values for user
  const [deadline] = useUserDeadline();
  const [allowedSlippage] = useUserSlippageTolerance();

  // swap state
  const { independentField, typedValue, recipient } = useSwapState();
  const {
    v2Trade,
    currencyBalances,
    parsedAmount,
    currencies,
    inputError: swapInputError,
  } = useDerivedSwapInfo();

  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(
    currencies[Field.INPUT],
    currencies[Field.OUTPUT],
    typedValue
  );
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE;
  const trade = showWrap ? undefined : v2Trade;

  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]:
          independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]:
          independentField === Field.OUTPUT
            ? parsedAmount
            : trade?.outputAmount,
      };

  const {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
    onChangeRecipient,
  } = useSwapActionHandlers();
  const isValid = !swapInputError;
  const dependentField: Field =
    independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT;

  // check whether the user has approved the router on the input token
  const [approval, approveCallback] = useApproveCallbackFromTrade(
    trade,
    allowedSlippage
  );

  console.log("Approval*", approval);

  // mark when a user has submitted an approval, reset onTokenSelection for input field
  useEffect(() => {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true);
    }
  }, [approval, approvalSubmitted]);

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      setApprovalSubmitted(false);
      onCurrencySelection(Field.INPUT, inputCurrency);
      // if (inputCurrency.symbol === 'SYRUP') {
      //   checkForWarning(inputCurrency.symbol, 'Selling')
      // }
      // if (inputCurrency.symbol === 'SAFEMOON') {
      //   checkForWarning(inputCurrency.symbol, 'Selling')
      // }
    },
    [onCurrencySelection, setApprovalSubmitted]
    // [onCurrencySelection, setApprovalSubmitted, checkForWarning]
  );

  const handleOutputSelect = useCallback(
    (outputCurrency) => {
      onCurrencySelection(Field.OUTPUT, outputCurrency);
      // if (outputCurrency.symbol === 'SYRUP') {
      //   checkForWarning(outputCurrency.symbol, 'Buying')
      // }
      // if (outputCurrency.symbol === 'SAFEMOON') {
      //   checkForWarning(outputCurrency.symbol, 'Buying')
      // }
    },
    [onCurrencySelection]
    // [onCurrencySelection, checkForWarning]
  );

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value);
    },
    [onUserInput]
  );
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value);
    },
    [onUserInput]
  );

  // modal and loading
  const [
    { showConfirm, tradeToConfirm, swapErrorMessage, attemptingTxn, txHash },
    setSwapState,
  ] = useState<{
    showConfirm: boolean;
    tradeToConfirm: Trade | undefined;
    attemptingTxn: boolean;
    swapErrorMessage: string | undefined;
    txHash: string | undefined;
  }>({
    showConfirm: false,
    tradeToConfirm: undefined,
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  });

  console.log("attemptingTxn", attemptingTxn);

  console.log("swapErrorMessage**************", swapErrorMessage);

  const handleConfirmDismiss = useCallback(() => {
    setSwapState((prevState) => ({ ...prevState, showConfirm: false }));

    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onUserInput(Field.INPUT, "");
    }
  }, [onUserInput, txHash, setSwapState]);

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ""
      : parsedAmounts[dependentField]?.toSignificant(6) ?? "",
  };

  console.log("trade", trade);
  console.log("showWrap", showWrap);

  const maxAmountInput: CurrencyAmount | undefined = maxAmountSpend(
    currencyBalances[Field.INPUT]
  );
  const atMaxAmountInput = Boolean(
    maxAmountInput && parsedAmounts[Field.INPUT]?.equalTo(maxAmountInput)
  );

  // the callback to execute the swap
  const { callback: swapCallback, error: swapCallbackError } = useSwapCallback(
    trade,
    allowedSlippage,
    deadline,
    recipient
  );

  const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade);

  // warnings on slippage
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee);

  // show approve flow when: no error on inputs, not approved or pending, or approved in current session
  // never show if price impact is above threshold in non expert mode
  const showApproveFlow =
    !swapInputError &&
    (approval === ApprovalState.NOT_APPROVED ||
      approval === ApprovalState.PENDING ||
      (approvalSubmitted && approval === ApprovalState.APPROVED)) &&
    !(priceImpactSeverity > 3 && !isExpertMode);

  console.log("showApproveFlow", showApproveFlow);

  const handleMaxInput = useCallback(() => {
    if (maxAmountInput) {
      onUserInput(Field.INPUT, maxAmountInput.toExact());
    }
  }, [maxAmountInput, onUserInput]);

  const handleSwap = useCallback(() => {
    if (
      priceImpactWithoutFee &&
      !confirmPriceImpactWithoutFee(priceImpactWithoutFee)
    ) {
      return;
    }

    if (!swapCallback) {
      return;
    }
    setSwapState((prevState) => ({
      ...prevState,
      attemptingTxn: true,
      swapErrorMessage: undefined,
      txHash: undefined,
    }));
    swapCallback()
      .then((hash) => {
        setSwapState((prevState) => ({
          ...prevState,
          attemptingTxn: false,
          swapErrorMessage: undefined,
          txHash: hash,
        }));
      })
      .catch((error) => {
        setSwapState((prevState) => ({
          ...prevState,
          attemptingTxn: false,
          swapErrorMessage: error.message,
          txHash: undefined,
        }));
      });
  }, [priceImpactWithoutFee, swapCallback, setSwapState]);

  return (
    <div className="bg-grey_70 mb-6 md:mb-0">
      <div className="md:py-12 py-6 md:w-11/12 md:mx-auto text-white">
        <div className="flex flex-col justify-between md:flex-row mb-10 md:px-0 px-4">
          {showApproveFlow && (
            <button onClick={approveCallback}>Approve</button>
          )}

          {attemptingTxn ? (
            txHash ? (
              <TransactionSubmittedModal
                onDismiss={handleConfirmDismiss}
                isOpen={true}
              />
            ) : (
              <PendingTransactionModal
                onDismiss={handleConfirmDismiss}
                isOpen={showConfirm}
              />
            )
          ) : (
            <ConfirmSwapModal
              allowedSlippage={allowedSlippage}
              trade={trade}
              isOpen={showConfirm}
              onDismiss={handleConfirmDismiss}
              onConfirm={handleSwap}
            />
          )}

          {/* Swap Left */}
          {isMobile ? (
            mobileTab === 0 && (
              <SwapLeft
                handleMaxInput={handleMaxInput}
                parsedAmounts={parsedAmounts}
                setSwapState={setSwapState}
                isExpertMode={isExpertMode}
                onUserInput={onUserInput}
                value={formattedAmounts[Field.INPUT]}
                showModal={showModal}
                setShowModal={setShowModal}
                swapNTransfer={swapNTransfer}
                setSwapNTransfer={setSwapNTransfer}
                liquidityTerms={liquidityTerms}
                setLiquidityTerms={setLiquidityTerms}
                tabChanger={tabChanger}
                onCurrencySelectInput={handleInputSelect}
                onCurrencySelectOutput={handleOutputSelect}
                onSwitchTokens={onSwitchTokens}
                currencies={currencies}
                trade={trade}
                allowedSlippage={allowedSlippage}
                handleSwap={handleSwap}
                selectedCurrency={currencies[Field.INPUT]}
                swapInputError={swapInputError}
              />
            )
          ) : (
            <SwapLeft
              handleMaxInput={handleMaxInput}
              parsedAmounts={parsedAmounts}
              setSwapState={setSwapState}
              isExpertMode={isExpertMode}
              onUserInput={handleTypeInput}
              value={formattedAmounts[Field.INPUT]}
              onSwitchTokens={onSwitchTokens}
              showModal={showModal}
              setShowModal={setShowModal}
              swapNTransfer={swapNTransfer}
              setSwapNTransfer={setSwapNTransfer}
              liquidityTerms={liquidityTerms}
              setLiquidityTerms={setLiquidityTerms}
              tabChanger={tabChanger}
              onCurrencySelectInput={handleInputSelect}
              onCurrencySelectOutput={handleOutputSelect}
              currencies={currencies}
              trade={trade}
              allowedSlippage={allowedSlippage}
              handleSwap={handleSwap}
              selectedCurrency={currencies[Field.INPUT]}
              swapInputError={swapInputError}
            />
          )}

          {/* Swap Right */}
          {isMobile ? (
            mobileTab === 1 && (
              <SwapRight buyMode={buyMode} setBuyMode={setBuyMode} />
            )
          ) : (
            <SwapRight buyMode={buyMode} setBuyMode={setBuyMode} />
          )}
        </div>

        {/* Trading History & Charts */}
        {isMobile ? (
          mobileTab === 2 && (
            <div>
              <div className="mt-8 mb-10">
                <PairChart />
              </div>
              <TradingHistory />
            </div>
          )
        ) : (
          <div>
            <div className="mt-8 mb-10">
              <PairChart />
            </div>
            <TradingHistory />
          </div>
        )}
      </div>
    </div>
  );
}

export default Swap;
