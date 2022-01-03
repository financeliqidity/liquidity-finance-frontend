import React, { useState } from "react";
import Link from "next/link";
import Slider from "../../components/iso/Cards/Slider";

import Layout from "../../components/Layout";
import WhitelistedIso from "../../components/iso/Forms/WhiteListedIso";
import DirectIso from "../../components/iso/Forms/DirectIso";
import RiskDisclaimerIso from "../../components/iso/Modals/RiskDisclaimerIso";
import ApplyIso from "../../components/iso/Cards/ApplyIso";

const Magnification = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7046 18.2785L14.3251 12.8989C15.375 11.5453 16 9.84565 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C9.84565 16 11.5453 15.375 12.8989 14.3251L18.2785 19.7046C18.6723 20.0985 19.3108 20.0985 19.7046 19.7046C20.0985 19.3108 20.0985 18.6723 19.7046 18.2785ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
      fill="#B7BECB"
    />
  </svg>
);
const Clipboard = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1.5H8.5C8.77614 1.5 9 1.72386 9 2V2.94737H10.5V2C10.5 0.895431 9.60457 0 8.5 0H2C0.895431 0 0 0.895428 0 2V9.05263C0 10.1572 0.89543 11.0526 2 11.0526H3.5V9.55263H2C1.72386 9.55263 1.5 9.32877 1.5 9.05263V2C1.5 1.72386 1.72386 1.5 2 1.5Z"
      fill="#B7BECB"
    />
    <rect
      x="4.25"
      y="3.69737"
      width="9"
      height="9.55263"
      rx="1.25"
      stroke="#B7BECB"
      strokeWidth="1.5"
    />
  </svg>
);
const Twitter = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.4442 7.92638C20.4569 8.10403 20.4569 8.28173 20.4569 8.45939C20.4569 13.8782 16.3326 20.1219 8.79444 20.1219C6.47209 20.1219 4.31473 19.4492 2.5 18.2818C2.82996 18.3198 3.14719 18.3325 3.48985 18.3325C5.40607 18.3325 7.17006 17.6853 8.5787 16.5813C6.77666 16.5432 5.2665 15.363 4.74618 13.7386C5.00001 13.7766 5.2538 13.802 5.52032 13.802C5.88833 13.802 6.25638 13.7512 6.599 13.6625C4.72083 13.2817 3.31215 11.632 3.31215 9.63959V9.58884C3.85782 9.89342 4.49239 10.0838 5.16493 10.1091C4.06087 9.37306 3.33754 8.11673 3.33754 6.6954C3.33754 5.93399 3.54055 5.23602 3.8959 4.62687C5.91369 7.11419 8.9467 8.73853 12.3477 8.91622C12.2843 8.61165 12.2462 8.29443 12.2462 7.97716C12.2462 5.71824 14.0736 3.87816 16.3452 3.87816C17.5254 3.87816 18.5914 4.37308 19.3401 5.17258C20.2665 4.99492 21.1548 4.65226 21.9416 4.18273C21.637 5.13453 20.9898 5.93403 20.1396 6.44161C20.9645 6.35282 21.764 6.12434 22.5 5.80711C21.9417 6.61926 21.2437 7.34259 20.4442 7.92638Z"
      fill="white"
    />
  </svg>
);
const Telegram = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.443 5.14053L19.4249 19.3739C19.1972 20.3785 18.6034 20.6285 17.7596 20.1553L13.1609 16.7666L10.942 18.9007C10.6964 19.1462 10.4911 19.3516 10.0178 19.3516L10.3482 14.6682L18.8713 6.96659C19.2418 6.6362 18.7909 6.45315 18.2953 6.78354L7.75867 13.4181L3.22255 11.9983C2.23585 11.6902 2.218 11.0116 3.42793 10.5383L21.1706 3.70291C21.9921 3.39484 22.7109 3.88596 22.443 5.14053Z"
      fill="#B7BECB"
    />
  </svg>
);

