import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPopper } from "@popperjs/core";
import global from "../../../../public/assets/icons/global.svg";

const Globe = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66667 16 2.66667C8.6362 2.66667 2.66667 8.63621 2.66667 16C2.66667 23.3638 8.6362 29.3333 16 29.3333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6667 4H12C9.4 11.7867 9.4 20.2133 12 28H10.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 4C22.6 11.7867 22.6 20.2133 20 28"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 21.3333V20C11.7867 22.6 20.2133 22.6 28 20V21.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12C11.7867 9.4 20.2133 9.4 28 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Language = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "auto",
      modifiers: [{ name: "offset", options: { offset: [0, 24] } }],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => setDropdownPopoverShow(false);
  return (
    <>
      <button
        className="mb-0"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <span
          className={dropdownPopoverShow ? "text-primary" : "text-icons_color"}
        >
          <Globe />
        </span>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-grey_50 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-24 text-white"
        }
      >
        <button
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          English
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          type="button"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
        >
          Germany
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
          type="button"
        >
          America
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
          type="button"
        >
          Japan
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
          type="button"
        >
          Korea
        </button>
      </div>
    </>
  );
};

export default Language;
