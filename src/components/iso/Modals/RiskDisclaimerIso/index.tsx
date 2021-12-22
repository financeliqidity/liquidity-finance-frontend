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

export default function ({ showModal, setShowModal }) {
  const [riskTerms, setRiskTerms] = useState(false);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-2xl md:w-9/12 rounded-xl">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none rounded-xl px-12 pb-2">
                {/*header*/}
                <div className="flex items-center justify-between pt-12 pb-8">
                  <h3 className="text-xl font-bold text-white leading-5 flex items-center">
                    Risk Disclaimer
                  </h3>
                </div>
                {/*body*/}
                <div className="relative pt-4 pb-2.5 flex-auto border-t-2 border-grey_20">
                  <p>
                    Liquidity Finance is a decentralized software tool. Anyone
                    can create a token sale using their own tokens.
                  </p>
                  <p>
                    Tokens can be clones and can have the same name as existing
                    coins. Token creators can pretend to be owners of the real
                    project. Please use provided social links to research and
                    examine every project to avoid scams.
                  </p>
                  <p>
                    In the DeFi zone project owners can load arbitrary token
                    contracts. Please take extra caution and do your research
                    when interacting with arbitrary tokens. You might not be
                    able to claim or sell your token!
                  </p>
                  <p>
                    Please pay close attention to all token metrics shared on
                    the CHART's page Note: We do not promote or endorse any
                    project, do your own research and make sure the liquidity is
                    locked for at least 3 months and supported by a governance
                    lock. The Cryptocurrency market is very risky and volatile,
                    therefore, always do your due diligent analysis before
                    investing.
                  </p>
                  <div className="mt-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="wallet_terms"
                        className="form-checkbox"
                        //@ts-ignore
                        value={riskTerms}
                        onChange={() => setRiskTerms(!riskTerms)}
                      />
                      <p className="ml-2 text-sm">
                        I have read, understand, and agree to the
                        <span className="underline text-primary font-bold ml-1">
                          Terms of Service.
                        </span>
                      </p>
                    </label>
                  </div>
                </div>
                {/* Footer */}
                <div className="py-10">
                  <div className="flex items-center">
                    <button
                      className="bg-grey_20 text-white text-xl font-bold px-9 py-4 rounded-lg border border-grey_20"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className={`${
                        riskTerms
                          ? "btn-primary"
                          : "bg-transparent border border-grey_20"
                      } text-white text-xl font-bold px-9 py-4 rounded-lg shadow-md`}
                      disabled={!riskTerms}
                    >
                      Confirm
                    </button>
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
