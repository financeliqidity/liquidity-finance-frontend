import React, { useState } from "react";

const Close = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5273 8.00001L14.3178 4.20948C14.783 3.74433 14.783 2.99016 14.3178 2.52463L13.4754 1.68221C13.0103 1.21706 12.2561 1.21706 11.7906 1.68221L8.00004 5.47274L4.20951 1.68221C3.74436 1.21706 2.99019 1.21706 2.52466 1.68221L1.68224 2.52463C1.21709 2.98978 1.21709 3.74395 1.68224 4.20948L5.47277 8.00001L1.68224 11.7905C1.21709 12.2557 1.21709 13.0099 1.68224 13.4754L2.52466 14.3178C2.98981 14.783 3.74436 14.783 4.20951 14.3178L8.00004 10.5273L11.7906 14.3178C12.2557 14.783 13.0103 14.783 13.4754 14.3178L14.3178 13.4754C14.783 13.0102 14.783 12.2561 14.3178 11.7905L10.5273 8.00001Z"
      fill="white"
    />
  </svg>
);

export default function PoolDisclaimer({
  content,
  showModal,
  setShowModal,
  liquidityTerms,
  setLiquidityTerms,
  tabChanger,
}) {
  const handleCheck = () => setLiquidityTerms(!liquidityTerms);

  return (
    <>
      {content}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-4/12">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5 text-center">
                    Risk Disclaimer
                  </h3>
                </div>
                {/*body*/}
                <div className="relative px-6 py-0.5 flex-auto">
                  <div className="flex mt-1 rounded-2xl p-4 bg-grey_30">
                    <p className="text-sm">
                      Market making and liquidity provision involve risk of loss
                      and are not suitable for every user. The valuation and
                      prices of token assets may fluctuate substantially, and ,
                      as a result, users may see profits that are below
                      expectations, or even sustain losses.
                    </p>
                  </div>
                </div>

                <div className="flex p-6 py-5 rounded-b justify-start">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="liquidity_terms"
                      value={liquidityTerms}
                      onChange={handleCheck}
                    />
                    <span className="ml-2 text-sm">
                      I have read, understand, and agree to the
                      <span className="underline text-primary font-bold ml-1">
                        Terms of Service.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="px-6 pb-6 flex justify-between">
                  <button
                    type="submit"
                    onClick={() => {
                      tabChanger();
                      setLiquidityTerms(false);
                    }}
                    className={`${
                      liquidityTerms
                        ? "btn-primary text-white"
                        : "bg-grey_40 text-grey_20"
                    }  w-4/5 text-base font-bold py-4 rounded-lg`}
                    style={{ width: "78.7%" }}
                    disabled={!liquidityTerms}
                  >
                    Continue
                  </button>
                  <button
                    className={`p-5 flex justify-center w-23/100 ml-auto border-0 float-right outline-none focus:outline-none cursor-pointer rounded-lg ${
                      liquidityTerms
                        ? "bg-grey_40 text-grey_20"
                        : "btn-primary text-white"
                    }`}
                    onClick={() => setShowModal(false)}
                    style={{ width: "16.3%" }}
                    disabled={liquidityTerms}
                  >
                    <Close />
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
