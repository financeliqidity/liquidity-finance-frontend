import React, { useState, useEffect, useMemo } from 'react';
import LiquidityRight from '../Cards/LiquidityRight';
import LiquidityLeft from '../Cards/LiquidityLeft';
import AddRemoveLiq from '../Cards/AddRemoveLiq';
import { useActiveWeb3React } from '../../../hooks';
import {
  toV2LiquidityToken,
  useTrackedTokenPairs,
} from '../../../redux/user/hooks';
import { useTokenBalancesWithLoadingIndicator } from '../../../redux/wallet/hooks';
import { usePairs } from '../../../data/Reserves';
import { Pair } from 'cd3d-dex-libs-sdk';

function Liquidity({ setPage }) {
  const { account } = useActiveWeb3React();

  // console.log(account);

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs();

  // console.log(trackedTokenPairs);

  const tokenPairsWithLiquidityTokens = useMemo(
    () =>
      trackedTokenPairs.map((tokens) => ({
        liquidityToken: toV2LiquidityToken(tokens),
        tokens,
      })),
    [trackedTokenPairs]
  );

  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  );

  // console.log('liquidityTokens', liquidityTokens);

  const [v2PairsBalances, fetchingV2PairBalances] =
    useTokenBalancesWithLoadingIndicator(account ?? undefined, liquidityTokens);

  // console.log('pairBalances', v2PairsBalances, fetchingV2PairBalances);
  // console.log('tracedTokenPairs', trackedTokenPairs);

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  );

  // console.log('token balances', liquidityTokensWithBalances);

  const v2Pairs = usePairs(
    liquidityTokensWithBalances.map(({ tokens }) => tokens)
  );
  const v2IsLoading =
    fetchingV2PairBalances ||
    v2Pairs?.length < liquidityTokensWithBalances.length ||
    v2Pairs?.some((V2Pair) => !V2Pair);

  // console.log('v2Pairs: ' + v2Pairs);

  const allV2PairsWithLiquidity = v2Pairs
    .map(([, pair]) => pair)
    .filter((v2Pair): v2Pair is Pair => Boolean(v2Pair));

  const [asDeveloper, setAsDeveloper] = useState(false);

  const asDevSetter = () => setAsDeveloper(!asDeveloper);

  const [activeLeft, setActiveLeft] = useState('home');

  const tabs = [
    {
      component: (
        <LiquidityLeft
          asDevSetter={asDevSetter}
          asDeveloper={asDeveloper}
          setPage={setPage}
          setTab={setActiveLeft}
        />
      ),
    },
    {
      component: <AddRemoveLiq setActiveLeft={setActiveLeft} />,
    },
  ];

  return (
    <div>
      <div className="bg-grey_70">
        <div className="py-6 md:py-12 md:w-11/12 md:mx-auto text-white">
          <div className="flex flex-col justify-between md:flex-row mb-10 px-4 md:px-0">
            <>{activeLeft === 'home' ? tabs[0].component : tabs[1].component}</>

            {!account ? (
              <React.Fragment>
                <div className="right w-full md:mt-0 mt-10 md:w-12/25">
                  <div className="bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg h-full">
                    <span className="text-base font-semibold">
                      My Liquidity
                    </span>
                    <div className="w-full mt-5 flex justify-between px-4 py-2 border-1 border-solid border-grey_50 bg-primary rounded-md">
                      <span className="">Pool</span>
                      <span className="">My Liquidity</span>
                      <span className="">Action</span>
                    </div>
                    <span className="mt-5 block">
                      Your wallet is not connected!{' '}
                      <a href="#con" className="isLink">
                        connect wallet
                      </a>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <LiquidityRight
                setPage={setPage}
                allV2PairsWithLiquidity={allV2PairsWithLiquidity}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liquidity;
