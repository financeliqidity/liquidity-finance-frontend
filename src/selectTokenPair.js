import { atom } from "recoil"

export const selectTokenPair = atom({
    key: "token-pair",
    default: {
        pay: { name: "ETH", icon: "/assets/icons/eth.png" },
        receive: { name: "USDT", icon: "/assets/icons/usdt.png" }
    }
})