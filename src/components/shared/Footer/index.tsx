import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-grey_70 px-4 py-20 md:px-16 md:py-24 font-head text-white">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col-reverse justify-between md:w-full md:flex-row">
            <div className="w-full md:w-4/6 md:flex justify-between flex-wrap">
              <div className="flex justify-between w-full md:w-2/5 mb-10 md:mb-0">
                <div className="company">
                  <h2 className=" text-primary font-bold mb-3">ABOUT US</h2>
                  <ul>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Brand
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pricing">
                  <h2 className=" text-primary font-bold mb-3">ABOUT US</h2>
                  <ul>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Brand
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-grey_20 font-bold">
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="others md:w-1/3 w-full">
                <h2 className=" text-primary font-bold mb-3">ABOUT US</h2>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-sm text-grey_20 font-bold">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-sm text-grey_20 font-bold">
                      Brand
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-sm text-grey_20 font-bold">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-grey_20 font-bold">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-10 md:mb-0 w-full md:w-2/6">
              <div className="flex items-center">
                <img src="/assets/images/lfi-small.svg" alt="..." />
                <span className="ml-2 font-bold text-2xl">
                  Liquidity Finance
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul className="social mt-8 mb-6 flex">
          <li className="mr-6">
            <a href="#" className=" font-normal">
              <img src="/assets/icons/twitter.svg" alt="twitter" />
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="">
              <img src="/assets/icons/telegram.svg" alt="telegram" />
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="">
              <img src="/assets/icons/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="">
              <img src="/assets/icons/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="">
              <img src="/assets/icons/discord.svg" alt="discord" />
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              <img src="/assets/icons/linkedin.svg" alt="linkedin" />
            </a>
          </li>
        </ul>

        <hr />

        <div className="mt-7 flex flex-col justify-between items-start md:items-center md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <div
              className="
    relative
    inline-block
    w-10
    mr-2
    align-middle
    select-none
    transition
    duration-200
    ease-in
  "
            >
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="
      toggle-checkbox
      absolute
      block
      w-6
      h-6
      rounded-full
      bg-white
      border-4
      appearance-none
      cursor-pointer
    "
              />
              <label
                htmlFor="toggle"
                className="
      toggle-label
      block
      overflow-hidden
      h-6
      rounded-full
      bg-gray-300
      cursor-pointer
    "
              ></label>
            </div>
            <div className="ml-10 flex items-center">
              <img src="/assets/icons/global.svg" alt="lang" />
              <span className="font-bold text-sm text-grey_20 ml-2">EN</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <img src="/assets/icons/lfi-32.png" alt="..." />
              <span className="text-sm font-bold text-grey_20 ml-2">
                $0.00001
              </span>
            </div>
            <Link href="/#app">
              <a className="btn-primary text-white font-bold py-2 px-4 rounded-lg flex items-center">
                Buy LFI
                <img
                  src="/assets/icons/arrow-right.svg"
                  alt="..."
                  className="ml-2.5"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
