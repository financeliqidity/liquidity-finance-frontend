import React from "react";

const Plus = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 13V20C13.5 20.5523 13.0523 21 12.5 21C11.9477 21 11.5 20.5523 11.5 20V13H4.5C3.94772 13 3.5 12.5523 3.5 12C3.5 11.4477 3.94772 11 4.5 11H11.5V4C11.5 3.44772 11.9477 3 12.5 3C13.0523 3 13.5 3.44772 13.5 4V11H20.5C21.0523 11 21.5 11.4477 21.5 12C21.5 12.5523 21.0523 13 20.5 13H13.5Z"
      fill="#B7BECB"
    />
  </svg>
);

const Minus = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 11H20.5C21.0523 11 21.5 11.4477 21.5 12C21.5 12.5523 21.0523 13 20.5 13H4.5C3.94772 13 3.5 12.5523 3.5 12C3.5 11.4477 3.94772 11 4.5 11H4.5Z"
      fill="#7C8497"
    />
  </svg>
);

export default function index() {
  return (
    <>
      <div className="flex justify-between items-center bg-grey_50 rounded-lg px-4 mb-3">
        <button>
          <Minus />
        </button>
        <input
          type="number"
          className="px-3 py-2 placeholder-gray-100 text-gray-100 text-base focus:outline-none w-full text-center bg-grey_50"
          style={{ transition: "all 0.15s ease 0s" }}
          placeholder="Price (BUSD)"
          autoComplete="off"
          required
        />
        <button>
          <Plus />
        </button>
      </div>
      <div className="flex justify-between items-center bg-grey_50 rounded-lg px-4 mb-3">
        <button>
          <Minus />
        </button>
        <input
          type="number"
          className="px-3 py-2 placeholder-gray-100 text-gray-100 text-base focus:outline-none w-full text-center bg-grey_50"
          style={{ transition: "all 0.15s ease 0s" }}
          placeholder="Amount (LFI)"
          autoComplete="off"
          required
        />
        <button>
          <Plus />
        </button>
      </div>
    </>
  );
}
