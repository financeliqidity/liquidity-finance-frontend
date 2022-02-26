import { atom } from "recoil"

export const selectTokenPair = atom({
    key: "token-pair",
    default: {
        pay: { name: "Ethereum", iconUrl: "/assets/icons/eth.png", symbol: "ETH" },
        receive: { name: "USDT", iconUrl: "/assets/icons/usdt.png", symbol: "USDT" }
    }
})