import React, { useRef, useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import WalletDetails from "../Modals/WalletDetails";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { trimAddress } from "../../../libs/helper";

const CaretDown = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7L12 13L18 7L20 9L12 17L4 9L6 7Z"
      fill="#B7BECB"
    />
  </svg>
);
const CaretDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.2807 5.96655L8.93404 10.3132C8.4207 10.8266 7.5807 10.8266 7.06737 10.3132L2.7207 5.96655"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WalletDropdown = ({ wallet, disconnectWallet }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "auto",
      modifiers: [
        { name: "offset", options: { offset: [0, 8] } },
        { name: "preventOverflow", options: { mainAxis: false } },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => setDropdownPopoverShow(false);

  const [showModal, setShowModal] = useState(false);

  const isSmall = useMediaQuery("(max-width: 768px)");

  return (
    <React.Fragment>
      {isSmall ? (
        <button
          className="p-1 bg-grey_50 flex items-center justify-between rounded-lg ml-3"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <img
            src="/assets/icons/wallet-mobile.svg"
            alt="..."
            className="w-6 h-6 mr-4"
          />
          <CaretDownIcon />
        </button>
      ) : (
        <button
          className="px-5 py-4 flex items-center justify-between bg-grey_50 rounded-lg group"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <img src="/assets/icons/wallet.svg" alt="..." />
          <span className="font-bold uppercase text-white group-hover:text-primary mx-2">
            {trimAddress(wallet)}
          </span>
          <CaretDown />
        </button>
      )}

      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-grey_50 text-base z-30 float-left py-2 list-none text-left rounded shadow-lg min-w-51.5 text-white w-full relative"
        }
      >
        <button
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-left"
          type="button"
        >
          <WalletDetails show={showModal} setShowModal={setShowModal} />
        </button>

        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />

        <Link href="/#">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Transactions
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-grey_30" />
        <button
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 text-left"
          }
          type="button"
          onClick={() => disconnectWallet()}
        >
          Disconnect
        </button>
      </div>
    </React.Fragment>
  );
};

export default WalletDropdown;
