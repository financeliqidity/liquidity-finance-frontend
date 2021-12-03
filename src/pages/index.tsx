import Head from "next/head";
import Link from "next/link";
import MainNavigation from "../components/shared/Navbar/MainNavigation";

import styles from "../../styles/Home.module.css";

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

export default function Home() {
  return (
    <>
      <div className="bg-dark_grey h-full min-h-screen">
        <MainNavigation />

        <main>
          <section
            id="hero"
            className={`relative flex content-center ${styles.hero} justify-center`}
          >
            <div className="container md:w-10/12 mx-auto px-4 md:px-4">
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

          <section
            className={`${styles.features} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white bg-blue_grey`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 text-center">
                <h2 className="md:text-4xl text-3xl font-bold mb-1">
                  Tokenomics
                </h2>
                <p className="text-lg">Total supply: 20B LFI</p>
              </div>

              <div className="py-12 flex justify-between items-center">
                <div
                  className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm border border-primary border-solid`}
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
                  className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm border border-primary border-solid`}
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
                  className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm border border-primary border-solid`}
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
                  className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm border border-primary border-solid`}
                >
                  <h4 className="text-xl mb-1 font-bold">Listing liquidity</h4>
                  <p className="text-lg mb-6">7% = 1.4B</p>
                  <div className="shadow w-full bg-dark_grey rounded-full">
                    <div
                      className="bg-secondary py-1 text-center text-white rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${styles.token_item} py-8 px-8 rounded-2xl shadow-sm border border-primary border-solid`}
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
                {/* <div
                  className={`${styles.token_item} py-8 px-10 rounded-2xl shadow-sm border border-primary border-solid`}
                >
                  <h4 className="text-xl mb-1 font-bold">Development</h4>
                  <p className="text-lg mb-6">7% = 1.4B</p>
                  <div className="shadow w-full bg-dark_grey rounded-full">
                    <div
                      className="bg-secondary py-1 text-center text-white rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          <section
            className={`${styles.governance} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="md:text-4xl text-3xl font-bold mb-6 text-left">
                Governance
              </h2>
              <div className="flex justify-between">
                <div className={`${styles.governance_left} p-6 rounded-2xl`}>
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
            className={`${styles.lending_borrowing} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between">
                <div
                  className={`${styles.lb_left} px-7 py-8 rounded-3xl bg-grey_70`}
                >
                  <div className="bg-blue_grey px-6 py-14 h-full flex items-center">
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
        </main>
      </div>
    </>
  );
}
