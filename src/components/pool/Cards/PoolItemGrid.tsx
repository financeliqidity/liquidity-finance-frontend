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
const CaretUpBlue = () => (
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
      d="M18 17.5L12 11.5L6 17.5L4 15.5L12 7.5L20 15.5L18 17.5Z"
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

export default function PoolItemGrid() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-grey_50 rounded-2xl"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(162.49deg, rgba(58, 72, 97, 0) 13.49%, rgba(58, 72, 98, 0.00520833) 13.49%, #2669F5 89.55%)",
      }}
    >
      <div className="bg-blue_grey p-4 rounded-t-2xl">
        <div className="flex justify-between items-center">
          <div className="relative">
            <img
              src="/assets/icons/lfi-32.png"
              alt="LFI"
              className="h-6 md:h-10 w-6 md:w-10"
            />
            <img
              src="/assets/icons/sync.svg"
              alt="..."
              className="absolute -right-3 top-3"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Auto LFI</h3>
            <p className="text-xs">Automatic restaking</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm grey-10">APY</p>
          <p className="text-sm flex items-center">
            <span className="mr-2 font-bold">74.55%</span>
            <img src="/assets/icons/calc.svg" alt="..." />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm grey-10">Recent LFI profit</p>
          <p className="text-sm flex items-center">
            <span className="font-bold">O USD</span>
          </p>
        </div>
        <p className="mt-4 text-xs">
          0.1% unstaking fee if withdrawn within 72 hours
        </p>
        <p className="text-sm uppercase font-medium mt-4 mb-2">START EARNING</p>
        <button className="btn btn-primary py-2 w-full text-sm font-bold rounded-lg">
          Connect Wallet
        </button>
        <div
          className={`flex justify-between items-center mt-6 bg-grey_70 p-4 ${
            isOpen ? "rounded-t-2xl" : "rounded-2xl"
          } `}
          style={{ boxShadow: "0px 6px 12px rgba(9, 22, 46, 0.35)" }}
        >
          <div className="flex items-center">
            <button className="btn-primary py-1 px-2 rounded-full flex items-center mr-2.5">
              <img src="/assets/icons/sync-bg.svg" alt="..." />
              <span className="ml-1 text-xs font-bold">Auto</span>
            </button>
            <img src="assets/icons/question-circle.svg" alt="..." />
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="font-bold text-base text-primary">
              {isOpen ? "Hide" : "Details"}
            </span>
            {isOpen ? <CaretUpBlue /> : <CaretDownBlue />}
          </div>
        </div>

        {isOpen && (
          <div className="p-4 bg-blue_grey rounded-b-2xl">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs grey-10">Total Staked</p>
                <p className="font-bold text-xs flex items-center">
                  <span className="mr-1">345,211,055 LFI</span>
                  <img src="assets/icons/question-circle.svg" alt="..." />
                </p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs grey-10">Ends in</p>
                <p className="font-bold text-xs flex items-center">
                  <span className="mr-1">1,230.543 Blocks</span>
                  <img src="/assets/icons/clock.svg" alt="..." />
                </p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs grey-10">Performance fee</p>
                <p className="font-bold text-xs flex items-center">
                  <span className="mr-1">1%</span>
                </p>
              </div>
              <div className="flex justify-between items-center mb-0">
                <p className="text-xs grey-10">Max stake per user</p>
                <p className="font-bold text-xs flex items-center">
                  <span className="mr-1">1000 LFI</span>
                </p>
              </div>
            </div>
            <div className="">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
