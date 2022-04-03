import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useActiveWeb3React } from "../../hooks";

import { AppState } from "../index";

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React();

  return useSelector(
    //@ts-ignore
    (state: AppState) => state.application.blockNumber[chainId ?? -1]
  );
}
