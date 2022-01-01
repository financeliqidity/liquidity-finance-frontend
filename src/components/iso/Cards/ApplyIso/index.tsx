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

export default function ApplyIso({ setActiveTab }) {
  return (
    <div className="w-full py-12 px-12 rounded-xl bg-grey_70 mt-6">
      <button
        className="flex px-6 py-2.5 items-center bg-blue_grey rounded-3xl"
        style={{ boxShadow: "0px 6px 12px rgba(9, 22, 46, 0.35)" }}
        onClick={() => setActiveTab(0)}
      >
        <ArrowLeft />
        <span className="ml-3 font-bold grey-10">Back</span>
      </button>
      <div className="mt-6">
        <div className="rounded-xl bg-blue_grey flex justify-between p-8">
          <div className="">
            <button className="py-6 bg-grey_70 font-bold text-2xl rounded-xl px-12">
              Governance ISO
            </button>
            <p className="mt-6 font-bold grey-10 mb-1 text-center">
              This ISO is governance protected
            </p>
            <p className="text-primary font-bold underline text-center">
              More Info
            </p>
          </div>
          <div className="">
            <button
              className="py-6 hover:bg-primary hover:border-2 hover:border-primary font-bold text-2xl rounded-xl px-12 border-2 border-grey_50"
              onClick={() => setActiveTab(3)}
            >
              Whitelisted ISO
            </button>
            <button
              className="mt-6 hover:bg-primary hover:border-2 hover:border-primary py-6 block font-bold text-2xl rounded-xl px-12 border-2 border-grey_50 w-full"
              onClick={() => setActiveTab(4)}
            >
              Direct ISO
            </button>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-blue_grey flex justify-between p-8">
          <div className="">
            <button className="py-6 bg-grey_70 font-bold text-2xl rounded-xl px-12">
              Non Governance ISO
            </button>
            <p className="mt-6 font-bold grey-10 mb-1 text-center">
              This ISO is not governance protected
            </p>
            <p className="text-primary font-bold underline text-center">
              More Info
            </p>
          </div>
          <div className="">
            <button
              className="py-6 hover:bg-primary hover:border-2 hover:border-primary font-bold text-2xl rounded-xl px-12 border-2 border-grey_50"
              onClick={() => setActiveTab(3)}
            >
              Whitelisted ISO
            </button>
            <button
              className="mt-6 hover:bg-primary hover:border-2 hover:border-primary py-6 block font-bold text-2xl rounded-xl px-12 border-2 border-grey_50 w-full"
              onClick={() => setActiveTab(4)}
            >
              Direct ISO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
