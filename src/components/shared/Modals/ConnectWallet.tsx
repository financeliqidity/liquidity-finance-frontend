import React, { useState, useContext } from "react";
import Image from "next/image";

import meta_mask from "../../../../public/assets/icons/meta-mask.svg";
import bsc_wallet from "../../../../public/assets/icons/bsc-wallet.svg";
import walletconect from "../../../../public/assets/icons/walletconnect.svg";
import portis from "../../../../public/assets/icons/portis.svg";
import more from "../../../../public/assets/icons/more.svg";
import { WalletContext } from "../../../context";

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

export default function ConnectWallet() {
  const [showModal, setShowModal] = useState(false);
  const [walletTerms, setWalletTerms] = useState(false);

  const { connectWallet } = useContext(WalletContext);

  const handleCheck = (event) => setWalletTerms(event.target.checked);

  return (
    <>
      <button
        className="btn-primary p-4 rounded-lg font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Connect Wallet
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5">
                    Connect Wallet
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
                  <div className="flex mt-1 rounded-2xl p-4 bg-grey_30">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="wallet_terms"
                        className="form-checkbox"
                        //@ts-ignore
                        value={walletTerms}
                        onChange={handleCheck}
                      />
                      <p className="ml-2 text-sm">
                        I have read, understand, and agree to the
                        <span className="underline text-primary font-bold ml-1">
                          Terms of Service.
                        </span>
                      </p>
                    </label>
                  </div>
                  <div className="mt-6">
                    <button
                      disabled={!walletTerms}
                      className={`cursor-pointer p-4 flex items-center rounded-2xl mb-4 w-full ${
                        walletTerms ? "bg-grey_20" : "bg-grey_30"
                      }`}
                      onClick={connectWallet}
                    >
                      <Image
                        src={meta_mask}
                        alt="meta mask"
                        className={`${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                        width={32}
                        height={32}
                      />
                      <span
                        className={`text-sm font-semibold ml-4 ${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        Meta Mask
                      </span>
                    </button>
                    <button
                      disabled={!walletTerms}
                      className={`cursor-pointer p-4 flex items-center rounded-2xl mb-4 w-full ${
                        walletTerms ? "bg-grey_20" : "bg-grey_30"
                      }`}
                      // onClick={connectWallet}
                    >
                      <Image
                        src={bsc_wallet}
                        alt="bsc_wallet"
                        className={`${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                        width={32}
                        height={32}
                      />
                      <span
                        className={`text-sm font-semibold ml-4 ${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        Binance Chain Wallet
                      </span>
                    </button>
                    <button
                      disabled={!walletTerms}
                      className={`cursor-pointer p-4 flex items-center rounded-2xl mb-4 w-full ${
                        walletTerms ? "bg-grey_20" : "bg-grey_30"
                      }`}
                    >
                      <Image
                        src={walletconect}
                        alt="wallet connect"
                        className={`${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                        width={32}
                        height={32}
                      />
                      <span
                        className={`text-sm font-semibold ml-4 ${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        WalletConnect
                      </span>
                    </button>
                    <button
                      disabled={!walletTerms}
                      className={`cursor-pointer p-4 flex items-center rounded-2xl mb-4 w-full ${
                        walletTerms ? "bg-grey_20" : "bg-grey_30"
                      }`}
                    >
                      <Image
                        src={portis}
                        alt="portis"
                        className={`${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                        width={32}
                        height={32}
                      />
                      <span
                        className={`text-sm font-semibold ml-4 ${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        Portis
                      </span>
                    </button>
                    <button
                      disabled={!walletTerms}
                      className={`cursor-pointer p-4 flex items-center rounded-2xl mb-4 w-full ${
                        walletTerms ? "bg-grey_20" : "bg-grey_30"
                      }`}
                    >
                      <Image
                        src={more}
                        alt="more"
                        className={`${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                        width={32}
                        height={32}
                      />
                      <span
                        className={`text-sm font-semibold ml-4 ${
                          walletTerms ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        More
                      </span>
                    </button>
                  </div>
                </div>
                {/*footer*/}
                <div className="px-6">
                  <hr />
                </div>
                <div className="flex p-6 rounded-b justify-center">
                  <p className="font-semibold text-base text-left">
                    Don’t have a wallet?
                    <span className="text-primary font-bold ml-1">
                      How to connect
                    </span>
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
