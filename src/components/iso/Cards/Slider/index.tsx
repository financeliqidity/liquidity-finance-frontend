import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const CaretUp = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.67531 13.2544H15.6567C16.5548 13.2544 17.0038 12.1697 16.3681 11.534L9.87992 5.04074C9.48639 4.64721 8.84564 4.64721 8.45211 5.04074L1.96393 11.534C1.32823 12.1697 1.77725 13.2544 2.67531 13.2544Z"
      fill="#45C581"
    />
  </svg>
);
const CaretLeft = () => (
  <svg
    width="13"
    height="21"
    viewBox="0 0 13 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3327 0.291656L0.666016 10.5L12.3327 20.7083V0.291656Z"
      fill="#B7BECB"
    />
  </svg>
);
const CaretRight = () => (
  <svg
    width="12"
    height="21"
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.333984 0.583344V20.4167L11.6673 10.5L0.333984 0.583344Z"
      fill="#B7BECB"
    />
  </svg>
);

export default function Slider() {
  return (
    <div className="py-6 px-8 bg-grey_70 rounded-xl">
      <h1 className="text-lg font-semibold mb-5">Trending:</h1>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500 }}
      >
        <SwiperSlide>
          <ul className="flex justify-between items-center">
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex ml-2 items-stretch h-full mb-0">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="flex justify-between items-center">
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex ml-2 items-stretch h-full mb-0">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
            <li className="py-3 px-4 bg-grey_50 rounded-lg flex items-center">
              <img src="/assets/icons/lfi-icon.svg" alt="..." />
              <div className="ml-2">
                <p className="text-sm font-bold">LFI</p>
                <p className="text-sm font-semibold">0.001</p>
              </div>
              <div className="flex items-end ml-2">
                <p className="text-xs text-secondary flex items-center">
                  <CaretUp />
                  <span className="ml-1">20.08</span>
                </p>
              </div>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>

      <div className="mt-4 flex justify-between w-full items-center">
        <button className="border-2 border-grey_50 py-3 px-4 rounded-lg">
          <CaretLeft />
        </button>
        <button className="border-2 border-primary py-3 px-4 rounded-lg btn-primary">
          <CaretRight />
        </button>
      </div>
    </div>
  );
}
