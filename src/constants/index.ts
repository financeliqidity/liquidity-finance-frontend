// import { ChainId } from "../sdk-demo/dist/constants";
import { ChainId } from "../sdk-demo/dist";
import { Token, WETH } from "../sdk-demo/dist/entities/token";

export const ROUTER_ADDRESS = "0xDD01D7d8302fdef0537FCbCbD1eb6d136b7E6e97";

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

export const CAKE = new Token(
  ChainId.MAINNET,
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  18,
  "CAKE",
  "PancakeSwap Token"
);

export const WBNB = new Token(
  ChainId.MAINNET,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "WBNB",
  "Wrapped BNB"
);
export const DAI = new Token(
  ChainId.MAINNET,
  "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  18,
  "DAI",
  "Dai Stablecoin"
);
export const BUSD = new Token(
  ChainId.MAINNET,
  "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  18,
  "BUSD",
  "Binance USD"
);
export const BTCB = new Token(
  ChainId.MAINNET,
  "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  18,
  "BTCB",
  "Binance BTC"
);
export const USDT = new Token(
  ChainId.MAINNET,
  "0x55d398326f99059fF775485246999027B3197955",
  18,
  "USDT",
  "Tether USD"
);

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, BTCB, USDT],
};

export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][];
} = {
  [ChainId.MAINNET]: [
    [CAKE, WBNB],
    [BUSD, USDT],
    [DAI, USDT],
  ],
};

export const NetworkContextName = "NETWORK";
// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80;
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;
