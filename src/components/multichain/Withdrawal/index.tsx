import Image from 'next/image';
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import SelectNetwork from '../Modals/SelectNetwork';

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
      fill="#0E1C37"
    />
  </svg>
);

const ChainItem = ({ name, logo, setShowWithdrawal }) => (
  <li
    className="flex items-center mb-4 cursor-pointer"
    onClick={() => setShowWithdrawal(true)}
  >
    <Image src={logo} alt="..." width={32} height={32} />
    <div className="ml-2">
      <p className="font-bold mb-1">{name}</p>
      <span className="block text-xs text-grey_5">Mainnet</span>
    </div>
  </li>
);

const plans = [
  {
    name: 'Ethereum (ERC20)',
    fee: 'Fee: 0.0005 BTC (~ $20.90)',
    time: 60,
  },
  {
    name: 'BNB Smart Chain (BSC20)',
    fee: 'Fee: 0.0005 BTC (~ $20.90)',
    time: 60,
  },
  {
    name: 'Bitcoin',
    fee: 'Fee: 0.0005 BTC (~ $20.90)',
    time: 60,
  },
];

export default function Withdrawal() {
  const [showWithdrawal, setShowWithdrawal] = useState(false);
  const [value, setValue] = useState(null);
  const [showNetworks, setShowNetworks] = useState(false);

  const [selected, setSelected] = useState(null);

  const searchHistory = [
    { id: 1, name: 'ETHEREUM' },
    { id: 2, name: 'BINANCE' },
    { id: 3, name: 'SOLANA' },
    { id: 4, name: 'POLYGON' },
    { id: 5, name: 'FANTOM' },
  ];
  const trending = [
    { id: 1, name: 'ETHEREUM' },
    { id: 2, name: 'BINANCE' },
    { id: 3, name: 'SOLANA' },
    { id: 4, name: 'POLYGON' },
    { id: 5, name: 'FANTOM' },
  ];

  const chainLists = [
    { id: 1, name: 'POLYGON', logo: '/assets/images/chains/polygon.png' },
    { id: 2, name: 'BINANCE', logo: '/assets/images/chains/binance.png' },
    { id: 3, name: 'BITCOIN', logo: '/assets/images/chains/bitcoin.png' },
    { id: 4, name: 'QUANTUM', logo: '/assets/images/chains/quantum.png' },
  ];

  const onMax = () => {};

  return (
    <React.Fragment>
      <SelectNetwork
        plans={plans}
        selected={selected}
        setSelected={setSelected}
        showModal={showNetworks && showWithdrawal}
        setShowModal={setShowNetworks}
      />

      <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
        {showWithdrawal ? (
          <div className="w-full md:w-4/6 max-w-4xl mx-auto">
            <form
              className="bg-grey_60 rounded-xl border border-grey_50"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <button onClick={() => setShowWithdrawal(false)}>
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
                <h1 className="font-bold text-3xl mb-2">Send ETH</h1>
                <p className="text-grey_5">Send ETH to deposit address</p>

                <div className="mt-8"></div>

                <div className="relative mb-8">
                  <label
                    className="block grey-10 font-semibold mb-4 text-lg"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-grey_50 p-4 placeholder-grey_20 text-grey_40 bg-grey_50 focus:outline-none focus:ring w-full rounded-lg"
                      style={{ transition: 'all 0.15s ease 0s' }}
                      id="address"
                      placeholder="Long press to paste address"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center bg-grey_50">
                      <button
                        className="cursor-pointer"
                        onClick={() => console.log('clicked')}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12.0002C22 6.49024 17.51 2.00024 12 2.00024C6.49 2.00024 2 6.49024 2 12.0002C2 14.9002 3.25 17.5102 5.23 19.3402C5.23 19.3502 5.23 19.3502 5.22 19.3602C5.32 19.4602 5.44 19.5402 5.54 19.6302C5.6 19.6802 5.65 19.7302 5.71 19.7702C5.89 19.9202 6.09 20.0602 6.28 20.2002C6.35 20.2502 6.41 20.2902 6.48 20.3402C6.67 20.4702 6.87 20.5902 7.08 20.7002C7.15 20.7402 7.23 20.7902 7.3 20.8302C7.5 20.9402 7.71 21.0402 7.93 21.1302C8.01 21.1702 8.09 21.2102 8.17 21.2402C8.39 21.3302 8.61 21.4102 8.83 21.4802C8.91 21.5102 8.99 21.5402 9.07 21.5602C9.31 21.6302 9.55 21.6902 9.79 21.7502C9.86 21.7702 9.93 21.7902 10.01 21.8002C10.29 21.8602 10.57 21.9002 10.86 21.9302C10.9 21.9302 10.94 21.9402 10.98 21.9502C11.32 21.9802 11.66 22.0002 12 22.0002C12.34 22.0002 12.68 21.9802 13.01 21.9502C13.05 21.9502 13.09 21.9402 13.13 21.9302C13.42 21.9002 13.7 21.8602 13.98 21.8002C14.05 21.7902 14.12 21.7602 14.2 21.7502C14.44 21.6902 14.69 21.6402 14.92 21.5602C15 21.5302 15.08 21.5002 15.16 21.4802C15.38 21.4002 15.61 21.3302 15.82 21.2402C15.9 21.2102 15.98 21.1702 16.06 21.1302C16.27 21.0402 16.48 20.9402 16.69 20.8302C16.77 20.7902 16.84 20.7402 16.91 20.7002C17.11 20.5802 17.31 20.4702 17.51 20.3402C17.58 20.3002 17.64 20.2502 17.71 20.2002C17.91 20.0602 18.1 19.9202 18.28 19.7702C18.34 19.7202 18.39 19.6702 18.45 19.6302C18.56 19.5402 18.67 19.4502 18.77 19.3602C18.77 19.3502 18.77 19.3502 18.76 19.3402C20.75 17.5102 22 14.9002 22 12.0002ZM16.94 16.9702C14.23 15.1502 9.79 15.1502 7.06 16.9702C6.62 17.2602 6.26 17.6002 5.96 17.9702C4.44 16.4302 3.5 14.3202 3.5 12.0002C3.5 7.31024 7.31 3.50024 12 3.50024C16.69 3.50024 20.5 7.31024 20.5 12.0002C20.5 14.3202 19.56 16.4302 18.04 17.9702C17.75 17.6002 17.38 17.2602 16.94 16.9702Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M12 6.93018C9.93 6.93018 8.25 8.61018 8.25 10.6802C8.25 12.7102 9.84 14.3602 11.95 14.4202C11.98 14.4202 12.02 14.4202 12.04 14.4202C12.06 14.4202 12.09 14.4202 12.11 14.4202C12.12 14.4202 12.13 14.4202 12.13 14.4202C14.15 14.3502 15.74 12.7102 15.75 10.6802C15.75 8.61018 14.07 6.93018 12 6.93018Z"
                            fill="#B7BECB"
                          />
                        </svg>
                      </button>
                      <button
                        className="ml-4 cursor-pointer"
                        onClick={() => console.log('clicked')}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.77 10.0002C2.34 10.0002 2 9.66024 2 9.23024V6.92024C2 4.21024 4.21 2.00024 6.92 2.00024H9.23C9.66 2.00024 10 2.34024 10 2.77024C10 3.20024 9.66 3.54024 9.23 3.54024H6.92C5.05 3.54024 3.54 5.06024 3.54 6.92024V9.23024C3.54 9.66024 3.19 10.0002 2.77 10.0002Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M21.23 10.0002C20.81 10.0002 20.46 9.66024 20.46 9.23024V6.92024C20.46 5.05024 18.94 3.54024 17.08 3.54024H14.77C14.34 3.54024 14 3.19024 14 2.77024C14 2.35024 14.34 2.00024 14.77 2.00024H17.08C19.79 2.00024 22 4.21024 22 6.92024V9.23024C22 9.66024 21.66 10.0002 21.23 10.0002Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M17.0799 22.0002H15.6899C15.2699 22.0002 14.9199 21.6602 14.9199 21.2302C14.9199 20.8102 15.2599 20.4602 15.6899 20.4602H17.0799C18.9499 20.4602 20.4599 18.9402 20.4599 17.0802V15.7002C20.4599 15.2802 20.7999 14.9302 21.2299 14.9302C21.6499 14.9302 21.9999 15.2702 21.9999 15.7002V17.0802C21.9999 19.7902 19.7899 22.0002 17.0799 22.0002Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M9.23 22.0002H6.92C4.21 22.0002 2 19.7902 2 17.0802V14.7702C2 14.3402 2.34 14.0002 2.77 14.0002C3.2 14.0002 3.54 14.3402 3.54 14.7702V17.0802C3.54 18.9502 5.06 20.4602 6.92 20.4602H9.23C9.65 20.4602 10 20.8002 10 21.2302C10 21.6602 9.66 22.0002 9.23 22.0002Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M18.46 11.2302H17.1H6.90002H5.54002C5.11002 11.2302 4.77002 11.5802 4.77002 12.0002C4.77002 12.4202 5.11002 12.7702 5.54002 12.7702H6.90002H17.1H18.46C18.89 12.7702 19.23 12.4202 19.23 12.0002C19.23 11.5802 18.89 11.2302 18.46 11.2302Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M6.8999 13.9402V14.2702C6.8999 15.9302 8.2399 17.2702 9.8999 17.2702H14.0999C15.7599 17.2702 17.0999 15.9302 17.0999 14.2702V13.9402C17.0999 13.8202 17.0099 13.7302 16.8899 13.7302H7.1099C6.9899 13.7302 6.8999 13.8202 6.8999 13.9402Z"
                            fill="#B7BECB"
                          />
                          <path
                            d="M6.8999 10.0602V9.73022C6.8999 8.07022 8.2399 6.73022 9.8999 6.73022H14.0999C15.7599 6.73022 17.0999 8.07022 17.0999 9.73022V10.0602C17.0999 10.1802 17.0099 10.2702 16.8899 10.2702H7.1099C6.9899 10.2702 6.8999 10.1802 6.8999 10.0602Z"
                            fill="#B7BECB"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <label
                    className="block grey-10 font-semibold mb-4 text-lg"
                    htmlFor="network"
                  >
                    Network
                  </label>

                  <div
                    className="relative cursor-pointer"
                    onClick={() => setShowNetworks(true)}
                  >
                    <input
                      type="text"
                      className="border border-grey_50 p-4 placeholder-grey_20 bg-grey_50 focus:outline-none focus:ring w-full rounded-lg text-white text-lg font-semibold"
                      style={{ transition: 'all 0.15s ease 0s' }}
                      id="network"
                      placeholder="Send ETH to deposit address"
                      readOnly
                      value={selected?.name}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center bg-grey_50">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.9101 20.6703C8.7201 20.6703 8.5301 20.6003 8.3801 20.4503C8.0901 20.1603 8.0901 19.6803 8.3801 19.3903L14.9001 12.8703C15.3801 12.3903 15.3801 11.6103 14.9001 11.1303L8.3801 4.61026C8.0901 4.32026 8.0901 3.84026 8.3801 3.55026C8.6701 3.26026 9.1501 3.26026 9.4401 3.55026L15.9601 10.0703C16.4701 10.5803 16.7601 11.2703 16.7601 12.0003C16.7601 12.7303 16.4801 13.4203 15.9601 13.9303L9.4401 20.4503C9.2901 20.5903 9.1001 20.6703 8.9101 20.6703Z"
                          fill="#B7BECB"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <label
                    className="block grey-10 font-semibold mb-4 text-lg"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-grey_50 p-4 placeholder-grey_20 text-white bg-grey_50 focus:outline-none focus:ring w-full rounded-lg text-lg font-semibold"
                      style={{ transition: 'all 0.15s ease 0s' }}
                      id="amount"
                      placeholder="Amount"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center bg-grey_50">
                      <button
                        className="cursor-pointer"
                        onClick={() => console.log('clicked')}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2.00024C6.49 2.00024 2 6.49024 2 12.0002C2 17.5102 6.49 22.0002 12 22.0002C17.51 22.0002 22 17.5102 22 12.0002C22 6.49024 17.51 2.00024 12 2.00024ZM15.36 14.3002C15.65 14.5902 15.65 15.0702 15.36 15.3602C15.21 15.5102 15.02 15.5802 14.83 15.5802C14.64 15.5802 14.45 15.5102 14.3 15.3602L12 13.0602L9.7 15.3602C9.55 15.5102 9.36 15.5802 9.17 15.5802C8.98 15.5802 8.79 15.5102 8.64 15.3602C8.35 15.0702 8.35 14.5902 8.64 14.3002L10.94 12.0002L8.64 9.70024C8.35 9.41024 8.35 8.93024 8.64 8.64024C8.93 8.35024 9.41 8.35024 9.7 8.64024L12 10.9402L14.3 8.64024C14.59 8.35024 15.07 8.35024 15.36 8.64024C15.65 8.93024 15.65 9.41024 15.36 9.70024L13.06 12.0002L15.36 14.3002Z"
                            fill="#B7BECB"
                          />
                        </svg>
                      </button>
                      <span className="text-grey_20 text-lg ml-4 pointer-events-none">
                        ETH
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <RadioGroup
                      value={value}
                      onChange={(e) => {
                        if (e == 100) {
                          onMax();
                        }

                        setValue(e);
                      }}
                      as={'div'}
                      className="flex justify-between mt-3"
                    >
                      <RadioGroup.Option
                        as={'div'}
                        className="w-23/100 text-center"
                        value={25}
                      >
                        {({ checked }) => (
                          <>
                            <div
                              className={`w-full h-5  mb-2 ${
                                checked ? 'btn-primary' : 'bg-grey_70'
                              }`}
                            ></div>
                            <p
                              className={`text-lg ${
                                checked ? 'text-primary' : 'text-grey_20'
                              }`}
                            >
                              25%
                            </p>
                          </>
                        )}
                      </RadioGroup.Option>

                      <RadioGroup.Option
                        as={'div'}
                        className="w-23/100 text-center"
                        value={50}
                      >
                        {({ checked }) => (
                          <>
                            <div
                              className={`w-full h-5  mb-2 ${
                                checked ? 'btn-primary' : 'bg-grey_70'
                              }`}
                            ></div>
                            <p
                              className={`text-lg ${
                                checked ? 'text-primary' : 'text-grey_20'
                              }`}
                            >
                              50%
                            </p>
                          </>
                        )}
                      </RadioGroup.Option>

                      <RadioGroup.Option
                        as={'div'}
                        className="w-23/100 text-center"
                        value={75}
                      >
                        {({ checked }) => (
                          <>
                            <div
                              className={`w-full h-5  mb-2 ${
                                checked ? 'btn-primary' : 'bg-grey_70'
                              }`}
                            ></div>
                            <p
                              className={`text-lg ${
                                checked ? 'text-primary' : 'text-grey_20'
                              }`}
                            >
                              75%
                            </p>
                          </>
                        )}
                      </RadioGroup.Option>

                      <RadioGroup.Option
                        as={'div'}
                        className="w-23/100 text-center"
                        value={100}
                      >
                        {({ checked }) => (
                          <>
                            <div
                              className={`w-full h-5  mb-2 ${
                                checked ? 'btn-primary' : 'bg-grey_70'
                              }`}
                            ></div>
                            <p
                              className={`text-lg ${
                                checked ? 'text-primary' : 'text-grey_20'
                              }`}
                            >
                              100%
                            </p>
                          </>
                        )}
                      </RadioGroup.Option>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="block text-lg font-semibold grey-10">
                      Available
                    </span>

                    <div className="text-lg font-semibold grey-10">
                      0.106789 ETH
                    </div>
                  </div>
                </div>

                <div className="mb-8 bg-grey_50 rounded-lg p-4 w-full">
                  <div className="flex w-full justify-between mb-2">
                    <p className="text-sm text-grey_5">Minimum deposit</p>
                    <p className="text-sm text-grey_5">0.05 ETH</p>
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

                <div className="">
                  <p className="text-sm font-semibold mb-2 text-grey_5">Tips</p>
                  <p className="text-sm text-grey_5">
                    Do not withdraw directly to a crowdfund or ICO . We will not
                    credit your wallet with tokens from that sale.{' '}
                  </p>
                </div>
              </div>
              <hr className="mb-4 border-t border-grey_50 w-full" />
              <div className="flex justify-between items-center px-8 pb-8">
                <div className="">
                  <p className="font-medium text-grey_5 mb-2">Receive Amount</p>
                  <span className="block text-lg font-semibold mb-2">
                    0.056789
                  </span>
                  <p className="flex items-center">
                    <span className="mr-2 text-grey_5 font-medium">
                      Network fee: 0.05 ETH
                    </span>
                    <button className="mr-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 12.0005C0 5.37307 5.37258 0.000488281 12 0.000488281C18.6274 0.000488281 24 5.37307 24 12.0005C24 18.6279 18.6274 24.0005 12 24.0005C5.37258 24.0005 0 18.6279 0 12.0005Z"
                          fill="#3A4861"
                        />
                        <path
                          d="M11.9999 18.6671C15.6666 18.6671 18.6666 15.6671 18.6666 12.0004C18.6666 8.33374 15.6666 5.33374 11.9999 5.33374C8.33325 5.33374 5.33325 8.33374 5.33325 12.0004C5.33325 15.6671 8.33325 18.6671 11.9999 18.6671Z"
                          stroke="#B7BECB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 9.33374V12.6671"
                          stroke="#B7BECB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9963 14.6672H12.0023"
                          stroke="#B7BECB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 12.0005C0 5.37307 5.37258 0.000488281 12 0.000488281C18.6274 0.000488281 24 5.37307 24 12.0005C24 18.6279 18.6274 24.0005 12 24.0005C5.37258 24.0005 0 18.6279 0 12.0005Z"
                          fill="#3A4861"
                        />
                        <path
                          d="M13.2736 10.7271C13.6113 11.0648 13.801 11.5229 13.801 12.0005C13.801 12.4781 13.6113 12.9361 13.2736 13.2738C12.9359 13.6115 12.4778 13.8012 12.0002 13.8012C11.5226 13.8012 11.0646 13.6115 10.7269 13.2738C10.3892 12.9361 10.1995 12.4781 10.1995 12.0005C10.1995 11.764 10.246 11.5298 10.3365 11.3113C10.427 11.0929 10.5597 10.8944 10.7269 10.7271C10.8941 10.5599 11.0926 10.4273 11.3111 10.3368C11.5296 10.2463 11.7637 10.1997 12.0002 10.1997C12.4778 10.1997 12.9359 10.3894 13.2736 10.7271"
                          stroke="#B7BECB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.50012 12.0005C7.50012 12.1985 7.51812 12.3965 7.54212 12.5885L6.48345 13.4165C6.3699 13.5054 6.29228 13.6323 6.26484 13.7739C6.2374 13.9155 6.262 14.0623 6.33412 14.1872L7.27545 15.8158C7.34754 15.9405 7.46219 16.0351 7.59836 16.0821C7.73453 16.1291 7.88309 16.1255 8.01678 16.0718L8.96478 15.6912C9.05707 15.6554 9.15668 15.6428 9.25496 15.6543C9.35325 15.6658 9.44724 15.7011 9.52878 15.7572C9.67545 15.8545 9.82745 15.9438 9.98478 16.0238C10.1648 16.1152 10.2955 16.2785 10.3241 16.4785L10.4688 17.4872C10.5108 17.7818 10.7635 18.0005 11.0608 18.0005H12.9388C13.0827 18.0005 13.2218 17.9486 13.3306 17.8543C13.4393 17.76 13.5104 17.6296 13.5308 17.4872L13.6755 16.4792C13.6912 16.3813 13.7305 16.2887 13.79 16.2094C13.8494 16.1301 13.9273 16.0664 14.0168 16.0238C14.1735 15.9452 14.3248 15.8565 14.4708 15.7598C14.5525 15.7031 14.6469 15.6673 14.7457 15.6555C14.8444 15.6436 14.9446 15.6561 15.0375 15.6918L15.9835 16.0718C16.1172 16.1253 16.2657 16.1289 16.4018 16.0819C16.5379 16.0349 16.6526 15.9404 16.7248 15.8158L17.6661 14.1872C17.7382 14.0623 17.7628 13.9155 17.7354 13.7739C17.708 13.6323 17.6303 13.5054 17.5168 13.4165L16.4581 12.5885C16.4821 12.3965 16.5001 12.1985 16.5001 12.0005C16.5001 11.8025 16.4821 11.6045 16.4581 11.4125L17.5168 10.5845C17.6303 10.4956 17.708 10.3686 17.7354 10.227C17.7628 10.0855 17.7382 9.93872 17.6661 9.81382L16.7248 8.18515C16.6527 8.06043 16.538 7.96588 16.4019 7.91886C16.2657 7.87183 16.1171 7.87549 15.9835 7.92916L15.0375 8.30915C14.9446 8.34471 14.8444 8.3571 14.7457 8.34526C14.647 8.33341 14.5526 8.29768 14.4708 8.24116C14.3248 8.14419 14.1732 8.05603 14.0168 7.97716C13.9273 7.93458 13.8494 7.87089 13.79 7.79157C13.7305 7.71226 13.6912 7.61969 13.6755 7.52182L13.5315 6.51382C13.5111 6.37134 13.44 6.24098 13.3312 6.14669C13.2225 6.05239 13.0834 6.00048 12.9395 6.00049H11.0615C10.9175 6.00048 10.7784 6.05239 10.6697 6.14669C10.5609 6.24098 10.4898 6.37134 10.4695 6.51382L10.3241 7.52315C10.3083 7.62066 10.2693 7.71292 10.2102 7.79208C10.1511 7.87124 10.0738 7.93496 9.98478 7.97782C9.82745 8.05782 9.67545 8.14782 9.52878 8.24449C9.44699 8.30029 9.35287 8.3354 9.25451 8.34678C9.15615 8.35816 9.05649 8.34548 8.96412 8.30982L8.01678 7.92916C7.88309 7.87549 7.73453 7.87183 7.59836 7.91886C7.46219 7.96588 7.34754 8.06043 7.27545 8.18515L6.33412 9.81382C6.262 9.93872 6.2374 10.0855 6.26484 10.227C6.29228 10.3686 6.3699 10.4956 6.48345 10.5845L7.54212 11.4125C7.51598 11.6074 7.50195 11.8038 7.50012 12.0005V12.0005Z"
                          stroke="#B7BECB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </p>
                </div>
                <button className="btn-primary font-bold text-xl py-4 rounded-lg px-32">
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full md:w-4/6 max-w-4xl mx-auto">
            <div className="bg-grey_60 p-8 rounded-xl border border-grey_50">
              <div className="flex items-center mb-2">
                <div className="relative pull-right pr-4 md:pr-0 w-full bg-grey-10">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full  text-sm text-grey_60 transition border border-solid border-grey_20 focus:outline-none rounded-lg py-2 px-4 pl-10 appearance-none leading-normal bg-grey-10"
                  />
                  <div
                    className="absolute search-icon"
                    style={{ top: '0.75rem', left: '1rem' }}
                  >
                    <Magnification />
                  </div>
                </div>
                <button className="text-primary ml-6">Cancel</button>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-grey_5">Search History</p>

                <hr className="mt-2 mb-4 border-t border-grey_50 w-full" />

                <div className="w-full grid grid-cols-4 md:grid-cols-5 grid-rows-2 md:grid-rows-1 gap-4">
                  {searchHistory.map((history) => (
                    <button
                      className="py-2 px-6 rounded bg-grey_50 text-grey_5 font-bold text-sm"
                      key={history.id}
                    >
                      {history.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-8">
                <p className="font-semibold text-grey_5">Trending Chains</p>

                <hr className="mt-2 mb-4 border-t border-grey_50 w-full" />

                <div className="w-full grid grid-cols-4 md:grid-cols-5 grid-rows-2 md:grid-rows-1 gap-4">
                  {trending.map((history) => (
                    <button
                      className="py-2 px-6 rounded bg-grey_50 text-grey_5 font-bold text-sm"
                      key={history.id}
                    >
                      {history.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="chainlist">
                <p className="text-lg text-grey_5 font-semibold mb-6">
                  Chains List
                </p>

                <ul>
                  {chainLists.map((chain) => (
                    <React.Fragment key={chain.id}>
                      <ChainItem
                        name={chain.name}
                        logo={chain.logo}
                        setShowWithdrawal={setShowWithdrawal}
                      />
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
