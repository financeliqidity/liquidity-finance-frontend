import React from "react";
import DaySelect from "../../Selectboxes/Day";
import MonthSelect from "../../Selectboxes/Month";
import YearSelect from "../../Selectboxes/Year";

const Close = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7L17 17"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17L17 7"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LockLiquidity({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-xl md:w-7/12 rounded-3xl">
              <div className="w-full bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg text-gray">
                <div className="flex justify-between items-center">
                  <p className="text-center text-primary text-xl font-bold">
                    Lock Liquidity
                  </p>
                  <button
                    className="p-1 bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>

                <div className="my-8 relative">
                  <p className="text-white text-lg font-semibold mb-3">
                    Set LP Lock Amount
                  </p>
                  <input
                    type="text"
                    className="bg-tertiary w-full py-3 px-4 rounded-md"
                    placeholder="Enter Lock Amount"
                  />
                </div>
                <div className="w-full p-4 rounded-lg border border-grey_50 mb-3">
                  <span className="mb-3 grey-10 block">Start Date</span>
                  <div
                    className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-1"
                  >
                    <DaySelect />
                    <MonthSelect />
                    <YearSelect />
                  </div>
                </div>
                <div className="w-full p-4 rounded-lg border border-grey_50">
                  <span className="mb-3 grey-10 block">End Date</span>
                  <div
                    className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-1"
                  >
                    <DaySelect />
                    <MonthSelect />
                    <YearSelect />
                  </div>
                </div>
                <div className="my-8">
                  <div className="flex justify-start items-center h-5">
                    <span className="text-tertiary text-sm">
                      Enable Governance Lock
                    </span>
                    <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        //   onClick={() => asDevSetter()}
                      />
                      <label
                        htmlFor="toggle"
                        className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-2xl font-bold py-2 rounded-lg text-white"
                  //   onClick={() => {
                  //     setTab("add");
                  //     setShowModal(false);
                  //   }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
