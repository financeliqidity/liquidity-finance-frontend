import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
// import { connectorLocalStorageKey } from '@nguyenphu27/uikit'
import { isMobile } from "react-device-detect";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { NetworkContextName } from "../constants";
import { ChainId } from "cd3d-dex-libs-sdk";

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?: ChainId;
} {
  const context = useWeb3ReactCore<Web3Provider>();

  const contextNetwork = useWeb3ReactCore<Web3Provider>(NetworkContextName);
  return context.active ? context : contextNetwork;
}

// export function useEagerConnect() {
//   const { activate, active } = useWeb3ReactCore() // specifically using useWeb3ReactCore because of what this hook does
//   const [tried, setTried] = useState(false)

//   useEffect(() => {
//     injected.isAuthorized().then((isAuthorized) => {
//       const hasSignedIn = window.localStorage.getItem(connectorLocalStorageKey)
//       if (isAuthorized && hasSignedIn) {
//         activate(injected, undefined, true).catch(() => {
//           setTried(true)
//         })
//       } else if (isMobile && window.ethereum && hasSignedIn) {
//         activate(injected, undefined, true).catch(() => {
//           setTried(true)
//         })
//       } else {
//         setTried(true)
//       }
//     })
//   }, [activate]) // intentionally only running on mount (make sure it's only mounted once :))

//   // if the connection worked, wait until we get confirmation of that to flip the flag
//   useEffect(() => {
//     if (active) {
//       setTried(true)
//     }
//   }, [active])

//   return tried
// }
