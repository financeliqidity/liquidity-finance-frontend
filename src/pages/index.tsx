import Head from "next/head";
import Link from "next/link";
import MainNavigation from "../components/shared/Navbar/MainNavigation";

import styles from "../../styles/Home.module.css";
import Footer from "../components/shared/Footer";

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

export default function Home() {
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

          <section
            className={`${styles.features} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
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

          {/* <section
            className={`pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white bg-grey_50`}
          >
            <div className="container md:w-11/12 mx-auto px-4">
              <div className="mb-6 text-center">
                <h2 className="md:text-4xl text-3xl font-bold mb-1">
                  Tokenomics
                </h2>
                <p className="text-lg">Total supply: 20B LFI</p>
              </div>

              <div className="py-12 flex justify-between items-center">
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
          {/* </div>
            </div>
          </section> */}

          <section
            className={`${styles.governance} pt-16 pb-10 md:pt-20 md:pb-16 font-head text-white`}
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
                <div className={`${styles.why_img} mb-5 md:mb-0`}>
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
                        <h3 className="mb-3 font-bold text-white text-xl">
                          13th
                        </h3>
                        <ul className="grey-10 list-disc list-inside font-bold">
                          <li>WEBSITE LAUNCH</li>
                          <li>PRIVATE SALE ANNOUNCEMENT</li>
                          <li>AIRDROP CAMPAIGN</li>
                        </ul>
                      </div>
                      <div id="29th">
                        <h3 className="mb-3 font-bold text-white text-xl">
                          29th
                        </h3>
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
                        <h3 className="mb-3 font-bold text-white text-xl">
                          18th
                        </h3>
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
                        <h3 className="mb-3 font-bold text-white text-xl">
                          30th
                        </h3>
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
                        <h3 className="mb-3 font-bold text-white text-xl">
                          10th
                        </h3>
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
                        <h3 className="mb-3 font-bold text-white text-xl">
                          30th
                        </h3>
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
                      <p className="font-bold text-golden text-5xl mr-3">
                        IQ2021
                      </p>
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
                        <h3 className="mb-3 font-bold text-white text-xl">
                          10th
                        </h3>
                        <ul className="grey-10 list-disc list-inside font-bold">
                          <li>
                            CHARTING SITE LIKE POOCOIN WITH FAR DIFFERENT
                            USECASE
                          </li>
                          <li className="w-4/5">
                            EVERYTHING ABOVE IS BY DEFAULT BUT THE REST DEPENDS
                            ON GOVERNANCE
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="team" className="py-14 text-white">
            <div className="container md:w-11/12 mx-auto px-4">
              <h2 className="md:text-4xl text-3xl font-bold mb-10 text-left">
                Team Members
              </h2>
              <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-3 xl:-mx-3">
                <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
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

                <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
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

                <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
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

                <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
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

                <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
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

                <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
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
