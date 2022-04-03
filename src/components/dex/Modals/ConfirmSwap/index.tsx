import React, { useState } from "react";

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

export default function ConfirmSwapModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="btn-primary p-4 rounded-lg font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Confirm Swap
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5">
                    Confirm Transaction
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-0.5 flex-auto">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src="/assets/icons/eth.png" alt="..." />
                      <span className="ml-3">0.123</span>
                    </div>
                    <div className="token-name">BNB</div>
                  </div>
                </div>
                {/*footer*/}
                <div className="px-6">
                  <hr />
                </div>
                <div className="flex p-6 rounded-b justify-center">
                  <button
                    type="submit"
                    className="mt-8 w-full btn-primary text-white text-xl font-bold py-4 rounded-lg"
                  >
                    Confirm Swap
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
