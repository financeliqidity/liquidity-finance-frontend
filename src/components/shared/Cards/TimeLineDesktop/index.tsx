import React from "react";

import styles from "./styles/index.module.css";

const ArrowPointer = () => (
  <svg
    width="114"
    height="16"
    viewBox="0 0 114 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M113.707 8.70711C114.098 8.31658 114.098 7.68342 113.707 7.29289L107.343 0.928932C106.953 0.538408 106.319 0.538408 105.929 0.928932C105.538 1.31946 105.538 1.95262 105.929 2.34315L111.586 8L105.929 13.6569C105.538 14.0474 105.538 14.6805 105.929 15.0711C106.319 15.4616 106.953 15.4616 107.343 15.0711L113.707 8.70711ZM0 9H113V7H0V9Z"
      fill="#3A4861"
    />
  </svg>
);
const HomeIcon = ({ className }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <circle
      cx="60"
      cy="60"
      r="59"
      fill="#071022"
      stroke="#C18306"
      strokeWidth="2"
    />
    <path
      d="M59.3371 50.646L43.334 63.8264V78.0519C43.334 78.4202 43.4803 78.7734 43.7408 79.0339C44.0012 79.2943 44.3544 79.4406 44.7228 79.4406L54.4495 79.4155C54.8166 79.4136 55.168 79.2665 55.427 79.0063C55.6859 78.746 55.8313 78.3938 55.8313 78.0267V69.7192C55.8313 69.3508 55.9776 68.9976 56.2381 68.7372C56.4985 68.4767 56.8517 68.3304 57.2201 68.3304H62.7752C63.1435 68.3304 63.4968 68.4767 63.7572 68.7372C64.0177 68.9976 64.164 69.3508 64.164 69.7192V78.0206C64.1634 78.2034 64.1989 78.3844 64.2684 78.5534C64.338 78.7224 64.4402 78.876 64.5692 79.0054C64.6982 79.1349 64.8515 79.2375 65.0203 79.3076C65.1891 79.3777 65.37 79.4137 65.5528 79.4137L75.276 79.4406C75.6443 79.4406 75.9975 79.2943 76.258 79.0339C76.5184 78.7734 76.6648 78.4202 76.6648 78.0519V63.8168L60.6651 50.646C60.477 50.4944 60.2427 50.4117 60.0011 50.4117C59.7595 50.4117 59.5252 50.4944 59.3371 50.646V50.646ZM84.6155 59.6045L77.3591 53.6232V41.6007C77.3591 41.3244 77.2494 41.0595 77.0541 40.8642C76.8587 40.6688 76.5938 40.5591 76.3176 40.5591H71.4568C71.1806 40.5591 70.9156 40.6688 70.7203 40.8642C70.525 41.0595 70.4152 41.3244 70.4152 41.6007V47.9031L62.6441 41.5095C61.8984 40.8958 60.9626 40.5603 59.9968 40.5603C59.031 40.5603 58.0952 40.8958 57.3494 41.5095L35.378 59.6045C35.2725 59.6917 35.1853 59.7988 35.1212 59.9197C35.0571 60.0406 35.0175 60.1729 35.0046 60.3092C34.9917 60.4454 35.0058 60.5828 35.046 60.7136C35.0863 60.8444 35.1519 60.966 35.2391 61.0714L37.4525 63.7622C37.5395 63.8679 37.6465 63.9555 37.7674 64.0199C37.8883 64.0843 38.0207 64.1242 38.157 64.1373C38.2934 64.1505 38.431 64.1366 38.5619 64.0965C38.6929 64.0564 38.8147 63.9909 38.9203 63.9036L59.3371 47.0872C59.5252 46.9356 59.7595 46.8529 60.0011 46.8529C60.2427 46.8529 60.477 46.9356 60.6651 47.0872L81.0828 63.9036C81.1882 63.9909 81.3098 64.0565 81.4406 64.0967C81.5714 64.137 81.7088 64.151 81.845 64.1381C81.9813 64.1252 82.1136 64.0856 82.2345 64.0216C82.3554 63.9575 82.4625 63.8702 82.5497 63.7648L84.7631 61.074C84.8502 60.968 84.9156 60.8458 84.9553 60.7144C84.9951 60.5831 85.0085 60.4451 84.9948 60.3086C84.9811 60.172 84.9405 60.0395 84.8754 59.9187C84.8103 59.7979 84.722 59.6911 84.6155 59.6045V59.6045Z"
      fill="#C18306"
    />
  </svg>
);
const CoinIcon = ({ className }) => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <g filter="url(#filter0_d_4233_32284)">
      <circle cx="110" cy="70" r="60" fill="#071022" />
      <circle cx="110" cy="70" r="59" stroke="#C18306" strokeWidth="2" />
    </g>
    <path
      d="M85 84.5801V88.75C85 92.1973 93.3984 95 103.75 95C114.102 95 122.5 92.1973 122.5 88.75V84.5801C118.467 87.4219 111.094 88.75 103.75 88.75C96.4063 88.75 89.0332 87.4219 85 84.5801ZM116.25 57.5C126.602 57.5 135 54.6973 135 51.25C135 47.8027 126.602 45 116.25 45C105.898 45 97.5 47.8027 97.5 51.25C97.5 54.6973 105.898 57.5 116.25 57.5ZM85 74.3359V79.375C85 82.8223 93.3984 85.625 103.75 85.625C114.102 85.625 122.5 82.8223 122.5 79.375V74.3359C118.467 77.6563 111.084 79.375 103.75 79.375C96.416 79.375 89.0332 77.6563 85 74.3359ZM125.625 75.4102C131.221 74.3262 135 72.3145 135 70V65.8301C132.734 67.4316 129.404 68.5254 125.625 69.1992V75.4102ZM103.75 60.625C93.3984 60.625 85 64.1211 85 68.4375C85 72.7539 93.3984 76.25 103.75 76.25C114.102 76.25 122.5 72.7539 122.5 68.4375C122.5 64.1211 114.102 60.625 103.75 60.625ZM125.166 66.1231C131.025 65.0684 135 62.998 135 60.625V56.4551C131.533 58.9063 125.576 60.2246 119.307 60.5371C122.188 61.9336 124.307 63.8086 125.166 66.1231Z"
      fill="#C18306"
    />
    <defs>
      <filter
        id="filter0_d_4233_32284"
        x="0"
        y="0"
        width="180"
        height="180"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-20" dy="20" />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4233_32284"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4233_32284"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const UserIcon = ({ className }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <circle
      cx="60"
      cy="60"
      r="59"
      fill="#071022"
      stroke="#C18306"
      strokeWidth="2"
    />
    <path
      d="M60 63.125C67.7637 63.125 74.0625 56.8262 74.0625 49.0625C74.0625 41.2988 67.7637 35 60 35C52.2363 35 45.9375 41.2988 45.9375 49.0625C45.9375 56.8262 52.2363 63.125 60 63.125ZM72.5 66.25H67.1191C64.9512 67.2461 62.5391 67.8125 60 67.8125C57.4609 67.8125 55.0586 67.2461 52.8809 66.25H47.5C40.5957 66.25 35 71.8457 35 78.75V80.3125C35 82.9004 37.0996 85 39.6875 85H80.3125C82.9004 85 85 82.9004 85 80.3125V78.75C85 71.8457 79.4043 66.25 72.5 66.25Z"
      fill="#C18306"
    />
  </svg>
);
const GiftIcon = ({ className }) => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <g filter="url(#filter0_d_4234_32285)">
      <circle cx="110" cy="70" r="60" fill="#071022" />
      <circle cx="110" cy="70" r="59" stroke="#C18306" strokeWidth="2" />
    </g>
    <path
      d="M88.125 88.75C88.125 90.4785 89.5215 91.875 91.25 91.875H106.875V76.25H88.125V88.75ZM113.125 91.875H128.75C130.479 91.875 131.875 90.4785 131.875 88.75V76.25H113.125V91.875ZM131.875 60.625H127.764C128.369 59.4434 128.75 58.1348 128.75 56.7188C128.75 51.9824 124.893 48.125 120.156 48.125C116.094 48.125 113.467 50.2051 110.098 54.7949C106.729 50.2051 104.102 48.125 100.039 48.125C95.3027 48.125 91.4453 51.9824 91.4453 56.7188C91.4453 58.1348 91.8164 59.4434 92.4316 60.625H88.125C86.3965 60.625 85 62.0215 85 63.75V71.5625C85 72.4219 85.7031 73.125 86.5625 73.125H133.438C134.297 73.125 135 72.4219 135 71.5625V63.75C135 62.0215 133.604 60.625 131.875 60.625ZM100.029 60.625C97.8711 60.625 96.123 58.877 96.123 56.7188C96.123 54.5605 97.8711 52.8125 100.029 52.8125C101.973 52.8125 103.408 53.1348 108.438 60.625H100.029ZM120.156 60.625H111.748C116.768 53.1543 118.164 52.8125 120.156 52.8125C122.314 52.8125 124.063 54.5605 124.063 56.7188C124.063 58.877 122.314 60.625 120.156 60.625Z"
      fill="#C18306"
    />
    <defs>
      <filter
        id="filter0_d_4234_32285"
        x="0"
        y="0"
        width="180"
        height="180"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-20" dy="20" />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4234_32285"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4234_32285"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const SettingsIcon = ({ className }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <circle
      cx="60"
      cy="60"
      r="59"
      fill="#071022"
      stroke="#C18306"
      strokeWidth="2"
    />
    <path
      d="M83.321 66.008L79.0267 63.5282C79.4602 61.1895 79.4602 58.7903 79.0267 56.4516L83.321 53.9718C83.815 53.6895 84.0368 53.1049 83.8755 52.5605C82.7565 48.9718 80.8513 45.7259 78.3614 43.0243C77.9783 42.611 77.3533 42.5101 76.8694 42.7924L72.5751 45.2722C70.7707 43.7198 68.6941 42.5202 66.4461 41.7339V36.7844C66.4461 36.2198 66.053 35.7259 65.4985 35.6049C61.7989 34.7783 58.0086 34.8186 54.4905 35.6049C53.9361 35.7259 53.5429 36.2198 53.5429 36.7844V41.744C51.305 42.5404 49.2284 43.74 47.4139 45.2823L43.1296 42.8025C42.6357 42.5202 42.0208 42.611 41.6377 43.0343C39.1478 45.7259 37.2426 48.9718 36.1236 52.5706C35.9523 53.1149 36.1841 53.6996 36.6781 53.9819L40.9724 56.4617C40.5389 58.8004 40.5389 61.1996 40.9724 63.5383L36.6781 66.0181C36.1841 66.3004 35.9623 66.8851 36.1236 67.4294C37.2426 71.0181 39.1478 74.2641 41.6377 76.9657C42.0208 77.379 42.6458 77.4798 43.1296 77.1975L47.424 74.7177C49.2284 76.2701 51.305 77.4697 53.553 78.256V83.2156C53.553 83.7802 53.9461 84.2741 54.5006 84.3951C58.2002 85.2217 61.9905 85.1814 65.5086 84.3951C66.063 84.2741 66.4562 83.7802 66.4562 83.2156V78.256C68.6941 77.4596 70.7707 76.26 72.5852 74.7177L76.8795 77.1975C77.3735 77.4798 77.9884 77.3891 78.3715 76.9657C80.8614 74.2741 82.7666 71.0282 83.8855 67.4294C84.0368 66.875 83.815 66.2903 83.321 66.008V66.008ZM59.9945 68.0544C55.549 68.0544 51.93 64.4355 51.93 59.9899C51.93 55.5444 55.549 51.9254 59.9945 51.9254C64.4401 51.9254 68.059 55.5444 68.059 59.9899C68.059 64.4355 64.4401 68.0544 59.9945 68.0544Z"
      fill="#C18306"
    />
  </svg>
);

