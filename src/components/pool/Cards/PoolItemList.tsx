import React, { useState } from "react";

const CaretDownBlue = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7.5L12 13.5L18 7.5L20 9.5L12 17.5L4 9.5L6 7.5Z"
      fill="#2669F5"
    />
  </svg>
);
const SeeMore = () => (
  <svg
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.33335 1.5H9.79382L5.77085 5.52297L6.83151 6.58363L10.8334 2.58179V6H12.3334V0H6.33335V1.5ZM5.58319 3H1.83319C1.00476 3 0.333191 3.67157 0.333191 4.5V10.5C0.333191 11.3284 1.00476 12 1.83319 12H7.83319C8.66162 12 9.33319 11.3284 9.33319 10.5V6.75H7.83319V10.5H1.83319V4.5H5.58319V3Z"
      fill="#2669F5"
    />
  </svg>
);

export default function PoolItemList() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mb-5">
      <div className="flex w-full pool-item py-4 md:px-9 px-4 rounded-t-2xl justify-between">
        <div className="flex items-center w-1/4 md:w-1/5">
          <div className="relative">
            <img
              src="/assets/icons/lfi-32.png"
              alt="LFI"
              className="h-6 w-6 md:h-10 md:w-10"
            />
            <img
              src="/assets/icons/sync.svg"
              alt="..."
              className="w-4 md:w-5 h-4 md:h-5 absolute -right-2 md:-right-2 bottom-0"
            />
          </div>
          <div className="ml-2 md:ml-4">
            <p className="text-xs font-semibold md:text-lg md:font-bold">
              Auto LFI
            </p>
            <p className="text-xs font-semibold hidden md:flex">
              Automatic restaking
            </p>
          </div>
        </div>

        <div className="flex w-3/5 justify-evenly">
          <div className="">
            <p className="text-tertiary text-xs md:text-sm font-semibold mb-1">
              Recent LFI profit
            </p>
            <p className="text-xs md:text-lg font-semibold">0</p>
            <p className="text-xs md:text-sm font-bold">0 USD</p>
          </div>
          <div className="">
            <p className="text-tertiary text-xs md:text-sm font-semibold mb-1">
              APY
            </p>
            <p className="text-xs md:text-lg font-semibold flex items-center">
              74.55%
              <img src="/assets/icons/calc.svg" alt="..." className="ml-1" />
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-tertiary text-sm font-semibold mb-1">
              Total Staked
            </p>
            <p className="text-lg font-semibold flex items-center">
              345,211,055 LFI
              <img
                src="/assets/icons/question-circle.svg"
                alt="..."
                className="ml-1"
              />
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-tertiary text-sm font-semibold mb-1">Ends in</p>
            <p className="text-lg font-semibold flex items-center">
              1,230.543 Blocks
              <img src="/assets/icons/clock.svg" alt="..." className="ml-1" />
            </p>
          </div>
        </div>

        <div className="isLink md:w-1/5 flex items-start justify-end text-primary">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="font-bold text-base hidden md:inline">
              Details
            </span>
            <CaretDownBlue />
          </div>
        </div>
      </div>

      {open && (
        <div className="flex flex-col w-full bg-tertiary md:py-7 py-4 md:px-9 px-4 justify-between rounded-b-2xl md:flex-row">
          <div className="md:w-3/10 w-full mb-2 md:mb-0">
            <div className="md:w-2/3 flex flex-col py-6 px-3 h-full bg-primary rounded-2xl border-grey_30 border w-full">
              <p className="flex items-center justify-between font-medium pb-1 cursor-pointer">
                <span className="text-sm">See Token Info</span>
                <SeeMore />
              </p>
              <p className="flex items-center justify-between font-medium pb-1 cursor-pointer">
                <span className="text-sm">View Project Site</span>
                <SeeMore />
              </p>
              <p className="flex items-center justify-between font-medium cursor-pointer">
                <span className="text-sm">View Contract</span>
                <SeeMore />
              </p>

              <div className="mt-3 flex justify-between items-end">
                <button className="btn-primary py-1 px-2 rounded-full flex items-center">
                  <img src="/assets/icons/sync-bg.svg" alt="..." />
                  <span className="ml-1 text-xs font-bold">Auto</span>
                </button>
                <img src="assets/icons/question-circle.svg" alt="..." />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:w-8/12 w-full md:flex-row">
            <div className="md:w-9/50 w-full h-full mb-2 md:mb-0">
              <div className="flex flex-col py-4 px-5 h-full bg-primary rounded-2xl border-grey_30 border">
                <p className="text-tertiary font-bold">RECENT LFI PROFIT</p>
                <p className="mt-2 text-xl font-bold">0</p>
              </div>
            </div>
            <div className="md:w-9/50 w-full h-full">
              <div className="flex flex-col py-4 px-5 h-full bg-primary rounded-2xl border-grey_30 border">
                <p className="text-tertiary font-bold">START STAKING</p>
                <button className="btn-primary mt-6 py-3 md:py-4 rounded-lg font-bold">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
