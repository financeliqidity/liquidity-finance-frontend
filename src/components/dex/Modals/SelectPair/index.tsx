import React, { useState, useEffect, useMemo, useCallback } from "react";
import ManageTokens from "../../../shared/Modals/ManageTokens";
import axios from "axios";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux";
import useFetchListCallback from "../../../../hooks/useFetchListCallback";
import { useAllTokens, useToken } from "../../../../hooks/Tokens";
import { useActiveWeb3React } from "../../../../hooks";
import { isAddress } from "../../../../utils";
import useTokenComparator from "./sorting";
import { Currency, Token } from "cd3d-dex-libs-sdk";
import filterTokens from "./filtering";
import TokenItem from "./TokenItem";

const Close = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7L17 17"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17L17 7"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Back = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2469 17.0342L10.4211 17.86C10.0714 18.2097 9.50603 18.2097 9.16009 17.86L1.92875 10.6324C1.57909 10.2827 1.57909 9.71734 1.92875 9.37139L9.16009 2.14006C9.50975 1.79039 10.0752 1.79039 10.4211 2.14006L11.2469 2.96586C11.6003 3.31924 11.5929 3.89581 11.232 4.24176L6.74964 8.51211H17.4404C17.9352 8.51211 18.3332 8.91013 18.3332 9.40487V10.5952C18.3332 11.09 17.9352 11.488 17.4404 11.488H6.74964L11.232 15.7583C11.5966 16.1043 11.604 16.6808 11.2469 17.0342Z"
      fill="white"
    />
  </svg>
);
const Magnification = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4842 11.8609L10.8881 9.2648C10.771 9.14762 10.6121 9.08252 10.4455 9.08252H10.021C10.7397 8.16334 11.1667 7.0072 11.1667 5.74951C11.1667 2.75762 8.74251 0.333374 5.75061 0.333374C2.75872 0.333374 0.334473 2.75762 0.334473 5.74951C0.334473 8.74141 2.75872 11.1657 5.75061 11.1657C7.0083 11.1657 8.16444 10.7386 9.08362 10.0199V10.4444C9.08362 10.611 9.14872 10.7699 9.26589 10.887L11.862 13.4831C12.1068 13.7279 12.5026 13.7279 12.7447 13.4831L13.4816 12.7462C13.7264 12.5015 13.7264 12.1057 13.4842 11.8609ZM5.75061 9.08252C3.90964 9.08252 2.4176 7.59308 2.4176 5.74951C2.4176 3.90855 3.90704 2.4165 5.75061 2.4165C7.59158 2.4165 9.08362 3.90594 9.08362 5.74951C9.08362 7.59048 7.59418 9.08252 5.75061 9.08252Z"
      fill="#7C8497"
    />
  </svg>
);

export default function SelectPair({ content, onCurrencySelect }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [coins, setCoins] = useState([]);
  const { chainId } = useActiveWeb3React();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [listView, setListView] = useState<boolean>(false);
  const [invertSearchOrder, setInvertSearchOrder] = useState<boolean>(false);
  const isAddressSearch = isAddress(searchQuery);
  const searchToken = useToken(searchQuery);

  const allTokens = useAllTokens();

  const showETH: boolean = useMemo(() => {
    const s = searchQuery.toLowerCase().trim();
    return s === "" || s === "b" || s === "bn" || s === "bnb";
  }, [searchQuery]);

  const tokenComparator = useTokenComparator(invertSearchOrder);

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      onCurrencySelect(currency);
      setShowModal(false);
    },
    [setShowModal, onCurrencySelect]
  );

  const fetchTokenList = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins",
        {
          headers: {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key":
              "d0f6d804f8msha74d0e47c8ce43bp1342bdjsn0208e9d58e9b",
          },
        }
      );

      setLoading(false);
      setCoins(response.data.data.coins);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filteredTokens: Token[] = useMemo(() => {
    if (isAddressSearch) return searchToken ? [searchToken] : [];
    return filterTokens(Object.values(allTokens), searchQuery);
  }, [isAddressSearch, searchToken, allTokens, searchQuery]);

  const filteredSortedTokens: Token[] = useMemo(() => {
    if (searchToken) return [searchToken];
    const sorted = filteredTokens.sort(tokenComparator);
    const symbolMatch = searchQuery
      .toLowerCase()
      .split(/\s+/)
      .filter((s) => s.length > 0);
    if (symbolMatch.length > 1) return sorted;

    return [
      ...(searchToken ? [searchToken] : []),
      // sort any exact symbol matches first
      ...sorted.filter(
        (token) => token.symbol?.toLowerCase() === symbolMatch[0]
      ),
      ...sorted.filter(
        (token) => token.symbol?.toLowerCase() !== symbolMatch[0]
      ),
    ];
  }, [filteredTokens, searchQuery, searchToken, tokenComparator]);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        {content}
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12 border border-solid border-grey_20 rounded-3xl">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full bg-blue_grey outline-none focus:outline-none rounded-3xl">
                {/*header*/}
                <div className="flex items-center justify-between py-6 px-6">
                  <h3 className="text-lg font-semibold text-white leading-5 flex items-center">
                    <Back />
                    <span className="ml-2">Select a pair</span>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-0.5 flex-auto">
                  <div className="relative pull-right pr-4 md:pr-0">
                    <input
                      type="search"
                      placeholder="Enter the token symbol or address"
                      className="w-full bg-transparent text-sm text-grey_20 transition border border-solid border-grey_20 focus:outline-none rounded-lg py-2 px-4 pl-10 appearance-none leading-normal"
                    />
                    <div
                      className="absolute search-icon"
                      style={{ top: "0.75rem", left: "1rem" }}
                    >
                      <Magnification />
                    </div>
                  </div>
                  <div className="mt-6 mb-5">
                    <h4 className="font-bold mb-4">Common base</h4>
                    <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-1">
                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>

                      <div className="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
                        <div className="p-2 flex items-center border border-solid border-grey_20 rounded-lg cursor-pointer">
                          <img
                            src="/assets/images/BTC_logo.png"
                            alt="..."
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-bold">BTC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!loading && (
                    <ul>
                      {filteredSortedTokens.map((currency) => (
                        <React.Fragment key={currency.address}>
                          <TokenItem
                            currency={currency}
                            handleCurrencySelect={handleCurrencySelect}
                          />
                        </React.Fragment>
                      ))}
                    </ul>
                  )}
                </div>
                {/*footer*/}
                <div className="flex p-6 justify-center bg-dark_grey items-center rounded-b-3xl">
                  <ManageTokens setParentModal={setShowModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
