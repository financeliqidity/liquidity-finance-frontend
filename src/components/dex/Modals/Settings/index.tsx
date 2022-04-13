import React, { useRef, useState } from "react";
import MoreInfo from "../../../shared/ToolTips/MoreInfo";

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
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.91 8.08998C12.4165 8.59654 12.7011 9.28359 12.7011 9.99998C12.7011 10.7164 12.4165 11.4034 11.91 11.91C11.4034 12.4165 10.7164 12.7011 9.99998 12.7011C9.28359 12.7011 8.59654 12.4165 8.08998 11.91C7.58341 11.4034 7.29883 10.7164 7.29883 9.99998C7.29883 9.64526 7.3687 9.29401 7.50444 8.96629C7.64019 8.63857 7.83915 8.3408 8.08998 8.08998C8.3408 7.83915 8.63857 7.64019 8.96629 7.50444C9.29401 7.3687 9.64526 7.29883 9.99998 7.29883C10.7164 7.29883 11.4034 7.58341 11.91 8.08998"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.24993 10C3.24993 10.297 3.27693 10.594 3.31293 10.882L1.72493 12.124C1.55461 12.2574 1.43817 12.4478 1.39702 12.6602C1.35586 12.8725 1.39276 13.0926 1.50093 13.28L2.91293 15.723C3.02107 15.9101 3.19304 16.0519 3.39729 16.1224C3.60155 16.193 3.82439 16.1875 4.02493 16.107L5.44693 15.536C5.58536 15.4824 5.73477 15.4634 5.8822 15.4807C6.02963 15.4979 6.17062 15.5509 6.29293 15.635C6.51293 15.781 6.74093 15.915 6.97693 16.035C7.24693 16.172 7.44293 16.417 7.48593 16.717L7.70293 18.23C7.76593 18.672 8.14493 19 8.59093 19H11.4079C11.6238 19 11.8325 18.9221 11.9956 18.7807C12.1587 18.6393 12.2654 18.4437 12.2959 18.23L12.5129 16.718C12.5366 16.5712 12.5955 16.4323 12.6847 16.3134C12.7739 16.1944 12.8907 16.0989 13.0249 16.035C13.2599 15.917 13.4869 15.784 13.7059 15.639C13.8286 15.554 13.9701 15.5002 14.1183 15.4825C14.2664 15.4647 14.4167 15.4834 14.5559 15.537L15.9749 16.107C16.1755 16.1873 16.3983 16.1927 16.6025 16.1221C16.8067 16.0516 16.9786 15.9099 17.0869 15.723L18.4989 13.28C18.6071 13.0926 18.644 12.8725 18.6028 12.6602C18.5617 12.4478 18.4453 12.2574 18.2749 12.124L16.6869 10.882C16.7229 10.594 16.7499 10.297 16.7499 10C16.7499 9.703 16.7229 9.406 16.6869 9.118L18.2749 7.876C18.4453 7.74261 18.5617 7.55222 18.6028 7.33984C18.644 7.12745 18.6071 6.90735 18.4989 6.72L17.0869 4.277C16.9788 4.08991 16.8068 3.94809 16.6026 3.87755C16.3983 3.80702 16.1755 3.8125 15.9749 3.893L14.5559 4.463C14.4166 4.51634 14.2664 4.53492 14.1183 4.51715C13.9702 4.49938 13.8287 4.44578 13.7059 4.361C13.487 4.21555 13.2596 4.08332 13.0249 3.965C12.8907 3.90113 12.7739 3.8056 12.6847 3.68663C12.5955 3.56766 12.5366 3.4288 12.5129 3.282L12.2969 1.77C12.2664 1.55627 12.1597 1.36074 11.9966 1.2193C11.8335 1.07785 11.6248 0.999991 11.4089 1H8.59193C8.37603 0.999991 8.16737 1.07785 8.00425 1.2193C7.84113 1.36074 7.7345 1.55627 7.70393 1.77L7.48593 3.284C7.46228 3.43026 7.40365 3.56865 7.31503 3.68739C7.22641 3.80613 7.11042 3.90171 6.97693 3.966C6.74093 4.086 6.51293 4.221 6.29293 4.366C6.17024 4.44971 6.02906 4.50236 5.88152 4.51943C5.73397 4.5365 5.58449 4.51748 5.44593 4.464L4.02493 3.893C3.82439 3.8125 3.60155 3.80702 3.39729 3.87755C3.19304 3.94809 3.02107 4.08991 2.91293 4.277L1.50093 6.72C1.39276 6.90735 1.35586 7.12745 1.39702 7.33984C1.43817 7.55222 1.55461 7.74261 1.72493 7.876L3.31293 9.118C3.27372 9.41042 3.25268 9.70498 3.24993 10V10Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Warning = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM13 16V18H11V16H13ZM13 14V6H11V14H13Z"
      fill="#7C8497"
    />
  </svg>
);

