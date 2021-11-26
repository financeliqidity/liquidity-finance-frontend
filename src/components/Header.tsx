import React from "react";
import Image from "next/image";
import Card from "../customs/Card";
import lfiLogo from "../../public/assets/images/LFILogo1.png";
import ethlogo from "../../public/assets/images/eth.png";
import menu from "../../public/assets/icons/menu.svg";

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
        className="bg-transparent text-white md:w-11/12 mx-auto items-center"
      >
        <div className="flex items-center">
          <Image src={lfiLogo} alt="some text" width={50} height={50} />
        </div>
        <div className="flex">
          <div className="flex items-center">
            <span className="p-3 flex items-center bg-grey_50 rounded-lg mr-4">
              <Image src={ethlogo} alt="Ethereum Logo" width={32} height={32} />
              <span className="font-bold ml-2 md:flex hidden">Ethereum</span>
            </span>
            <button className="btn-primary p-3 rounded-lg h-full font-bold">
              Connect Wallet
            </button>
            <span className="p-3 hidden md:flex items-center bg-grey_50 rounded-lg ml-4">
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
