import React from "react";
import Link from "next/link";

const MenuMobile = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#FAFCFF" />
    <path
      d="M16 20H34"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 25H34"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 30H34"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function MainNavigation() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={`md:w-11/12 fixed flex flex-wrap items-center justify-between px-0 md:px-4 ${
          navbarOpen ? "md:py-3 py-3" : "py-3"
        } z-40 bg-light top-6 mx-auto bg-grey_70 rounded-xl left-0 right-0`}
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
              <MenuMobile />
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
                <Link href="/#hero">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-white">
                    Home
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#features">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Features
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#tokenomics">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Tokenomics
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#roadmap">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Roadmap
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#lending">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    Loan
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/#about">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base hover:font-semibold text-grey_20">
                    About
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/#hero">
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
