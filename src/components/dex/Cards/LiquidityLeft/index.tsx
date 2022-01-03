import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles/index.module.css";
import SelectPair from "../../Modals/SelectPair";
import SocialLinks from "../../Arcodions/SocialLinks";
import SelectPool from "../../Modals/SelectPool";
import Settings from "../../Modals/Settings";
import TrxnHistory from "../../Modals/TrxnHistory";
import AddMedia from "../../Containers/AddMediaLinks";

const Warning = () => (
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
      d="M1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001ZM16.667 10.0001C16.667 13.682 13.6822 16.6667 10.0003 16.6667C6.31843 16.6667 3.33366 13.682 3.33366 10.0001C3.33366 6.31818 6.31843 3.33341 10.0003 3.33341C13.6822 3.33341 16.667 6.31818 16.667 10.0001ZM10.8337 13.3334V15.0001H9.16699V13.3334H10.8337ZM10.8337 11.6667V5.00008H9.16699V11.6667H10.8337Z"
      fill="#B7BECB"
    />
  </svg>
);
const Cog = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.91 10.09C14.4165 10.5965 14.7011 11.2836 14.7011 12C14.7011 12.7164 14.4165 13.4034 13.91 13.91C13.4034 14.4165 12.7164 14.7011 12 14.7011C11.2836 14.7011 10.5965 14.4165 10.09 13.91C9.58341 13.4034 9.29883 12.7164 9.29883 12C9.29883 11.6453 9.3687 11.294 9.50444 10.9663C9.64019 10.6386 9.83915 10.3408 10.09 10.09C10.3408 9.83915 10.6386 9.64019 10.9663 9.50444C11.294 9.3687 11.6453 9.29883 12 9.29883C12.7164 9.29883 13.4034 9.58341 13.91 10.09"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.25018 12C5.25018 12.297 5.27718 12.594 5.31318 12.882L3.72518 14.124C3.55486 14.2574 3.43841 14.4478 3.39726 14.6602C3.35611 14.8725 3.39301 15.0926 3.50118 15.28L4.91318 17.723C5.02131 17.9101 5.19328 18.0519 5.39754 18.1224C5.6018 18.193 5.82464 18.1875 6.02518 18.107L7.44718 17.536C7.5856 17.4824 7.73501 17.4634 7.88244 17.4807C8.02987 17.4979 8.17087 17.5509 8.29318 17.635C8.51318 17.781 8.74118 17.915 8.97718 18.035C9.24718 18.172 9.44318 18.417 9.48618 18.717L9.70318 20.23C9.76618 20.672 10.1452 21 10.5912 21H13.4082C13.6241 21 13.8327 20.9221 13.9959 20.7807C14.159 20.6393 14.2656 20.4437 14.2962 20.23L14.5132 18.718C14.5368 18.5712 14.5958 18.4323 14.685 18.3134C14.7741 18.1944 14.8909 18.0989 15.0252 18.035C15.2602 17.917 15.4872 17.784 15.7062 17.639C15.8288 17.554 15.9704 17.5002 16.1185 17.4825C16.2667 17.4647 16.4169 17.4834 16.5562 17.537L17.9752 18.107C18.1757 18.1873 18.3985 18.1927 18.6027 18.1221C18.8069 18.0516 18.9789 17.9099 19.0872 17.723L20.4992 15.28C20.6073 15.0926 20.6442 14.8725 20.6031 14.6602C20.5619 14.4478 20.4455 14.2574 20.2752 14.124L18.6872 12.882C18.7232 12.594 18.7502 12.297 18.7502 12C18.7502 11.703 18.7232 11.406 18.6872 11.118L20.2752 9.876C20.4455 9.74261 20.5619 9.55222 20.6031 9.33984C20.6442 9.12745 20.6073 8.90735 20.4992 8.72L19.0872 6.277C18.979 6.08991 18.8071 5.94809 18.6028 5.87755C18.3986 5.80702 18.1757 5.8125 17.9752 5.893L16.5562 6.463C16.4169 6.51634 16.2667 6.53492 16.1186 6.51715C15.9705 6.49938 15.8289 6.44578 15.7062 6.361C15.4873 6.21555 15.2599 6.08332 15.0252 5.965C14.8909 5.90113 14.7741 5.8056 14.685 5.68663C14.5958 5.56766 14.5368 5.4288 14.5132 5.282L14.2972 3.77C14.2666 3.55627 14.16 3.36074 13.9969 3.2193C13.8337 3.07785 13.6251 2.99999 13.4092 3H10.5922C10.3763 2.99999 10.1676 3.07785 10.0045 3.2193C9.84137 3.36074 9.73474 3.55627 9.70418 3.77L9.48618 5.284C9.46252 5.43026 9.40389 5.56865 9.31527 5.68739C9.22665 5.80613 9.11067 5.90171 8.97718 5.966C8.74118 6.086 8.51318 6.221 8.29318 6.366C8.17049 6.44971 8.0293 6.50236 7.88176 6.51943C7.73422 6.5365 7.58474 6.51748 7.44618 6.464L6.02518 5.893C5.82464 5.8125 5.6018 5.80702 5.39754 5.87755C5.19328 5.94809 5.02131 6.08991 4.91318 6.277L3.50118 8.72C3.39301 8.90735 3.35611 9.12745 3.39726 9.33984C3.43841 9.55222 3.55486 9.74261 3.72518 9.876L5.31318 11.118C5.27397 11.4104 5.25293 11.705 5.25018 12V12Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Retry = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.9811C22.0102 17.4908 17.5169 21.9961 12.0072 21.9999C9.62761 22.0016 7.44181 21.1721 5.72411 19.7858C5.27746 19.4253 5.24407 18.7559 5.64996 18.35L6.10427 17.8957C6.45141 17.5486 7.0056 17.5106 7.3902 17.8157C8.65572 18.8199 10.2573 19.4193 12 19.4193C16.101 19.4193 19.4193 16.1004 19.4193 12C19.4193 7.89899 16.1004 4.58064 12 4.58064C10.0317 4.58064 8.24399 5.34552 6.91661 6.59403L8.96314 8.64056C9.36959 9.04701 9.08173 9.74193 8.50697 9.74193H2.64516C2.28883 9.74193 2 9.4531 2 9.09677V3.23496C2 2.6602 2.69492 2.37234 3.10137 2.77875L5.09217 4.76955C6.88746 3.05387 9.32064 2 12 2C17.5165 2 21.9898 6.46693 22 11.9811ZM14.7052 15.1579L15.1012 14.6486C15.4294 14.2267 15.3534 13.6187 14.9315 13.2906L13.2903 12.0141V7.80645C13.2903 7.27197 12.857 6.83871 12.3226 6.83871H11.6774C11.1429 6.83871 10.7097 7.27197 10.7097 7.80645V13.2762L13.3471 15.3276C13.769 15.6557 14.377 15.5797 14.7052 15.1579Z"
      fill="#B7BECB"
    />
  </svg>
);
const Plus = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 13V20C13.5 20.5523 13.0523 21 12.5 21C11.9477 21 11.5 20.5523 11.5 20V13H4.5C3.94772 13 3.5 12.5523 3.5 12C3.5 11.4477 3.94772 11 4.5 11H11.5V4C11.5 3.44772 11.9477 3 12.5 3C13.0523 3 13.5 3.44772 13.5 4V11H20.5C21.0523 11 21.5 11.4477 21.5 12C21.5 12.5523 21.0523 13 20.5 13H13.5Z"
      fill="white"
    />
  </svg>
);
const CaretDown = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.50033 4.66675L8.50033 8.66675L12.5003 4.66675L13.8337 6.00008L8.50033 11.3334L3.16699 6.00008L4.50033 4.66675Z"
      fill="#7C8497"
    />
  </svg>
);