export default function TimeLineDesktop() {
  return (
    <section id="roadmap" className="py-14 text-white">
      <div className="container md:w-11/12 mx-auto px-2.5">
        <div className="relative wrap overflow-hidden p-10 px-6 h-full">
          <div
            className="absolute border-blue_grey h-4/5 border-4 w-0"
            style={{ left: "50%" }}
          ></div>
          {/* Timeline item */}
          <div className="mt-32 mb-8 w-full flex justify-between items-center">
            {/* <!-- left timeline --> */}
            <div className="order-1 w-5/12">
              <div className="flex items-center mb-6">
                <p className="font-bold text-golden text-5xl mr-3">Q3</p>
                <ArrowPointer />
                <span className="ml-5 font-bold text-grey_50">
                  DECEMBER, 2021
                </span>
              </div>
              <div
                className={`bg-blue_grey shadow-xl px-6 py-4 text-white relative  ${styles.timeline_content}`}
              >
                <HomeIcon className="hidden md:block absolute -right-4 top-8 z-30" />
                <div className="mb-5" id="13th">
                  <h3 className="mb-3 font-bold text-white text-xl">13th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>WEBSITE LAUNCH</li>
                    <li>PRIVATE SALE ANNOUNCEMENT</li>
                    <li>AIRDROP CAMPAIGN</li>
                  </ul>
                </div>
                <div id="29th">
                  <h3 className="mb-3 font-bold text-white text-xl">29th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>PRIVATE SALE</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="z-20 flex items-center order-1 bg-blue_grey shadow-xl w-1/5 h-2">
              <hr />
            </div>
            {/* <!-- right timeline --> */}
            <div className="order-1 w-5/12">
              <div className="flex items-center mb-6 py-2.5">
                <ArrowPointer />
                <span className="ml-5 font-bold text-grey_50">
                  DECEMBER, 2021
                </span>
              </div>
              <div
                className={`bg-blue_grey shadow-xl px-6 py-4 text-white relative  ${styles.timeline_content}`}
              >
                <CoinIcon className="hidden md:block absolute -right-8 top-8 z-30" />
                <div className="mb-5" id="10th_17th">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    10th-17th
                  </h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>TOKEN PUBLIC SALE</li>
                  </ul>
                </div>
                <div id="18th">
                  <h3 className="mb-3 font-bold text-white text-xl">18th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>LIQUIDITY LOCK</li>
                    <li>PANCAKE SWAP LISTING</li>
                    <li>POOCOIN ADS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline item */}
          <div className="mb-8 w-full flex justify-between items-center">
            {/* <!-- left timeline --> */}
            <div className="order-1 w-5/12">
              <div className="flex items-center mb-6">
                <p className="font-bold text-golden text-5xl mr-3">Q4</p>
                <ArrowPointer />
                <span className="ml-5 font-bold text-grey_50">
                  DECEMBER, 2021
                </span>
              </div>
              <div
                className={`bg-blue_grey shadow-xl px-6 py-4 text-white relative  ${styles.timeline_content}`}
              >
                <UserIcon className="hidden md:block absolute -right-4 top-8 z-30" />
                <div id="30th">
                  <h3 className="mb-3 font-bold text-white text-xl">30th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>GOVERNANCE</li>
                    <li>STAKING DASHBOARD</li>
                    <li>FIRST PROPOSAL</li>
                    <li>PROPOSAL IN ACTION</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="z-20 flex items-center order-1 bg-blue_grey shadow-xl w-1/5 h-2 rounded-full">
              <hr />
            </div>
            {/* <!-- right timeline --> */}
            <div className="order-1 w-5/12">
              <div className="flex items-center mb-6 py-2.5">
                <ArrowPointer />
                <span className="ml-5 font-bold text-grey_50">
                  DECEMBER, 2021
                </span>
              </div>
              <div
                className={`bg-blue_grey shadow-xl px-6 py-4 text-white relative  ${styles.timeline_content}`}
              >
                <GiftIcon className="hidden md:block absolute -right-8 top-8 z-30" />
                <div id="10th">
                  <h3 className="mb-3 font-bold text-white text-xl">10th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>TOKEN PUBLIC SALE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline item */}
          <div className="mb-0 flex justify-between items-center w-full">
            {/* <!-- left timeline --> */}
            <div className="order-1 w-5/12">
              <div className="flex items-center mb-6 py-2.5">
                <ArrowPointer />
                <span className="ml-5 font-bold text-grey_50">
                  DECEMBER, 2021
                </span>
              </div>
              <div
                className={`bg-blue_grey shadow-xl px-6 py-4 text-white relative  ${styles.timeline_content}`}
              >
                <SettingsIcon className="hidden md:block absolute -right-4 top-8 z-30" />
                <div id="30th">
                  <h3 className="mb-3 font-bold text-white text-xl">30th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>LENDING/BORROWING PLATFORM</li>
                    <li>UNIQUE DEX</li>
                    <li className="w-4/5">
                      LAUNCHPAD WITH LIQUIDITY OR TOKEN LOCKER
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="z-20 flex items-center order-1 bg-blue_grey shadow-xl w-1/5 h-2 rounded-full">
              <hr />
            </div>
            {/* <!-- right timeline --> */}
            <div className="order-1 w-5/12">
              <div className="flex items-center mb-6">
                <p className="font-bold text-golden text-5xl mr-3">IQ2021</p>
                <ArrowPointer />
                <span className="ml-5 font-bold text-grey_50">
                  DECEMBER, 2021
                </span>
              </div>
              <div
                className={`bg-blue_grey shadow-xl px-6 py-4 text-white relative  ${styles.timeline_content}`}
              >
                <CoinIcon className="hidden md:block absolute -right-8 top-8 z-30" />
                <div id="10th">
                  <h3 className="mb-3 font-bold text-white text-xl">10th</h3>
                  <ul className="grey-10 list-disc list-inside font-bold">
                    <li>
                      CHARTING SITE LIKE POOCOIN WITH FAR DIFFERENT USECASE
                    </li>
                    <li className="w-4/5">
                      EVERYTHING ABOVE IS BY DEFAULT BUT THE REST DEPENDS ON
                      GOVERNANCE
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
