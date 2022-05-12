import React, { useCallback, useState } from "react";
import Barcode from "../../Modals/Barcode";
import AddTrxnSuccess from "../../Modals/AddTrxnSuccess";
import classes from "./styles/index.module.css";
import RemoveTrxnSuccess from "../../Modals/RemovTrxnSuccess";
import SelectPair from "../../Modals/SelectPair";
import LockLiquidity from "../../Modals/LockLiquidity";
import { useActiveWeb3React } from "../../../../hooks";
import { useCurrency } from "../../../../hooks/Tokens";
import {
  Currency,
  currencyEquals,
  ETHER,
  TokenAmount,
  WETH,
} from "cd3d-dex-libs-sdk";
import {
  useIsExpertMode,
  useUserDeadline,
  useUserSlippageTolerance,
} from "../../../../redux/user/hooks";
import {
  useDerivedMintInfo,
  useMintActionHandlers,
  useMintState,
} from "../../../../redux/mint/hooks";
import { Field } from "../../../../redux/mint/actions";
import maxAmountSpend from "../../../../utils/maxAmountSpend";
import {
  ApprovalState,
  useApproveCallback,
} from "../../../../hooks/useApproveCallback";
import { ROUTER_ADDRESS } from "../../../../constants";
import { useTransactionAdder } from "../../../../redux/transactions/hooks";
import {
  calculateGasMargin,
  calculateSlippageAmount,
  getRouterContract,
} from "../../../../utils";
import { TransactionResponse } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import { wrappedCurrency } from "../../../../utils/wrappedCurrency";
import currencyId from "../../../../utils/currencyId";
import CurrencyLogo from "../../../shared/CurrencyLogo";
import { NumericInput } from "../../../shared/NumericInput";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import ConfirmPoolTransaction from "../../Modals/ConfirmPool";
import { useCurrencyBalance } from "../../../../redux/wallet/hooks";
import TransactionSubmittedModal from "../../Modals/TransactionSubmittedModal";
import PendingTransactionModal from "../../Modals/PendingTransactionModal";
import { PairState } from "../../../../data/Reserves";

const CaretDown = () => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99967 0.166748L5.99967 4.16675L1.99967 0.166748L0.666342 1.50008L5.99967 6.83341L11.333 1.50008L9.99967 0.166748Z"
      fill="white"
    />
  </svg>
);

//@ts-ignore
const injected = new InjectedConnector();

