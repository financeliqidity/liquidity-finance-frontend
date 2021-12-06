import Countdown from "react-countdown";
import Head from "next/head";
import Link from "next/link";
import MainNavigation from "../components/shared/Navbar/MainNavigation";

import styles from "../../styles/Home.module.css";
import Footer from "../components/shared/Footer";
import TimelineMobile from "../components/shared/Cards/TimelineMobile";
import useMediaQuery from "../hooks/useMediaQuery";
import TimeLineDesktop from "../components/shared/Cards/TimeLineDesktop";

const ArrowRight = () => (
  <svg
    width="26"
    height="18"
    viewBox="0 0 26 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2401 0.906685L24.3334 9.00002L16.2401 17.0934"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66669 9H24.1067"
      stroke="#2669F5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Twitter = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6109 7.92615C20.6236 8.10381 20.6236 8.2815 20.6236 8.45916C20.6236 13.8779 16.4992 20.1216 8.96113 20.1216C6.63877 20.1216 4.48142 19.449 2.66669 18.2815C2.99665 18.3196 3.31388 18.3323 3.65653 18.3323C5.57275 18.3323 7.33674 17.6851 8.74538 16.581C6.94334 16.5429 5.43318 15.3627 4.91287 13.7384C5.1667 13.7764 5.42049 13.8018 5.68701 13.8018C6.05502 13.8018 6.42307 13.751 6.76569 13.6622C4.88752 13.2815 3.47884 11.6318 3.47884 9.63936V9.58862C4.0245 9.89319 4.65908 10.0835 5.33162 10.1089C4.22755 9.37283 3.50423 8.1165 3.50423 6.69517C3.50423 5.93376 3.70724 5.23579 4.06259 4.62664C6.08037 7.11396 9.11339 8.7383 12.5144 8.916C12.4509 8.61143 12.4129 8.2942 12.4129 7.97693C12.4129 5.71802 14.2403 3.87793 16.5119 3.87793C17.6921 3.87793 18.758 4.37285 19.5068 5.17235C20.4332 4.99469 21.3215 4.65203 22.1083 4.1825C21.8037 5.1343 21.1565 5.9338 20.3063 6.44138C21.1312 6.35259 21.9307 6.12411 22.6667 5.80688C22.1084 6.61903 21.4104 7.34236 20.6109 7.92615Z"
      fill="#7C8497"
    />
  </svg>
);

const Facebook = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.6667 12.0605C22.6667 6.53635 18.1909 2.06055 12.6667 2.06055C7.14249 2.06055 2.66669 6.53635 2.66669 12.0605C2.66669 17.0517 6.32354 21.1888 11.1042 21.9396V14.9513H8.56386V12.0605H11.1042V9.85732C11.1042 7.35127 12.5961 5.967 14.8812 5.967C15.9756 5.967 17.1199 6.16216 17.1199 6.16216V8.62184H15.8586C14.6167 8.62184 14.2292 9.3928 14.2292 10.1835V12.0605H17.0026L16.559 14.9513H14.2292V21.9396C19.0098 21.1888 22.6667 17.0517 22.6667 12.0605Z"
      fill="#7C8497"
    />
  </svg>
);

