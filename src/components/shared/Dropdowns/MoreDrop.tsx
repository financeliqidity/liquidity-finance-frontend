import React, { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

const MenuActive = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 14V14C4.395 14 3.5 13.105 3.5 12V12C3.5 10.895 4.395 10 5.5 10V10C6.605 10 7.5 10.895 7.5 12V12C7.5 13.105 6.605 14 5.5 14Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 14V14C11.395 14 10.5 13.105 10.5 12V12C10.5 10.895 11.395 10 12.5 10V10C13.605 10 14.5 10.895 14.5 12V12C14.5 13.105 13.605 14 12.5 14Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 14V14C18.395 14 17.5 13.105 17.5 12V12C17.5 10.895 18.395 10 19.5 10V10C20.605 10 21.5 10.895 21.5 12V12C21.5 13.105 20.605 14 19.5 14Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 21V21C4.395 21 3.5 20.105 3.5 19V19C3.5 17.895 4.395 17 5.5 17V17C6.605 17 7.5 17.895 7.5 19V19C7.5 20.105 6.605 21 5.5 21Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 21V21C11.395 21 10.5 20.105 10.5 19V19C10.5 17.895 11.395 17 12.5 17V17C13.605 17 14.5 17.895 14.5 19V19C14.5 20.105 13.605 21 12.5 21Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 21V21C18.395 21 17.5 20.105 17.5 19V19C17.5 17.895 18.395 17 19.5 17V17C20.605 17 21.5 17.895 21.5 19V19C21.5 20.105 20.605 21 19.5 21Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 7V7C4.395 7 3.5 6.105 3.5 5V5C3.5 3.895 4.395 3 5.5 3V3C6.605 3 7.5 3.895 7.5 5V5C7.5 6.105 6.605 7 5.5 7Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7V7C11.395 7 10.5 6.105 10.5 5V5C10.5 3.895 11.395 3 12.5 3V3C13.605 3 14.5 3.895 14.5 5V5C14.5 6.105 13.605 7 12.5 7Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 7V7C18.395 7 17.5 6.105 17.5 5V5C17.5 3.895 18.395 3 19.5 3V3C20.605 3 21.5 3.895 21.5 5V5C21.5 6.105 20.605 7 19.5 7Z"
      fill="white"
    />
  </svg>
);
const MenuInActive = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 14V14C4.395 14 3.5 13.105 3.5 12V12C3.5 10.895 4.395 10 5.5 10V10C6.605 10 7.5 10.895 7.5 12V12C7.5 13.105 6.605 14 5.5 14Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 14V14C11.395 14 10.5 13.105 10.5 12V12C10.5 10.895 11.395 10 12.5 10V10C13.605 10 14.5 10.895 14.5 12V12C14.5 13.105 13.605 14 12.5 14Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 14V14C18.395 14 17.5 13.105 17.5 12V12C17.5 10.895 18.395 10 19.5 10V10C20.605 10 21.5 10.895 21.5 12V12C21.5 13.105 20.605 14 19.5 14Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 21V21C4.395 21 3.5 20.105 3.5 19V19C3.5 17.895 4.395 17 5.5 17V17C6.605 17 7.5 17.895 7.5 19V19C7.5 20.105 6.605 21 5.5 21Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 21V21C11.395 21 10.5 20.105 10.5 19V19C10.5 17.895 11.395 17 12.5 17V17C13.605 17 14.5 17.895 14.5 19V19C14.5 20.105 13.605 21 12.5 21Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 21V21C18.395 21 17.5 20.105 17.5 19V19C17.5 17.895 18.395 17 19.5 17V17C20.605 17 21.5 17.895 21.5 19V19C21.5 20.105 20.605 21 19.5 21Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 7V7C4.395 7 3.5 6.105 3.5 5V5C3.5 3.895 4.395 3 5.5 3V3C6.605 3 7.5 3.895 7.5 5V5C7.5 6.105 6.605 7 5.5 7Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7V7C11.395 7 10.5 6.105 10.5 5V5C10.5 3.895 11.395 3 12.5 3V3C13.605 3 14.5 3.895 14.5 5V5C14.5 6.105 13.605 7 12.5 7Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 7V7C18.395 7 17.5 6.105 17.5 5V5C17.5 3.895 18.395 3 19.5 3V3C20.605 3 21.5 3.895 21.5 5V5C21.5 6.105 20.605 7 19.5 7Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99998 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8C14.6666 4.33334 11.6666 1.33334 7.99998 1.33334C4.33331 1.33334 1.33331 4.33334 1.33331 8C1.33331 11.6667 4.33331 14.6667 7.99998 14.6667Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5.33334V8.66667"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99634 10.6667H8.00233"
      stroke="#B7BECB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChatIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3333 12.2867H8.66665L5.69997 14.26C5.25997 14.5533 4.66665 14.24 4.66665 13.7067V12.2867C2.66665 12.2867 1.33331 10.9534 1.33331 8.95337V4.95333C1.33331 2.95333 2.66665 1.62 4.66665 1.62H11.3333C13.3333 1.62 14.6666 2.95333 14.6666 4.95333V8.95337C14.6666 10.9534 13.3333 12.2867 11.3333 12.2867Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00002 7.57332V7.43335C8.00002 6.98002 8.28004 6.74001 8.56004 6.54667C8.83337 6.36001 9.10667 6.12001 9.10667 5.68001C9.10667 5.06668 8.61335 4.57332 8.00002 4.57332C7.38669 4.57332 6.89337 5.06668 6.89337 5.68001"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99702 9.16667H8.00302"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MugIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.55988 5.14844L7.97654 5.08067L8.05339 5.06817C8.04968 5.04537 8.04568 5.02264 8.04139 5H7.97654C8.01472 5 8.04654 5.02756 8.0529 5.0652L7.97654 5.07809L7.55988 5.14844ZM8.32033 5C8.32581 5.03253 8.33076 5.06521 8.33519 5.09802L8.33533 5.09904C8.33528 5.0987 8.33523 5.09836 8.33519 5.09802C8.33081 5.06351 8.3444 5.03581 8.35696 5.02199C8.36904 5.00871 8.38683 5 8.40623 5H8.32033ZM6.69482 1.76136C6.69816 1.78543 6.70178 1.80942 6.7057 1.83333H6.77081C6.74 1.83333 6.70133 1.80811 6.69486 1.76166L6.77081 1.75109L7.19008 1.69271L6.77081 1.75082L6.69482 1.76136ZM6.34373 1.83333H6.42808C6.42349 1.8028 6.41931 1.77216 6.41556 1.74141L6.41556 1.74141L6.41531 1.73942C6.41539 1.74009 6.41547 1.74075 6.41554 1.74141C6.41877 1.772 6.40688 1.7971 6.39467 1.81057C6.38242 1.8241 6.36376 1.83333 6.34373 1.83333ZM7.33394 3.65034C7.33379 3.65018 7.33363 3.65002 7.33348 3.64986C7.33332 3.6497 7.33316 3.64954 7.33301 3.64938L6.97654 4L7.33394 3.65034ZM4.60374 3.43583L4.60374 3.43583L4.60477 3.43688C5.03059 3.86902 5.30418 4.40994 5.40366 5H5.12472C5.02842 4.49222 4.78527 4.02467 4.41686 3.64991C3.92713 3.14917 3.61458 2.5193 3.51142 1.83333H3.78903C3.88817 2.43913 4.17191 2.99501 4.60374 3.43583ZM11.3333 11.6667H10.8333V12.1667C10.8333 13.2707 9.93738 14.1667 8.83331 14.1667H3.83331C2.72925 14.1667 1.83331 13.2707 1.83331 12.1667V7.16667C1.83331 6.98187 1.98185 6.83333 2.16665 6.83333H11.75C13.0832 6.83333 14.1666 7.91677 14.1666 9.25C14.1666 10.5832 13.0832 11.6667 11.75 11.6667H11.3333ZM10.8333 10.5V11H11.3333H11.75C12.7162 11 13.5 10.2162 13.5 9.25C13.5 8.28375 12.7162 7.5 11.75 7.5H11.3333H10.8333V8V10.5Z"
      stroke="#B7BECB"
    />
  </svg>
);
const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.35331 8.28C1.59331 11.7133 4.50664 14.5067 7.99331 14.66C10.4533 14.7667 12.6533 13.62 13.9733 11.8133C14.52 11.0733 14.2266 10.58 13.3133 10.7467C12.8666 10.8267 12.4066 10.86 11.9266 10.84C8.66664 10.7067 5.99998 7.98 5.98664 4.76C5.97998 3.89333 6.15998 3.07333 6.48664 2.32667C6.84664 1.5 6.41331 1.10667 5.57998 1.46C2.93998 2.57333 1.13331 5.23333 1.35331 8.28Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const BookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6666 11.16V3.11333C14.6666 2.31333 14.0133 1.72 13.22 1.78667H13.18C11.78 1.90667 9.65331 2.62 8.46665 3.36667L8.35331 3.44C8.15998 3.56 7.83998 3.56 7.64665 3.44L7.47998 3.34C6.29331 2.6 4.17331 1.89333 2.77331 1.78C1.97998 1.71333 1.33331 2.31333 1.33331 3.10667V11.16C1.33331 11.8 1.85331 12.4 2.49331 12.48L2.68665 12.5067C4.13331 12.7 6.36665 13.4333 7.64665 14.1333L7.67331 14.1467C7.85331 14.2467 8.13998 14.2467 8.31331 14.1467C9.59331 13.44 11.8333 12.7 13.2866 12.5067L13.5066 12.48C14.1466 12.4 14.6666 11.8 14.6666 11.16Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 3.66V13.66"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.16669 5.66H3.66669"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.66669 7.66H3.66669"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const DocIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 4.66666V11.3333C14 13.3333 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3333 2 11.3333V4.66666C2 2.66666 3 1.33333 5.33333 1.33333H10.6667C13 1.33333 14 2.66666 14 4.66666Z"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.66669 3V4.33333C9.66669 5.06667 10.2667 5.66667 11 5.66667H12.3334"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33331 8.66667H7.99998"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33331 11.3333H10.6666"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoreDrop = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-start",
      modifiers: [
        { name: "offset", options: { offset: [0, 8] } },
        { name: "preventOverflow", options: { mainAxis: false } },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => setDropdownPopoverShow(false);
  return (
    <>
      <button
        className="md:p-4 p-2.5 hidden md:flex items-center bg-grey_50 rounded-lg"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {dropdownPopoverShow ? <MenuActive /> : <MenuInActive />}
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-grey_50 text-base z-50 float-right py-2 list-none text-right rounded shadow-lg min-w-51.5 text-white"
        }
      >
        <button
          className="text-sm py-2 px-4 font-normal flex justify-between items-center w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          <span className="grey-10 text-sm">About</span> <InfoIcon />
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal flex justify-between items-center w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          <span className="grey-10 text-sm">Help Center</span> <ChatIcon />
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal flex justify-between items-center w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          <span className="grey-10 text-sm">Request Features</span> <MugIcon />
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal flex justify-between items-center w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          <span className="grey-10 text-sm">Light Theme</span> <MoonIcon />
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal flex justify-between items-center w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          <span className="grey-10 text-sm">Docs</span> <BookIcon />
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <button
          className="text-sm py-2 px-4 font-normal flex justify-between items-center w-full whitespace-nowrap bg-transparent text-center"
          type="button"
        >
          <span className="grey-10 text-sm">Legal & Privacy</span> <DocIcon />
        </button>
      </div>
    </>
  );
};

export default MoreDrop;
