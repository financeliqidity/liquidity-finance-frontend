// External Dependencies
import React from "react";
import { Listbox, Transition } from "@headlessui/react";

const Selector = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.99999 5.16666L7.99999 9.16666L12 5.16666L13.3333 6.49999L7.99999 11.8333L2.66666 6.49999L3.99999 5.16666Z"
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

const PoolSort = ({ options, selectedOption, handleChange }) => {
  return (
    <Listbox
      as="div"
      value={selectedOption}
      onChange={(event) => handleChange(event)}
      className={`md:w-52 w-full`}
    >
      {({ open }) => (
        <>
          <div className="relative w-full">
            <span className="inline-block w-full rounded-md">
              <Listbox.Button className="cursor-default relative pr-10 transition ease-in-out duration-150 px-3 text-sm focus:outline-none w-full text-center bg-grey_50 rounded-lg py-4 font-bold">
                <div className="flex justify-between">
                  <span className="block truncate text-sm text-white text-left w-full">
                    {selectedOption}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
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
                        key={option}
                        value={option}
                      >
                        {({ active, selected }) => {
                          return (
                            <li
                              className={`${
                                active ? "text-white bg-primary" : "text-white"
                              }  cursor-default select-none relative py-2 pl-4 pr-9 text-left`}
                            >
                              <div className="flex items-center justify-start text-sm">
                                <span
                                  className={`${
                                    selected ? "font-semibold" : "font-normal"
                                  } flex items-center truncate must-black text-left`}
                                >
                                  {option}
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

export default PoolSort;
