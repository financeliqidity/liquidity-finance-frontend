import Image from 'next/image';
import React from 'react';

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
      fill="#0E1C37"
    />
  </svg>
);

const ChainItem = ({ name, logo }) => (
  <li className="flex items-center mb-4">
    <Image src={logo} alt="..." width={32} height={32} />
    <div className="ml-2">
      <p className="font-bold mb-1">{name}</p>
      <span className="block text-xs text-grey_5">Mainnet</span>
    </div>
  </li>
);

export default function Withdrawal() {
  const searchHistory = [
    { id: 1, name: 'ETHEREUM' },
    { id: 2, name: 'BINANCE' },
    { id: 3, name: 'SOLANA' },
    { id: 4, name: 'POLYGON' },
    { id: 5, name: 'FANTOM' },
  ];
  const trending = [
    { id: 1, name: 'ETHEREUM' },
    { id: 2, name: 'BINANCE' },
    { id: 3, name: 'SOLANA' },
    { id: 4, name: 'POLYGON' },
    { id: 5, name: 'FANTOM' },
  ];

  const chainLists = [
    { id: 1, name: 'POLYGON', logo: '/assets/images/chains/polygon.png' },
    { id: 2, name: 'BINANCE', logo: '/assets/images/chains/binance.png' },
    { id: 3, name: 'BITCOIN', logo: '/assets/images/chains/bitcoin.png' },
    { id: 4, name: 'QUANTUM', logo: '/assets/images/chains/quantum.png' },
  ];

  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <div className="w-full md:w-4/6 max-w-4xl mx-auto">
        <div className="bg-grey_60 p-8 rounded-xl border border-grey_50">
          <div className="flex items-center mb-2">
            <div className="relative pull-right pr-4 md:pr-0 w-full bg-grey-10">
              <input
                type="text"
                placeholder="Search"
                className="w-full  text-sm text-grey_60 transition border border-solid border-grey_20 focus:outline-none rounded-lg py-2 px-4 pl-10 appearance-none leading-normal bg-grey-10"
              />
              <div
                className="absolute search-icon"
                style={{ top: '0.75rem', left: '1rem' }}
              >
                <Magnification />
              </div>
            </div>
            <button className="text-primary ml-6">Cancel</button>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-grey_5">Search History</p>

            <hr className="mt-2 mb-4 border-t border-grey_50 w-full" />

            <div className="w-full grid grid-cols-4 md:grid-cols-5 grid-rows-2 md:grid-rows-1 gap-4">
              {searchHistory.map((history) => (
                <button
                  className="py-2 px-6 rounded bg-grey_50 text-grey_5 font-bold text-sm"
                  key={history.id}
                >
                  {history.name}
                </button>
              ))}
            </div>
          </div>

          <div className="my-8">
            <p className="font-semibold text-grey_5">Trending Chains</p>

            <hr className="mt-2 mb-4 border-t border-grey_50 w-full" />

            <div className="w-full grid grid-cols-4 md:grid-cols-5 grid-rows-2 md:grid-rows-1 gap-4">
              {trending.map((history) => (
                <button
                  className="py-2 px-6 rounded bg-grey_50 text-grey_5 font-bold text-sm"
                  key={history.id}
                >
                  {history.name}
                </button>
              ))}
            </div>
          </div>

          <div className="chainlist">
            <p className="text-lg text-grey_5 font-semibold mb-6">
              Chains List
            </p>

            <ul>
              {chainLists.map((chain) => (
                <React.Fragment key={chain.id}>
                  <ChainItem name={chain.name} logo={chain.logo} />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
