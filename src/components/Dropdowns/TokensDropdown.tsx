import React from "react";
import { createPopper } from "@popperjs/core";

const TokensDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    //@ts-ignore
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className=""
        href="#pablo"
        //@ts-ignore
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex text-lg token-drop py-1 px-2 shadow">
          <img src="assets/icons/eth.png" alt="..." />
          <span className="text-base ml-2 font-bold">ETH</span>
          <svg
            className="w-5 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </a>
      <div
        //@ts-ignore
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-grey_50 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-3 font-normal block w-full whitespace-nowrap bg-transparent"
          }
          onClick={(e) => e.preventDefault()}
        >
          <div className="items-center flex justify-between w-full text-lg">
            <img src="assets/icons/eth.png" alt="..." />
            <span className="text-base ml-2 font-bold">ETH</span>
          </div>
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-3 font-normal block w-full whitespace-nowrap bg-transparent"
          }
          onClick={(e) => e.preventDefault()}
        >
          <div className="items-center flex justify-between w-full text-lg">
            <img src="assets/icons/eth.png" alt="..." />
            <span className="text-base ml-2 font-bold">ETH</span>
          </div>
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-3 font-normal block w-full whitespace-nowrap bg-transparent"
          }
          onClick={(e) => e.preventDefault()}
        >
          <div className="items-center flex justify-between w-full text-lg">
            <img src="assets/icons/eth.png" alt="..." />
            <span className="text-base ml-2 font-bold">ETH</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default TokensDropdown;
