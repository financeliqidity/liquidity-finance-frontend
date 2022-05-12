import Image from 'next/image';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import QRCode from 'react-qr-code';
import { RWebShare } from 'react-web-share';

const saveSvgAsPng = require('save-svg-as-png');

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

const ListItem = ({ list, setShowDeposit, setSelectedCurr }) => {
  const { name, symbol, logo } = list;
  return (
    <li
      className="flex justify-between items-center mb-4 cursor-pointer"
      onClick={() => {
        setSelectedCurr(list);
        setShowDeposit(true);
      }}
    >
      <div className="flex items-center">
        <Image src={logo} alt="..." width={32} height={32} />
        <div className="ml-2">
          <span className="block">{symbol}</span>
          <span className="block text-sm text-grey_20">{name}</span>
        </div>
      </div>
      <div className="">
        <span className="block font-medium">100,000,000</span>
        <span className="block text-sm text-grey_20">$5659.76</span>
      </div>
    </li>
  );
};

export default function Deposit() {
  const [showDeposit, setShowDeposit] = useState(false);

  const [selectedCurr, setSelectedCurr] = useState(null);

  const Lists = [
    {
      name: 'LiquidityFinance',
      symbol: 'LFI',
      logo: '/assets/icons/lfi-32.png',
    },
    {
      name: 'TetherUS',
      symbol: 'USDT',
      logo: '/assets/icons/usdt.png',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      logo: '/assets/icons/eth-32.png',
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      logo: '/assets/icons/usdc.png',
    },
  ];

  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: 'white',
  };

  const handleSave = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById('svg-chart'),
      `${selectedCurr.name}.png`,
      imageOptions
    );
  };
  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      {showDeposit ? (
        <div className="w-full md:w-4/6 max-w-4xl mx-auto">
          <div className="bg-grey_60 p-8 rounded-xl border border-grey_50">
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => setShowDeposit(false)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57 5.93011L3.5 12.0001L9.57 18.0701"
                    stroke="#B7BECB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.4999 12.0001H3.66992"
                    stroke="#B7BECB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center">
                <button className="mr-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2.43011H7C4 2.43011 2 4.43011 2 7.43011V13.4301C2 16.4301 4 18.4301 7 18.4301V20.5601C7 21.3601 7.89 21.8401 8.55 21.3901L13 18.4301H17C20 18.4301 22 16.4301 22 13.4301V7.43011C22 4.43011 20 2.43011 17 2.43011ZM12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.58 13.1001 12 13.1001C12.42 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001ZM13.26 10.4501C12.87 10.7101 12.75 10.8801 12.75 11.1601V11.3701C12.75 11.7801 12.41 12.1201 12 12.1201C11.59 12.1201 11.25 11.7801 11.25 11.3701V11.1601C11.25 10.0001 12.1 9.43011 12.42 9.21011C12.79 8.96011 12.91 8.79011 12.91 8.53011C12.91 8.03011 12.5 7.62011 12 7.62011C11.5 7.62011 11.09 8.03011 11.09 8.53011C11.09 8.94011 10.75 9.28011 10.34 9.28011C9.93 9.28011 9.59 8.94011 9.59 8.53011C9.59 7.20011 10.67 6.12011 12 6.12011C13.33 6.12011 14.41 7.20011 14.41 8.53011C14.41 9.67011 13.57 10.2401 13.26 10.4501Z"
                      fill="#B7BECB"
                    />
                  </svg>
                </button>
                <button>
                  <Image
                    src="/assets/icons/history.svg"
                    alt="..."
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl mb-10">
                Deposit {selectedCurr.symbol}
              </h1>
              <div className="rounded-xl bg-white w-max p-4 mx-auto flex">
                {/* @ts-ignore */}
                <QRCode
                  value={selectedCurr.symbol}
                  id={'svg-chart'}
                  size={200}
                />
              </div>

              <p className="mt-6 mb-4 text-grey_5">
                Send only {selectedCurr.symbol} to this deposit address.
              </p>
              <div className="flex items-center">
                <RWebShare
                  data={{
                    text: `Web Share - Text`,
                    url: `https://url.com`,
                    title: 'title',
                  }}
                  onClick={() => console.log('sharing...')}
                >
                  <button className="mr-2 btn-primary text-sm font-bold py-2 px-4 rounded">
                    Share Address
                  </button>
                </RWebShare>
                <button
                  className="bg-grey_50 text-sm font-bold py-2 px-4 rounded"
                  onClick={handleSave}
                >
                  Save Image
                </button>
              </div>

              <hr className="my-10 border-t border-grey_50 w-full" />

              <div className="mb-6 w-full">
                <p className="text-sm leading-6 text-grey_5 mb-1">Network</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">
                    {selectedCurr.name} (ERC20)
                  </p>
                  <button>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5002 15.4869L15.4902 20.5069"
                        stroke="#B7BECB"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 15.4869H20.5"
                        stroke="#B7BECB"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 9.50694L8.51 4.48694"
                        stroke="#B7BECB"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5 9.50696H3.5"
                        stroke="#B7BECB"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-6 text-grey_5 mb-1">
                  Wallet Address
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">
                    0xe23456789ad8765ff6543bbf
                  </p>
                  <CopyToClipboard
                    text={'test'}
                    onCopy={() => console.log('copied')}
                  >
                    <button>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 13.3969V17.5969C15.5 19.2976 15.1568 20.358 14.5089 21.0059C13.8611 21.6537 12.8007 21.9969 11.1 21.9969H6.9C5.19931 21.9969 4.13891 21.6537 3.49105 21.0059C2.8432 20.358 2.5 19.2976 2.5 17.5969V13.3969C2.5 11.6963 2.8432 10.6359 3.49105 9.988C4.13891 9.34015 5.19931 8.99695 6.9 8.99695H11.1C12.8007 8.99695 13.8611 9.34015 14.5089 9.988C15.1568 10.6359 15.5 11.6963 15.5 13.3969Z"
                          fill="#B7BECB"
                          stroke="#B7BECB"
                        />
                        <path
                          d="M12.8998 2.99695H17.0998C18.8005 2.99695 19.8609 3.34015 20.5087 3.988C21.1566 4.63586 21.4998 5.69626 21.4998 7.39695V11.5969C21.4998 13.0931 21.2317 14.0935 20.726 14.7502C20.2325 15.391 19.4461 15.789 18.2042 15.9304C17.9832 15.9556 17.7498 15.7705 17.7498 15.475V13.3969C17.7498 11.2292 17.2472 9.53727 16.1033 8.39339C14.9594 7.24951 13.2675 6.74695 11.0998 6.74695H9.02167C8.7262 6.74695 8.54113 6.51354 8.5663 6.29254C8.70774 5.05063 9.1057 4.26422 9.74651 3.77076C10.4032 3.26504 11.4036 2.99695 12.8998 2.99695Z"
                          fill="#B7BECB"
                          stroke="#B7BECB"
                        />
                      </svg>
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="mt-8 bg-grey_50 rounded-lg p-4 w-full">
                <div className="flex w-full justify-between mb-2">
                  <p className="text-sm text-grey_5">Minimum deposit</p>
                  <p className="text-sm text-grey_5">
                    0.05 {selectedCurr.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between mb-2">
                  <p className="text-sm text-grey_5">Expected arrival</p>
                  <p className="text-sm text-grey_5">
                    12 network confirmations
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-sm text-grey_5">Expected unlock</p>
                  <p className="text-sm text-grey_5">
                    12 network confirmations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full md:w-4/6 max-w-4xl mx-auto">
          <div className="bg-grey_60 p-8 rounded-xl border border-grey_50">
            <div className="flex justify-between mb-2">
              <div className="text-grey_20 flex items-center">
                <span className="text-lg mr-2">
                  Estimated Equity Value (USDT)
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9833 10.0001C12.9833 11.6501 11.65 12.9835 10 12.9835C8.35 12.9835 7.01666 11.6501 7.01666 10.0001C7.01666 8.35012 8.35 7.01678 10 7.01678C11.65 7.01678 12.9833 8.35012 12.9833 10.0001Z"
                    fill="#7C8497"
                    stroke="#7C8497"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16.8918C12.9417 16.8918 15.6833 15.1584 17.5917 12.1584C18.3417 10.9834 18.3417 9.00843 17.5917 7.83343C15.6833 4.83343 12.9417 3.1001 10 3.1001C7.05833 3.1001 4.31667 4.83343 2.40833 7.83343C1.65833 9.00843 1.65833 10.9834 2.40833 12.1584C4.31667 15.1584 7.05833 16.8918 10 16.8918Z"
                    stroke="#7C8497"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button>
                <Image
                  src="/assets/icons/history.svg"
                  alt="..."
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <p className="flex items-center">
              <span className="font-bold">0.01234567</span>
              <span className="mx-2">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.000639208 2.2615C-0.00788354 1.78991 0.068821 1.41064 0.230753 1.12371C0.392685 0.836781 0.602912 0.627974 0.861435 0.497292C1.1228 0.36661 1.39837 0.30127 1.68814 0.30127C1.97791 0.30127 2.24212 0.36519 2.48075 0.493031C2.72223 0.618031 2.9978 0.815474 3.30746 1.08536C3.51768 1.26718 3.6853 1.39502 3.8103 1.46888C3.93814 1.54275 4.07734 1.57968 4.22791 1.57968C4.47223 1.57968 4.66541 1.49161 4.80746 1.31547C4.9495 1.1365 5.01768 0.877974 5.012 0.539906H5.93246C5.94098 1.0115 5.86428 1.39076 5.70234 1.67769C5.54325 1.96462 5.33303 2.17343 5.07166 2.30411C4.8103 2.43479 4.53473 2.50013 4.24496 2.50013C3.95518 2.50013 3.69098 2.43763 3.45234 2.31263C3.21371 2.18479 2.93814 1.98593 2.62564 1.71604C2.41825 1.53422 2.25064 1.40638 2.1228 1.33252C1.99496 1.25866 1.85575 1.22172 1.70518 1.22172C1.47507 1.22172 1.28473 1.30269 1.13416 1.46462C0.986435 1.62371 0.915412 1.88934 0.921094 2.2615H0.000639208Z"
                    fill="#B7BECB"
                  />
                  <path
                    d="M0.000639208 5.46035C-0.00788354 4.98876 0.068821 4.6095 0.230753 4.32257C0.392685 4.03563 0.602912 3.82683 0.861435 3.69614C1.1228 3.56546 1.39837 3.50012 1.68814 3.50012C1.97791 3.50012 2.24212 3.56404 2.48075 3.69188C2.72223 3.81688 2.9978 4.01433 3.30746 4.28421C3.51768 4.46603 3.6853 4.59387 3.8103 4.66774C3.93814 4.7416 4.07734 4.77853 4.22791 4.77853C4.47223 4.77853 4.66541 4.69046 4.80746 4.51433C4.9495 4.33535 5.01768 4.07683 5.012 3.73876H5.93246C5.94098 4.21035 5.86428 4.58961 5.70234 4.87654C5.54325 5.16347 5.33303 5.37228 5.07166 5.50296C4.8103 5.63365 4.53473 5.69899 4.24496 5.69899C3.95518 5.69899 3.69098 5.63649 3.45234 5.51149C3.21371 5.38364 2.93814 5.18478 2.62564 4.91489C2.41825 4.73308 2.25064 4.60524 2.1228 4.53137C1.99496 4.45751 1.85575 4.42058 1.70518 4.42058C1.47507 4.42058 1.28473 4.50154 1.13416 4.66347C0.986435 4.82257 0.915412 5.08819 0.921094 5.46035H0.000639208Z"
                    fill="#B7BECB"
                  />
                </svg>
              </span>
              <span className="text-sm grey-10">$0.00</span>
            </p>
          </div>
          <div className="bg-grey_60 p-8 rounded-xl border border-grey_50 mt-6">
            <div className="flex justify-between mb-6">
              <div className="text-grey_20 flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00001 1.33344C4.32668 1.33344 1.33334 4.32677 1.33334 8.0001C1.33334 11.6734 4.32668 14.6668 8.00001 14.6668C11.6733 14.6668 14.6667 11.6734 14.6667 8.0001C14.6667 4.32677 11.6733 1.33344 8.00001 1.33344ZM11.1867 6.46677L7.40668 10.2468C7.31334 10.3401 7.18668 10.3934 7.05334 10.3934C6.92001 10.3934 6.79334 10.3401 6.70001 10.2468L4.81334 8.3601C4.62001 8.16677 4.62001 7.84677 4.81334 7.65343C5.00668 7.4601 5.32668 7.4601 5.52001 7.65343L7.05334 9.18677L10.48 5.7601C10.6733 5.56677 10.9933 5.56677 11.1867 5.7601C11.38 5.95344 11.38 6.26677 11.1867 6.46677Z"
                    fill="#7C8497"
                  />
                </svg>
                <span className="text-xs ml-1">Hide 0 Balances</span>
              </div>
              <div className="relative pull-right pr-4 md:pr-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent text-sm text-grey_20 transition border border-solid border-grey_20 focus:outline-none rounded-lg py-2 px-4 pl-10 appearance-none leading-normal"
                />
                <div
                  className="absolute search-icon"
                  style={{ top: '0.75rem', left: '1rem' }}
                >
                  <Magnification />
                </div>
              </div>
            </div>
            <ul>
              {Lists.map((list) => (
                <React.Fragment key={list.name}>
                  <ListItem
                    list={list}
                    setShowDeposit={setShowDeposit}
                    setSelectedCurr={setSelectedCurr}
                  />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
