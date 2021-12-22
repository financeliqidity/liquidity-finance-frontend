import React from "react";

export default function PoolDetailsTable() {
  return (
    <div className="bg-blue_grey py-8 px-4 md:px-14 rounded-2xl border border-grey_50">
      <>
        <div className="flex relative z-10">
          <span
            className={`pb-3 font-bold mr-4 md:mr-8 cursor-pointer ${"border-primary border-b-2 text-primary border-solid"}`}
          >
            Parameters
          </span>
          <span className={`pb-3 font-bold cursor-pointer mr-4 md:mr-8`}>
            Swaps
          </span>
          <span className={`pb-3 font-bold cursor-pointer`}>
            Liquidity Providers
          </span>
        </div>
        <hr
          className="relative z-0 mb-3"
          style={{
            backgroundColor: "#B7BECB",
            marginTop: "-1px",
            height: "1.5px",
          }}
        />
      </>
      <div className="flex flex-col justify-between md:flex-row mt-9">
        <div className="md:w-19/50 w-full mb-5 md:mb-0">
          <div className="mb-6 pb-6 border-primary border-b flex justify-between">
            <p className="text-sm grey-10">Total Swap Volume</p>
            <div className="">
              <p className="font-semibold mb-1">$2432.00</p>
              <div className="flex items-center">
                <p className="flex items-center mr-6">
                  <img src="/assets/icons/eth.png" alt="..." />
                  <span className="ml-2 text-sm font-bold">7340 ETH</span>
                </p>
                <p className="flex items-center">
                  <img src="/assets/icons/usdc.png" alt="..." />
                  <span className="ml-2 text-sm font-bold">
                    34,223.4345 USDC
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6 pb-6 border-primary border-b flex justify-between">
            <p className="text-sm grey-10">Total Swap Fee</p>
            <div className="">
              <p className="font-semibold mb-1">$2432.00</p>
              <div className="flex items-center">
                <p className="flex items-center mr-6">
                  <img src="/assets/icons/eth.png" alt="..." />
                  <span className="ml-2 text-sm font-bold">7340 ETH</span>
                </p>
                <p className="flex items-center">
                  <img src="/assets/icons/usdc.png" alt="..." />
                  <span className="ml-2 text-sm font-bold">
                    34,223.4345 USDC
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm grey-10">Total Number of Traders</p>
            <span className="font-bold">432</span>
          </div>
        </div>
        <div className="w-full md:w-12/25">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm grey-10">Creator</p>
            <span className="font-bold text-sm">0x6c1..ee21</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm grey-10">Creation Time</p>
            <span className="font-bold text-sm">10/05/2021 14:40:10</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm grey-10">Fee Rate</p>
            <span className="font-bold text-sm">$2432.00</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm grey-10">Slippage Coefficient</p>
            <span className="font-bold text-sm">2</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm grey-10">Min Price</p>
            <span className="font-bold text-sm">0.00002</span>
          </div>
        </div>
      </div>
    </div>
  );
}
