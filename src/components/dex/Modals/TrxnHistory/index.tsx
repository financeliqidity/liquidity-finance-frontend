import React, { useMemo, useState } from "react";
import { useActiveWeb3React } from "../../../../hooks";
import {
  isTransactionRecent,
  useAllTransactions,
} from "../../../../redux/transactions/hooks";
import { TransactionDetails } from "../../../../redux/transactions/reducer";

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
const RefreshIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 8.98581C16.5076 13.1181 13.1377 16.4971 9.00544 16.5C7.22071 16.5012 5.58136 15.8791 4.29308 14.8393C3.95809 14.569 3.93305 14.0669 4.23747 13.7625L4.5782 13.4218C4.83856 13.1614 5.2542 13.1329 5.54265 13.3618C6.49179 14.115 7.69297 14.5645 8.99999 14.5645C12.0757 14.5645 14.5645 12.0753 14.5645 8.99999C14.5645 5.92424 12.0753 3.43548 8.99999 3.43548C7.52376 3.43548 6.18299 4.00914 5.18746 4.94552L6.72235 6.48042C7.02719 6.78526 6.8113 7.30645 6.38023 7.30645H1.98387C1.71662 7.30645 1.5 7.08982 1.5 6.82258V2.42622C1.5 1.99515 2.02119 1.77925 2.32603 2.08406L3.81913 3.57717C5.16559 2.2904 6.99048 1.5 8.99999 1.5C13.1374 1.5 16.4923 4.8502 16.5 8.98581ZM11.0289 11.3684L11.3259 10.9864C11.572 10.67 11.515 10.214 11.1986 9.96792L9.96773 9.01055V5.85483C9.96773 5.45398 9.64279 5.12903 9.24193 5.12903H8.75806C8.3572 5.12903 8.03225 5.45398 8.03225 5.85483V9.95718L10.0103 11.4957C10.3268 11.7418 10.7828 11.6848 11.0289 11.3684V11.3684Z"
      fill="#B7BECB"
    />
  </svg>
);
const Warning = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM13 16V18H11V16H13ZM13 14V6H11V14H13Z"
      fill="#7C8497"
    />
  </svg>
);

const Buy = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.96038 1.76176L6.53844 1.1837C6.78321 0.938931 7.179 0.938931 7.42116 1.1837L12.4831 6.24303C12.7279 6.48779 12.7279 6.88358 12.4831 7.12574L7.42116 12.1877C7.17639 12.4324 6.78061 12.4324 6.53844 12.1877L5.96038 11.6096C5.71302 11.3622 5.71822 10.9586 5.9708 10.7165L9.10847 7.72724H1.62493C1.27861 7.72724 1 7.44862 1 7.10231V6.26907C1 5.92275 1.27861 5.64414 1.62493 5.64414H9.10847L5.9708 2.65489C5.71562 2.41272 5.71041 2.00912 5.96038 1.76176Z"
      fill="#45C581"
    />
  </svg>
);
const HashIn = () => (
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
      d="M7.33329 1.66679H11.1783L6.70829 6.13676L7.8868 7.31527L12.3333 2.86878V6.66679H14V0.00012207H7.33329V1.66679ZM6.49996 3.33346H2.33329C1.41282 3.33346 0.666626 4.07965 0.666626 5.00012V11.6668C0.666626 12.5873 1.41282 13.3335 2.33329 13.3335H8.99996C9.92043 13.3335 10.6666 12.5873 10.6666 11.6668V7.50012H8.99996V11.6668H2.33329V5.00012H6.49996V3.33346Z"
      fill="#45C581"
    />
  </svg>
);

const newTransactionsFirst = (a: TransactionDetails, b: TransactionDetails) =>
  b.addedTime - a.addedTime;

// const getRowStatus = (sortedRecentTransaction: TransactionDetails) => {
//   const { hash, receipt } = sortedRecentTransaction;

//   if (!hash) {
//     return { icon: <Loader />, color: "text" };
//   }

//   if (hash && receipt?.status === 1) {
//     return { icon: <CheckmarkCircleIcon color="success" />, color: "success" };
//   }

//   return { icon: <ErrorIcon color="failure" />, color: "failure" };
// };

export default function TrxnHistory() {
  const [showModal, setShowModal] = useState(false);

  const { account, chainId } = useActiveWeb3React();
  const allTransactions = useAllTransactions();

  // Logic taken from Web3Status/index.tsx line 175
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);

  console.log("Received transactions", sortedRecentTransactions);

  return (
    <>
      <button
        className="p-2.5 bg-grey_50 rounded-2xl mr-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <RefreshIcon />
      </button>

      {showModal ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6 rounded-t-3xl bg-blue_grey border-b border-grey_50">
                  <h3 className="text-2xl font-bold text-white leading-5">
                    Recent Transactions
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto bg-dark_grey rounded-b-3xl px-6 py-6">
                  <table className="table-auto w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 px-3">
                          <div className="flex items-center">
                            <span className="text-sm font-semibold mr-0.5">
                              BNB
                            </span>
                            <Buy />
                            <span className="text-sm font-semibold ml-0.5">
                              LFI
                            </span>
                          </div>
                        </td>
                        <td className="py-2">
                          <div className="text-sm font-semibold">1BNB</div>
                        </td>
                        <td className="flex justify-center py-2">
                          <div className="text-sm font-semibold">10:30pm</div>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center justify-end">
                            <span className="text-sm font-semibold mr-0.5">
                              0xf71
                            </span>
                            <HashIn />
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-grey_70 rounded-lg">
                        <td className="py-2 px-3 rounded-l-lg">
                          <div className="flex items-center rounded-lg">
                            <span className="text-sm font-semibold mr-0.5">
                              BNB
                            </span>
                            <Buy />
                            <span className="text-sm font-semibold ml-0.5">
                              LFI
                            </span>
                          </div>
                        </td>
                        <td className="py-2">
                          <div className="text-sm font-semibold">1BNB</div>
                        </td>
                        <td className="flex justify-center py-2">
                          <div className="text-sm font-semibold">10:30pm</div>
                        </td>
                        <td className="py-2 px-3 rounded-r-lg">
                          <div className="flex items-center justify-end rounded-lg">
                            <span className="text-sm font-semibold mr-0.5">
                              0xf71
                            </span>
                            <HashIn />
                          </div>
                        </td>
                      </tr>
                      {!account && (
                        <div className="text-white text-lg font-medium text-center w-full justify-center flex">
                          Please connect your wallet to view your recent
                          transactions
                        </div>
                      )}
                      {account &&
                        chainId &&
                        sortedRecentTransactions.length === 0 && (
                          <div className="text-white text-lg font-medium text-center w-full justify-center flex">
                            No recent transactions
                          </div>
                        )}

                      {account &&
                        chainId &&
                        sortedRecentTransactions.map(
                          (sortedRecentTransaction) => {
                            const { hash, summary } = sortedRecentTransaction;
                            // const { icon, color } = getRowStatus(
                            //   sortedRecentTransaction
                            // );

                            return <></>;
                          }
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </>
  );
}
