import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const Close = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9998 29.3334C23.3332 29.3334 29.3332 23.3334 29.3332 16.0001C29.3332 8.66675 23.3332 2.66675 15.9998 2.66675C8.6665 2.66675 2.6665 8.66675 2.6665 16.0001C2.6665 23.3334 8.6665 29.3334 15.9998 29.3334Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.2266 19.7732L19.7732 12.2266"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.7732 19.7732L12.2266 12.2266"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H12C14.2091 0 16 1.79086 16 4V16H4C1.79086 16 0 14.2091 0 12V0Z"
      fill="#2669F5"
    />
    <path
      d="M10.7436 7.20355L10.7436 7.2036L10.7495 7.19751C11.0786 6.85706 11.0871 6.30995 10.7436 5.96645C10.4033 5.62618 9.84671 5.62618 9.50645 5.96645L7.29 8.18289L6.49355 7.38645C6.15329 7.04618 5.59671 7.04618 5.25645 7.38645C4.91618 7.72671 4.91618 8.28329 5.25645 8.62355L6.67145 10.0386C6.83414 10.2013 7.05589 10.295 7.29 10.295C7.52411 10.295 7.74586 10.2013 7.90855 10.0386L10.7436 7.20355ZM3.5 8C3.5 5.52114 5.52114 3.5 8 3.5C10.4789 3.5 12.5 5.52114 12.5 8C12.5 10.4789 10.4789 12.5 8 12.5C5.52114 12.5 3.5 10.4789 3.5 8Z"
      fill="white"
      stroke="white"
    />
  </svg>
);

export default function SelectNetwork({
  showModal,
  setShowModal,
  selected,
  setSelected,
  plans,
}) {
  return (
    <div>
      {showModal ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-grey_50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6 rounded-t">
                  <h3 className="text-xl font-bold text-white leading-7">
                    Network
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
                  <div className="w-3/4 my-8 mx-auto text-grey_5 text-center">
                    Ensure the network matches the withdrawal address or asset
                    may be lost.
                  </div>
                  <div className="w-full">
                    <div className="mx-auto w-full max-w-md">
                      <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">
                          Networks
                        </RadioGroup.Label>
                        <div className="space-y-2">
                          {plans.map((plan) => (
                            <RadioGroup.Option
                              key={plan.name}
                              value={plan}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? 'ring-2 ring-primary ring-opacity-60'
                                    : ''
                                }
                  ${
                    checked
                      ? 'bg-grey_50 ring-2 ring-primary ring-opacity-60'
                      : 'bg-grey_20'
                  }
                    relative flex cursor-pointer rounded-lg  shadow-md focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  {checked && (
                                    <div className="absolute top-0 right-0 shrink-0 text-white">
                                      <CheckIcon />
                                    </div>
                                  )}
                                  <div className="px-5 py-4 w-full">
                                    <div className="flex w-full flex-col">
                                      <RadioGroup.Label
                                        as="p"
                                        className="font-semibold text-lg mb-1 text-white"
                                      >
                                        {plan.name}
                                      </RadioGroup.Label>

                                      <div className="flex justify-between items-center">
                                        <RadioGroup.Description
                                          as="span"
                                          className="inline text-grey_5"
                                        >
                                          <span>{plan.fee}</span>
                                        </RadioGroup.Description>
                                        <span className="text-sm text-grey_5">
                                          Arrival time: ~ {plan.time} mins
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                {/*footer*/}

                <div className="flex p-6 rounded-b justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (!selected) {
                        console.log('Please select a network');
                      }
                      setShowModal(false);
                    }}
                    className="btn-primary text-white w-full text-base font-bold py-4 rounded-lg"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </div>
  );
}
