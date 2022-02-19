import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { WalletContext } from "../../../../context";
import SocialLinks from "../../Arcodions/SocialLinks";
import PoolDisclaimer from "../../Modals/PoolDisclaimer";
import SelectPair from "../../Modals/SelectPair";
import Settings from "../../Modals/Settings";
import TrxnHistory from "../../Modals/TrxnHistory";
import PercentageSelect from "../../PercentageSelect";

import { selectTokenPair } from "../../../../selectTokenPair";

const RefreshIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 8.98581C16.5076 13.1181 13.1377 16.4971 9.00544 16.5C7.22071 16.5012 5.58136 15.8791 4.29308 14.8393C3.95809 14.569 3.93305 14.0669 4.23747 13.7625L4.5782 13.4218C4.83856 13.1614 5.2542 13.1329 5.54265 13.3618C6.49179 14.115 7.69297 14.5645 8.99999 14.5645C12.0757 14.5645 14.5645 12.0753 14.5645 8.99999C14.5645 5.92424 12.0753 3.43548 8.99999 3.43548C7.52376 3.43548 6.18299 4.00914 5.18746 4.94552L6.72235 6.48042C7.02719 6.78526 6.8113 7.30645 6.38023 7.30645H1.98387C1.71662 7.30645 1.5 7.08982 1.5 6.82258V2.42622C1.5 1.99515 2.02119 1.77925 2.32603 2.08406L3.81913 3.57717C5.16559 2.2904 6.99048 1.5 8.99999 1.5C13.1374 1.5 16.4923 4.8502 16.5 8.98581ZM11.0289 11.3684L11.3259 10.9864C11.572 10.67 11.515 10.214 11.1986 9.96792L9.96773 9.01055V5.85483C9.96773 5.45398 9.64279 5.12903 9.24193 5.12903H8.75806C8.3572 5.12903 8.03225 5.45398 8.03225 5.85483V9.95718L10.0103 11.4957C10.3268 11.7418 10.7828 11.6848 11.0289 11.3684V11.3684Z"
      fill="#B7BECB"
    />
  </svg>
);
const HeartIcon = ({ className }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <path
      d="M12.5 21.65C12.19 21.65 11.89 21.61 11.64 21.52C7.82 20.21 1.75 15.56 1.75 8.68998C1.75 5.18998 4.58 2.34998 8.06 2.34998C9.75 2.34998 11.33 3.00998 12.5 4.18998C13.67 3.00998 15.25 2.34998 16.94 2.34998C20.42 2.34998 23.25 5.19998 23.25 8.68998C23.25 15.57 17.18 20.21 13.36 21.52C13.11 21.61 12.81 21.65 12.5 21.65ZM8.06 3.84998C5.41 3.84998 3.25 6.01998 3.25 8.68998C3.25 15.52 9.82 19.32 12.13 20.11C12.31 20.17 12.7 20.17 12.88 20.11C15.18 19.32 21.76 15.53 21.76 8.68998C21.76 6.01998 19.6 3.84998 16.95 3.84998C15.43 3.84998 14.02 4.55998 13.11 5.78998C12.83 6.16998 12.19 6.16998 11.91 5.78998C10.98 4.54998 9.58 3.84998 8.06 3.84998Z"
      fill="#7C8497"
    />
  </svg>
);
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.91 8.08998C12.4165 8.59654 12.7011 9.28359 12.7011 9.99998C12.7011 10.7164 12.4165 11.4034 11.91 11.91C11.4034 12.4165 10.7164 12.7011 9.99998 12.7011C9.28359 12.7011 8.59654 12.4165 8.08998 11.91C7.58341 11.4034 7.29883 10.7164 7.29883 9.99998C7.29883 9.64526 7.3687 9.29401 7.50444 8.96629C7.64019 8.63857 7.83915 8.3408 8.08998 8.08998C8.3408 7.83915 8.63857 7.64019 8.96629 7.50444C9.29401 7.3687 9.64526 7.29883 9.99998 7.29883C10.7164 7.29883 11.4034 7.58341 11.91 8.08998"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.24993 10C3.24993 10.297 3.27693 10.594 3.31293 10.882L1.72493 12.124C1.55461 12.2574 1.43817 12.4478 1.39702 12.6602C1.35586 12.8725 1.39276 13.0926 1.50093 13.28L2.91293 15.723C3.02107 15.9101 3.19304 16.0519 3.39729 16.1224C3.60155 16.193 3.82439 16.1875 4.02493 16.107L5.44693 15.536C5.58536 15.4824 5.73477 15.4634 5.8822 15.4807C6.02963 15.4979 6.17062 15.5509 6.29293 15.635C6.51293 15.781 6.74093 15.915 6.97693 16.035C7.24693 16.172 7.44293 16.417 7.48593 16.717L7.70293 18.23C7.76593 18.672 8.14493 19 8.59093 19H11.4079C11.6238 19 11.8325 18.9221 11.9956 18.7807C12.1587 18.6393 12.2654 18.4437 12.2959 18.23L12.5129 16.718C12.5366 16.5712 12.5955 16.4323 12.6847 16.3134C12.7739 16.1944 12.8907 16.0989 13.0249 16.035C13.2599 15.917 13.4869 15.784 13.7059 15.639C13.8286 15.554 13.9701 15.5002 14.1183 15.4825C14.2664 15.4647 14.4167 15.4834 14.5559 15.537L15.9749 16.107C16.1755 16.1873 16.3983 16.1927 16.6025 16.1221C16.8067 16.0516 16.9786 15.9099 17.0869 15.723L18.4989 13.28C18.6071 13.0926 18.644 12.8725 18.6028 12.6602C18.5617 12.4478 18.4453 12.2574 18.2749 12.124L16.6869 10.882C16.7229 10.594 16.7499 10.297 16.7499 10C16.7499 9.703 16.7229 9.406 16.6869 9.118L18.2749 7.876C18.4453 7.74261 18.5617 7.55222 18.6028 7.33984C18.644 7.12745 18.6071 6.90735 18.4989 6.72L17.0869 4.277C16.9788 4.08991 16.8068 3.94809 16.6026 3.87755C16.3983 3.80702 16.1755 3.8125 15.9749 3.893L14.5559 4.463C14.4166 4.51634 14.2664 4.53492 14.1183 4.51715C13.9702 4.49938 13.8287 4.44578 13.7059 4.361C13.487 4.21555 13.2596 4.08332 13.0249 3.965C12.8907 3.90113 12.7739 3.8056 12.6847 3.68663C12.5955 3.56766 12.5366 3.4288 12.5129 3.282L12.2969 1.77C12.2664 1.55627 12.1597 1.36074 11.9966 1.2193C11.8335 1.07785 11.6248 0.999991 11.4089 1H8.59193C8.37603 0.999991 8.16737 1.07785 8.00425 1.2193C7.84113 1.36074 7.7345 1.55627 7.70393 1.77L7.48593 3.284C7.46228 3.43026 7.40365 3.56865 7.31503 3.68739C7.22641 3.80613 7.11042 3.90171 6.97693 3.966C6.74093 4.086 6.51293 4.221 6.29293 4.366C6.17024 4.44971 6.02906 4.50236 5.88152 4.51943C5.73397 4.5365 5.58449 4.51748 5.44593 4.464L4.02493 3.893C3.82439 3.8125 3.60155 3.80702 3.39729 3.87755C3.19304 3.94809 3.02107 4.08991 2.91293 4.277L1.50093 6.72C1.39276 6.90735 1.35586 7.12745 1.39702 7.33984C1.43817 7.55222 1.55461 7.74261 1.72493 7.876L3.31293 9.118C3.27372 9.41042 3.25268 9.70498 3.24993 10V10Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Selector = () => (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0.5L4 3.5L7 0.5L8 1.5L4 5.5L0 1.5L1 0.5Z"
      fill="#B7BECB"
    />
  </svg>
);

