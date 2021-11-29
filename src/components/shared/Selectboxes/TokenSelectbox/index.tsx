import React from "react";
import { Listbox, Transition } from "@headlessui/react";

const Selector = () => (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0.5L4 3.5L7 0.5L8 1.5L4 5.5L0 1.5L1 0.5Z"
      fill="#B7BECB"
    />
  </svg>
);

const Selected = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    />
  </svg>
);

const index = ({ options, selectedOption, handleChange }) => {
  return (
    <Listbox
      as="div"
      value={selectedOption}
      onChange={(event) => handleChange(event)}
      className={`w-full`}
    >
      {({ open }) => (
        <>
          <div className="relative w-full">
            <span className="inline-block w-full rounded-md">
              <Listbox.Button className="cursor-default relative pr-10 py-1  transition ease-in-out duration-150 px-2 text-gray-700 token-drop rounded text-sm focus:outline-none w-full text-center">
                <div className="flex justify-between items-center">
                  <img
                    src="assets/icons/eth.png"
                    alt="..."
                    className="w-5 h-5 mr-2"
                  />

                  <span className="block truncate text-base text-white text-center w-full">
                    {selectedOption.symbol}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-2 pointer-events-none">
                    <Selector />
                  </span>
                </div>
              </Listbox.Button>
            </span>
            <div className="absolute z-10 w-full mt-1 bg-grey_50 rounded-md shadow-lg mb-11">
              <Transition
                show={open}
                leave="transition duration-100 ease-in"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <Listbox.Options
                  static
                  className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {options.map((option) => {
                    return (
                      <Listbox.Option
                        as={React.Fragment}
                        key={option.id}
                        value={option}
                      >
                        {({ active, selected }) => {
                          return (
                            <li
                              className={`${
                                active ? "text-white bg-primary" : "text-white"
                              }  cursor-default select-none relative py-2 pl-2 pr-9 text-center`}
                            >
                              <div className="flex items-center text-sm">
                                <img
                                  src="assets/icons/eth.png"
                                  alt="..."
                                  className="w-5 h-5 mr-2"
                                />
                                <span
                                  className={`${
                                    selected ? "font-semibold" : "font-normal"
                                  } flex items-center truncate must-black text-center`}
                                >
                                  {option.symbol}
                                </span>
                                {selected && (
                                  <span
                                    className={`${
                                      active ? "text-white" : "text-primary"
                                    }  absolute inset-y-0 right-0 flex items-center mr-3 pl-1.5`}
                                  >
                                    <Selected />
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        }}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default index;
