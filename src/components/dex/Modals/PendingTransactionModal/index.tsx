import React, { useState } from "react";

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
const SpinIcon = () => (
  <svg
    className="animate-spin -ml-1 h-8 w-8 md:h-24 md:w-24 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="#b7becb"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="#b7becb"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function PendingTransactionModal({ onDismiss, isOpen }) {
  console.log(isOpen);

  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5">
                    Waiting for confirmation
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={onDismiss}
                  >
                    <Close />
                  </button>
                </div>
                <div className="relative px-6 py-8 flex items-center justify-center">
                  <SpinIcon />
                </div>

                <div className="px-6">
                  <hr />
                </div>

                <div className="flex flex-col p-6 rounded-b justify-center">
                  <p className="font-bold text-center mb-4 text-white">
                    Swapping 0.1 WBNB for 45.3465 BUSD
                  </p>
                  <p className="text-sm text-white text-center">
                    Confirm this transaction in your wallet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