export default function SwapLeft({
  showModal,
  setShowModal,
  swapNTransfer,
  setSwapNTransfer,
  liquidityTerms,
  setLiquidityTerms,
  tabChanger,
}) {
  const { wallet, connectWallet } = React.useContext(WalletContext);
  const [tokenPair, setTokenPair] = useRecoilState(selectTokenPair);

  const [pPercentage, setPPercentage] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSwitchPair = () => {
    const pay = tokenPair.pay;
    const receive = tokenPair.receive;

    setTokenPair({ pay: receive, receive: pay });
  };

  const handleSwap = (values) => {
    console.log(values);
  };

  const Pay = () => (
    <div className="rounded-lg bg-grey_70 px-4 py-3 border border-solid border-grey_50">
      <div className="flex justify-between">
        <div className="left">
          <input
            type="number"
            name="pay"
            className="text-white bg-transparent border-none focus:border-none outline-none focus:outline-none text-xl font-bold w-full"
            {...register("pay", { required: true })}
          />
          <span className="text-gray-100 text-xs mt-1 block">~$ 2900.00</span>
          {errors.pay?.type === "required" && (
            <p className="text-left text-red-600 text-xs mt-1">
              Pay is required
            </p>
          )}
        </div>
        <div className="right">
          <SelectPair
            setPair={(pair) =>
              setTokenPair({
                ...tokenPair,
                pay: { name: pair.name, icon: pair.icon },
              })
            }
            content={
              <div className="flex items-center bg-grey_50 px-2 py-1 rounded-lg">
                <img
                  src={tokenPair.pay.icon}
                  alt="..."
                  className="w-5 h-5 mr-2"
                />

                <span className="block truncate text-base text-white text-center w-full mr-2.5">
                  {tokenPair.pay.name}
                </span>
                <span className="flex items-center justify-center">
                  <Selector />
                </span>
              </div>
            }
          />
          <span className="mt-1 text-gray-100 text-xs">
            Balance: 0 {tokenPair.pay.name}
          </span>
        </div>
      </div>
    </div>
  );

  const Receive = () => (
    <div className="rounded-lg bg-grey_70 px-4 py-3 border border-solid border-grey_50">
      <div className="flex justify-between">
        <div className="left">
          <input
            type="number"
            name="receive"
            className="text-white bg-transparent border-none focus:border-none outline-none focus:outline-none text-xl font-bold w-full"
            {...register("receive", { required: true })}
          />
          <span className="text-gray-100 text-xs mt-1 block">~$ 0.944518</span>
        </div>
        <div className="right flex items-center">
          <span className="text-sm font-semibold text-gray-100 mr-3">
            $2.9K
          </span>
          <SelectPair
            setPair={(pair) =>
              setTokenPair({
                ...tokenPair,
                receive: { name: pair.name, icon: pair.icon },
              })
            }
            content={
              <div className="flex items-center bg-grey_50 px-2 py-1 rounded-lg">
                <img
                  src={tokenPair.receive.icon}
                  alt="..."
                  className="w-5 h-5 mr-2"
                />

                <span className="block truncate text-base text-white text-center w-full mr-2.5">
                  {tokenPair.receive.name}
                </span>
                <span className="flex items-center justify-center">
                  <Selector />
                </span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="left w-full md:w-12/25 bg-blue_grey px-4 md:px-8 py-8 md:py-12 rounded-xl">
      <div className="w-full flex justify-between bg-grey_50 rounded-r-lg rounded-l-lg">
        <button className="md:py-5 py-3 w-1/3 btn-primary border-primary border-r border-solid rounded-r-lg rounded-l-lg font-bold md:text-xl text-base">
          Swap
        </button>
        <PoolDisclaimer
          content={
            <button
              onClick={() => setShowModal(true)}
              className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base"
            >
              Liquidity
            </button>
          }
          showModal={showModal}
          setShowModal={setShowModal}
          liquidityTerms={liquidityTerms}
          setLiquidityTerms={setLiquidityTerms}
          tabChanger={tabChanger}
        />

        <button className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
          Loan
        </button>
      </div>
      <form onSubmit={handleSubmit(handleSwap)}>
        <div className="mt-9 flex justify-between items-center">
          <span className="md:text-xl text-base">Swap Token</span>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <Settings />
              <TrxnHistory />
            </div>
            <button className="p-2.5">
              <HeartIcon className="hover-primary" />
            </button>
          </div>
        </div>
        <div className="disclaimer py-5 text-center text-xs">
          <p className="text-gray-200 mb-1 font-bold">
            This token is governance protected
          </p>
          <p className="text-primary font-bold cursor-pointer">more info</p>
        </div>
        {/* Pay */}
        <div className="pay">
          <p className="text-sm text-gray-100 mb-3">Pay</p>
          <Pay />
          <PercentageSelect value={pPercentage} setValue={setPPercentage} />
        </div>
        {/* Switch Button */}
        <div className="my-5 flex justify-center">
          <button
            className="p-4 bg-grey_50 rounded-full"
            onClick={handleSwitchPair}
            type="button"
          >
            <img src="/assets/icons/switch.svg" alt="..." />
          </button>
        </div>
        {/* Receive */}
        <div className="receive mb-8">
          <p className="text-sm text-gray-100 mb-3">Receive</p>
          <Receive />
        </div>
        <SocialLinks />
        {/* Swap & Transfer */}
        <div className="flex items-center mt-7">
          <span className="text-sm mr-1 text-gray-100">Swap & Transfer</span>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              onChange={(event) => setSwapNTransfer(!swapNTransfer)}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
        <div className="mt-8">
          <form
            className={`address flex items-center border-2 border-solid border-grey_50 p-4 rounded-lg ${
              swapNTransfer ? "bg-blue_grey" : "bg-grey_50"
            }`}
          >
            <input
              type="text"
              className="w-9/12 border-none focus:border-none outline-none focus:outline-none text-sm text-gray-100 bg-transparent"
              placeholder="Recipient’s ETH Address"
              disabled={!swapNTransfer}
            />
            <input
              type="button"
              value="SET ADDRESS"
              className="w-auto md:w-3/12 bg-blue_grey text-sm font-semibold py-1 px-2 rounded-md text-gray-100 cursor-pointer border border-solid border-grey_50"
              disabled={!swapNTransfer}
            />
          </form>
        </div>
        {wallet ? (
          <button
            type="submit"
            className="mt-8 w-full btn-primary text-white text-xl font-bold py-4 rounded-lg"
          >
            Swap
          </button>
        ) : (
          <button
            type="submit"
            className="mt-8 w-full btn-primary text-white text-xl font-bold py-4 rounded-lg"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </form>

      {/* Summary */}
      <div className="mt-8 py-3 px-4 bg-dark_grey rounded-lg">
        <div className="flex w-full justify-between mb-3">
          <p className="text-sm text-gray-200">Estimated Cost</p>
          <p className="text-sm text-gray-100">~$39.55</p>
        </div>
        <div className="flex w-full justify-between mb-3">
          <p className="text-sm text-gray-200">Price Impact</p>
          <p className="text-sm text-gray-100">0.47%</p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-sm text-gray-200">Minimum Received</p>
          <p className="text-sm text-gray-100">2832.6375 USDT</p>
        </div>
      </div>
    </div>
  );
}
