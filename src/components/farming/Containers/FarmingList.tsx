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
const CommunityIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16675 9.66667C5.08602 9.66667 5.83342 8.91927 5.83342 8C5.83342 7.08073 5.08602 6.33333 4.16675 6.33333C3.24748 6.33333 2.50008 7.08073 2.50008 8C2.50008 8.91927 3.24748 9.66667 4.16675 9.66667ZM15.8334 9.66667C16.7527 9.66667 17.5001 8.91927 17.5001 8C17.5001 7.08073 16.7527 6.33333 15.8334 6.33333C14.9141 6.33333 14.1667 7.08073 14.1667 8C14.1667 8.91927 14.9141 9.66667 15.8334 9.66667ZM16.6668 10.5H15.0001C14.5418 10.5 14.1277 10.6849 13.8256 10.9844C14.8751 11.5599 15.6199 12.599 15.7813 13.8333H17.5001C17.961 13.8333 18.3334 13.4609 18.3334 13V12.1667C18.3334 11.2474 17.586 10.5 16.6668 10.5ZM10.0001 10.5C11.6121 10.5 12.9167 9.19531 12.9167 7.58333C12.9167 5.97135 11.6121 4.66667 10.0001 4.66667C8.3881 4.66667 7.08342 5.97135 7.08342 7.58333C7.08342 9.19531 8.3881 10.5 10.0001 10.5ZM12.0001 11.3333H11.7839C11.2423 11.5938 10.6407 11.75 10.0001 11.75C9.35946 11.75 8.7605 11.5938 8.21623 11.3333H8.00008C6.34383 11.3333 5.00008 12.6771 5.00008 14.3333V15.0833C5.00008 15.7734 5.55998 16.3333 6.25008 16.3333H13.7501C14.4402 16.3333 15.0001 15.7734 15.0001 15.0833V14.3333C15.0001 12.6771 13.6563 11.3333 12.0001 11.3333ZM6.17456 10.9844C5.87248 10.6849 5.45842 10.5 5.00008 10.5H3.33342C2.41414 10.5 1.66675 11.2474 1.66675 12.1667V13C1.66675 13.4609 2.03914 13.8333 2.50008 13.8333H4.21623C4.38029 12.599 5.12508 11.5599 6.17456 10.9844Z"
      fill="#2669F5"
    />
  </svg>
);

export default function FarmingList() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mb-5">
      <div className="flex w-full pool-item py-4 md:px-9 px-4 rounded-t-2xl justify-between">
        <div className="flex items-center w-1/4 md:w-1/5">
          <div className="relative">
            <div className="flex">
              <img
                src="/assets/images/BTC_logo.png"
                alt="..."
                className="w-9 h-9 rounded-full"
              ></img>
              <img
                src="/assets/images/USDT_logo.png"
                alt="..."
                className="w-9 h-9 rounded-full -ml-4 max-w-none"
              ></img>
            </div>
          </div>
          <div className="ml-2 md:ml-4">
            <p className="text-xs font-semibold md:text-lg md:font-bold">
              LFI - USDT
            </p>
          </div>
        </div>

        <div className="flex w-3/5 justify-between">
          <div className="">
            <p className="text-tertiary text-xs md:text-sm font-semibold mb-1">
              Earned
            </p>
            <p className="text-xs md:text-lg font-semibold">0</p>
          </div>
          <div className="">
            <p className="text-tertiary text-xs md:text-sm font-semibold mb-1">
              APR
            </p>
            <p className="text-xs md:text-lg font-semibold flex items-center">
              74.55%
              <img src="/assets/icons/calc.svg" alt="..." className="ml-1" />
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-tertiary text-sm font-semibold mb-1">
              Liquidity
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
            <p className="text-tertiary text-sm font-semibold mb-1">
              Multiplier
            </p>
            <p className="text-lg font-semibold flex items-center">
              11x
              <img
                src="/assets/icons/question-circle.svg"
                alt="..."
                className="ml-1"
              />
            </p>
          </div>

          <div className="isLink flex items-start justify-end grey-10">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <CaretDownBlue />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="flex flex-col w-full bg-tertiary md:py-7 py-4 md:px-9 px-4 justify-between rounded-b-2xl md:flex-row">
          <div className="md:w-3/10 w-full mb-2 md:mb-0">
            <div className="md:w-2/3 flex flex-col py-6 px-3 h-full bg-primary rounded-2xl border-grey_30 border w-full">
              <p className="flex items-center justify-between font-medium pb-1 cursor-pointer">
                <span className="text-sm">View Contract</span>
                <SeeMore />
              </p>
              <p className="flex items-center justify-between font-medium pb-0 cursor-pointer">
                <span className="text-sm">See Pair Info</span>
                <SeeMore />
              </p>

              <div className="mt-3 flex">
                <button className="bg-white py-1 px-2 rounded-full flex items-center">
                  <CommunityIcon />
                  <span className="ml-1 text-xs font-bold text-primary">
                    Community
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:w-8/12 w-full md:flex-row">
            <div className="md:w-9/50 w-full h-full mb-2 md:mb-0">
              <div className="flex flex-col py-4 px-5 h-full rounded-2xl border-grey_30 border bg-grey_70">
                <p className="text-tertiary font-bold">LFI EARNED</p>

                <div className="mt-2 flex justify-between items-center">
                  <p className="mt-2 text-xl font-bold">0</p>
                  <button className="px-6 py-3 text-white font-bold bg-grey_60 rounded-lg">
                    Harvest
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-9/50 w-full h-full">
              <div className="flex flex-col py-4 px-5 h-full bg-primary rounded-2xl border-grey_30 border">
                <p className="text-tertiary font-bold">START FARMING</p>
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
