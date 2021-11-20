import React from 'react'
import Image from 'next/image'
import Card from '../customs/Card'
import lfiLogo from '../../public/assets/images/LFILogo1.png'
import ethlogo from '../../public/assets/images/eth.png'

interface HeaderProps {
    checkWallet?: () => boolean;
    isDarkMode?: boolean
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
        <Card height={5}  width="5/6" rounded="no" stack="row" j="evenly" className="absolute bg-transparent">
                <div>
                    <Image src={lfiLogo} alt="some text" width={50} height={50}/>
                </div>
                <div>
                    <span>
                        <Image src={ethlogo} alt="Ethereum Logo" width={50} height={50} />
                        <span>Some texts </span>
                    </span>
                    <button>Connect Wallet</button>
                </div>
                <div>|||</div>
        </Card>
        </>
    )
}

export default Header
