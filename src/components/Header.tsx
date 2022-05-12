import React, { useEffect } from 'react';
import Image from 'next/image';
import Card from '../customs/Card';
import lfiLogo from '../../public/assets/images/logo.png';
import ethlogo from '../../public/assets/images/eth.png';

import ConnectWallet from './shared/Modals/ConnectWallet';
import WalletDropdown from './shared/Dropdowns/WalletDropdown';

import Language from './shared/Dropdowns/Language';
import MoreDrop from './shared/Dropdowns/MoreDrop';

import { WalletContext } from '../context';

interface HeaderProps {
  checkWallet?: () => boolean;
  isDarkMode?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const { wallet, disconnectWallet } = React.useContext(WalletContext);
  const [trim, setTrim] = React.useState(null);

  useEffect(() => {
    const trim = (
      wallet?.slice(0, 6) +
      '...' +
      wallet?.slice(-4)
    ).toLocaleUpperCase();

    setTrim(trim);
  }, [wallet]);

  return (
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
          <div className="relative flex items-center justify-center">
            <Language />
          </div>

          <div className="ml-3 md:ml-4 relative">
            {wallet ? (
              <WalletDropdown
                wallet={wallet}
                disconnectWallet={disconnectWallet}
              />
            ) : (
              <ConnectWallet />
            )}
          </div>

          <div className="relative ml-3 md:ml-4">
            <MoreDrop />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
