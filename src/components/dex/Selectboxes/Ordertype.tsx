// External Dependencies
import React from "react";
import { Listbox, Transition } from "@headlessui/react";

const Selector = () => (
  <svg
    className="h-5 w-5 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
      clipRule="evenodd"
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

const Select = ({ options, selectedOption, handleChange }) => {
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
              <Listbox.Button className="cursor-default relative pr-10 py-1  transition ease-in-out duration-150 px-3 text-gray-700 rounded text-sm focus:outline-none w-full text-center">
                <div className="flex justify-between">
                  <span>
                    <img src="assets/icons/warning.svg" alt="..." />
                  </span>
                  <span className="block truncate text-sm text-white text-center w-full">
                    {selectedOption.name}
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
                        key={option.name}
                        value={option}
                      >
                        {({ active, selected }) => {
                          return (
                            <li
                              className={`${
                                active ? "text-white bg-primary" : "text-white"
                              }  cursor-default select-none relative py-2 pl-7 pr-9 text-center`}
                            >
                              <div className="flex items-center justify-center text-sm">
                                <span
                                  className={`${
                                    selected ? "font-semibold" : "font-normal"
                                  } flex items-center truncate must-black text-center`}
                                >
                                  {option.name}
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

export default Select;
