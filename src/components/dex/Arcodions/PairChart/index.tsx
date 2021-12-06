import React from "react";

const Caret = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.42 15.8C20.23 15.8 20.04 15.73 19.89 15.58L13.37 9.06005C12.89 8.58005 12.11 8.58005 11.63 9.06005L5.11002 15.58C4.82002 15.87 4.34002 15.87 4.05002 15.58C3.76002 15.29 3.76002 14.81 4.05002 14.52L10.57 8.00005C11.63 6.94005 13.36 6.94005 14.43 8.00005L20.95 14.52C21.24 14.81 21.24 15.29 20.95 15.58C20.8 15.72 20.61 15.8 20.42 15.8Z"
      fill="#B7BECB"
    />
  </svg>
);

export default function PairChart() {
  return (
    <div className="bg-blue_grey py-3 px-6 border-grey_40 border border-l-0 border-r-0">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">BNB/LFI Chart</span>
        <button>
          <Caret />
        </button>
      </div>
    </div>
  );
}
