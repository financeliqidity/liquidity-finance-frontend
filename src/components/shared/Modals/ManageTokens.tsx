import React, { useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";

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
const BackArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.9977 13.6276L8.33706 14.2882C8.05733 14.5679 7.605 14.5679 7.32824 14.2882L1.54317 8.50612C1.26344 8.22639 1.26344 7.77406 1.54317 7.49731L7.32824 1.71224C7.60797 1.43251 8.0603 1.43251 8.33706 1.71224L8.9977 2.37288C9.28041 2.65559 9.27445 3.11684 8.9858 3.3936L5.39989 6.80989H13.9525C14.3483 6.80989 14.6667 7.1283 14.6667 7.52409V8.47637C14.6667 8.87216 14.3483 9.19057 13.9525 9.19057H5.39989L8.9858 12.6069C9.27743 12.8836 9.28338 13.3449 8.9977 13.6276Z"
      fill="white"
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
const Cog = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_5414_1877" fill="white">
      <path d="M6 8.375C4.965 8.375 4.125 7.535 4.125 6.5C4.125 5.465 4.965 4.625 6 4.625C7.035 4.625 7.875 5.465 7.875 6.5C7.875 7.535 7.035 8.375 6 8.375ZM6 5.375C5.38 5.375 4.875 5.88 4.875 6.5C4.875 7.12 5.38 7.625 6 7.625C6.62 7.625 7.125 7.12 7.125 6.5C7.125 5.88 6.62 5.375 6 5.375Z" />
    </mask>
    <path
      d="M6 8.375C4.965 8.375 4.125 7.535 4.125 6.5C4.125 5.465 4.965 4.625 6 4.625C7.035 4.625 7.875 5.465 7.875 6.5C7.875 7.535 7.035 8.375 6 8.375ZM6 5.375C5.38 5.375 4.875 5.88 4.875 6.5C4.875 7.12 5.38 7.625 6 7.625C6.62 7.625 7.125 7.12 7.125 6.5C7.125 5.88 6.62 5.375 6 5.375Z"
      fill="#071022"
    />
    <path
      d="M6 7.375C5.51728 7.375 5.125 6.98272 5.125 6.5H3.125C3.125 8.08728 4.41272 9.375 6 9.375V7.375ZM5.125 6.5C5.125 6.01728 5.51728 5.625 6 5.625V3.625C4.41272 3.625 3.125 4.91272 3.125 6.5H5.125ZM6 5.625C6.48272 5.625 6.875 6.01728 6.875 6.5H8.875C8.875 4.91272 7.58728 3.625 6 3.625V5.625ZM6.875 6.5C6.875 6.98272 6.48272 7.375 6 7.375V9.375C7.58728 9.375 8.875 8.08728 8.875 6.5H6.875ZM6 4.375C4.82772 4.375 3.875 5.32772 3.875 6.5H5.875C5.875 6.43228 5.93228 6.375 6 6.375V4.375ZM3.875 6.5C3.875 7.67228 4.82772 8.625 6 8.625V6.625C5.93228 6.625 5.875 6.56772 5.875 6.5H3.875ZM6 8.625C7.17228 8.625 8.125 7.67228 8.125 6.5H6.125C6.125 6.56772 6.06772 6.625 6 6.625V8.625ZM8.125 6.5C8.125 5.32772 7.17228 4.375 6 4.375V6.375C6.06772 6.375 6.125 6.43228 6.125 6.5H8.125Z"
      fill="#071022"
      mask="url(#path-1-inside-1_5414_1877)"
    />
    <path
      d="M7.605 11.5951C7.5 11.5951 7.395 11.5801 7.29 11.5551C6.98 11.4701 6.72 11.2751 6.555 11.0001L6.495 10.9001C6.2 10.3901 5.795 10.3901 5.5 10.9001L5.445 10.9951C5.28 11.2751 5.02 11.4751 4.71 11.5551C4.395 11.6401 4.07 11.5951 3.795 11.4301L2.935 10.9351C2.63 10.7601 2.41 10.4751 2.315 10.1301C2.225 9.78514 2.27 9.43014 2.445 9.12514C2.59 8.87014 2.63 8.64014 2.545 8.49514C2.46 8.35014 2.245 8.26514 1.95 8.26514C1.22 8.26514 0.625 7.67014 0.625 6.94014V6.06014C0.625 5.33014 1.22 4.73514 1.95 4.73514C2.245 4.73514 2.46 4.65014 2.545 4.50514C2.63 4.36014 2.595 4.13014 2.445 3.87514C2.27 3.57014 2.225 3.21014 2.315 2.87014C2.405 2.52514 2.625 2.24014 2.935 2.06514L3.8 1.57014C4.365 1.23514 5.11 1.43014 5.45 2.00514L5.51 2.10514C5.805 2.61514 6.21 2.61514 6.505 2.10514L6.56 2.01014C6.9 1.43014 7.645 1.23514 8.215 1.57514L9.075 2.07014C9.38 2.24514 9.6 2.53014 9.695 2.87514C9.785 3.22014 9.74 3.57514 9.565 3.88014C9.42 4.13514 9.38 4.36514 9.465 4.51014C9.55 4.65514 9.765 4.74014 10.06 4.74014C10.79 4.74014 11.385 5.33514 11.385 6.06514V6.94514C11.385 7.67514 10.79 8.27014 10.06 8.27014C9.765 8.27014 9.55 8.35514 9.465 8.50014C9.38 8.64514 9.415 8.87514 9.565 9.13014C9.74 9.43514 9.79 9.79514 9.695 10.1351C9.605 10.4801 9.385 10.7651 9.075 10.9401L8.21 11.4351C8.02 11.5401 7.815 11.5951 7.605 11.5951ZM6 9.74514C6.445 9.74514 6.86 10.0251 7.145 10.5201L7.2 10.6151C7.26 10.7201 7.36 10.7951 7.48 10.8251C7.6 10.8551 7.72 10.8401 7.82 10.7801L8.685 10.2801C8.815 10.2051 8.915 10.0801 8.955 9.93014C8.995 9.78014 8.975 9.62514 8.9 9.49514C8.615 9.00514 8.58 8.50014 8.8 8.11514C9.02 7.73014 9.475 7.51014 10.045 7.51014C10.365 7.51014 10.62 7.25514 10.62 6.93514V6.05514C10.62 5.74014 10.365 5.48014 10.045 5.48014C9.475 5.48014 9.02 5.26014 8.8 4.87514C8.58 4.49014 8.615 3.98514 8.9 3.49514C8.975 3.36514 8.995 3.21014 8.955 3.06014C8.915 2.91014 8.82 2.79014 8.69 2.71014L7.825 2.21514C7.61 2.08514 7.325 2.16014 7.195 2.38014L7.14 2.47514C6.855 2.97014 6.44 3.25014 5.995 3.25014C5.55 3.25014 5.135 2.97014 4.85 2.47514L4.795 2.37514C4.67 2.16514 4.39 2.09014 4.175 2.21514L3.31 2.71514C3.18 2.79014 3.08 2.91514 3.04 3.06514C3 3.21514 3.02 3.37014 3.095 3.50014C3.38 3.99014 3.415 4.49514 3.195 4.88014C2.975 5.26514 2.52 5.48514 1.95 5.48514C1.63 5.48514 1.375 5.74014 1.375 6.06014V6.94014C1.375 7.25514 1.63 7.51514 1.95 7.51514C2.52 7.51514 2.975 7.73514 3.195 8.12014C3.415 8.50514 3.38 9.01014 3.095 9.50014C3.02 9.63014 3 9.78514 3.04 9.93514C3.08 10.0851 3.175 10.2051 3.305 10.2851L4.17 10.7801C4.275 10.8451 4.4 10.8601 4.515 10.8301C4.635 10.8001 4.735 10.7201 4.8 10.6151L4.855 10.5201C5.14 10.0301 5.555 9.74514 6 9.74514Z"
      fill="#071022"
    />
  </svg>
);