enum SlippageError {
  InvalidInput = "InvalidInput",
  RiskyLow = "RiskyLow",
  RiskyHigh = "RiskyHigh",
}

enum DeadlineError {
  InvalidInput = "InvalidInput",
}

export interface SlippageTabsProps {
  rawSlippage?: number;
  setRawSlippage?: (rawSlippage: number) => void;
  deadline?: number;
  setDeadline?: (deadline: number) => void;
}

export default function Settings({
  rawSlippage,
  setRawSlippage,
  deadline,
  setDeadline,
}: SlippageTabsProps) {
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  const [slippageInput, setSlippageInput] = useState("");
  const [deadlineInput, setDeadlineInput] = useState("");

  const slippageInputIsValid =
    slippageInput === "" ||
    (rawSlippage / 100).toFixed(2) ===
      Number.parseFloat(slippageInput).toFixed(2);
  const deadlineInputIsValid =
    deadlineInput === "" || (deadline / 60).toString() === deadlineInput;

  let slippageError: SlippageError | undefined;
  if (slippageInput !== "" && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput;
  } else if (slippageInputIsValid && rawSlippage < 50) {
    slippageError = SlippageError.RiskyLow;
  } else if (slippageInputIsValid && rawSlippage > 500) {
    slippageError = SlippageError.RiskyHigh;
  } else {
    slippageError = undefined;
  }

  let deadlineError: DeadlineError | undefined;
  if (deadlineInput !== "" && !deadlineInputIsValid) {
    deadlineError = DeadlineError.InvalidInput;
  } else {
    deadlineError = undefined;
  }

  function parseCustomSlippage(value: string) {
    setSlippageInput(value);

    try {
      const valueAsIntFromRoundedFloat = Number.parseInt(
        (Number.parseFloat(value) * 100).toString()
      );
      if (
        !Number.isNaN(valueAsIntFromRoundedFloat) &&
        valueAsIntFromRoundedFloat < 5000
      ) {
        setRawSlippage(valueAsIntFromRoundedFloat);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  }

  function parseCustomDeadline(value: string) {
    setDeadlineInput(value);

    try {
      const valueAsInt: number = Number.parseInt(value) * 60;
      if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
        setDeadline(valueAsInt);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  }
  return (
    <>
      <button
        className="p-2.5 bg-grey_50 rounded-2xl mr-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <SettingsIcon />
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6 rounded-t-3xl bg-blue_grey border-b border-grey_50">
                  <h3 className="text-2xl font-bold text-white leading-5">
                    Settings
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto bg-dark_grey rounded-b-3xl">
                  <div className="global p-6">
                    <h4 className="text-sm font-bold text-primary mb-4">
                      GLOBAL
                    </h4>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-lg grey-10 font-semibold">Dark mode</p>
                      <div className="flex justify-center align-center">
                        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                          <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="toggle"
                            className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <p className="text-base grey-10 font-semibold mr-2">
                        Default Transaction Speed (GWEI)
                      </p>
                      <MoreInfo warning_text="lorem ipsum dolor sit" />
                    </div>
                    <div className="flex justify-between items-center mb-0">
                      <button className="py-2 px-4 btn-primary font-bold rounded-3xl">
                        Standard (5)
                      </button>
                      <button className="py-2 px-4 text-primary font-bold rounded-3xl bg-grey_50">
                        Fast (6)
                      </button>
                      <button className="py-2 px-4 text-primary font-bold rounded-3xl bg-grey_50">
                        Instant (7)
                      </button>
                    </div>
                  </div>
                  <div className="swap-liquidity border-grey_50 border-t p-6">
                    <h4 className="text-sm font-bold text-primary mb-4">
                      SWAPS & LIQUIDITY
                    </h4>
                    <div className="flex items-center mb-4">
                      <p className="text-base grey-10 font-semibold mr-2">
                        Slippage Tolerance
                      </p>
                      <MoreInfo warning_text="lorem ipsum dolor sit" />
                    </div>
                    <div className="flex items-center mb-4">
                      <button
                        className="py-2 px-4 text-primary font-bold rounded-3xl bg-grey_50 mr-2"
                        onClick={() => {
                          setSlippageInput("");
                          setRawSlippage(10);
                        }}
                        // active={rawSlippage === 10}
                      >
                        0.1%
                      </button>
                      <button
                        className="py-2 px-4 text-primary font-bold rounded-3xl bg-grey_50 mr-2"
                        onClick={() => {
                          setSlippageInput("");
                          setRawSlippage(50);
                        }}
                        // active={rawSlippage === 10}
                      >
                        0.5%
                      </button>
                      <button
                        className="py-2 px-4 text-primary font-bold rounded-3xl bg-grey_50 mr-2"
                        onClick={() => {
                          setSlippageInput("");
                          setRawSlippage(100);
                        }}
                        // active={rawSlippage === 100}
                      >
                        1.0%
                      </button>
                      <div>
                        {!!slippageInput &&
                        (slippageError === SlippageError.RiskyLow ||
                          slippageError === SlippageError.RiskyHigh) ? (
                          <div>
                            <span role="img" aria-label="warning">
                              ⚠️
                            </span>
                          </div>
                        ) : null}

                        <div className="flex items-center">
                          <input
                            className={
                              "py-2 px-4 text-white font-bold rounded-3xl bg-grey_50 mr-1 w-20 " +
                              (!slippageInputIsValid
                                ? " border border-red-600"
                                : null)
                            }
                            type="text"
                            ref={inputRef as any}
                            placeholder={(rawSlippage / 100).toFixed(2)}
                            value={slippageInput}
                            onBlur={() => {
                              parseCustomSlippage(
                                (rawSlippage / 100).toFixed(2)
                              );
                            }}
                            onChange={(e) =>
                              parseCustomSlippage(e.target.value)
                            }
                          />
                          <span className="text-primary font-bold">%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-amber font-medium">
                      Your transaction may be frontrun
                    </p>
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <p className="text-base grey-10 font-semibold mr-2">
                            Tx deadline (mins)
                          </p>

                          <MoreInfo warning_text="lorem ipsum dolor sit" />
                        </div>

                        <input
                          type="text"
                          className={
                            "py-1 px-2 btn-primary font-semibold rounded-3xl text-sm w-11 " +
                            (deadlineError ? "border-red-500" : undefined)
                          }
                          onBlur={() => {
                            parseCustomDeadline((deadline / 60).toString());
                          }}
                          placeholder={(deadline / 60).toString()}
                          value={deadlineInput}
                          defaultValue={20}
                          onChange={(e) => parseCustomDeadline(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <p className="text-base grey-10 font-semibold mr-2">
                            Expert mode
                          </p>
                          <MoreInfo warning_text="lorem ipsum dolor sit" />
                        </div>
                        <div className="flex justify-center align-center">
                          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                            <input
                              type="checkbox"
                              name="toggle"
                              id="toggle"
                              className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label
                              htmlFor="toggle"
                              className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <p className="text-base grey-10 font-semibold mr-2">
                            Disable multihops
                          </p>
                          <MoreInfo warning_text="lorem ipsum dolor sit" />
                        </div>
                        <div className="flex justify-center align-center">
                          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                            <input
                              type="checkbox"
                              name="toggle"
                              id="toggle"
                              className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label
                              htmlFor="toggle"
                              className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <p className="text-base grey-10 font-semibold mr-2">
                            Flippy sounds
                          </p>
                          <MoreInfo warning_text="lorem ipsum dolor sit" />
                        </div>
                        <div className="flex justify-center align-center">
                          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                            <input
                              type="checkbox"
                              name="toggle"
                              id="toggle"
                              className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label
                              htmlFor="toggle"
                              className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
