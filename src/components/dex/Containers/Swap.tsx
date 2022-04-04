import { useCallback, useState } from "react";
import TradingHistory from "../../dex/Tables/TradingHistory";

import PoolDisclaimer from "../../dex/Modals/PoolDisclaimer";
import PairChart from "../Arcodions/PairChart";
import SelectPair from "../Modals/SelectPair";
import SwapLeft from "../Cards/SwapLeft";
import SwapRight from "../Cards/SwapRight";
import { useSwapActionHandlers } from "../../../redux/dex/hooks";
import { Field } from "../../../redux/dex/actions";

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

  const {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
    onChangeRecipient,
  } = useSwapActionHandlers();

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

  return (
    <div className="bg-grey_70 mb-6 md:mb-0">
      <div className="md:py-12 py-6 md:w-11/12 md:mx-auto text-white">
        <div className="flex flex-col justify-between md:flex-row mb-10 md:px-0 px-4">
          {/* Swap Left */}
          {isMobile ? (
            mobileTab === 0 && (
              <SwapLeft
                showModal={showModal}
                setShowModal={setShowModal}
                swapNTransfer={swapNTransfer}
                setSwapNTransfer={setSwapNTransfer}
                liquidityTerms={liquidityTerms}
                setLiquidityTerms={setLiquidityTerms}
                tabChanger={tabChanger}
                onCurrencySelectInput={handleInputSelect}
                onCurrencySelectOutput={handleOutputSelect}
              />
            )
          ) : (
            <SwapLeft
              showModal={showModal}
              setShowModal={setShowModal}
              swapNTransfer={swapNTransfer}
              setSwapNTransfer={setSwapNTransfer}
              liquidityTerms={liquidityTerms}
              setLiquidityTerms={setLiquidityTerms}
              tabChanger={tabChanger}
              onCurrencySelectInput={handleInputSelect}
              onCurrencySelectOutput={handleOutputSelect}
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
