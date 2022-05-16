import { JSBI, Pair, Percent } from 'cd3d-dex-libs-sdk';
import React, { useState } from 'react';
import useTotalSupply from '../../../../data/TotalSupply';
import { useActiveWeb3React } from '../../../../hooks';
import { useTokenBalance } from '../../../../redux/wallet/hooks';
import { unwrappedToken } from '../../../../utils/wrappedCurrency';
import DoubleCurrencyLogo from '../../../shared/DoubleLogo';
import styles from './styles/index.module.css';

const More = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5117 8.59928L16.5118 3.6004C15.4696 2.55825 13.6667 3.28807 13.6667 4.77887V6.76491C12.1927 6.83018 10.749 6.99234 9.47361 7.38956C8.25243 7.76977 7.28368 8.3472 6.59479 9.10553C5.75764 10.0278 5.33333 11.1875 5.33333 12.5534C5.33333 14.6957 6.48534 16.4581 8.2802 17.5798C9.58388 18.3961 11.2402 17.1406 10.7462 15.6444C10.2075 14.0083 10.1505 13.1818 13.6667 12.9097V14.7777C13.6667 16.2706 15.4711 16.9969 16.5118 15.9562L21.5117 10.9562C22.1628 10.3055 22.1628 9.24997 21.5117 8.59928ZM15.3333 14.7777V11.1722C10.8649 11.2389 7.78097 11.9774 9.16354 16.1666C8.13854 15.526 7 14.3639 7 12.5534C7 8.75713 11.484 8.42334 15.3333 8.39199V4.77776L20.3333 9.77775L15.3333 14.7777ZM16.1924 17.7115C16.4489 17.6382 16.6941 17.5295 16.9206 17.3885C17.1976 17.2166 17.5555 17.4172 17.5555 17.7432V19.2222C17.5555 20.1427 16.8094 20.8888 15.8889 20.8888H3.66667C2.74618 20.8888 2 20.1427 2 19.2222V6.99998C2 6.07949 2.74618 5.33331 3.66667 5.33331H8.25C8.4801 5.33331 8.66666 5.51987 8.66666 5.74998V5.90574C8.66666 6.07647 8.56295 6.23105 8.40385 6.29296C7.92809 6.47807 7.48732 6.69355 7.08267 6.93827C7.01698 6.97836 6.94157 6.9997 6.86461 6.99998H3.875C3.81975 6.99998 3.76675 7.02193 3.72768 7.061C3.68861 7.10007 3.66667 7.15306 3.66667 7.20831V19.0139C3.66667 19.0691 3.68861 19.1221 3.72768 19.1612C3.76675 19.2002 3.81975 19.2222 3.875 19.2222H15.6805C15.7358 19.2222 15.7888 19.2002 15.8279 19.1612C15.8669 19.1221 15.8889 19.0691 15.8889 19.0139V18.1123C15.8889 17.9258 16.0131 17.763 16.1924 17.7115Z"
      fill="white"
    />
  </svg>
);

interface PositionCardProps {
  pair: Pair;
  showUnwrapped?: boolean;
  removeOnly?: boolean;
}

const PoolItem = ({ pair, removeOnly }: PositionCardProps) => {
  const { account } = useActiveWeb3React();

  const currency0 = unwrappedToken(pair.token0);
  const currency1 = unwrappedToken(pair.token1);

  const [showMore, setShowMore] = useState(false);

  const userPoolBalance = useTokenBalance(
    account ?? undefined,
    pair.liquidityToken
  );
  const totalPoolTokens = useTotalSupply(pair.liquidityToken);

  const poolTokenPercentage =
    !!userPoolBalance &&
    !!totalPoolTokens &&
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined;

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(
            pair.token0,
            totalPoolTokens,
            userPoolBalance,
            false
          ),
          pair.getLiquidityValue(
            pair.token1,
            totalPoolTokens,
            userPoolBalance,
            false
          ),
        ]
      : [undefined, undefined];

  console.log(currency0, currency1);

  return (
    <tr>
      <td className="px-6 align-middle whitespace-nowrap py-4">
        <div className="flex items-center w-full">
          <DoubleCurrencyLogo
            currency0={currency0}
            currency1={currency1}
            size={36}
          />
          <span className="font-bold mr-2.5 ml-2 pl-4 md:pl-0">
            0x6c1..ee21
          </span>
          <More />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {(currency0 || currency1) && (
          <span className="font-bold">
            {`104 ${currency0.symbol} / 12,234 ${currency1.symbol}`}
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="border border-solid border-primary py-1 px-2 text-sm font-bold rounded-lg mr-2 text-primary">
          Manage
        </button>
        <button
          className="border border-solid border-primary py-1 px-2 text-sm font-bold rounded-lg text-primary"
          onClick={() => {}}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default function LiquidityRight({ allV2PairsWithLiquidity, setPage }) {
  return (
    <div className={'right w-full md:mt-0 mt-10 md:w-12/25 ' + styles.right_}>
      <div className="bg-blue_grey p-6 rounded-2xl border border-solid border-grey_20">
        <h3 className="font-semibold text-lg mb-6">My Liquidity</h3>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-xl">
                <table className="min-w-full rounded-xl">
                  <thead className="bg-grey_70 mb-4 rounded-xl">
                    <tr className="font-normal rounded-xl">
                      <th scope="col" className="">
                        <div className="px-5 py-4 text-left text-lg text-white tracking-wider font-normal rounded-l-xl border border-solid border-grey_50 border-r-0">
                          Pool
                        </div>
                      </th>
                      <th scope="col" className="">
                        <div className="px-6 py-4 text-left text-lg text-white tracking-wider font-normal border-l-0 border-r-0 border border-solid border-grey_50">
                          My Liquidity
                        </div>
                      </th>
                      <th scope="col" className="">
                        <div className="px-6 py-4 text-right text-lg text-white tracking-wider font-normal rounded-r-xl border border-solid border-grey_50 border-l-0">
                          Action
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`bg-transparent ${styles.tbody}`}>
                    {allV2PairsWithLiquidity?.length > 0 ? (
                      <React.Fragment>
                        {allV2PairsWithLiquidity.map((v2Pair) => (
                          <PoolItem
                            key={v2Pair.liquidityToken.address}
                            pair={v2Pair}
                          />
                        ))}
                      </React.Fragment>
                    ) : (
                      'No Liquidity Found'
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
