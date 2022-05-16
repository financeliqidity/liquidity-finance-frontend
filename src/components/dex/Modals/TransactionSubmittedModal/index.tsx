import React from 'react';

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

export default function TransactionSubmittedModal({
  onDismiss,
  isOpen,
  txHash,
}: {
  onDismiss: any;
  isOpen: boolean;
  txHash: string;
}) {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-lg font-semibold text-white leading-5">
                    Transaction Submitted
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={onDismiss}
                  >
                    <Close />
                  </button>
                </div>
                <div className="relative px-6 py-8 flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="97"
                    height="97"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b7becb"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 12 12 8 8 12"></polyline>
                    <line x1="12" y1="16" x2="12" y2="8"></line>
                  </svg>

                  <a
                    className="font-semibold text-lg grey-10 mt-5 text-center"
                    target="_blank"
                    href={'https://testnet.bscscan.com/tx/' + txHash}
                    rel="noopener noreferrer"
                  >
                    View on BSC Scan
                  </a>
                </div>

                <div className="px-6">
                  <hr />
                </div>

                <div className="flex flex-col p-6 rounded-b justify-center">
                  <button
                    onClick={onDismiss}
                    className="text-sm text-white text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
