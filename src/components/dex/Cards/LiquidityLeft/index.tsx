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
              setPair={(pair) => console.log(pair)}
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
              setPair={(pair) => console.log(pair)}
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
