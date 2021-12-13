import React, { useState } from "react";
import Image from "next/image";

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
const Clip = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2.4967H11.5C11.7761 2.4967 12 2.72056 12 2.9967V4.78617H13.5V2.9967C13.5 1.89213 12.6046 0.996704 11.5 0.996704H2C0.895431 0.996704 0 1.89213 0 2.9967V13.2072C0 14.3118 0.89543 15.2072 2 15.2072H4.50002V13.7072H2C1.72386 13.7072 1.5 13.4834 1.5 13.2072V2.9967C1.5 2.72056 1.72386 2.4967 2 2.4967Z"
      fill="white"
    />
    <rect
      x="5.25"
      y="5.53616"
      width="12"
      height="12.7105"
      rx="1.25"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Barcode({ showModal, setShowModal, content }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {content}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-3/12 rounded-3xl">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none rounded-3xl">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6">
                  <h3 className="text-lg font-semibold text-white leading-5 flex items-center">
                    Scan QR Code
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 pt-4 pb-6 flex-auto">
                  <div className="flex justify-center items-center flex-col">
                    <img
                      src="/assets/images/qr.jpg"
                      alt="..."
                      className="mb-10"
                    />

                    <div>
                      <div className="flex justify-center">
                        <button className="p-5 bg-grey_20 rounded-xl">
                          <Clip />
                        </button>
                      </div>
                      <p className="mt-3 text-sm font-bold text-center">
                        Copy Link
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
