import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

import { updateVersion } from "./global/actions";
import application from "./application/reducer";
import user from "./user/reducer";
import swap from "./dex/reducers";
// import mint from './mint/reducer'
import lists from "./lists/reducer";
// import burn from './burn/reducer'
import multicall from "./multicall/reducer";
// import toasts from './toasts'

type MergedState = {
  user: {
    [key: string]: any;
  };
  transactions: {
    [key: string]: any;
  };
};
const PERSISTED_KEYS: string[] = ["user", "transactions"];
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState;

const store = configureStore({
  reducer: {
    application,
    user,
    // transactions,
    swap,
    // mint,
    // burn,
    multicall,
    lists,
    // toasts,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

store.dispatch(updateVersion());

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
