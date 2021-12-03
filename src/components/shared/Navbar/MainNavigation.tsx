import React from "react";
import Link from "next/link";

export default function MainNavigation() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={`md:w-10/12 fixed flex flex-wrap items-center justify-between px-0 md:px-4 ${
          navbarOpen ? "md:py-3" : "py-3"
        } w-screen z-40 bg-light top-6 mx-auto bg-grey_70 rounded-xl left-0 right-0`}
        style={{
          transition: "background-color .4s ease-out",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <Link href="/">
              <a className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <img
                  src="/assets/icons/logo.svg"
                  alt="..."
                  className="w-10 md:w-10"
                />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.5"
                  y1="1.5"
                  x2="22.5"
                  y2="1.5"
                  stroke="#014A34"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10 10L22 10"
                  stroke="#014A34"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M2 18L22 18"
                  stroke="#014A34"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-transparent lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-white">
                    Home
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#menu">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Features
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20"
                  href="#/contact-us"
                >
                  Tokenomics
                </a>
              </li>
              <li className="flex items-center">
                <Link href="/#restaurants">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Roadmap
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#restaurants">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Loan
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#restaurants">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    About
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/#">
                  <a
                    className="border border-solid border-primary text-white font-semibold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 btn-primary"
                    style={{ transition: "all .15s ease" }}
                  >
                    White Paper
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