const Circle = ({ fill }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3.93548C16.4569 3.93548 20.0645 7.54238 20.0645 12C20.0645 16.4569 16.4576 20.0645 12 20.0645C7.54306 20.0645 3.93548 16.4576 3.93548 12C3.93548 7.54306 7.54238 3.93548 12 3.93548ZM12 2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47714 17.5229 2 12 2ZM12 8.77419C10.2184 8.77419 8.77419 10.2184 8.77419 12C8.77419 13.7816 10.2184 15.2258 12 15.2258C13.7816 15.2258 15.2258 13.7816 15.2258 12C15.2258 10.2184 13.7816 8.77419 12 8.77419Z"
      fill={`${fill}`}
    />
  </svg>
);

export default function Iso() {
  const [showModal, setShowModal] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <Slider />

      <div className="w-full py-8 px-8 rounded-xl bg-grey_70 mt-6">
        {showModal && (
          <RiskDisclaimerIso
            showModal={showModal}
            setShowModal={setShowModal}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                className="btn-primary uppercase font-bold text-2xl py-4 rounded-lg w-7/25"
                onClick={() => setShowModal(true)}
              >
                APPLY FOR ISO
              </button>
              <div className="relative w-7/10">
                <input
                  type="search"
                  className="bg-grey_50 rounded-lg py-5 w-full transition pl-14 px-4"
                  placeholder="Search by token address (Ex. 0x54da...e276)"
                />
                <div
                  className="absolute search-icon"
                  style={{ top: "1.3rem", left: "1.5rem" }}
                >
                  <Magnification />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center p-3 rounded-xl bg-blue_grey">
              <div
                className="grid-cols-2 grid-rows-2
                space-y-2 md:flex 
                lg:space-y-0 grid lg:gap-8 lg:grid-rows-1 w-full"
              >
                <div className="md:mr-8">
                  <button className="py-2.5 px-4 bg-grey_50 rounded-lg flex items-center">
                    <Circle fill="#2669F5" />
                    <span className="ml-1 text-lg font-semibold text-primary">
                      Active
                    </span>
                  </button>
                </div>
                <div className="md:mr-8">
                  <button className="py-2.5 px-4 bg-transparent rounded-lg flex items-center">
                    <Circle fill="#FFD95C" />
                    <span className="ml-1 text-lg font-semibold text-yellow_">
                      Upcoming
                    </span>
                  </button>
                </div>
                <div className="md:mr-8">
                  <button className="py-2.5 px-4 bg-transparent rounded-lg flex items-center">
                    <Circle fill="#45C581" />
                    <span className="ml-1 text-lg font-semibold text-secondary">
                      Completed
                    </span>
                  </button>
                </div>
                <div className="md:mr-8">
                  <button className="py-2.5 px-4 bg-transparent rounded-lg flex items-center">
                    <Circle fill="#F84239" />
                    <span className="ml-1 text-lg font-semibold text-danger">
                      Failed
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap -mx-4 overflow-hidden sm:-mx-5 md:-mx-4 lg:-mx-5 xl:-mx-5">
                <div className="my-4 px-4 w-full overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
                  <div className="p-6 rounded-3xl bg-blue_grey">
                    <div className="bg-grey_50 flex items-center justify-center mb-6 w-full rounded-2xl h-64">
                      <img src="/assets/images/lfi-biggest.png" alt="..." />
                    </div>
                    <div className="status mb-6">
                      <p className="grey-10 mb-2">Status:</p>
                      <button className="py-2.5 px-4 bg-grey_50 rounded-lg flex items-center">
                        <Circle fill="#2669F5" />
                        <span className="ml-1 text-lg font-semibold text-primary">
                          Active
                        </span>
                      </button>
                    </div>
                    <div className="raised">
                      <p className="grey-10 mb-2">Raised:</p>
                      <div className="w-full bg-grey_50 h-2">
                        <div
                          className="bg-secondary h-2"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-6 bg-grey_70 p-4">
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Softcap:</span>
                        <span>500 BNB</span>
                      </p>
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Hardcap:</span>
                        <span>1000 BNB</span>
                      </p>
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Minimum Allocation:</span>
                        <span>0.1 BNB</span>
                      </p>
                      <p className="flex justify-between items-center">
                        <span className="grey-10">Maximum Allocation:</span>
                        <span>6 BNB</span>
                      </p>

                      <hr className="my-3" />

                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium grey-10">
                            Sale Started:
                          </span>
                          <div className="flex">
                            <p className="mr-1">
                              6 <span className="text-xs">Days</span>
                            </p>
                            <p className="mr-1">
                              8 <span className="text-xs">Hours</span>
                            </p>
                            <p className="">
                              45 <span className="text-xs">Mins</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium grey-10">
                            Sale Started:
                          </span>
                          <div className="flex">
                            <p className="mr-1">
                              6 <span className="text-xs">Days</span>
                            </p>
                            <p className="mr-1">
                              8 <span className="text-xs">Hours</span>
                            </p>
                            <p className="">
                              45 <span className="text-xs">Mins</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button className="text-sm font-bold btn-primary rounded py-1 px-2">
                          More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4 px-4 w-full overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
                  <div className="p-6 rounded-3xl bg-blue_grey">
                    <div className="bg-grey_50 flex items-center justify-center mb-6 w-full rounded-2xl h-64">
                      <img src="/assets/images/lfi-biggest.png" alt="..." />
                    </div>
                    <div className="status mb-6">
                      <p className="grey-10 mb-2">Status:</p>
                      <button className="py-2.5 px-4 bg-grey_50 rounded-lg flex items-center">
                        <Circle fill="#2669F5" />
                        <span className="ml-1 text-lg font-semibold text-primary">
                          Active
                        </span>
                      </button>
                    </div>
                    <div className="raised">
                      <p className="grey-10 mb-2">Raised:</p>
                      <div className="w-full bg-grey_50 h-2">
                        <div
                          className="bg-secondary h-2"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-6 bg-grey_70 p-4">
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Softcap:</span>
                        <span>500 BNB</span>
                      </p>
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Hardcap:</span>
                        <span>1000 BNB</span>
                      </p>
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Minimum Allocation:</span>
                        <span>0.1 BNB</span>
                      </p>
                      <p className="flex justify-between items-center">
                        <span className="grey-10">Maximum Allocation:</span>
                        <span>6 BNB</span>
                      </p>

                      <hr className="my-3" />

                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium grey-10">
                            Sale Started:
                          </span>
                          <div className="flex">
                            <p className="mr-1">
                              6 <span className="text-xs">Days</span>
                            </p>
                            <p className="mr-1">
                              8 <span className="text-xs">Hours</span>
                            </p>
                            <p className="">
                              45 <span className="text-xs">Mins</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium grey-10">
                            Sale Started:
                          </span>
                          <div className="flex">
                            <p className="mr-1">
                              6 <span className="text-xs">Days</span>
                            </p>
                            <p className="mr-1">
                              8 <span className="text-xs">Hours</span>
                            </p>
                            <p className="">
                              45 <span className="text-xs">Mins</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button className="text-sm font-bold btn-primary rounded py-1 px-2">
                          More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4 px-4 w-full overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
                  <div className="p-6 rounded-3xl bg-blue_grey">
                    <div className="bg-grey_50 flex items-center justify-center mb-6 w-full rounded-2xl h-64">
                      <img src="/assets/images/lfi-biggest.png" alt="..." />
                    </div>
                    <div className="status mb-6">
                      <p className="grey-10 mb-2">Status:</p>
                      <button className="py-2.5 px-4 bg-grey_50 rounded-lg flex items-center">
                        <Circle fill="#2669F5" />
                        <span className="ml-1 text-lg font-semibold text-primary">
                          Active
                        </span>
                      </button>
                    </div>
                    <div className="raised">
                      <p className="grey-10 mb-2">Raised:</p>
                      <div className="w-full bg-grey_50 h-2">
                        <div
                          className="bg-secondary h-2"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-6 bg-grey_70 p-4">
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Softcap:</span>
                        <span>500 BNB</span>
                      </p>
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Hardcap:</span>
                        <span>1000 BNB</span>
                      </p>
                      <p className="flex justify-between items-center mb-3">
                        <span className="grey-10">Minimum Allocation:</span>
                        <span>0.1 BNB</span>
                      </p>
                      <p className="flex justify-between items-center">
                        <span className="grey-10">Maximum Allocation:</span>
                        <span>6 BNB</span>
                      </p>

                      <hr className="my-3" />

                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium grey-10">
                            Sale Started:
                          </span>
                          <div className="flex">
                            <p className="mr-1">
                              6 <span className="text-xs">Days</span>
                            </p>
                            <p className="mr-1">
                              8 <span className="text-xs">Hours</span>
                            </p>
                            <p className="">
                              45 <span className="text-xs">Mins</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium grey-10">
                            Sale Started:
                          </span>
                          <div className="flex">
                            <p className="mr-1">
                              6 <span className="text-xs">Days</span>
                            </p>
                            <p className="mr-1">
                              8 <span className="text-xs">Hours</span>
                            </p>
                            <p className="">
                              45 <span className="text-xs">Mins</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button className="text-sm font-bold btn-primary rounded py-1 px-2">
                          More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 1 && <ApplyIso setActiveTab={setActiveTab} />}

        {activeTab === 2 && (
          <>
            <div className="flex justify-between items-center w-full mb-6">
              <div className="flex justify-between items-center w-12/25">
                <button className="bg-grey_50 text-xl font-bold uppercase p-4 rounded-lg">
                  APPLY FOR ISO
                </button>
                <button className="btn-primary text-xl font-bold uppercase p-4 rounded-lg">
                  STAKE LFI
                </button>
                <button className="bg-grey_50 text-xl font-bold uppercase p-4 rounded-lg">
                  PARTICIPATE
                </button>
              </div>
              <div className="relative w-9/50">
                <input
                  type="search"
                  className="bg-grey_50 rounded-lg py-5 w-full transition pl-14 px-4"
                  placeholder="Search by token address (Ex. 0x54da...e276)"
                />
                <div
                  className="absolute search-icon"
                  style={{ top: "1.3rem", left: "1.5rem" }}
                >
                  <Magnification />
                </div>
              </div>
            </div>
            <div className="bg-grey_50 rounded-xl py-3 px-6 mb-12">
              <div className="flex justify-between items-center w-full">
                <div className="bg-blue_grey rounded-xl">
                  <div className="flex">
                    <button className="bg-grey_20 text-xl font-bold px-6 py-5 rounded-t-xl rounded-l-xl">
                      Contract:
                    </button>
                    <button className="px-6 py-5 rounded-r-xl bg-transparent flex items-center">
                      <span className="text-lg grey-10 font-semibold mr-2.5">
                        0xBD4...7545
                      </span>
                      <Clipboard />
                    </button>
                  </div>
                </div>
                <div className="md:w-1/4 bg-blue_grey rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <button className="py-2 px-3 text-lg font-semibold btn-primary rounded-lg">
                      Website
                    </button>
                    <button className="py-2 px-3 text-lg font-semibold rounded-lg bg-transparent grey-10">
                      Audit
                    </button>
                    <button className="py-2 px-3 text-lg font-semibold rounded-lg bg-transparent grey-10">
                      KYC
                    </button>
                  </div>
                </div>
                <div className="md:w-1/4 bg-blue_grey rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <button className="py-2 px-3 text-lg font-semibold btn-primary rounded-lg flex items-center">
                      <Twitter />
                      <span className="ml-2">Twitter</span>
                    </button>
                    <button className="py-2 px-3 text-lg font-semibold rounded-lg bg-transparent grey-10 flex items-center">
                      <Telegram />
                      <span className="ml-2">Telegram</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-grey_50 h-2 mb-12">
              <div className="bg-secondary h-2" style={{ width: "25%" }}></div>
            </div>
            <div className="flex justify-between">
              <div className="md:w-19/50">
                <div className="mb-5">
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Softcap Reached:</span>
                    <span>500 BNB</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Hardcap:</span>
                    <span>1000 BNB</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="grey-10">Total LFI Staked:</span>
                    <span>1,000,000 Token</span>
                  </p>
                </div>
                <div
                  className="p-6 bg-blue_grey rounded-xl"
                  style={{ boxShadow: "0px 6px 12px #09162E" }}
                >
                  <p className="flex justify-between items-center mb-4">
                    <span className="grey-10 text-lg">Your Staked LFI</span>
                    <span>0 LFI</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="grey-10 text-lg">BNB Balance:</span>
                    <span>6 BNB</span>
                  </p>
                  <div
                    className="mt-5 mb-6 py-2 px-4 bg-grey_50 rounded-lg flex justify-between items-center"
                    style={{ boxShadow: "0px 6px 12px rgba(9, 22, 46, 0.35)" }}
                  >
                    <div className="">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="bg-transparent focus:outline-none text-lg font-semibold"
                      />
                      <div className="mt-1 text-grey_20">~ Value in LFI</div>
                    </div>
                    <button className="py-1 px-2 flex items-center border border-grey_30 rounded-md">
                      <img src="/assets/icons/lfi-20.svg" alt="..." />
                      <span className="ml-2 font-bold uppercase">MAX</span>
                    </button>
                  </div>
                  <button className="w-full py-4 text-xl font-bold rounded-lg bg-grey_50 text-grey_20">
                    Stake LFI
                  </button>
                  <div className="my-6 text-center">
                    <p className="text-xs font-bold text-grey_20">
                      This token is governance protected
                    </p>
                    <Link href="/#more-info">
                      <a className="text-primary underline text-xs font-bold">
                        More Info
                      </a>
                    </Link>
                  </div>
                  <button className="w-full py-3 text-xl font-bold rounded-lg bg-grey_50 text-grey_20">
                    00:00:00
                  </button>
                </div>
              </div>
              <div className="md:w-49/100 h-full">
                <div className="p-6 h-full">
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Total BNB Raised</span>
                    <span>500 BNB</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Total Supply</span>
                    <span>1,000,000 Token</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Sale Price:</span>
                    <span>10,000 Token = 1 BNB</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Token Allocated:</span>
                    <span>800,000 Token</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">BNB Listing %:</span>
                    <span>80%</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">BNB Reserved:</span>
                    <span>20% (Not Locked)</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Minimum Allocation:</span>
                    <span>0.1 BNB</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Maximum Allocation:</span>
                    <span>6 BNB</span>
                  </p>
                  <p className="flex justify-between items-center mb-3">
                    <span className="grey-10">Listing Price</span>
                    <span>5,000 Token = 1 BNB</span>
                  </p>

                  <hr />

                  <div className="mt-4">
                    <button className="flex items-center justify-between rounded-3xl bg-grey_50 px-3 py-2 w-full mb-4">
                      <span className="font-medium grey-10">Sale Started:</span>
                      <div className="flex">
                        <p className="mr-1">
                          6 <span className="text-xs">Days</span>
                        </p>
                        <p className="mr-1">
                          8 <span className="text-xs">Hours</span>
                        </p>
                        <p className="">
                          45 <span className="text-xs">Mins</span>
                        </p>
                      </div>
                    </button>
                    <button className="flex items-center justify-between rounded-3xl bg-grey_50 px-3 py-2 w-full">
                      <span className="font-medium grey-10">Sale Started:</span>
                      <div className="flex">
                        <p className="mr-1">
                          14 <span className="text-xs">Days</span>
                        </p>
                        <p className="mr-1">
                          7 <span className="text-xs">Hours</span>
                        </p>
                        <p className="">
                          25 <span className="text-xs">Mins</span>
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 3 && <WhitelistedIso setActiveTab={setActiveTab} />}

        {activeTab === 4 && <DirectIso setActiveTab={setActiveTab} />}
      </div>
    </div>
  );
}

Iso.layout = Layout;
