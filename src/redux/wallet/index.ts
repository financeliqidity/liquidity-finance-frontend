import { useMemo } from "react";
// import { ChainId as UbeswapChainId, JSBI, Token, TokenAmount } from '@ubeswap/sdk'

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
//  export function useTokenBalancesWithLoadingIndicator(
//     address?: string,
//     tokens?: (Token | undefined)[]
//   ): [{ [tokenAddress: string]: TokenAmount | undefined }, boolean] {
//     const validatedTokens: Token[] = useMemo(
//       () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
//       [tokens]
//     )

//     const validatedTokenAddresses = useMemo(() => validatedTokens.map((vt) => vt.address), [validatedTokens])

//     const balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20_INTERFACE, 'balanceOf', [address])

//     const anyLoading: boolean = useMemo(() => balances.some((callState) => callState.loading), [balances])

//     return [
//       useMemo(
//         () =>
//           address && validatedTokens.length > 0
//             ? validatedTokens.reduce<{ [tokenAddress: string]: TokenAmount | undefined }>((memo, token, i) => {
//                 const value = balances?.[i]?.result?.[0]
//                 const amount = value ? JSBI.BigInt(value.toString()) : undefined
//                 if (amount) {
//                   memo[token.address] = new TokenAmount(token, amount)
//                 }
//                 return memo
//               }, {})
//             : {},
//         [address, validatedTokens, balances]
//       ),
//       anyLoading,
//     ]
//   }
