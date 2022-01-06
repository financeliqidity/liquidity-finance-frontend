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
const Verified = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12C22 17.5229 17.5229 22 12 22C6.47714 22 2 17.5229 2 12C2 6.47714 6.47714 2 12 2C17.5229 2 22 6.47714 22 12ZM10.8433 17.2949L18.2627 9.87556C18.5146 9.62363 18.5146 9.21512 18.2627 8.96319L17.3503 8.05081C17.0983 7.79883 16.6898 7.79883 16.4379 8.05081L10.3871 14.1015L7.56214 11.2766C7.3102 11.0246 6.90169 11.0246 6.64972 11.2766L5.73734 12.189C5.4854 12.4409 5.4854 12.8494 5.73734 13.1013L9.93089 17.2949C10.1829 17.5469 10.5913 17.5469 10.8433 17.2949Z"
      fill="#2669F5"
    />
  </svg>
);
const Circle = ({ fill }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00065 2.62431C10.9719 2.62431 13.377 5.0289 13.377 8.00065C13.377 10.9719 10.9724 13.377 8.00065 13.377C5.02936 13.377 2.62431 10.9724 2.62431 8.00065C2.62431 5.02936 5.0289 2.62431 8.00065 2.62431ZM8.00065 1.33398C4.31874 1.33398 1.33398 4.31874 1.33398 8.00065C1.33398 11.6826 4.31874 14.6673 8.00065 14.6673C11.6826 14.6673 14.6673 11.6826 14.6673 8.00065C14.6673 4.31874 11.6826 1.33398 8.00065 1.33398ZM8.00065 5.85011C6.81294 5.85011 5.85011 6.81294 5.85011 8.00065C5.85011 9.18837 6.81294 10.1512 8.00065 10.1512C9.18837 10.1512 10.1512 9.18837 10.1512 8.00065C10.1512 6.81294 9.18837 5.85011 8.00065 5.85011Z"
      fill={`${fill}`}
    />
  </svg>
);
const Adjust = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12C2 17.5228 6.47714 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47718 17.5228 2 12 2C6.47718 2 2 6.47714 2 12ZM12 19.4194V4.58065C16.101 4.58065 19.4194 7.89964 19.4194 12C19.4194 16.101 16.1004 19.4194 12 19.4194Z"
      fill="white"
    />
  </svg>
);
const CaretDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.66602 6.00065L7.99935 11.334L13.3327 6.00065L11.9993 4.66732L7.99935 8.66732L3.99935 4.66732L2.66602 6.00065Z"
      fill="white"
    />
  </svg>
);
const CaretUp = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.334 10.0003L8.00065 4.66699L2.66732 10.0003L4.00065 11.3337L8.00065 7.33366L12.0007 11.3337L13.334 10.0003Z"
      fill="white"
    />
  </svg>
);

export default function SelectPool({ showModal, setShowModal, content }) {
  const [showMore, setShowMore] = useState(false);
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
                    <span className="ml-2">Select a pool</span>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-0.5 pb-6 flex-auto">
                  <div className="relative pull-right pr-4 md:pr-0">
                    <input
                      type="search"
                      placeholder="Enter the token symbol or address"
                      className="w-full bg-transparent text-sm text-grey_20 transition border border-solid border-grey_20 focus:outline-none focus:border-gray-700 rounded-lg py-2 px-4 pl-10 appearance-none leading-normal"
                    />
                    <div
                      className="absolute search-icon"
                      style={{ top: "0.75rem", left: "1rem" }}
                    >
                      <Magnification />
                    </div>
                  </div>
                  <div className="py-6 px-4 bg-grey_50 rounded-xl mt-5">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-base font-bold">0x6c1..ee21</span>
                      <Verified />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-2/5">
                        <img src="/assets/images/chart.svg" alt="..." />
                      </div>
                      <div className="stats w-3/5">
                        <p className="flex justify-between items-center mb-6">
                          <Circle fill="#2669F5" />
                          <span className="ml-3">10,674 ETH (72.03%)</span>
                        </p>
                        <p className="flex justify-between items-center">
                          <Circle fill="#FFD95C" />
                          <span className="ml-3">10,674 ETH (72.03%)</span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex items-center">
                        <Adjust />
                        <span className="text-sm ml-2 grey-10">Single</span>
                      </div>
                      {showMore ? (
                        <button
                          className="flex items-center cursor-pointer"
                          onClick={() => setShowMore(!showMore)}
                        >
                          <span className="text-sm mr-2 grey-10">Less</span>
                          <CaretUp />
                        </button>
                      ) : (
                        <button
                          className="flex items-center cursor-pointer"
                          onClick={() => setShowMore(!showMore)}
                        >
                          <span className="text-sm mr-2 grey-10">More</span>
                          <CaretDown />
                        </button>
                      )}
                    </div>
                    {showMore && (
                      <div className="text-sm grey-10 pt-5">
                        <p className="mb-2">Single token market making</p>
                        <p className="mb-2">Fee Rate = 0%</p>
                        <p className="mb-2">Slippage Coefficient = 0.6</p>
                        <p className="flex items-center justify-between">
                          <span>Created by 0x6BDA...EF21 </span>
                          <span>10/04/2021</span>
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="mt-5 text-sm grey-10">
                    If this pool is not suitable, you can
                    <span className="px-1 font-semibold text-primary underline">
                      create
                    </span>
                    one
                  </p>
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
