import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { trimAddress } from "../../../libs/helper";
import { useActiveWeb3React } from "../../../hooks";
import {
  isTransactionRecent,
  useAllTransactions,
} from "../../../redux/transactions/hooks";
import { TransactionDetails } from "../../../redux/transactions/reducer";

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
const Direct = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12L21 3V10V3H14"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V15"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Copy = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17H5C4.46957 17 3.96086 16.7893 3.58579 16.4142C3.21071 16.0391 3 15.5304 3 15V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.895 7H8.105C7.49472 7 7 7.49472 7 8.105V19.895C7 20.5053 7.49472 21 8.105 21H19.895C20.5053 21 21 20.5053 21 19.895V8.105C21 7.49472 20.5053 7 19.895 7Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Switch = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10H16L14 8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14H8L10 16"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21V21C16.971 21 21 16.971 21 12V12C21 7.029 16.971 3 12 3V3C7.029 3 3 7.029 3 12V12C3 16.971 7.029 21 12 21Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Arrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.95 7.04999L7.04999 16.95"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 7L16.95 7.049L17 14"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Tick = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 6L8.625 18.375L3 12.75"
      stroke="#45C581"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Cancel = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4L20 20"
      stroke="#F84239"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 20L20 4"
      stroke="#F84239"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b7becb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-loader"
  >
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

const newTransactionsFirst = (a: TransactionDetails, b: TransactionDetails) =>
  b.addedTime - a.addedTime;

const getRowStatus = (sortedRecentTransaction: TransactionDetails) => {
  const { hash, receipt } = sortedRecentTransaction;

  if (!hash) {
    return { icon: <Loader />, color: "text" };
  }

  if (hash && receipt?.status === 1) {
    return { icon: <Tick />, color: "success" };
  }

  return { icon: <Cancel />, color: "failure" };
};

export default function WalletDetails({ show, setShowModal, wallet }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const { account, chainId } = useActiveWeb3React();
  const allTransactions = useAllTransactions();

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);

  console.log("Received transactions", sortedRecentTransactions);

  useEffect(() => setIsBrowser(true), []);

  const modalContent = show ? (
    <React.Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80 text-white">
        <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
          {/*content*/}
          <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between py-6 px-6 rounded-t">
              <h3 className="text-lg font-semibold text-white leading-5">
                Wallet
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <Close />
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 pb-10 flex-auto">
              <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-bold">{trimAddress(account)}</p>
                <div className="flex items-center">
                  <a
                    target="_blank"
                    href={"https://bscscan.com/address/" + account}
                    rel="noopener noreferrer"
                    className="mr-2 p-2.5 rounded-xl bg-grey_30"
                  >
                    <Direct />
                  </a>
                  <button className="p-2.5 rounded-xl bg-grey_30">
                    <Copy />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="px-4 py-2.5 rounded-xl bg-grey_30 text-sm font-bold flex items-center">
                  <Switch /> <span className="ml-2">Switch Wallet</span>
                </button>
                <button className="px-4 py-2.5 rounded-xl btn-primary text-sm font-bold">
                  <span className="">Disconnect Wallet</span>
                </button>
              </div>
              <div className="mt-10">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm font-semibold">Recent Transactions</p>
                  <p className="text-xs text-primary font-bold">Clear All</p>
                </div>
                <ul className="font-poppins">
                  {/* <li className="mb-6 flex items-center justify-between">
                    <p className="flex items-center">
                      <span className="mr-2.5 text-sm">Stake</span> <Arrow />
                    </p>
                    <span>
                      <Tick />
                    </span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <p className="flex items-center">
                      <span className="mr-2.5 text-sm">Approve DEXDLP</span>
                      <Arrow />
                    </p>
                    <span>
                      <Tick />
                    </span>
                  </li>
                  <li className="mb-6 flex justify-between">
                    <div className="">
                      <p className="flex items-center mb-1">
                        <span className="mr-2.5 text-sm">ADD Liquidity</span>
                        <Arrow />
                      </p>
                      <p className="text-xs grey-10">7.4812029 DEX</p>
                      <p className="text-xs grey-10">5812.291025829 MTV</p>
                    </div>

                    <span>
                      <Tick />
                    </span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <p className="flex items-center">
                      <span className="mr-2.5 text-sm">Approve DEX</span>
                      <Arrow />
                    </p>
                    <span>
                      <Tick />
                    </span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <p className="flex items-center">
                      <span className="mr-2.5 text-sm">Approve MTV</span>
                      <Arrow />
                    </p>
                    <span>
                      <Tick />
                    </span>
                  </li> */}
                  {account &&
                    chainId &&
                    sortedRecentTransactions.map((sortedRecentTransaction) => {
                      const { hash, summary } = sortedRecentTransaction;
                      const { icon } = getRowStatus(sortedRecentTransaction);

                      return (
                        <li className="mt-6 flex justify-between">
                          <div className="">
                            <p className="flex items-center mb-1">
                              <span className="mr-2.5 text-sm">Swap</span>
                              <a
                                target="_blank"
                                href={"https://testnet.bscscan.com/tx/" + hash}
                                rel="noopener noreferrer"
                              >
                                <Arrow />
                              </a>
                            </p>
                            <p className="text-xs grey-10">{summary}</p>
                          </div>

                          <span>{icon}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </React.Fragment>
  ) : null;

  if (isBrowser) {
    return (
      <React.Fragment>
        <span
          className="cursor-pointer w-full inline-block"
          onClick={() => setShowModal(true)}
        >
          Wallet
        </span>

        {ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        )}
      </React.Fragment>
    );
  } else {
    return null;
  }
}
