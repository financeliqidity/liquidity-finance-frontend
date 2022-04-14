import React, { useMemo } from "react";
import { Currency, ETHER, Token } from "cd3d-dex-libs-sdk";
import { WrappedTokenInfo } from "../../../redux/lists/hooks";
import useHttpLocations from "../../../hooks/useHttpLocations";
import Image from "next/image";
import Logo from "../Logo";

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${address}/logo.png`;

export default function CurrencyLogo({
  currency,
  size = "24",
  classNames,
}: {
  currency?: Currency;
  size?: string;
  classNames?: string;
}) {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI : undefined
  );

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return [];

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [
          ...uriLocations,
          `/assets/coins/${currency?.address ?? "token"}.png`,
          getTokenLogoURL(currency.address),
        ];
      }

      return [
        `/assets/coins/${currency?.address ?? "token"}.png`,
        getTokenLogoURL(currency.address),
      ];
    }
    return [];
  }, [currency, uriLocations]);

  if (currency === ETHER) {
    return (
      <Image
        src="/assets/coins/bnb.png"
        width={24}
        height={24}
        className={classNames}
      />
    );
  }
  return (currency as any)?.symbol ? (
    <Logo size={size} srcs={srcs} alt={`${currency?.symbol ?? "token"} logo`} />
  ) : (
    <Logo size={size} srcs={srcs} alt={`${currency?.symbol ?? "token"} logo`} />
  );
}
