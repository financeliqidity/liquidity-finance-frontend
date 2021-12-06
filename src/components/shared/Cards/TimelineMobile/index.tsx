import React from "react";

const ArrowPointer = ({ className }) => (
  <svg
    width="114"
    height="16"
    viewBox="0 0 114 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <path
      d="M113.707 8.70711C114.098 8.31658 114.098 7.68342 113.707 7.29289L107.343 0.928932C106.953 0.538408 106.319 0.538408 105.929 0.928932C105.538 1.31946 105.538 1.95262 105.929 2.34315L111.586 8L105.929 13.6569C105.538 14.0474 105.538 14.6805 105.929 15.0711C106.319 15.4616 106.953 15.4616 107.343 15.0711L113.707 8.70711ZM0 9H113V7H0V9Z"
      fill="#3A4861"
    />
  </svg>
);

export default function TimelineMobile() {
  return (
    <div className="py-10 container mx-auto px-5">
      {/* <!-- component --> */}
      <div className="relative">
        <div
          className="border-r-4 border-blue_grey absolute h-full top-0"
          style={{ left: "9px" }}
        ></div>
        <ul className="list-none m-0 p-0">
          <li className="mb-5">
            <div className="flex group items-center ">
              <div className="bg-blue_grey group-hover:bg-primary z-10 rounded-full border-4 border-black  h-5 w-5">
                <div className="bg-blue_grey h-1 w-6 items-center ml-4 mt-1"></div>
              </div>
              <div className="flex-1 ml-4 z-10 font-medium">
                <div className="flex items-center mb-6">
                  <p className="font-bold text-golden text-5xl mr-3">Q3</p>
                  <ArrowPointer className="w-1/3" />
                  <span className="ml-5 font-bold text-grey_50 w-full">
                    DECEMBER, 2021
                  </span>
                </div>
                <div className="order-1 space-y-2 bg-blue_grey rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                  <div className="mb-5" id="13th">
                    <h3 className="mb-3 font-bold text-white text-xl">13th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>WEBSITE LAUNCH</li>
                      <li>PRIVATE SALE ANNOUNCEMENT</li>
                      <li>AIRDROP CAMPAIGN</li>
                    </ul>
                  </div>

                  <div id="29th">
                    <h3 className="mb-3 font-bold text-white text-xl">29th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>PRIVATE SALE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex group items-center ">
              <div className="bg-blue_grey group-hover:bg-primary z-10 rounded-full border-4 border-black  h-5 w-5">
                <div className="bg-blue_grey h-1 w-6 items-center  ml-4 mt-1"></div>
              </div>
              <div className="flex-1 ml-4 z-10">
                <div className="flex items-center mb-6 py-2.5">
                  <ArrowPointer className="" />
                  <span className="ml-5 font-bold text-grey_50">
                    DECEMBER, 2021
                  </span>
                </div>
                <div className="order-1 space-y-2 bg-blue_grey rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                  <div className="mb-5" id="10th_17th">
                    <h3 className="mb-3 font-bold text-white text-xl">
                      10th-17th
                    </h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>TOKEN PUBLIC SALE</li>
                    </ul>
                  </div>
                  <div id="18th">
                    <h3 className="mb-3 font-bold text-white text-xl">18th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>LIQUIDITY LOCK</li>
                      <li>PANCAKE SWAP LISTING</li>
                      <li>POOCOIN ADS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex group items-center ">
              <div className="bg-blue_grey group-hover:bg-primary z-10 rounded-full border-4 border-black  h-5 w-5">
                <div className="bg-blue_grey h-1 w-6 items-center  ml-4 mt-1"></div>
              </div>
              <div className="flex-1 ml-4 z-10">
                <div className="flex items-center mb-6">
                  <p className="font-bold text-golden text-5xl mr-3">Q4</p>
                  <ArrowPointer className="w-1/3" />
                  <span className="ml-5 font-bold text-grey_50 w-full">
                    DECEMBER, 2021
                  </span>
                </div>
                <div className="order-1 space-y-2 bg-blue_grey rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                  <div id="30th">
                    <h3 className="mb-3 font-bold text-white text-xl">30th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>GOVERNANCE</li>
                      <li>STAKING DASHBOARD</li>
                      <li>FIRST PROPOSAL</li>
                      <li>PROPOSAL IN ACTION</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex group items-center ">
              <div className="bg-blue_grey group-hover:bg-primary z-10 rounded-full border-4 border-black  h-5 w-5">
                <div className="bg-blue_grey h-1 w-6 items-center  ml-4 mt-1"></div>
              </div>
              <div className="flex-1 ml-4 z-10">
                <div className="flex items-center mb-6 py-2.5">
                  <ArrowPointer className="" />
                  <span className="ml-5 font-bold text-grey_50">
                    DECEMBER, 2021
                  </span>
                </div>
                <div className="order-1 space-y-2 bg-blue_grey rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                  <div id="10th">
                    <h3 className="mb-3 font-bold text-white text-xl">10th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>TOKEN PUBLIC SALE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex group items-center ">
              <div className="bg-blue_grey group-hover:bg-primary z-10 rounded-full border-4 border-black  h-5 w-5">
                <div className="bg-blue_grey h-1 w-6 items-center  ml-4 mt-1"></div>
              </div>
              <div className="flex-1 ml-4 z-10">
                <div className="flex items-center mb-6 py-2.5">
                  <ArrowPointer className="" />
                  <span className="ml-5 font-bold text-grey_50">
                    DECEMBER, 2021
                  </span>
                </div>
                <div className="order-1 space-y-2 bg-blue_grey rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                  <div id="30th">
                    <h3 className="mb-3 font-bold text-white text-xl">30th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>LENDING/BORROWING PLATFORM</li>
                      <li>UNIQUE DEX</li>
                      <li className="w-4/5">
                        LAUNCHPAD WITH LIQUIDITY OR TOKEN LOCKER
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex group items-center ">
              <div className="bg-blue_grey group-hover:bg-primary z-10 rounded-full border-4 border-black  h-5 w-5">
                <div className="bg-blue_grey h-1 w-6 items-center  ml-4 mt-1"></div>
              </div>
              <div className="flex-1 ml-4 z-10">
                <div className="flex items-center mb-6">
                  <p className="font-bold text-golden text-5xl mr-3">Q1</p>
                  <ArrowPointer className="w-1/3" />
                  <span className="ml-5 font-bold text-grey_50 w-full">
                    JANUARY, 2022
                  </span>
                </div>
                <div className="order-1 space-y-2 bg-blue_grey rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                  <div id="10th">
                    <h3 className="mb-3 font-bold text-white text-xl">10th</h3>
                    <ul className="grey-10 list-disc list-inside font-bold">
                      <li>
                        CHARTING SITE LIKE POOCOIN WITH FAR DIFFERENT USECASE
                      </li>
                      <li className="w-4/5">
                        EVERYTHING ABOVE IS BY DEFAULT BUT THE REST DEPENDS ON
                        GOVERNANCE
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