const Insta = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6689 6.87361C9.83122 6.87361 7.54231 9.16251 7.54231 12.0002C7.54231 14.8379 9.83122 17.1268 12.6689 17.1268C15.5066 17.1268 17.7955 14.8379 17.7955 12.0002C17.7955 9.16251 15.5066 6.87361 12.6689 6.87361ZM12.6689 15.3332C10.8351 15.3332 9.33596 13.8385 9.33596 12.0002C9.33596 10.162 10.8307 8.66725 12.6689 8.66725C14.5072 8.66725 16.0019 10.162 16.0019 12.0002C16.0019 13.8385 14.5027 15.3332 12.6689 15.3332ZM19.201 6.6639C19.201 7.32871 18.6656 7.85966 18.0052 7.85966C17.3404 7.85966 16.8095 7.32425 16.8095 6.6639C16.8095 6.00356 17.3449 5.46814 18.0052 5.46814C18.6656 5.46814 19.201 6.00356 19.201 6.6639ZM22.5964 7.87751C22.5206 6.27573 22.1547 4.85688 20.9812 3.68788C19.8123 2.51889 18.3934 2.15303 16.7916 2.07271C15.1408 1.97902 10.1926 1.97902 8.54176 2.07271C6.94443 2.14857 5.52558 2.51443 4.35213 3.68342C3.17868 4.85241 2.81727 6.27126 2.73696 7.87305C2.64326 9.52391 2.64326 14.472 2.73696 16.1229C2.81281 17.7247 3.17868 19.1435 4.35213 20.3125C5.52558 21.4815 6.93997 21.8474 8.54176 21.9277C10.1926 22.0214 15.1408 22.0214 16.7916 21.9277C18.3934 21.8519 19.8123 21.486 20.9812 20.3125C22.1502 19.1435 22.5161 17.7247 22.5964 16.1229C22.6901 14.472 22.6901 9.52838 22.5964 7.87751ZM20.4637 17.8942C20.1157 18.7688 19.4419 19.4425 18.563 19.795C17.2467 20.317 14.1235 20.1965 12.6689 20.1965C11.2144 20.1965 8.08665 20.3125 6.77489 19.795C5.90037 19.4469 5.22664 18.7732 4.87416 17.8942C4.35213 16.578 4.4726 13.4548 4.4726 12.0002C4.4726 10.5457 4.35659 7.41795 4.87416 6.10618C5.22218 5.23167 5.89591 4.55793 6.77489 4.20545C8.09111 3.68342 11.2144 3.80389 12.6689 3.80389C14.1235 3.80389 17.2512 3.68788 18.563 4.20545C19.4375 4.55347 20.1112 5.2272 20.4637 6.10618C20.9857 7.42241 20.8652 10.5457 20.8652 12.0002C20.8652 13.4548 20.9857 16.5825 20.4637 17.8942Z"
      fill="#7C8497"
    />
  </svg>
);

