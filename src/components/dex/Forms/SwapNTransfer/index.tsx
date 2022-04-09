import React from "react";
import { useForm } from "react-hook-form";

export default function SwapNTransfer({ swapNTransfer, setSwapNTransfer }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="flex items-center mt-7">
        <span className="text-sm mr-1 text-gray-100">Swap & Transfer</span>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            onChange={(e) => setSwapNTransfer(!swapNTransfer)}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>
      <div className="mt-8">
        <form
          className={`address flex items-center border-2 border-solid border-grey_50 p-4 rounded-lg ${
            swapNTransfer ? "bg-blue_grey" : "bg-grey_50"
          }`}
        >
          <input
            type="text"
            className="w-9/12 border-none focus:border-none outline-none focus:outline-none text-sm text-gray-100 bg-transparent"
            placeholder="Recipient’s ETH Address"
            disabled={!swapNTransfer}
          />
          <input
            type="button"
            value="SET ADDRESS"
            className="w-auto md:w-3/12 bg-blue_grey text-sm font-semibold py-1 px-2 rounded-md text-gray-100 cursor-pointer border border-solid border-grey_50"
            disabled={!swapNTransfer}
          />
        </form>
      </div>
    </div>
  );
}
