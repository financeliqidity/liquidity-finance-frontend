import React from "react";

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4965 20.4411L12.5055 21.432C12.0859 21.8516 11.4074 21.8516 10.9923 21.432L2.3147 12.7589C1.8951 12.3393 1.8951 11.6608 2.3147 11.2457L10.9923 2.56805C11.4119 2.14846 12.0904 2.14846 12.5055 2.56805L13.4965 3.55901C13.9205 3.98307 13.9116 4.67496 13.4786 5.09009L8.09977 10.2145H20.9287C21.5224 10.2145 22 10.6921 22 11.2858V12.7142C22 13.3079 21.5224 13.7856 20.9287 13.7856H8.09977L13.4786 18.91C13.9161 19.3251 13.925 20.017 13.4965 20.4411Z"
      fill="#B7BECB"
    />
  </svg>
);

export default function DirectIso() {
  return (
    <div className="w-full py-12 px-12 rounded-xl bg-grey_70 mt-6">
      <button
        className="flex px-6 py-2.5 items-center bg-blue_grey rounded-3xl"
        style={{ boxShadow: "0px 6px 12px rgba(9, 22, 46, 0.35)" }}
      >
        <ArrowLeft />
        <span className="ml-3 font-bold grey-10">Back</span>
      </button>
      <form className="mt-7">
        <h1 className="text-primary font-bold mb-6 text-4xl text-center">
          Direct ISO Form
        </h1>

        <div className="relative w-full mb-6">
          <label
            htmlFor="contract"
            className="text-lg font-semibold mb-5 block"
          >
            Contract Address
          </label>
          <input
            type="text"
            className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
            placeholder="Enter Contract Address Here"
          />
        </div>
        <div className="relative w-full mb-6">
          <label htmlFor="website" className="text-lg font-semibold mb-5 block">
            Website
          </label>
          <input
            type="text"
            className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
            placeholder="Enter Website URL"
          />
        </div>
        <div className="relative w-full mb-6">
          <label htmlFor="tts" className="text-lg font-semibold mb-5 block">
            Total Token Supply
          </label>
          <input
            type="text"
            className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
            placeholder="Enter Total Token Supply"
          />
        </div>
        <div className="relative w-full mb-6">
          <label htmlFor="bnb" className="text-lg font-semibold mb-5 block">
            BNB Raising
          </label>
          <input
            type="text"
            className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
            placeholder="Enter Total Token Supply"
          />
        </div>
        <div className="flex flex-col justify-between md:flex-row mb-6">
          <div className="relative w-full md:w-12/25">
            <label
              htmlFor="softcap"
              className="text-lg font-semibold mb-5 block"
            >
              Softcap
            </label>
            <input
              type="text"
              className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
              placeholder="Enter Softcap"
            />
          </div>
          <div className="relative w-full md:w-12/25">
            <label
              htmlFor="hardcap"
              className="text-lg font-semibold mb-5 block"
            >
              Hardcap
            </label>
            <input
              type="text"
              className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
              placeholder="Enter Softcap"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row mb-6">
          <div className="relative w-full md:w-12/25">
            <label
              htmlFor="min-all"
              className="text-lg font-semibold mb-5 block"
            >
              Minimum Allocation
            </label>
            <input
              type="text"
              className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
              placeholder="Enter Minimum Allocation"
            />
          </div>
          <div className="relative w-full md:w-12/25">
            <label
              htmlFor="max-all"
              className="text-lg font-semibold mb-5 block"
            >
              Maximum Allocation
            </label>
            <input
              type="text"
              className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
              placeholder="Enter Maximum Allocation"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="relative w-full md:w-12/25">
            <label
              htmlFor="twitter"
              className="text-lg font-semibold mb-5 block"
            >
              Twitter Account
            </label>
            <input
              type="text"
              className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
              placeholder="Enter Twitter Account URL"
            />
          </div>
          <div className="relative w-full md:w-12/25">
            <label
              htmlFor="telegram"
              className="text-lg font-semibold mb-5 block"
            >
              Telegram Account
            </label>
            <input
              type="text"
              className="px-6 py-4 bg-grey_50 rounded-lg w-full placeholder-grey_20 grey-10"
              placeholder="Enter Telegram Account URL"
            />
          </div>
        </div>

        <button
          className="w-full mt-12 text-2xl uppercase font-bold btn-primary py-2 rounded-lg"
          type="submit"
        >
          APPLY FOR ISO
        </button>
      </form>
    </div>
  );
}
