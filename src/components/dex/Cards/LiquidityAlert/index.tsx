import React from "react";

export default function LiquidityAlert() {
  return (
    <div
      className="text-sm text-left text-white bg-transparent border-grey_50 border-solid border flex items-center rounded-md relative "
      role="alert"
    >
      <div className="bg-grey_50 h-full flex items-center justify-center p-3">
        <img src="/assets/icons/alarm.svg" alt="..." />
      </div>
      <div className="text-amber text-sm font-semibold w-full md:text-center overflow-x-hidden whitespace-nowrap px-2">
        Total Liquidity locked for this token is 234,567,892
      </div>
      <button className="h-full flex items-center justify-center p-3 md:static absolute right-0 bg-blue_grey">
        <img src="/assets/icons/close-square.svg" alt="..." />
      </button>
    </div>
  );
}