function AddRemoveLiq({ setActiveLeft }) {
  const { active, activate } = useWeb3React();

  const connect = async () => {
    try {
      activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const AddLiquidity = ({
    handleAddLiquidity,
    showSuccessModal,
    setShowSuccessModal,
  }) => {
    const [openMore, setOpenMore] = useState(false);
    const [showLockModal, setShowLockModal] = useState(false);

    const router = useRouter();

    const { currencyIdA, currencyIdB } = router.query;

    const { account, chainId, library } = useActiveWeb3React();

    const handleCurrencyASelect = useCallback(
      (currA: Currency) => {
        const newCurrencyIdA = currencyId(currA);

        if (newCurrencyIdA === currencyIdB) {
          router.replace(
            `/dex?currencyIdA=${currencyIdB}&currencyIdB=${currencyIdA}`
          );
        } else {
          router.replace(
            `/dex?currencyIdA=${newCurrencyIdA}&currencyIdB=${currencyIdB}`
          );
        }
      },
      [currencyIdB, history, currencyIdA]
    );
    const handleCurrencyBSelect = useCallback(
      (currB: Currency) => {
        const newCurrencyIdB = currencyId(currB);

        if (currencyIdA === newCurrencyIdB) {
          if (currencyIdB) {
            router.replace(
              `/dex?currencyIdA=${currencyIdB}&currencyIdB=${newCurrencyIdB}`
            );
          } else {
            router.replace(`/dex?currencyIdA=${newCurrencyIdB}`);
          }
        } else {
          router.replace(
            `/dex?currencyIdA=${
              currencyIdA || "BNB"
            }&currencyIdB=${newCurrencyIdB}`
          );
        }
      },
      [currencyIdA, history, currencyIdB]
    );

    const currencyA = useCurrency(currencyIdA as string);
    const currencyB = useCurrency(currencyIdB as string);

    const oneCurrencyIsWBNB = Boolean(
      chainId &&
        ((currencyA && currencyEquals(currencyA, WETH[chainId])) ||
          (currencyB && currencyEquals(currencyB, WETH[chainId])))
    );
    const expertMode = useIsExpertMode();

    // mint state
    const { independentField, typedValue, otherTypedValue } = useMintState();
    const {
      dependentField,
      currencies,
      pair,
      pairState,
      currencyBalances,
      parsedAmounts,
      price,
      noLiquidity,
      liquidityMinted,
      poolTokenPercentage,
      error,
    } = useDerivedMintInfo(currencyA ?? undefined, currencyB ?? undefined);
    const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity);

    const isValid = !error;

    // modal and loading
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false); // clicked confirm

    // txn values
    const [deadline] = useUserDeadline(); // custom from users settings
    const [allowedSlippage] = useUserSlippageTolerance(); // custom from users
    const [txHash, setTxHash] = useState<string>("");

    // get formatted amounts
    const formattedAmounts = {
      [independentField]: typedValue,
      [dependentField]: noLiquidity
        ? otherTypedValue
        : parsedAmounts[dependentField]?.toSignificant(6) ?? "",
    };

    // get the max amounts user can add
    const maxAmounts: { [field in Field]?: TokenAmount } = [
      Field.CURRENCY_A,
      Field.CURRENCY_B,
    ].reduce((accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      };
    }, {});

    const atMaxAmounts: { [field in Field]?: TokenAmount } = [
      Field.CURRENCY_A,
      Field.CURRENCY_B,
    ].reduce((accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? "0"),
      };
    }, {});

    // check whether the user has approved the router on the tokens
    const [approvalA, approveACallback] = useApproveCallback(
      parsedAmounts[Field.CURRENCY_A],
      ROUTER_ADDRESS
    );
    const [approvalB, approveBCallback] = useApproveCallback(
      parsedAmounts[Field.CURRENCY_B],
      ROUTER_ADDRESS
    );

    const addTransaction = useTransactionAdder();

    async function onAdd() {
      if (!chainId || !library || !account) return;
      const router = getRouterContract(chainId, library, account);

      const {
        [Field.CURRENCY_A]: parsedAmountA,
        [Field.CURRENCY_B]: parsedAmountB,
      } = parsedAmounts;
      if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB) {
        return;
      }

      const amountsMin = {
        [Field.CURRENCY_A]: calculateSlippageAmount(
          parsedAmountA,
          noLiquidity ? 0 : allowedSlippage
        )[0],
        [Field.CURRENCY_B]: calculateSlippageAmount(
          parsedAmountB,
          noLiquidity ? 0 : allowedSlippage
        )[0],
      };

      const deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline;

      let estimate;
      let method: (...args: any) => Promise<TransactionResponse>;
      let args: Array<string | string[] | number>;
      let value: BigNumber | null;
      if (currencyA === ETHER || currencyB === ETHER) {
        const tokenBIsBNB = currencyB === ETHER;
        estimate = router.estimateGas.addLiquidityETH;
        method = router.addLiquidityETH;
        args = [
          wrappedCurrency(tokenBIsBNB ? currencyA : currencyB, chainId)
            ?.address ?? "", // token
          (tokenBIsBNB ? parsedAmountA : parsedAmountB).raw.toString(), // token desired
          amountsMin[
            tokenBIsBNB ? Field.CURRENCY_A : Field.CURRENCY_B
          ].toString(), // token min
          amountsMin[
            tokenBIsBNB ? Field.CURRENCY_B : Field.CURRENCY_A
          ].toString(), // eth min
          account,
          deadlineFromNow,
        ];
        value = BigNumber.from(
          (tokenBIsBNB ? parsedAmountB : parsedAmountA).raw.toString()
        );
      } else {
        estimate = router.estimateGas.addLiquidity;
        method = router.addLiquidity;
        args = [
          wrappedCurrency(currencyA, chainId)?.address ?? "",
          wrappedCurrency(currencyB, chainId)?.address ?? "",
          parsedAmountA.raw.toString(),
          parsedAmountB.raw.toString(),
          amountsMin[Field.CURRENCY_A].toString(),
          amountsMin[Field.CURRENCY_B].toString(),
          account,
          deadlineFromNow,
        ];
        value = null;
      }

      setAttemptingTxn(true);
      // const aa = await estimate(...args, value ? { value } : {})
      console.log("args", args);
      await estimate(...args, value ? { value } : {})
        .then((estimatedGasLimit) =>
          method(...args, {
            ...(value ? { value } : {}),
            gasLimit: calculateGasMargin(estimatedGasLimit),
          }).then((response) => {
            console.log("response", response);
            setAttemptingTxn(false);

            addTransaction(response, {
              summary: `Add ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(
                3
              )} ${currencies[Field.CURRENCY_A]?.symbol} and ${parsedAmounts[
                Field.CURRENCY_B
              ]?.toSignificant(3)} ${currencies[Field.CURRENCY_B]?.symbol}`,
            });

            setTxHash(response.hash);
          })
        )
        .catch((e) => {
          setAttemptingTxn(false);
          // we only care if the error is something _other_ than the user rejected the tx
          if (e?.code !== 4001) {
            console.error(e);
          }
        });
    }

    const pendingText = `Supplying ${parsedAmounts[
      Field.CURRENCY_A
    ]?.toSignificant(6)} ${
      currencies[Field.CURRENCY_A]?.symbol
    } and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)} ${
      currencies[Field.CURRENCY_B]?.symbol
    }`;

    const handleDismissConfirmation = useCallback(() => {
      setShowConfirm(false);
      // if there was a tx hash, we want to clear the input
      if (txHash) {
        onFieldAInput("");
      }
      setTxHash("");
    }, [onFieldAInput, txHash]);

    const currencyABalance = useCurrencyBalance(
      account ?? undefined,
      currencies[Field.CURRENCY_A] ?? undefined
    );
    const currencyBBalance = useCurrencyBalance(
      account ?? undefined,
      currencies[Field.CURRENCY_B] ?? undefined
    );

    console.log("showConfirm: ", showConfirm);
    console.log("noLiquidity: ", noLiquidity);
    console.log("pendingText: ", pendingText);
    console.log("error: ", error);

    return (
      <React.Fragment>
        {showLockModal && (
          <LockLiquidity
            showModal={showLockModal}
            setShowModal={setShowLockModal}
            showSuccessModal={showSuccessModal}
            setShowSuccessModal={setShowSuccessModal}
          />
        )}
        <ConfirmPoolTransaction
          isOpen={showConfirm}
          onConfirm={onAdd}
          onDismiss={handleDismissConfirmation}
          noLiquidity={noLiquidity}
          currencies={currencies}
          parsedAmounts={parsedAmounts}
          price={price}
          poolTokenPercentage={poolTokenPercentage}
        />
        <React.Fragment>
          <div className="flex flex-col mt-8 w-full">
            <div className="self-end text-tertiary">
              Available:
              <span>
                {!!currencies[Field.CURRENCY_A] && currencyABalance
                  ? currencyABalance?.toSignificant(6)
                  : "--"}
              </span>
            </div>
            <div className="flex w-full justify-between items-center border rounded-md p-3">
              <SelectPair
                selectedCurrency={currencies[Field.CURRENCY_A]}
                onCurrencySelect={handleCurrencyASelect}
                content={
                  <div className="flex items-center">
                    <div className="flex items-center mr-3">
                      <CurrencyLogo currency={currencies[Field.CURRENCY_A]} />
                      <span className="font-bold text-sm ml-2">
                        {currencies[Field.CURRENCY_A]?.symbol}
                      </span>
                    </div>
                    <CaretDown />
                  </div>
                }
              />
              <NumericInput
                classNames="text-base text-right"
                value={formattedAmounts[Field.CURRENCY_A]}
                onUserInput={onFieldAInput}
              />
            </div>
            <div className="flex justify-between mt-3">
              <button className="w-23/100 text-center">
                <div className="w-full h-5 btn-primary mb-2"></div>
                <p className="text-lg text-primary">25%</p>
              </button>
              <button className="w-23/100 text-center">
                <div className="w-full h-5 btn-primary mb-2"></div>
                <p className="text-lg text-primary">50%</p>
              </button>
              <button className="w-23/100 text-center">
                <div className="w-full h-5 bg-grey_70 mb-2"></div>
                <p className="text-lg text-grey_20">75%</p>
              </button>
              <button className="w-23/100 text-center">
                <div className="w-full h-5 bg-grey_70 mb-2"></div>
                <p className="text-lg text-grey_20">100%</p>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center my-5">
            <img className="" src="/assets/icons/plus.svg" alt="Plus" />
          </div>
          <div className="flex flex-col w-full">
            <div className="self-end text-tertiary">
              Available:
              <span>
                {!!currencies[Field.CURRENCY_B] && currencyBBalance
                  ? currencyBBalance?.toSignificant(6)
                  : "--"}
              </span>
            </div>
            <div className="flex w-full justify-between items-center border rounded-md p-3">
              <SelectPair
                selectedCurrency={currencies[Field.CURRENCY_B]}
                onCurrencySelect={handleCurrencyBSelect}
                content={
                  <div className="flex items-center cursor-pointer">
                    <div className="flex items-center mr-3">
                      <CurrencyLogo currency={currencies[Field.CURRENCY_B]} />
                      <span className="font-bold text-sm ml-2">
                        {currencies[Field.CURRENCY_B]?.symbol}
                      </span>
                    </div>
                    <CaretDown />
                  </div>
                }
              />
              <NumericInput
                classNames="text-right"
                value={formattedAmounts[Field.CURRENCY_B]}
                onUserInput={onFieldBInput}
              />
            </div>
          </div>

          {noLiquidity && (
            <div className="mt-4 relative">
              <span className="block text-sm mb-2">Set LP fee charge</span>
              <input
                type="text"
                className="py-2 px-4 rounded-lg border border-grey_20 w-full bg-transparent text-xs"
              />
            </div>
          )}

          <div>
            <div className="mt-5 text-tertiary text-base flex">
              <p className="inline w-2/3">Support single-token supply</p>
              <button
                className="inline w-1/3 text-right pr-2"
                onClick={() => setOpenMore(!openMore)}
              >
                {openMore ? (
                  <span>
                    less
                    <img
                      className="inline ml-2"
                      src="/assets/icons/arrow-up.svg"
                      alt="drop-down-icon"
                    />
                  </span>
                ) : (
                  <span>
                    more
                    <img
                      className="inline ml-2"
                      src="/assets/icons/arrow-down.svg"
                      alt="drop-down-icon"
                    />
                  </span>
                )}
              </button>
            </div>
            {openMore && (
              <div className="py-3">
                <p className="text-tertiary mb-1">My Liquidity (share 3.23%)</p>
                <p className="">1000 ETH / 561,2345345 USDC</p>
              </div>
            )}
          </div>

          {/* {currencies[Field.CURRENCY_A] && currencies[Field.CURRENCY_B] && pairState !== PairState.INVALID && } */}

          {!account ? (
            <button
              className="btn-primary w-full p-3 mt-5 rounded-md font-bold"
              onClick={connect}
            >
              Connect Wallet
            </button>
          ) : (
            <React.Fragment>
              <div>
                {(approvalA === ApprovalState.NOT_APPROVED ||
                  approvalA === ApprovalState.PENDING ||
                  approvalB === ApprovalState.NOT_APPROVED ||
                  approvalB === ApprovalState.PENDING) &&
                  isValid && (
                    <div className="flex justify-between">
                      {approvalA !== ApprovalState.APPROVED && (
                        <button
                          className={`p-3 mt-5 rounded-md font-bold ${
                            approvalA === ApprovalState.PENDING
                              ? "bg-grey_40 text-grey_20"
                              : "btn-primary"
                          }`}
                          style={{
                            width:
                              approvalB !== ApprovalState.APPROVED
                                ? "48%"
                                : "100%",
                          }}
                          disabled={approvalA === ApprovalState.PENDING}
                          onClick={approveACallback}
                        >
                          {approvalA === ApprovalState.PENDING ? (
                            <span>
                              Approving {currencies[Field.CURRENCY_A]?.symbol}
                            </span>
                          ) : (
                            `Approve ${currencies[Field.CURRENCY_A]?.symbol}`
                          )}
                        </button>
                      )}
                      {approvalB !== ApprovalState.APPROVED && (
                        <button
                          className={`p-3 mt-5 rounded-md font-bold ${
                            approvalB === ApprovalState.PENDING
                              ? "bg-grey_40 text-grey_20"
                              : "btn-primary"
                          }`}
                          style={{
                            width:
                              approvalA !== ApprovalState.APPROVED
                                ? "48%"
                                : "100%",
                          }}
                          disabled={approvalB === ApprovalState.PENDING}
                          onClick={approveBCallback}
                        >
                          {approvalB === ApprovalState.PENDING ? (
                            <span>
                              Approving {currencies[Field.CURRENCY_B]?.symbol}
                            </span>
                          ) : (
                            `Approve ${currencies[Field.CURRENCY_B]?.symbol}`
                          )}
                        </button>
                      )}
                    </div>
                  )}
              </div>
              <button
                className={`w-full p-3 mt-5 rounded-md font-bold ${
                  !isValid ||
                  approvalA !== ApprovalState.APPROVED ||
                  approvalB !== ApprovalState.APPROVED
                    ? "bg-grey_40 text-grey_20"
                    : "btn-primary"
                }`}
                onClick={() => {
                  if (expertMode) {
                    onAdd();
                  } else {
                    setShowConfirm(true);
                  }
                }}
                disabled={
                  !isValid ||
                  approvalA !== ApprovalState.APPROVED ||
                  approvalB !== ApprovalState.APPROVED
                }
              >
                {error ?? "Add Liquidity"}
              </button>
            </React.Fragment>
          )}

          {/* <button
            className="btn-primary w-full p-3 mt-5 rounded-md font-bold"
            onClick={() => setShowLockModal(true)}
          >
            Add liquidity
          </button> */}
        </React.Fragment>

        {attemptingTxn &&
          (txHash ? (
            <TransactionSubmittedModal
              onDismiss={handleDismissConfirmation}
              isOpen={true}
            />
          ) : (
            <PendingTransactionModal
              onDismiss={handleDismissConfirmation}
              isOpen={showConfirm}
            />
          ))}

        {pair && !noLiquidity && pairState !== PairState.INVALID ? (
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            laborum.
          </div>
        ) : null}
      </React.Fragment>
    );
  };

  const RemoveLiquid = ({ handleRemoveLiquidity }) => {
    return (
      <>
        <div className="flex flex-col mt-8 w-full">
          <div className="self-end text-tertiary">
            Available:<span>5000</span>
          </div>
          <div className="flex w-full justify-between items-center border rounded-md p-3">
            <SelectPair
              selectedCurrency={""}
              onCurrencySelect={() => {}}
              content={
                <div className="flex items-center">
                  <img src="/assets/icons/usdt.png" alt="USDC" />
                  <span className="mx-3">USDC</span>
                  <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                </div>
              }
            />
            <span className="font-bold text-base">5000</span>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <p className="text-tertiary mb-1">Pool</p>
          <div className="flex">
            <span className="">0x6c1..ee21</span>
            <img src="/assets/icons/extract.svg" alt="extract-icon" />
          </div>
          <p className="my-1 text-tertiary">Total Liquidity</p>
          <p className="">7000 ETH / 861,223.4345 USDC</p>
        </div>
        <button
          className="btn-primary w-full p-3 mt-5 rounded-md font-bold"
          onClick={() => handleRemoveLiquidity()}
        >
          Remove liquidity
        </button>
        <div className="bg-tertiary p-5 mt-3 rounded-b-lg">
          <p className="text-tertiary text-sm">
            Tokens can be redeemed by removing liquidity. The number of redeemed
            tokens may change due to price fluctuations.
          </p>
        </div>
      </>
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessModalRem, setShowSuccessModalRem] = useState(false);
  const [showPairModal, setShowPairModal] = useState(false);

  const handleAddLiquidity = () => setShowSuccessModal(true);
  const handleRemoveLiquidity = () => setShowSuccessModalRem(true);

  const [showAdd, setShowAdd] = useState(true);

  return (
    <>
      {showSuccessModal && (
        <AddTrxnSuccess
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      )}
      {showSuccessModalRem && (
        <RemoveTrxnSuccess
          showModal={showSuccessModalRem}
          setShowModal={setShowSuccessModalRem}
        />
      )}

      <div
        className={`${classes.add_remove} bg-blue_grey px-4 py-3 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg`}
      >
        <div className="mt-5 flex justify-between items-center">
          <button className="" onClick={() => setActiveLeft("home")}>
            <img src="/assets/icons/arrow-back.svg" alt="back" />
          </button>
          <Barcode
            content={
              <button onClick={() => setShowModal(true)}>
                <img src="/assets/icons/extract.svg" alt="extract" />
              </button>
            }
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
        <div className="w-full flex mt-8 justify-between bg-grey_50 rounded-r-lg">
          <button
            className={`md:py-5 py-3 w-1/2 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base ${
              showAdd ? "btn-primary" : "bg-grey_50"
            }`}
            onClick={() => setShowAdd(true)}
          >
            Add
          </button>
          <button
            className={`md:py-5 py-3 w-1/2 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base ${
              !showAdd ? "btn-primary" : "bg-grey_50"
            }`}
            onClick={() => setShowAdd(false)}
          >
            Remove
          </button>
        </div>
        <React.Fragment>
          {showAdd ? (
            <AddLiquidity
              handleAddLiquidity={handleAddLiquidity}
              showSuccessModal={showSuccessModal}
              setShowSuccessModal={setShowSuccessModal}
            />
          ) : (
            <RemoveLiquid handleRemoveLiquidity={handleRemoveLiquidity} />
          )}
        </React.Fragment>
      </div>
    </>
  );
}
export default AddRemoveLiq;