const Linkedin = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.14347 21.9996H2.99704V8.64687H7.14347V21.9996ZM5.06803 6.82545C3.74213 6.82545 2.66669 5.72723 2.66669 4.40134C2.66669 3.76446 2.91968 3.15367 3.37002 2.70334C3.82036 2.253 4.43115 2 5.06803 2C5.7049 2 6.31569 2.253 6.76603 2.70334C7.21637 3.15367 7.46937 3.76446 7.46937 4.40134C7.46937 5.72723 6.39347 6.82545 5.06803 6.82545ZM22.6622 21.9996H18.5247V15.4996C18.5247 13.9504 18.4935 11.9638 16.3689 11.9638C14.2131 11.9638 13.8828 13.6469 13.8828 15.3879V21.9996H9.74079V8.64687H13.7176V10.4683H13.7756C14.3292 9.4192 15.6814 8.31205 17.6988 8.31205C21.8953 8.31205 22.6667 11.0754 22.6667 14.6647V21.9996H22.6622Z"
      fill="#7C8497"
    />
  </svg>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <></>;
  } else {
    return (
      <div className="mx-auto w-11/12 flex items-center justify-between text-white">
        <div className="item">
          <p className="hours text-center">DAYS</p>
          <div className="flex items-center">
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg fl items-center justify-center text-center md:mr-2 mr-1">
              <span className="text-white font-bold text-xl md:text-6xl">
                {days.toString().length === 2 ? days.toString().charAt(0) : "0"}
              </span>
            </div>
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg items-center justify-center text-center">
              <span className="text-white font-bold text-xl md:text-6xl">
                {days.toString().length === 1
                  ? days.toString().charAt(0)
                  : days.toString().charAt(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="item">
          <p className="hours text-center">HOURS</p>
          <div className="flex items-center">
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg fl items-center justify-center text-center md:mr-2 mr-1">
              <span className="text-white font-bold text-xl md:text-6xl">
                {hours.toString().length === 2
                  ? hours.toString().charAt(0)
                  : "0"}
              </span>
            </div>
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg items-center justify-center text-center">
              <span className="text-white font-bold text-xl md:text-6xl">
                {hours.toString().length === 1
                  ? hours.toString().charAt(0)
                  : hours.toString().charAt(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="item">
          <p className="hours text-center">MINUTES</p>
          <div className="flex items-center">
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg fl items-center justify-center text-center md:mr-2 mr-1">
              <span className="text-white font-bold text-xl md:text-6xl">
                {minutes.toString().length === 2
                  ? minutes.toString().charAt(0)
                  : "0"}
              </span>
            </div>
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg items-center justify-center text-center">
              <span className="text-white font-bold text-xl md:text-6xl">
                {minutes.toString().length === 1
                  ? minutes.toString().charAt(0)
                  : minutes.toString().charAt(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="item">
          <p className="hours text-center">SECONDS</p>
          <div className="flex items-center">
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg fl items-center justify-center text-center md:mr-2 mr-1">
              <span className="text-white font-bold text-xl md:text-6xl">
                {seconds.toString().length === 2
                  ? seconds.toString().charAt(0)
                  : "0"}
              </span>
            </div>
            <div className="flex md:p-4 p-2 md:w-32 md:h-28 shadow bg-grey_20 rounded-lg items-center justify-center text-center">
              <span className="text-white font-bold text-xl md:text-6xl">
                {seconds.toString().length === 1
                  ? seconds.toString().charAt(0)
                  : seconds.toString().charAt(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default function Home() {
  const isSmall = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div className="bg-dark_grey h-full min-h-screen w-full">
        <MainNavigation />

        <main>
          <section
            id="hero"
            className={`relative flex content-center ${styles.hero} justify-center`}
          >
            <div className="container md:w-11/12 mx-auto px-4">
              <div className="flex flex-col md:flex-row pt-40 pb-14 justify-between items-center">
                <div className="left w-full md:w-8/12 md:pt-6 text-center md:text-left md:py-16 md:flex flex-col justify-center">
                  <p className="text-lg font-semibold text-grey_20 mb-4">
                    Democracy driven leadership project
                  </p>
                  <h1 className="font-bold md:text-6xl text-4xl text-white">
                    LIQUIDITY FINANCE
                  </h1>

                  <p className="mt-6 grey-10 mb-7 text-lg">
                    the first real governance-driven, interest free and hedge
                    fund standard project that favors both WHALE and SHRIMP size
                    investors. The first project with a buyback & burn mechanism
                    of 4% with 1% reward for stakers and 1% to development
                    wallet until the supply drops to the minimum supply of 1
                    Billion and once that is attained, we shift the 4% burning
                    into rewarding our stakers.
                  </p>
                  <div>
                    <button className="px-5 md:px-9 btn-primary  text-white font-bold p-4 capitalize border-primary border-t border-b border-r text-base rounded-lg">
                      Launch App
                    </button>
                  </div>
                </div>
                <div className="right relative md:w-7/12 hidden md:flex items-center justify-end">
                  <img
                    src="/assets/images/hero.svg"
                    alt="hero"
                    className="w-11/12 ml-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="countdown" className="py-14 bg-grey_50 mt-10">
            <div className="container mx-auto px-4 md:w-11/12">
              <Countdown date={Date.now() + 80000000} renderer={renderer} />
            </div>
          </section>

          <section
            className={`${styles.features} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
            id="features"
          >
            <div className="container md:w-11/12 mx-auto px-4">
              <h2 className="md:text-4xl text-3xl font-bold mb-6 text-center">
                Our Token Features
              </h2>

              <div className="px-8 py-12 bg-blue_grey rounded-3xl mb-24">
                <img src="/assets/icons/fee-charging.svg" alt="..." />
                <h3 className="my-6 text-3xl font-bold">
                  Total Fee Charges 6%
                </h3>
                <p className="grey-10">
                  Meme coins fee charges mechanism is great but doing it the
                  right way is what makes it sustainable, since part of the
                  project revenue depends on gas fees, we then decide to make it
                  very low and deflational for traders and Hodlers which is why
                  we bring the solution with added boosting functionality to our
                  token. The reason we make the fee 6% is to make it tradeable
                  for the community, and our fees are deflationary, meaning it
                  reduces over time as the project get stronger the more trading
                  volume we have the faster the burning rate and the earlier we
                  launch our reward mechanism, though everything depends on the
                  Governance system.
                </p>

                <div className="mt-6">
                  <button className="bg-transparent border border-solid border-primary p-3 flex items-center rounded-lg">
                    <span className="font-bold text-primary mr-4">
                      Download Whitepaper
                    </span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div
                  className={`rounded-3xl p-8 bg-blue_grey ${styles.feature_item}`}
                >
                  <img src="/assets/icons/reward.svg" alt="..." />

                  <h3 className="my-6 text-3xl font-bold">Reward Pool 1%</h3>
                  <p className="grey-10 mb-6">
                    This pool is going to automatically be distributing 1% to
                    stakers in every 24hrs, The reason we make it that way is we
                    don't want to waste our gas in sending reward to our
                    stakers. Note: No minimum token requirement for receiving
                    reward.
                  </p>

                  <Link href="/#reward">
                    <a className="text-primary font-bold underline">
                      Read More
                    </a>
                  </Link>
                </div>
                <div
                  className={`rounded-3xl p-8 bg-blue_grey ${styles.feature_item}`}
                >
                  <img src="/assets/icons/insurance.svg" alt="..." />

                  <h3 className="my-6 text-3xl font-bold">Insurance Pool 4%</h3>
                  <p className="grey-10 mb-6">
                    We brought our idea like that of BNB, CAKE and other
                    periodical burning token, 3 weeks unconditional buyback and
                    burn. This occurs anytime there is massive sell-off of not
                    less than 40% loss on the token value, we instantaneously
                    buyback and burn.
                  </p>

                  <Link href="/#insurance">
                    <a className="text-primary font-bold underline">
                      Read More
                    </a>
                  </Link>
                </div>
                <div
                  className={`rounded-3xl p-8 bg-blue_grey ${styles.feature_item}`}
                >
                  <img src="/assets/icons/devs-wallet.svg" alt="..." />

                  <h3 className="my-6 text-3xl font-bold">Devs Wallet 1%</h3>
                  <p className="grey-10 mb-6">
                    We want to be dedicative and at the same time encouraging
                    for the long run on this project, that's why we never
                    reserve any token for ourselves just to prove how
                    community-driven the project is. This fee reward is what we
                    depend on.
                  </p>

                  <Link href="/#devs-wallet">
                    <a className="text-primary font-bold underline">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white bg-grey_50`}
            id="tokenomics"
          >
            <div className="container md:w-11/12 mx-auto px-4 overflow-x-hidden">
              <div className="mb-6 text-center">
                <h2 className="md:text-4xl text-3xl font-bold mb-1">
                  Tokenomics
                </h2>
                <p className="text-lg">Total supply: 20B LFI</p>
              </div>

              <div
                className={`${styles.slider_tokenomics} desktop-slider py-12 overflow-hidden relative`}
              >
                <div className={`flex items-center ${styles.slide_track}`}>
                  <div
                    className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm bg-grey_20`}
                  >
                    <h4 className="text-xl mb-1 font-bold">Private sale</h4>
                    <p className="text-lg mb-6">7% = 1.4B</p>
                    <div className="shadow w-full bg-dark_grey rounded-full">
                      <div
                        className="bg-secondary py-1 text-center text-white rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm bg-grey_20`}
                  >
                    <h4 className="text-xl mb-1 font-bold">Public sale</h4>
                    <p className="text-lg mb-6">50% = 10B</p>
                    <div className="shadow w-full bg-dark_grey rounded-full">
                      <div
                        className="bg-secondary py-1 text-center text-white rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm bg-grey_20`}
                  >
                    <h4 className="text-xl mb-1 font-bold">Public sale</h4>
                    <p className="text-lg mb-6">50% = 10B</p>
                    <div className="shadow w-full bg-dark_grey rounded-full">
                      <div
                        className="bg-secondary py-1 text-center text-white rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm bg-grey_20`}
                  >
                    <h4 className="text-xl mb-1 font-bold">
                      Listing liquidity
                    </h4>
                    <p className="text-lg mb-6">7% = 1.4B</p>
                    <div className="shadow w-full bg-dark_grey rounded-full">
                      <div
                        className="bg-secondary py-1 text-center text-white rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm bg-grey_20`}
                  >
                    <h4 className="text-xl mb-1 font-bold">Marketing</h4>
                    <p className="text-lg mb-6">7% = 1.4B</p>
                    <div className="shadow w-full bg-dark_grey rounded-full">
                      <div
                        className="bg-secondary py-1 text-center text-white rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`${styles.token_item} py-8 px-10 rounded-2xl shadow-sm bg-grey_20`}
                  >
                    <h4 className="text-xl mb-1 font-bold">Development</h4>
                    <p className="text-lg mb-6">7% = 1.4B</p>
                    <div className="shadow w-full bg-dark_grey rounded-full">
                      <div
                        className="bg-secondary py-1 text-center text-white rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.governance} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
            id="governance"
          >
            <div className="container md:w-11/12 mx-auto px-4">
              <h2 className="md:text-4xl text-3xl font-bold mb-6 text-left">
                Governance
              </h2>
              <div className="flex flex-col justify-between md:flex-row">
                <div
                  className={`${styles.governance_left} p-6 rounded-2xl mb-5 md:mb-0 `}
                >
                  <h3 className="mb-6 text-xl font-bold">
                    Total Fee Charges 6%
                  </h3>
                  <p className="grey-10">
                    Meme coins fee charges mechanism is great but doing it the
                    right way is what makes it sustainable, since part of the
                    project revenue depends on gas fees, we then decide to make
                    it very low and deflational for traders and Hodlers which is
                    why we bring the solution with added boosting functionality
                    to our token. The reason we make the fee 6% is to make it
                    tradeable for the community, and our fees are deflationary,
                    meaning it reduces over time as the project get stronger the
                    more trading volume we have the faster the burning rate and
                    the earlier we launch our reward mechanism, though
                    everything depends on the Governance system.
                  </p>
                </div>
                <div className={`${styles.governance_right}`}>
                  <div
                    className={`${styles.governance_right_item} p-6 rounded-2xl mb-8`}
                  >
                    What this means is that A Governor hunts or Buys an idea,
                    developmental opportunity, or profitable investment, he must
                    then distinctively document and propose the idea/development
                    in our proposal dapp, there all civilians(token holders)
                    vote on either Yes or No on whether the proposal should pass
                    or fail.
                  </div>
                  <div
                    className={`${styles.governance_right_item} p-6 rounded-2xl`}
                  >
                    Civilians (token holders) can vote or distinctively or
                    illustratively document an idea or development and post it
                    in our marketplace, there only the president or governor can
                    buy the developmental idea. Read more on our whitepaper.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.lending_borrowing} pt-16 pb-10 md:pt-20 md:pb-16`}
            id="lending"
          >
            <div className="container md:w-11/12 mx-auto px-4 text-white">
              <div className="flex flex-col justify-between md:flex-row">
                <div
                  className={`${styles.lb_left} px-7 py-8 rounded-3xl bg-grey_70 mb-5 md:mb-0`}
                >
                  <div className="bg-blue_grey px-6 py-14 h-full flex items-center w-full md:w-auto">
                    <img
                      src="/assets/images/illustration.svg"
                      alt="..."
                      className="w-full"
                    />
                  </div>
                </div>
                <div className={`${styles.governance_right}`}>
                  <h2 className="md:text-4xl text-3xl font-bold mb-3 text-left">
                    Lending and Borrowing
                  </h2>
                  <p className="text-lg grey-10">
                    This is a Peer-to-Peer (P2P) interface that is interest-free
                    and only charges a 6% fee from Borrower & 5% goes to the
                    lender and 1% fee to us.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-3">How it work?</h3>
                  <div
                    className={`${styles.lb_right_item_1} p-6 rounded-2xl mb-8 grey-10`}
                  >
                    We create a marketplace where there is a bunch list of
                    LENDERS and BORROWERS just like any other p2p marketplace
                    but this one is specifically for lenders and borrowers with
                    a sorted list of our supported assets e.g stable coins
                    (USDT, USDC, or BUSD), BNB, CAKE, BTC, etc in different
                    prices, it is left for the borrower to choose which asset
                    that best price his collateral.
                  </div>
                  <div
                    className={`${styles.lb_right_item_2} p-6 rounded-2xl grey-10 mb-6`}
                  >
                    Then he clicks on it and it will take him to where he can
                    chat with the lender on the due time (when it is expected
                    for him to make a refund) once they are done with the chat,
                    the lender sets the date and all necessary agreement they
                    had in the chat, the borrower checks if it is as they agreed
                    on, then he clicks confirm then his desired collateral asset
                    will be frozen immediately and the asset will be released to
                    him with a countdown displaying to both the lender and the
                    borrower.
                  </div>
                  <Link href="/#whitepaper">
                    <a className="text-primary font-bold underline">
                      Read the whitepaper
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 text-white" id="about">
            <div className="container md:w-11/12 mx-auto px-4">
              <div className="flex flex-col-reverse justify-between items-center md:flex-row">
                <div className="content w-full md:w-2/5">
                  <h2 className="md:text-4xl text-3xl font-bold mb-6 text-left">
                    About Us
                  </h2>
                  <p className="mb-8">
                    Liquidity Finance is developed and backed by a team of both
                    cryptocurrency veteran traders with 5yrs solid experience
                    and Portfolio managers with professional risk management
                    expertise. For more information download our whitepaper
                  </p>

                  <div className="flex justify-start">
                    <Link href="/#readmore">
                      <a className="py-4 px-6 font-bold text-primary border border-solid border-primary rounded-lg">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
                <img
                  src="/assets/images/about.png"
                  alt="..."
                  className="img w-4/5 mx-auto mb-4 md:mr-0 md:w-1/2 md:mb-0"
                />
              </div>
            </div>
          </section>

          <section className="py-14 text-white" id="why">
            <div className="container md:w-11/12 mx-auto px-4">
              <div className="flex flex-col justify-between items-center md:flex-row">
                <div className={`${styles.why_img} mb-6 md:mb-0`}>
                  <img
                    src="/assets/images/hero.png"
                    alt="..."
                    className="w-full"
                  />
                </div>
                <div className={`${styles.why_content} md:w-2/5`}>
                  <h2 className="md:text-4xl text-3xl font-bold mb-10 text-left">
                    Why Liquidity Finance
                  </h2>
                  <ul>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      20B supply that is Deflationary to not less than 1B.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      6% fee charges on every transaction.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      During private sale or public sale, you can not buy more
                      than 0.5% of the total allocated supply.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      No Antiwhale mechanism because when you dump we buy we
                      aren't scared of any dump.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      Real governance-driven project.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      A President and 4 Governors. Read more on Our whitepaper
                      above.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      Every 3 weeks buyback and burn.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      A Trading competition when the project is stronger, to
                      maintain the trading volume.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      P2P Lending and Borrowing.
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      Unique DEX (Decentralized Exchanger).
                    </li>
                    <li className="text-lg font-semibold grey-10 bg-blue_grey py-3 px-6 rounded-2xl mb-3 relative pl-10">
                      Unique CEX(Centralized Exchanger).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {isSmall ? <TimelineMobile /> : <TimeLineDesktop />}

          <section id="team" className="py-14 text-white">
            <div className="container md:w-11/12 mx-auto px-4">
              <h2 className="md:text-4xl text-3xl font-bold mb-10 text-left">
                Team Members
              </h2>

              <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-4 xl:-mx-4">
                <div className="my-2 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
                  <div className="w-full flex items-center justify-center flex-col py-8 bg-grey_50 rounded-2xl">
                    <img
                      src="/assets/images/happy.png"
                      alt="..."
                      className="mb-10"
                    />
                    <div className="details text-center">
                      <h3 className="font-bold text-xl mb-1">Abubakar Tanko</h3>
                      <p className="font-semibold grey-10 text-lg mb-1">
                        Founder
                      </p>
                      <p className="text-sm grey-10">(Developer)</p>
                    </div>
                    <ul className="mt-6 flex items-center">
                      <li className="mr-5">
                        <Link href="/#twitter">
                          <a>
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#fb">
                          <a>
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#insta">
                          <a>
                            <Insta />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#linkedin">
                          <a>
                            <Linkedin />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
                  <div className="w-full flex items-center justify-center flex-col py-8 bg-grey_50 rounded-2xl">
                    <img
                      src="/assets/images/happy.png"
                      alt="..."
                      className="mb-10"
                    />
                    <div className="details text-center">
                      <h3 className="font-bold text-xl mb-1">Abubakar Tanko</h3>
                      <p className="font-semibold grey-10 text-lg mb-1">
                        Founder
                      </p>
                      <p className="text-sm grey-10">(Developer)</p>
                    </div>
                    <ul className="mt-6 flex items-center">
                      <li className="mr-5">
                        <Link href="/#twitter">
                          <a>
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#fb">
                          <a>
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#insta">
                          <a>
                            <Insta />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#linkedin">
                          <a>
                            <Linkedin />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
                  <div className="w-full flex items-center justify-center flex-col py-8 bg-grey_50 rounded-2xl">
                    <img
                      src="/assets/images/happy.png"
                      alt="..."
                      className="mb-10"
                    />
                    <div className="details text-center">
                      <h3 className="font-bold text-xl mb-1">Abubakar Tanko</h3>
                      <p className="font-semibold grey-10 text-lg mb-1">
                        Founder
                      </p>
                      <p className="text-sm grey-10">(Developer)</p>
                    </div>
                    <ul className="mt-6 flex items-center">
                      <li className="mr-5">
                        <Link href="/#twitter">
                          <a>
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#fb">
                          <a>
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#insta">
                          <a>
                            <Insta />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#linkedin">
                          <a>
                            <Linkedin />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
                  <div className="w-full flex items-center justify-center flex-col py-8 bg-grey_50 rounded-2xl">
                    <img
                      src="/assets/images/happy.png"
                      alt="..."
                      className="mb-10"
                    />
                    <div className="details text-center">
                      <h3 className="font-bold text-xl mb-1">Abubakar Tanko</h3>
                      <p className="font-semibold grey-10 text-lg mb-1">
                        Founder
                      </p>
                      <p className="text-sm grey-10">(Developer)</p>
                    </div>
                    <ul className="mt-6 flex items-center">
                      <li className="mr-5">
                        <Link href="/#twitter">
                          <a>
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#fb">
                          <a>
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#insta">
                          <a>
                            <Insta />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#linkedin">
                          <a>
                            <Linkedin />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
                  <div className="w-full flex items-center justify-center flex-col py-8 bg-grey_50 rounded-2xl">
                    <img
                      src="/assets/images/happy.png"
                      alt="..."
                      className="mb-10"
                    />
                    <div className="details text-center">
                      <h3 className="font-bold text-xl mb-1">Abubakar Tanko</h3>
                      <p className="font-semibold grey-10 text-lg mb-1">
                        Founder
                      </p>
                      <p className="text-sm grey-10">(Developer)</p>
                    </div>
                    <ul className="mt-6 flex items-center">
                      <li className="mr-5">
                        <Link href="/#twitter">
                          <a>
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#fb">
                          <a>
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#insta">
                          <a>
                            <Insta />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#linkedin">
                          <a>
                            <Linkedin />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-2 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
                  <div className="w-full flex items-center justify-center flex-col py-8 bg-grey_50 rounded-2xl">
                    <img
                      src="/assets/images/happy.png"
                      alt="..."
                      className="mb-10"
                    />
                    <div className="details text-center">
                      <h3 className="font-bold text-xl mb-1">Abubakar Tanko</h3>
                      <p className="font-semibold grey-10 text-lg mb-1">
                        Founder
                      </p>
                      <p className="text-sm grey-10">(Developer)</p>
                    </div>
                    <ul className="mt-6 flex items-center">
                      <li className="mr-5">
                        <Link href="/#twitter">
                          <a>
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#fb">
                          <a>
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li className="mr-5">
                        <Link href="/#insta">
                          <a>
                            <Insta />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#linkedin">
                          <a>
                            <Linkedin />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
