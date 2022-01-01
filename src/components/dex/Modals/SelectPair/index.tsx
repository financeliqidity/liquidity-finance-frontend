import React, { useState } from "react";
import Image from "next/image";
import ManageTokens from "../../../shared/Modals/ManageTokens";

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
const Back = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2469 17.0342L10.4211 17.86C10.0714 18.2097 9.50603 18.2097 9.16009 17.86L1.92875 10.6324C1.57909 10.2827 1.57909 9.71734 1.92875 9.37139L9.16009 2.14006C9.50975 1.79039 10.0752 1.79039 10.4211 2.14006L11.2469 2.96586C11.6003 3.31924 11.5929 3.89581 11.232 4.24176L6.74964 8.51211H17.4404C17.9352 8.51211 18.3332 8.91013 18.3332 9.40487V10.5952C18.3332 11.09 17.9352 11.488 17.4404 11.488H6.74964L11.232 15.7583C11.5966 16.1043 11.604 16.6808 11.2469 17.0342Z"
      fill="white"
    />
  </svg>
);
const Magnification = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4842 11.8609L10.8881 9.2648C10.771 9.14762 10.6121 9.08252 10.4455 9.08252H10.021C10.7397 8.16334 11.1667 7.0072 11.1667 5.74951C11.1667 2.75762 8.74251 0.333374 5.75061 0.333374C2.75872 0.333374 0.334473 2.75762 0.334473 5.74951C0.334473 8.74141 2.75872 11.1657 5.75061 11.1657C7.0083 11.1657 8.16444 10.7386 9.08362 10.0199V10.4444C9.08362 10.611 9.14872 10.7699 9.26589 10.887L11.862 13.4831C12.1068 13.7279 12.5026 13.7279 12.7447 13.4831L13.4816 12.7462C13.7264 12.5015 13.7264 12.1057 13.4842 11.8609ZM5.75061 9.08252C3.90964 9.08252 2.4176 7.59308 2.4176 5.74951C2.4176 3.90855 3.90704 2.4165 5.75061 2.4165C7.59158 2.4165 9.08362 3.90594 9.08362 5.74951C9.08362 7.59048 7.59418 9.08252 5.75061 9.08252Z"
      fill="#7C8497"
    />
  </svg>
);
const Edit = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <path
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke="#0A4EDB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
      stroke="#0A4EDB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899"
      stroke="#0A4EDB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SelectPair({ showModal, setShowModal, content }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {content}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12 border border-solid border-grey_20 rounded-3xl">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full bg-blue_grey outline-none focus:outline-none rounded-3xl">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6">
                  <h3 className="text-lg font-semibold text-white leading-5 flex items-center">
                    <Back />
                    <span className="ml-2">Select a pair</span>
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
                  <div className="relative pull-right pr-4 md:pr-0">
                    <input
                      type="search"
                      placeholder="Enter the token symbol or address"
                      className="w-full bg-transparent text-sm text-grey_20 transition border border-solid border-grey_20 focus:outline-none rounded-lg py-2 px-4 pl-10 appearance-none leading-normal"
                    />
                    <div
                      className="absolute search-icon"
                      style={{ top: "0.75rem", left: "1rem" }}
                    >
                      <Magnification />
                    </div>
                  </div>
                  <div className="mt-6 mb-5">
                    <h4 className="font-bold mb-4">Common base</h4>
                    <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-1">
                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li className="flex justify-between items-center mb-5 cursor-pointer px-2 py-1 hover:bg-grey_50 rounded-lg">
                      <div className="flex items-center">
                        <img
                          src="/assets/images/BTC_logo.png"
                          alt="..."
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-sm font-bold">BNB</span>
                      </div>
                      <span className="font-bold text-base grey-10">0</span>
                    </li>
                    <li className="flex justify-between items-center mb-5 cursor-pointer px-2 py-1 hover:bg-grey_50 rounded-lg">
                      <div className="flex items-center">
                        <img
                          src="/assets/images/BTC_logo.png"
                          alt="..."
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-sm font-bold">BNB</span>
                      </div>
                      <span className="font-bold text-base grey-10">0</span>
                    </li>
                    <li className="flex justify-between items-center mb-5 cursor-pointer px-2 py-1 btn-primary rounded-lg">
                      <div className="flex items-center">
                        <img
                          src="/assets/images/BTC_logo.png"
                          alt="..."
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-sm font-bold">BNB</span>
                      </div>
                      <span className="font-bold text-base grey-10">0</span>
                    </li>
                    <li className="flex justify-between items-center mb-5 cursor-pointer px-2 py-1 hover:bg-grey_50 rounded-lg">
                      <div className="flex items-center">
                        <img
                          src="/assets/images/BTC_logo.png"
                          alt="..."
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-sm font-bold">BNB</span>
                      </div>
                      <span className="font-bold text-base grey-10">0</span>
                    </li>
                    <li className="flex justify-between items-center mb-5 cursor-pointer px-2 py-1 hover:bg-grey_50 rounded-lg">
                      <div className="flex items-center">
                        <img
                          src="/assets/images/BTC_logo.png"
                          alt="..."
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-sm font-bold">BNB</span>
                      </div>
                      <span className="font-bold text-base grey-10">0</span>
                    </li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex p-6 justify-center bg-dark_grey items-center rounded-b-3xl">
                  <ManageTokens setParentModal={setShowModal} />
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