function LiquidityLeft({ asDevSetter, asDeveloper, setPage, setTab }) {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showLastModal, setShowLastModal] = useState(false);
  const [showPoolModal, setShowPoolModal] = useState(false);

  const [addMediaModal, setAddMedialModal] = useState(false);

  return (
    <>
      {addMediaModal && (
        <AddMedia
          showModal={addMediaModal}
          setShowModal={setAddMedialModal}
          setTab={setTab}
        />
      )}
      <div
        className={`w-full md:w-12/25 bg-blue_grey px-4 py-8 md:px-8 md:py-12 rounded-lg ${styles.left_}`}
      >
        <div className="w-full flex justify-between bg-grey_50 rounded-r-lg rounded-l-lg">
          <button
            className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg rounded-l-lg font-bold md:text-xl text-base"
            onClick={() => setPage("swap")}
          >
            Swap
          </button>
          <button className="md:py-5 py-3 w-1/3 btn-primary border-primary border-r border-solid rounded-r-lg rounded-l-lg font-bold md:text-xl text-base">
            Liquidity
          </button>
          <button className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
            Loan
          </button>
        </div>
        <div className="flex justify-between items-center mb-6 mt-8">
          <div className="flex items-center">
            <Warning />
            <span className="ml-1 text-sm font-medium">
              Add liquidity to receive LP tokens
            </span>
          </div>
          <div className="flex items-center">
            <Settings />
            <TrxnHistory />
          </div>
        </div>
        <div className="relative">
          <span className="block text-sm text-grey_20 mb-4">Select a pair</span>
          <div className="flex justify-between items-center cursor-pointer">
            <SelectPair
              content={
                <div
                  className="flex w-2/5 justify-between items-center rounded-lg border border-solid border-grey_20 py-3 px-4 cursor-pointer"
                  onClick={() => setShowFirstModal(true)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/icons/eth-32.png"
                      alt="..."
                      className="w-6 h-6 mr-2"
                    />
                    <span className="font-bold text-sm">ETH</span>
                  </div>
                  <CaretDown />
                </div>
              }
              showModal={showFirstModal}
              setShowModal={setShowFirstModal}
            />
            <Plus />
            <SelectPair
              content={
                <div
                  className="flex w-2/5 justify-between items-center rounded-lg border border-solid border-grey_20 py-3 px-4 cursor-pointer"
                  onClick={() => setShowLastModal(true)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/icons/eth-32.png"
                      alt="..."
                      className="w-6 h-6 mr-2"
                    />
                    <span className="font-bold text-sm">ETH</span>
                  </div>
                  <CaretDown />
                </div>
              }
              showModal={showLastModal}
              setShowModal={setShowLastModal}
            />
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="select-a-pool text-tertiary text-sm flex w-full justify-between align-center">
            <span>Select a pool</span>
            <button className="isLink font-bold">Create a pool</button>
          </div>
          <div className="mt-2">
            <SelectPool
              content={
                <div
                  className="flex w-full justify-between items-center rounded-lg border border-solid border-grey_20 py-3 px-4 cursor-pointer"
                  onClick={() => setShowPoolModal(true)}
                >
                  <span className="font-bold text-sm">0x56c1..ee21</span>
                  <CaretDown />
                </div>
              }
              showModal={showPoolModal}
              setShowModal={setShowPoolModal}
            />
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex justify-between">
            <span className="text-sm text-tertiary">Total Liquidity</span>
            <div className="flex flex-col">
              <div className="flex items-center justify-end mb-2">
                <span className="text-sm text-white font-bold mr-1">
                  10,674.1234
                </span>
                <img
                  src="/assets/icons/eth.png"
                  alt="..."
                  className="w-6 h-6"
                />
              </div>
              <div className="flex items-center justify-end">
                <span className="text-sm text-white font-bold mr-1">
                  12,234,123.672
                </span>
                <img
                  src="/assets/icons/usdc.png"
                  alt="..."
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
          <div
            className={`flex ${
              asDeveloper ? "justify-between" : "justify-end"
            } mt-8`}
          >
            {asDeveloper && (
              <div className="flex text-tertiary items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 self-center rounded-md bg-transparent mr-1 "
                />
                <span className="text-sm text-white">
                  Lock Liquidity,
                  <Link href="/#learn_more">
                    <a className="isLink ml-1">Learn more</a>
                  </Link>
                </span>
              </div>
            )}
            <div className="flex justify-center items-center h-5">
              <span className="text-tertiary text-sm">Add as a developer</span>
              <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  onClick={() => asDevSetter()}
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>
        <>
          {asDeveloper ? (
            <button
              type="submit"
              className="mt-8 w-full btn-primary text-grey-50 text-base font-bold py-4 rounded-lg"
              onClick={() => setAddMedialModal(true)}
            >
              Add liquidity as developer
            </button>
          ) : (
            <button
              type="submit"
              className="mt-8 w-full btn-primary text-grey-50 text-base font-bold py-4 rounded-lg"
              onClick={() => setTab("add")}
            >
              Add liquidity as user
            </button>
          )}

          {/* <button
						type='submit'
						disabled={true}
						className='mt-8 w-full bg-tertiary text-grey-50 text-md font-light py-2 rounded-lg'
					>
						Connect Wallet to continue
					</button> */}
        </>
        <div className="mt-8 p-6 w-full bg-tertiary rounded-md">
          <p className="text-sm font-light text-gray-50 ">
            By adding liquidity, you will earn fees proportional to your share
            of the pool on all trades for this pair. Fees are added to the pool,
            accrue in real time, and can be claimed when you withdraw your
            liquidity
          </p>
        </div>
        <SocialLinks />
      </div>
    </>
  );
}

export default LiquidityLeft;
