import React from "react";
import { createPopper } from "@popperjs/core";

export default function MoreInfo({ color = "white", warning_text }) {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = React.createRef();
  const tooltipRef = React.createRef();
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "top",
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <div>
      <>
        <div className="flex flex-wrap items-center">
          <div className="w-full flex items-center">
            <span
              className={
                "bg-transparent text-white font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
              }
              onMouseEnter={openLeftTooltip}
              onMouseLeave={closeLeftTooltip}
              ref={btnRef}
            >
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
                  d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM13 16V18H11V16H13ZM13 14V6H11V14H13Z"
                  fill="#7C8497"
                />
              </svg>
            </span>
            <div
              className={
                (tooltipShow ? "" : "hidden ") +
                "bg-grey_20 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
              }
              ref={tooltipRef}
            >
              <div className="text-white p-3">{warning_text}</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
