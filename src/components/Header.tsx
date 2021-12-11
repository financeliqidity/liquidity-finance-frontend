import React from "react";
import Image from "next/image";
import Card from "../customs/Card";
import lfiLogo from "../../public/assets/images/LFILogo1.png";
import ethlogo from "../../public/assets/images/eth.png";
import menu from "../../public/assets/icons/menu.svg";
import global from "../../public/assets/icons/global.svg";
import ConnectWallet from "./shared/Modals/ConnectWallet";
import WalletDropdown from "./shared/Dropdowns/WalletDropdown";

interface HeaderProps {
  checkWallet?: () => boolean;
  isDarkMode?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Card
        height={5}
        width="11/12"
        rounded="no"
        stack="row"
        j="between"
        className="bg-dark_grey text-white md:w-11/12 mx-auto items-center md:static py-6 md:py-0 fixed top-0 w-full px-4 z-50"
      >
        <div className="flex items-center">
          <Image src={lfiLogo} alt="some text" width={50} height={50} />
        </div>
        <div className="flex">
          <div className="flex items-center">
            <Image src={global} alt="..." width={32} height={32} />
            <span className="p-3 flex items-center bg-grey_50 rounded-lg mx-4">
              <Image src={ethlogo} alt="Ethereum Logo" width={32} height={32} />
              <span className="font-bold ml-2 md:flex hidden">Ethereum</span>
            </span>
            {/* <WalletDropdown /> */}
            <ConnectWallet />
            <span className="md:p-4 p-2.5 hidden md:flex items-center bg-grey_50 rounded-lg ml-4">
              <Image src={menu} alt="..." width={24} height={24} />
            </span>
          </div>
          <div></div>
        </div>
      </Card>
    </>
  );
};

export default Header;