export default function ManageTokens({ setParentModal }) {
  const [showModal, setShowModal] = useState(false);

  // const connectWallet = async () => {
  //   if (typeof window.ethereum !== "undefined") {
  //     await window.ethereum.request({ method: "eth_requestAccounts" });

  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     console.log("provider", provider);

  //     console.log("window.ethereum", window.ethereum);
  //   }
  // };

  const handleOpen = () => {
    // setParentModal(false);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setParentModal(true);
  };

  const List = () => (
    <>
      <div className="p-6 border-t border-grey_50">
        <ul>
          <li className="p-2 rounded-2xl flex justify-between items-center bg-grey_50 mb-2">
            <div className="flex items-center">
              <img src="/assets/images/gemini.png" alt="..." />
              <div className="ml-2">
                <span className="block font-bold">Gemini Token List</span>
                <p className="flex items-center">
                  <span className="text-xs mr-1">28 tokens</span>
                  <Cog />
                </p>
              </div>
            </div>
            <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </li>
          <li className="p-2 rounded-2xl flex justify-between items-center bg-grey_50 mb-2">
            <div className="flex items-center">
              <img src="/assets/images/coin-gecko.png" alt="..." />
              <div className="ml-2">
                <span className="block font-bold">CoinGecko</span>
                <p className="flex items-center">
                  <span className="text-xs mr-1">5126 tokens</span>
                  <Cog />
                </p>
              </div>
            </div>
            <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </li>
          <li className="p-2 rounded-2xl flex justify-between items-center bg-grey_50 mb-2">
            <div className="flex items-center">
              <img src="/assets/images/cmc.png" alt="..." />
              <div className="ml-2">
                <span className="block font-bold">Coinmarketcap</span>
                <p className="flex items-center">
                  <span className="text-xs mr-1">5775 tokens</span>
                  <Cog />
                </p>
              </div>
            </div>
            <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </li>
          <li className="p-2 rounded-2xl flex justify-between items-center bg-grey_50 mb-2">
            <div className="flex items-center">
              <img src="/assets/images/aave.png" alt="..." />
              <div className="ml-2">
                <span className="block font-bold">Aave Token List</span>
                <p className="flex items-center">
                  <span className="text-xs mr-1">81 tokens</span>
                  <Cog />
                </p>
              </div>
            </div>
            <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex p-6 rounded-b">
        <p className="text-sm text-grey_20 text-left">
          Tip: Custom tokens are stored locally in your browser
        </p>
      </div>
    </>
  );

  const Token = () => (
    <>
      <div className="p-6 border-t border-grey_50">
        <p className="font-bold py-12">0 Custom Tokens</p>
      </div>

      <div className="flex p-6 rounded-b">
        <p className="text-sm text-grey_20 text-left">
          Tip: Custom tokens are stored locally in your browser
        </p>
      </div>
    </>
  );

  const [active, setActive] = useState(0);

  return (
    <>
      <button className="flex" type="button" onClick={handleOpen}>
        <Edit className="cursor-pointer" />
        <p className="ml-2 text-primary font-normal text-base text-center cursor-pointer">
          Manage Token Lists
        </p>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_70 outline-none focus:outline-none border border-grey_50">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <button onClick={handleClose}>
                    <BackArrow />
                  </button>
                  <h3 className="text-lg font-semibold text-white leading-5">
                    Manage
                  </h3>
                  <button
                    className="p-1  bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={handleClose}
                  >
                    <Close />
                  </button>
                </div>
                <div>
                  {/*body*/}
                  <div className="p-6 border-t border-grey_50">
                    <div className="rounded-2xl p-2 bg-grey_50 flex justify-between items-centered">
                      <button
                        className={`w-12/25 py-2 ${
                          active === 0 ? "bg-grey_70" : "bg-transparent"
                        } font-bold grey-10 rounded-2xl`}
                        onClick={() => setActive(0)}
                      >
                        Lists
                      </button>
                      <button
                        className={`w-12/25 py-2 ${
                          active === 1 ? "bg-grey_70" : "bg-transparent"
                        } font-bold grey-10 rounded-2xl`}
                        onClick={() => setActive(1)}
                      >
                        Tokens
                      </button>
                    </div>
                    <div className="mt-8">
                      <input
                        type="text"
                        className="px-4 py-2 rounded-2xl border border-grey_20 w-full bg-transparent text-grey_20"
                        placeholder={`${
                          active === 0
                            ? "https:// or ipfs:// or ENS name"
                            : "0x0000"
                        }`}
                      />
                    </div>
                  </div>
                  <>{active === 0 && <List />}</>
                  <>{active === 1 && <Token />}</>
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
