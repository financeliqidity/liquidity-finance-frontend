import React, { useState } from "react";

const OpenOrders = () => (
  <>
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-sm">Hide Other Pairs</span>
        </label>
        <button className="px-3 py-2 bg-grey_50 grey-10 rounded-lg font-bold">
          Cancel All
        </button>
      </div>
      <ul className="mt-8">
        <li className="border border-solid border-l-0 border-r-0 border-grey_40 flex justify-between items-center py-2">
          <div className="flex flex-col items-center">
            <span className="font-bold mb-3 text-secondary">Limit/Buy</span>
            <div className="rounded-full w-12 h-12 border-4 border-solid border-grey_20 flex justify-center items-center text-secondary font-bold">
              <span>0%</span>
            </div>
          </div>
          <div className="">
            <p className="text-sm font-semibold mb-1">BNB/LFI</p>
            <p className="flex items-center mb-1">
              <span className="text-sm grey-10 mr-6">Amount</span>
              <p className="text-sm">
                <span>0</span>
                <span className="grey-10">/0.2</span>
              </p>
            </p>
            <p className="flex items-center">
              <span className="text-sm grey-10">Price</span>
              <span className="text-sm ml-8">0.0004</span>
            </p>
          </div>
          <div className="">
            <p className="text-sm grey-10 mb-3">2021-11-17 01:57:38</p>
            <div className="flex justify-end">
              <button className="px-3 py-1 text-sm font-semibold bg-grey_50 grey-10 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </>
);

const Funds = () => (
  <>
    <div className="mt-5">
      <p className="text-grey_20">Current pair assets</p>
      <ul className="mt-5">
        <li className="border-b border-solid border-grey_40 flex justify-between pb-5">
          <div className="flex items-center">
            <img
              src="/assets/icons/eth-32.png"
              alt="..."
              className="mr-2 w-8 h-8"
            />
            <div>
              <span>USDT</span>
              <p className="text-sm text-grey_20">TetherUS</p>
            </div>
          </div>
          <div>
            <span>100.4576</span>
            <p className="text-sm text-grey_20 text-right">$5779.76</p>
          </div>
        </li>
        <li className="border-b border-solid border-grey_40 flex justify-between pb-5 mt-5">
          <div className="flex items-center">
            <img
              src="/assets/icons/lfi-32.png"
              alt="..."
              className="mr-2 w-8 h-8"
            />
            <div>
              <span>LFI</span>
              <p className="text-sm text-grey_20">LiquidityFinance</p>
            </div>
          </div>
          <div>
            <span>100,000,000</span>
            <p className="text-sm text-grey_20 text-right">$5659.76</p>
          </div>
        </li>
      </ul>
    </div>
  </>
);

export default function index() {
  const tabs = [
    { name: "Open Order", component: <OpenOrders /> },
    { name: "Funds", component: <Funds /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mt-9 bg-dark_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg">
      <div className="flex justify-between">
        <div className="flex relative z-10">
          <span
            className={`orders text-lg font-semibold mr-8 cursor-pointer ${
              activeTab.name === "Open Order"
                ? "border-primary border-b-2 text-primary border-solid"
                : null
            }`}
            onClick={() => setActiveTab(tabs[0])}
          >
            Open Orders (1)
          </span>
          <span
            className={`funds text-lg font-semibold cursor-pointer ${
              activeTab.name === "Funds"
                ? "border-primary border-b-2 text-primary border-solid"
                : null
            }`}
            onClick={() => setActiveTab(tabs[1])}
          >
            Funds
          </span>
        </div>

        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.97"
              d="M21.49 7.80863V7.81V16.19C21.49 17.9106 20.9791 19.2238 20.0964 20.1064C19.2138 20.9891 17.9006 21.5 16.18 21.5H7.81C6.08945 21.5 4.77634 20.9891 3.89377 20.1054C3.01114 19.2217 2.5 17.9059 2.5 16.18V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9107 2.5 19.2237 3.01097 20.105 3.89333C20.9861 4.77559 21.4947 6.08838 21.49 7.80863ZM6.5 15C6.5 15.9961 7.31386 16.81 8.31 16.81C9.30614 16.81 10.12 15.9961 10.12 15C10.12 14.0039 9.30614 13.19 8.31 13.19C7.31386 13.19 6.5 14.0039 6.5 15ZM10.19 9C10.19 9.99614 11.0039 10.81 12 10.81C12.9961 10.81 13.81 9.99614 13.81 9C13.81 8.00386 12.9961 7.19 12 7.19C11.0039 7.19 10.19 8.00386 10.19 9ZM13.88 15C13.88 15.9961 14.6939 16.81 15.69 16.81C16.6861 16.81 17.5 15.9961 17.5 15C17.5 14.0039 16.6861 13.19 15.69 13.19C14.6939 13.19 13.88 14.0039 13.88 15Z"
              fill="#B7BECB"
              stroke="#B7BECB"
            />
          </svg>
        </button>
      </div>
      <hr
        className="relative z-0 mb-3"
        style={{
          backgroundColor: "#B7BECB",
          marginTop: "-1px",
          height: "1.5px",
        }}
      />
      <div className="container">{activeTab.component}</div>
    </div>
  );
}
